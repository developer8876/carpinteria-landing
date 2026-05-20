'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { href: '#nosotros',   label: 'Nosotros'   },
  { href: '#proceso',    label: 'Proceso'     },
  { href: '#materiales', label: 'Materiales'  },
  { href: '#portfolio',  label: 'Trabajos'    },
  { href: '#contacto',   label: 'Contacto'    },
]

export default function Nav() {
  const [solid,  setSolid]  = useState(false)
  const [open,   setOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeDrawer = () => setOpen(false)

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 h-[76px] flex items-center transition-all duration-400
        ${solid ? 'bg-white/97 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)]' : ''}`}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-14 w-full flex items-center gap-0">

          {/* Logo */}
          <a href="#hero" className="mr-auto flex-shrink-0">
            <Image
              src="/logo-am-bordo.svg"
              alt="AM La Carpintería"
              width={120} height={64}
              priority
              className={`h-11 w-auto transition-[filter] duration-400
                ${solid ? '' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 mr-8 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}
                  className={`text-[11px] font-medium tracking-[0.1em] uppercase relative pb-0.5
                    transition-colors duration-300 group
                    ${solid ? 'text-[#6B6259] hover:text-near' : 'text-white/75 hover:text-white'}`}>
                  {l.label}
                  <span className={`absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left
                    ${solid ? 'bg-burg' : 'bg-white'}`} />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contacto"
            className="hidden md:inline-flex items-center bg-burg text-white text-[10px] font-semibold
              tracking-[0.13em] uppercase px-5 py-3 hover:bg-burg-dark transition-colors duration-300">
            Presupuesto
          </a>

          {/* Hamburger */}
          <button className="md:hidden p-2 ml-4 flex flex-col gap-[5px]"
            onClick={() => setOpen(o => !o)} aria-label="Menú">
            {[0,1,2].map(i => (
              <span key={i} className={`block w-[22px] h-[1.5px] rounded transition-all duration-300
                ${solid ? 'bg-near' : 'bg-white'}
                ${open && i === 0 ? 'rotate-45 translate-y-[6.5px]' : ''}
                ${open && i === 1 ? 'opacity-0' : ''}
                ${open && i === 2 ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[76px] z-40 bg-white/98 backdrop-blur-md
          shadow-xl flex flex-col">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={closeDrawer}
              className="px-8 py-4 text-[13px] font-medium tracking-[0.1em] uppercase
                text-[#6B6259] border-b border-[#E5DDD6] hover:text-burg transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={closeDrawer}
            className="px-8 py-4 text-[13px] font-semibold tracking-[0.1em] uppercase text-burg">
            Solicitar presupuesto →
          </a>
        </div>
      )}
    </>
  )
}
