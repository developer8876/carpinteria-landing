const materials = [
  {
    name: 'Melamina',
    description: 'Superficies de alta durabilidad con amplia variedad de texturas y colores. Ideal para muebles de uso intensivo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
      </svg>
    ),
  },
  {
    name: 'MDF',
    description: 'Soporte de fibra de madera de densidad media, perfecto para lacados y terminaciones de alta precisión.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        <rect x="2" y="4" width="20" height="16" rx="1"/>
      </svg>
    ),
  },
  {
    name: 'Madera Maciza',
    description: 'Roble, cedro y nogal seleccionados. Cada pieza tiene veta única. Duración generacional con el cuidado adecuado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M12 2C6.5 2 3 7 3 12s3.5 10 9 10 9-5 9-10S17.5 2 12 2z"/>
        <path d="M12 2v20M3 12h18"/>
        <path d="M5.5 5.5C7 8 8 10 8 12s-1 4-2.5 6.5M18.5 5.5C17 8 16 10 16 12s1 4 2.5 6.5"/>
      </svg>
    ),
  },
  {
    name: 'Herrajes Europeos',
    description: 'Bisagras, correderas y accesorios Blum, Häfele y Grass. Garantía de movimiento suave y duración en el tiempo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
      </svg>
    ),
  },
  {
    name: 'Vidrio y Espejo',
    description: 'Templado, satinado, biselado. Incorporamos vidrio en puertas, frentes y elementos decorativos con precisión milimétrica.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="4" y="2" width="16" height="20" rx="1"/>
        <path d="M4 8h16M8 2v6"/>
      </svg>
    ),
  },
  {
    name: 'Acero y Metal',
    description: 'Estructuras metálicas, patas y detalles en acero negro o inoxidable. El contrapunto industrial a la calidez de la madera.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
]

export default function Materials() {
  return (
    <section id="materiales" className="py-24 bg-[#0F0C0D] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 rv">
          <p className="text-burg font-display font-700 text-xs tracking-[0.25em] uppercase mb-4">
            Lo que usamos
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-none">
              Materiales
            </h2>
            <p className="text-white/60 max-w-md text-base leading-relaxed">
              Seleccionamos cada material por su calidad, durabilidad y comportamiento a largo plazo.
              No usamos lo que es barato — usamos lo que dura.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {materials.map((mat, i) => (
            <div
              key={mat.name}
              className={`bg-[#0F0C0D] p-8 group hover:bg-burg/10 transition-colors duration-300 rv d${(i % 4) + 1}`}
            >
              <div className="text-white/30 group-hover:text-burg transition-colors duration-300 mb-6">
                {mat.icon}
              </div>
              <h3 className="font-display font-black text-xl uppercase tracking-wide mb-3 text-white group-hover:text-burg transition-colors duration-300">
                {mat.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
