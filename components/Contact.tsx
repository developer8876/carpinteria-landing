export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div className="rv">
            <p className="text-burg font-display font-700 text-xs tracking-[0.25em] uppercase mb-4">
              Hablemos
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-none text-near mb-8">
              Contacto
            </h2>
            <p className="text-near/60 text-base leading-relaxed mb-12 max-w-sm">
              Contanos qué tenés en mente. Te respondemos dentro de las 24 horas con orientación y un presupuesto aproximado sin compromiso.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-burg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-700 text-near text-sm uppercase tracking-wide">Ubicación</p>
                  <p className="text-near/60 text-sm mt-0.5">Trenque Lauquen, Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-burg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.67 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.58 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.34a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-700 text-near text-sm uppercase tracking-wide">CABA: Teléfono / WhatsApp</p>
                  <a href="https://wa.me/5491169071183" target="_blank" rel="noreferrer" className="text-near/60 text-sm mt-0.5 hover:text-burg transition-colors">
                    11 6907 1183
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-burg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.67 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.58 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.34a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-700 text-near text-sm uppercase tracking-wide">Trenque Lauquen: Teléfono / WhatsApp</p>
                  <a href="https://wa.me/5492392618851" target="_blank" rel="noreferrer" className="text-near/60 text-sm mt-0.5 hover:text-burg transition-colors">
                    2392 618851
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-burg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-700 text-near text-sm uppercase tracking-wide">Email</p>
                  <a href="mailto:ventas.lacarpinteria@gmail.com" className="text-near/60 text-sm mt-0.5 hover:text-burg transition-colors">
                    ventas.lacarpinteria@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-burg shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-700 text-near text-sm uppercase tracking-wide">Instagram</p>
                  <a href="https://instagram.com/amlacarpinteria/" target="_blank" rel="noreferrer" className="text-near/60 text-sm mt-0.5 hover:text-burg transition-colors">
                    @amlacarpinteria
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rv d2">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="access_key" value="356ca794-3710-497e-b5f0-86f9893e73c5" />
              <input type="hidden" name="subject" value="Nueva consulta — AM La Carpintería" />
              <input type="hidden" name="from_name" value="AM La Carpintería Web" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-display font-700 uppercase tracking-wider text-near/50 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="w-full border border-near/15 bg-transparent px-4 py-3 text-near placeholder:text-near/30 text-sm focus:outline-none focus:border-burg transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-display font-700 uppercase tracking-wider text-near/50 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="+54 9 ..."
                    className="w-full border border-near/15 bg-transparent px-4 py-3 text-near placeholder:text-near/30 text-sm focus:outline-none focus:border-burg transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-display font-700 uppercase tracking-wider text-near/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full border border-near/15 bg-transparent px-4 py-3 text-near placeholder:text-near/30 text-sm focus:outline-none focus:border-burg transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-display font-700 uppercase tracking-wider text-near/50 mb-2">
                  Tipo de proyecto
                </label>
                <select
                  name="tipo"
                  className="w-full border border-near/15 bg-transparent px-4 py-3 text-near text-sm focus:outline-none focus:border-burg transition-colors appearance-none"
                >
                  <option value="">Seleccioná una opción</option>
                  <option>Cocina</option>
                  <option>Placard / Vestidor</option>
                  <option>Living / Comedor</option>
                  <option>Baño</option>
                  <option>Oficina</option>
                  <option>Proyecto integral</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-display font-700 uppercase tracking-wider text-near/50 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={5}
                  placeholder="Contanos qué necesitás, dimensiones aproximadas, plazos..."
                  className="w-full border border-near/15 bg-transparent px-4 py-3 text-near placeholder:text-near/30 text-sm focus:outline-none focus:border-burg transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-burg text-white font-display font-black text-sm uppercase tracking-[0.15em] py-4 hover:bg-burg-dark transition-colors duration-200"
              >
                Enviar consulta
              </button>

              <p className="text-center text-near/30 text-xs">
                También podés escribirnos directamente por{' '}
                <a
                  href="https://wa.me/5491169071183"
                  target="_blank"
                  rel="noreferrer"
                  className="text-burg hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
