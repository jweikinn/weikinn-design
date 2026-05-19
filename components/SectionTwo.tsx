'use client'

import { useEffect, useRef, useState } from 'react'

/*
 * Section 2 — Portrait + weiße Maske mit Scroll-Reveal.
 *
 * Idee: Das Portrait sitzt browserfüllend hinter einer weißen Maske mit
 * Loch in der Mitte. Beim Scrollen wächst das Loch (= die weiße Maske
 * weicht zurück), bis das Bild den ganzen Viewport ausfüllt.
 *
 *   Initial-Werte (aus Figma 95:450 abgeleitet):
 *   – Top-/Bottom-Maske : 20 % der Viewport-Höhe
 *   – Left-Maske       : 40 % der Viewport-Breite
 *   – Right-Maske      : 35 % der Viewport-Breite
 *
 * Auf Mobile (Figma 63:1765) ist das initiale Bild ein kleines, zentriertes
 * Quadrat – wir verwenden andere Maskenwerte mit zentrierter Position.
 */

// Initial-Masken-Werte in % (Desktop / Mobile getrennt)
const INIT_DESKTOP = { top: 20, bottom: 20, left: 40, right: 35 }
// Mobile: kleines Portrait im oberen Drittel (Figma 63:1765 – 152×168 px,
// zentriert horizontal, Y-Offset = 1010 px in ~875 px Viewport).
const INIT_MOBILE = { top: 22, bottom: 58, left: 31, right: 31 }

export function SectionTwo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      // Animation läuft über genau eine Viewport-Höhe Scroll-Distanz.
      const animationDistance = Math.max(1, viewportHeight)
      setProgress(Math.min(1, scrolled / animationDistance))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ease-out: schneller Reveal am Anfang, sanfter Auslauf
  const eased = 1 - Math.pow(1 - progress, 2)
  const init = isMobile ? INIT_MOBILE : INIT_DESKTOP

  const top = init.top * (1 - eased)
  const bottom = init.bottom * (1 - eased)
  const left = init.left * (1 - eased)
  const right = init.right * (1 - eased)

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white"
      style={{ height: '200vh' }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">
        {/* Portrait – sitzt browserfüllend und bleibt unverändert. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portrait.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '64% center' }}
        />

        {/* Weiße Masken – schrumpfen mit zunehmendem Scroll auf 0. */}
        <div
          className="absolute left-0 right-0 top-0 bg-white pointer-events-none"
          style={{ height: `${top}%` }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 bg-white pointer-events-none"
          style={{ height: `${bottom}%` }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 bg-white pointer-events-none"
          style={{ width: `${left}%` }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 bg-white pointer-events-none"
          style={{ width: `${right}%` }}
        />

        {/* ─── Desktop: Stats rechts neben dem Portrait ───
            Linksbündig zum „Brand & Web Design Spezialistin"-Text in Section 1
            (left: 75.55%, width: 15.3%). „12+" ist groß, Label-Texte
            verwenden .type-bu-blau (18 px). Der Stats-Block bleibt sichtbar,
            auch wenn das Foto aufgescrollt wird. */}
        <div
          className="hidden md:flex absolute z-20 flex-col pointer-events-none"
          style={{
            left: '75.55%',
            top: '22%',
            width: '15.3%',
          }}
        >
          <p className="type-bu-blau">Freelance Designerin</p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(80px, 9.5vw, 136px)',
              lineHeight: 0.99,
              letterSpacing: '-0.03em',
              color: 'var(--accent)',
              marginTop: '8px',
            }}
          >
            12+
          </p>
          <p className="type-bu-blau" style={{ marginTop: '8px' }}>
            Jahre Erfahrung
          </p>
        </div>
      </div>
    </section>
  )
}
