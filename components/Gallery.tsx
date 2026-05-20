'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { GalleryProject } from '@/lib/gallery'

const ALL = 'Todos'

export default function Gallery() {
  const [projects, setProjects] = useState<GalleryProject[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [lightbox, setLightbox] = useState<{ project: GalleryProject; index: number } | null>(null)

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data: GalleryProject[]) => {
        setProjects(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Build category list
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category))).sort()]

  const filtered =
    activeCategory === ALL ? projects : projects.filter((p) => p.category === activeCategory)

  // Lightbox navigation
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const prevImage = useCallback(() => {
    if (!lightbox) return
    const imgs = lightbox.project.images
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + imgs.length) % imgs.length })
  }, [lightbox])

  const nextImage = useCallback(() => {
    if (!lightbox) return
    const imgs = lightbox.project.images
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % imgs.length })
  }, [lightbox])

  // Keyboard handler
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, nextImage, prevImage, closeLightbox])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 rv">
          <p className="text-burg font-display font-700 text-xs tracking-[0.25em] uppercase mb-4">
            Nuestro trabajo
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-none text-near">
              Portfolio
            </h2>
            <p className="text-near/60 max-w-md text-base leading-relaxed">
              Más de 500 proyectos realizados en toda la Argentina. Cada ambiente, una solución a medida.
            </p>
          </div>
        </div>

        {/* Category filters */}
        {!loading && categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10 rv">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-display font-700 uppercase tracking-wider border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-burg border-burg text-white'
                    : 'bg-transparent border-near/20 text-near/60 hover:border-burg hover:text-burg'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-near/10 animate-pulse" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 text-near/40">
            <p className="font-display font-black text-2xl uppercase">Sin proyectos aún</p>
            <p className="mt-2 text-sm">Agregá carpetas en <code className="bg-near/10 px-2 py-0.5">/public/images/</code> para ver tu galería</p>
          </div>
        )}

        {/* Grid */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project, pi) => (
              <div
                key={project.id}
                className={`group cursor-pointer rv d${(pi % 4) + 1}`}
                onClick={() => setLightbox({ project, index: 0 })}
              >
                {/* Cover image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-near/10">
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-near/20 font-display font-black text-4xl uppercase">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-near/0 group-hover:bg-near/50 transition-colors duration-300 flex items-end p-5">
                    <span className="text-white text-sm font-display font-700 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver proyecto →
                    </span>
                  </div>

                  {/* Image count badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-near/70 text-white text-xs font-display font-700 px-2 py-1 leading-none">
                      {project.images.length} fotos
                    </div>
                  )}
                </div>

                {/* Caption */}
                <div className="mt-3">
                  <p className="text-xs text-burg font-display font-700 uppercase tracking-widest mb-0.5">
                    {project.category}
                  </p>
                  <h3 className="font-display font-black text-near text-lg uppercase leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-near/95"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Main image */}
          <div
            className="relative w-full max-w-5xl mx-6 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.project.images[lightbox.index]}
              alt={`${lightbox.project.title} — foto ${lightbox.index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Prev / Next */}
          {lightbox.project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Anterior"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
                aria-label="Siguiente"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </>
          )}

          {/* Caption + counter */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-display font-black text-lg uppercase tracking-wide">
              {lightbox.project.title}
            </p>
            {lightbox.project.images.length > 1 && (
              <p className="text-white/40 text-sm mt-1">
                {lightbox.index + 1} / {lightbox.project.images.length}
              </p>
            )}
            {/* Dot indicators */}
            {lightbox.project.images.length > 1 && lightbox.project.images.length <= 12 && (
              <div className="flex gap-1.5 justify-center mt-3">
                {lightbox.project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox({ ...lightbox, index: i })}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === lightbox.index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
