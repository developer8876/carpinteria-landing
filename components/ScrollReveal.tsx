'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.12 }
    )

    // Observe any .rv element, skip those already observed
    const observed = new WeakSet<Element>()
    const observe = () => {
      document.querySelectorAll('.rv').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          io.observe(el)
        }
      })
    }

    // Initial pass
    observe()

    // MutationObserver: picks up .rv elements added dynamically (e.g. Gallery after fetch)
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
