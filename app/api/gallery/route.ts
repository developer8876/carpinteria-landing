import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { detectCategory, type GalleryProject } from '@/lib/gallery'

const IMAGE_EXT = /\.(jpg|jpeg|png|webp|avif)$/i

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images')

    if (!fs.existsSync(imagesDir)) {
      return NextResponse.json([] as GalleryProject[])
    }

    const entries = fs.readdirSync(imagesDir, { withFileTypes: true })

    const projects: GalleryProject[] = entries
      .filter(e => e.isDirectory())
      .map(folder => {
        const folderPath = path.join(imagesDir, folder.name)
        const files = fs.readdirSync(folderPath)
          .filter(f => IMAGE_EXT.test(f))
          .sort()
          .map(f => `/images/${folder.name}/${f}`)

        return {
          id:       folder.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
          title:    folder.name,
          category: detectCategory(folder.name),
          images:   files,
          cover:    files[0] ?? null,
        }
      })
      .filter(p => p.images.length > 0)

    return NextResponse.json(projects)
  } catch {
    return NextResponse.json({ error: 'Failed to read gallery' }, { status: 500 })
  }
}
