import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0F0C0D] text-white/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 border-b border-white/10">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-5 items-start">
            <Image
              src="/logo-am-bordo.svg"
              alt="AM La Carpintería"
              width={160}
              height={86}
              className="h-[52px] w-auto opacity-75"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Muebles a medida desde 1935. Diseño, fabricación e instalación
              en todo el país.
            </p>
          </div>

          {/* CTA */}
          <div>
            <p className="font-display font-700 text-white text-xs uppercase tracking-[0.2em] mb-5">
              Empezá tu proyecto
            </p>
            <p className="text-sm leading-relaxed mb-6">
              Respondemos en menos de 24 hs. Sin compromiso.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-burg text-white font-display font-black text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-burg-dark transition-colors"
            >
              Consultar ahora
            </a>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com/amcarpinteria"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5491169071183"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a7.946 7.946 0 01-3.798-.965L4 19l1.125-4.103A7.94 7.94 0 014.059 12c0-4.393 3.578-7.971 7.971-7.971 4.394 0 7.97 3.578 7.97 7.971 0 4.394-3.576 7.88-7.97 7.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 py-6 text-xs text-white/25">
          <p>© {new Date().getFullYear()} MAPIMA srl — AM La Carpintería. Todos los derechos reservados.</p>
          <p>Trenque Lauquen, Buenos Aires, Argentina</p>
        </div>

      </div>
    </footer>
  )
}
