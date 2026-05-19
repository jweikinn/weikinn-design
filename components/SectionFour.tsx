'use client'

import { useState, useRef, useEffect } from 'react'

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const SERVICES = [
  {
    name: 'Branddesign',
    subtitle: 'Das Gesicht deines Unternehmens.',
    detail: 'Logo · Identity · Brand Strategy · Art Direction',
    image: '/services/branddesign.png',
    mobileImgOffsetX: '-43.55%',
    imageRight: px(16, 32),
  },
  {
    name: 'Webdesign',
    subtitle: 'Dein digitaler Auftritt.',
    detail: 'UI Design · Web Development · Wireframes',
    image: '/services/webdesign.png',
    mobileImgOffsetX: '-34.53%',
    imageRight: '13%',
  },
  {
    name: 'Editorial Design',
    subtitle: 'Paperlove, als Print oder E‑Paper.',
    detail: 'Print · Broschüren · E‑Paper',
    image: '/services/editorial.png',
    mobileImgOffsetX: '-34.53%',
    imageRight: '13%',
  },
  {
    name: 'Content Design',
    subtitle: 'Visuals, die auf den ersten Blick wirken.',
    detail: 'Social Media · Kampagnen · Employer Branding',
    image: '/services/editorial.png',
    mobileImgOffsetX: '-34.53%',
    imageRight: '7%',
  },
]

export function SectionFour() {
  const sidePad = px(15, 32)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const top = sectionRef.current.getBoundingClientRect().top
      // Transition starts when section top enters viewport, ends halfway up
      const t = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - top) / (window.innerHeight * 0.5)))
      const bg = Math.round(255 * (1 - t))
      sectionRef.current.style.backgroundColor = `rgb(${bg},${bg},${bg})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{ paddingTop: px(48, 80), paddingBottom: px(56, 96), backgroundColor: '#ffffff', color: '#ffffff' }}
    >
      {/* ─── Header: „Services" + „003" — z-index schützt vor überlagernden Bildern ─── */}
      <div
        className="flex items-start"
        style={{ paddingLeft: sidePad, paddingRight: sidePad, gap: px(9, 14), position: 'relative', zIndex: 20 }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: px(60, 96),
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          Services
        </h2>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: px(9, 14),
            lineHeight: 1.1,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginTop: px(5, 8),
          }}
        >
          003
        </span>
      </div>

      {/* ─── Service-Liste ─── */}
      <div className="relative" style={{ marginTop: px(32, 60) }}>
        {SERVICES.map((service, i) => {
          const isHovered = hoveredIndex === i

          // Headline-Mitte vom oberen Rand des Row-Divs:
          // 1px Trennlinie + marginTop + halbe Headline-Schriftgröße
          const headlineCenter = `calc(1px + ${px(20, 32)} + ${px(30, 48)})`

          return (
            <div
              key={service.name}
              className="relative group"
              style={{ marginTop: i === 0 ? 0 : px(20, 32) }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >

              {/* Desktop: Bild — vertikal auf Headline zentriert, Masken-Reveal */}
              <div
                className="hidden md:block absolute pointer-events-none"
                style={{
                  top: headlineCenter,
                  transform: 'translateY(-50%)',
                  right: service.imageRight,
                  width: 'clamp(200px, 29.72vw, 428px)',
                  aspectRatio: '1 / 1',
                  zIndex: 10,
                  // Maske: klein → offen beim Hover, Opacity: schnell ein, langsam aus
                  clipPath: isHovered
                    ? 'inset(0% 0%)'
                    : 'inset(46% 46%)',
                  opacity: isHovered ? 1 : 0,
                  transition: isHovered
                    ? 'clip-path 0.75s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.08s ease'
                    : 'opacity 0.45s ease',
                }}
              >
                <img
                  alt=""
                  src={service.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Zeilen-Inhalt */}
              <div
                style={{
                  paddingLeft: sidePad,
                  paddingRight: sidePad,
                  marginTop: px(20, 32),
                  paddingBottom: px(20, 0),
                }}
              >
                {/* Text — auf Desktop max. 45 % Breite */}
                <div className="md:max-w-[45%]">
                  <p
                    className="md:whitespace-nowrap"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: px(60, 96),
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {service.name}
                  </p>

                  <p
                    className="md:opacity-0 md:group-hover:opacity-100 md:whitespace-nowrap transition-opacity duration-300"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: px(23, 40),
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      marginTop: px(4, 8),
                    }}
                  >
                    {service.subtitle}
                  </p>

                  <p
                    className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: px(15, 18),
                      lineHeight: 1.3,
                      letterSpacing: '0.02em',
                      marginTop: px(4, 6),
                      maxWidth: '616px',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {service.detail}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
