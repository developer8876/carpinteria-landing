import Image from 'next/image'

const stats = [
  { n: '90',  l: 'Años de experiencia' },
  { n: '+500',l: 'Proyectos realizados' },
  { n: '∞',   l: 'Diseños únicos'      },
]

export default function About() {
  return (
    <section id="nosotros" className="grid grid-cols-1 md:grid-cols-2">

      {/* Text */}
      <div className="bg-white px-6 md:px-14 py-16 md:py-24 flex flex-col justify-center gap-7">
        <span className="rv flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em]
          uppercase text-burg">
          <span className="w-[22px] h-0.5 bg-burg rounded flex-shrink-0" />
          Quiénes somos
        </span>

        <h2 className="rv d1 font-display text-[clamp(32px,4vw,52px)] font-extrabold
          leading-[1.08] tracking-[-0.02em] uppercase">
          Precisión<br />industrial
        </h2>

        <p className="rv d2 font-sans text-[15px] font-normal text-[#6B6259] leading-[1.75] max-w-[480px]">
          En AM La Carpintería nos especializamos en el diseño y fabricación de mobiliario
          a medida. Incorporamos mecanizados mediante CNC y sistemas de corte y perforado
          de alta precisión, garantizando encastres exactos y un nivel de terminación superior.
        </p>
        <p className="rv d2 font-sans text-[15px] font-normal text-[#6B6259] leading-[1.75] max-w-[480px]">
          Trabajamos con materiales seleccionados de primera línea y acompañamos a cada
          cliente desde el diseño inicial hasta la instalación final, en cualquier punto del país.
        </p>

        {/* Stats */}
        <div className="rv d3 flex gap-9 pt-6 border-t border-[#E5DDD6]">
          {stats.map(s => (
            <div key={s.n} className="flex flex-col gap-1">
              <span className="font-display text-[44px] font-extrabold text-burg leading-none tracking-[-0.02em]">
                {s.n}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#9E948B]">
                {s.l}
              </span>
            </div>
          ))}
        </div>

        <div className="rv d4">
          <a href="#proceso"
            className="inline-flex items-center border-[1.5px] border-burg text-burg
              text-[11px] font-semibold tracking-[0.13em] uppercase px-7 py-3.5
              hover:bg-burg hover:text-white transition-colors duration-300">
            Conocé nuestro proceso
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden min-h-[480px] md:min-h-0 group">
        <Image
          src="/hero/about.webp"
          alt="AM La Carpintería — taller"
          width="1000"
          height="1500"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Badge */}
        <div className="absolute bottom-8 left-8 bg-burg text-white px-6 py-5">
          <span className="font-display text-[46px] font-black leading-none tracking-[-0.02em] block">
            1935
          </span>
          <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/50 mt-1 block">
            Fundados en
          </span>
        </div>
      </div>
    </section>
  )
}
