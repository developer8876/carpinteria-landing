export interface GalleryProject {
  id:       string
  title:    string
  category: string
  images:   string[]
  cover:    string | null
}

export const CATEGORY_KEYWORDS: Record<string, string> = {
  'cocina':    'Cocinas',
  'kitchen':   'Cocinas',
  'placard':   'Vestidores',
  'vestidor':  'Vestidores',
  'vestidores':'Vestidores',
  'living':    'Living',
  'comedor':   'Living',
  'salon':     'Living',
  'salón':     'Living',
  'baño':      'Baños',
  'bano':      'Baños',
  'oficina':   'Oficinas',
  'estudio':   'Oficinas',
}

export function detectCategory(folderName: string): string {
  // Normalize: lowercase + strip accents
  const lower = folderName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

  for (const [kw, cat] of Object.entries(CATEGORY_KEYWORDS)) {
    const kwNorm = kw.normalize('NFD').replace(/[̀-ͯ]/g, '')
    if (lower.includes(kwNorm)) return cat
  }
  return 'Otros'
}

/** Parse "Ciudad - Tipo de obra" → { city, type } */
export function parseProjectTitle(folderName: string) {
  const parts = folderName.split(' - ')
  if (parts.length >= 2) {
    return { city: parts[0].trim(), type: parts.slice(1).join(' - ').trim() }
  }
  return { city: '', type: folderName }
}
