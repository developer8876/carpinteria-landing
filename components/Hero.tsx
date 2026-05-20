import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.webp"
          alt="Cocina a medida — AM La Carpintería"
          fill
          priority
          className="object-cover object-[center_40%] hero-bg-img"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(108deg, rgba(8,3,6,.86) 0%, rgba(8,3,6,.56) 45%, rgba(8,3,6,.18) 70%, transparent 100%)' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1240px] mx-auto px-6 md:px-14 w-full">
          <div className="max-w-[580px]">

            <div className="hero-eyebrow flex items-center gap-3 text-[10px] font-medium
              tracking-[0.2em] uppercase text-white/45 mb-6">
              <span className="w-7 h-px bg-burg-light flex-shrink-0" />
              Trenque Lauquen, Buenos Aires &nbsp;·&nbsp; Desde 1935
            </div>

            <h1 className="hero-title font-display text-[clamp(52px,7.5vw,96px)] font-black
              text-white leading-none tracking-[-0.03em] uppercase mb-7">
              Del diseño<br />
              <span className="text-white/45">a la instalación</span>
            </h1>

            <p className="hero-sub font-sans text-base font-normal text-white/65
              leading-[1.7] max-w-[440px] mb-10">
              Precisión industrial combinada con detalle artesanal.
              Diseñamos y fabricamos cada mueble según tu proyecto,
              desde la idea hasta la instalación.
            </p>

            <div className="hero-actions flex gap-3 flex-wrap">
              <a href="#portfolio"
                className="inline-flex items-center bg-white text-near text-[11px] font-semibold
                  tracking-[0.13em] uppercase px-7 py-3.5 hover:bg-cream transition-colors duration-300">
                Ver trabajos
              </a>
              <a href="#contacto"
                className="inline-flex items-center border border-white/55 text-white text-[11px]
                  font-semibold tracking-[0.13em] uppercase px-7 py-3.5
                  hover:bg-white/12 hover:border-white transition-colors duration-300">
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 90 años badge */}
      <div className="hero-badge absolute right-6 bottom-20 md:right-16 md:bottom-24 z-10
        w-[92px] h-[92px] md:w-[148px] md:h-[148px]
        hidden sm:flex rounded-full flex-col items-center justify-center
        border border-white/25
        bg-white/10 backdrop-blur-md
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_4px_24px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-[6px] md:inset-[8px] rounded-full border border-white/10" />
        <span className="font-display text-[38px] md:text-[56px] font-black text-white leading-none tracking-[-0.03em]">90</span>
        <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase text-white/55 mt-0.5">Años</span>
        <span className="text-[8px] md:text-[9px] tracking-[0.1em] uppercase text-white/30 mt-0.5">1935 · 2025</span>
      </div>

      {/* Scroll indicator */}
      <a href="#nosotros"
        className="hero-scroll absolute bottom-9 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-2.5 cursor-pointer">
        <span className="text-[9px] tracking-[0.22em] uppercase text-white/30">Scroll</span>
        <div className="scroll-bar w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
      </a>
    </section>
  )
}
