const steps = [
  {
    n: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Oficina Técnica',
    body: 'Cada mueble es proyectado según el diseño del cliente en software especializado y exportado directamente a nuestras máquinas CNC, logrando un mejor resultado final en tiempo, diseño y calidad.',
    tags: ['Software 3D', 'Diseño a medida', 'CNC export'],
  },
  {
    n: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    title: 'Taller de Producción',
    body: 'Contamos con seccionadora de alta precisión, pegadora de canto PVC y centro de trabajo CNC. Todos nuestros muebles son armados en taller con materiales y herrajes de primera calidad.',
    tags: ['Seccionadora', 'Pegadora PVC', 'Centro CNC'],
  },
  {
    n: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Embalaje e Instalación',
    body: 'Los muebles son embalados y estibados profesionalmente para garantizar su integridad en el transporte. Entregamos e instalamos en todo el país, cumpliendo siempre los plazos acordados.',
    tags: ['Embalaje profesional', 'Todo el país', 'Instalación'],
  },
]

export default function Process() {
  return (
    <section id="proceso" className="bg-cream py-24">
      <div className="max-w-[1240px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-5 mb-16">
          <span className="rv flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase text-burg">
            <span className="w-[22px] h-0.5 bg-burg rounded" />Cómo trabajamos
          </span>
          <h2 className="rv d1 font-display text-[clamp(32px,4vw,52px)] font-extrabold
            leading-[1.08] tracking-[-0.02em] uppercase">
            Nuestro proceso
          </h2>
          <p className="rv d2 font-sans text-base font-normal text-[#6B6259] max-w-[500px] text-center leading-[1.72]">
            Cada proyecto es desarrollado de forma personalizada, desde la primera
            reunión hasta la instalación final en tu espacio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
          {steps.map((s, i) => (
            <div key={s.n} className={`rv ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}
              bg-white p-8 md:p-12 relative flex flex-col gap-0`}>

              {/* Number */}
              <span className="font-display text-[64px] font-black text-[#E5DDD6]
                leading-none tracking-[-0.03em] mb-7">
                {s.n}
              </span>

              {/* Icon — top right, subtle */}
              <div className="absolute top-12 right-11 w-10 h-10 opacity-[0.22]">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[20px] font-bold uppercase tracking-[0.02em]
                text-burg mb-3.5">
                {s.title}
              </h3>

              {/* Body */}
              <p className="font-sans text-[14px] font-normal text-[#6B6259] leading-[1.75] mb-6">
                {s.body}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
