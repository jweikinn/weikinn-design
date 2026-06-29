'use client'

import { useRef, useEffect } from 'react'

const PANELS = [
  {
    label: 'B R A N D I N G',
    headline: ['Eine Marke,', 'die trägt.'],
    body: 'Du machst etwas, das zählt. Deine Marke soll das auch zeigen. Ich gestalte Brandings, die deine Arbeit ernst nehmen: Sie machen sichtbar, wofür du stehst, und verbinden dich mit den Menschen, die mit dir arbeiten wollen. Markenentwicklung von Strategie bis Guideline.',
    bg: '#000000',
    accentColor: '#d5d3e6',
    textColor: '#d5d3e6',
    showHeader: true,
    wideHeadline: false,
    bodyBelow: false,
    cta: false,
  },
  {
    label: 'W E B D E S I G N',
    headline: ['Eine Website,', 'die ankommt.'],
    body: 'Konzept, Gestaltung und Umsetzung – als ein Gedanke, nicht als drei Etappen. Eine Website, die erlebt und gefühlt wird, nicht durchgescrollt. Mit Stimmung, Tempo und Substanz.',
    bg: '#000000',
    accentColor: '#d5d3e6',
    textColor: '#d5d3e6',
    showHeader: false,
    wideHeadline: false,
    bodyBelow: false,
    cta: false,
  },
  {
    label: 'E D I T O R I A L  &  P R I N T',
    headline: ['Print, das man', 'behalten will.'],
    body: 'Magazine, Geschäftsberichte, Broschüren, Geschäftsausstattung. Inhalt, der eine eigene Form verdient – mit Gewicht, Stimmung und der Haptik, die nur gedruckte Dinge haben. Konzept, Gestaltung und Drucksachen-Begleitung aus einer Hand.',
    bg: '#000000',
    accentColor: '#d5d3e6',
    textColor: '#d5d3e6',
    showHeader: false,
    wideHeadline: false,
    bodyBelow: false,
    cta: false,
  },
  {
    label: 'K O M P L E T T A U F T R I T T',
    headline: ['Branding, Website und Kommunikation –', 'aus einer Hand, aufeinander abgestimmt, mit System.'],
    body: 'Für Unternehmen, die nicht in Bausteinen denken, sondern in einem stimmigen Auftritt. Ich übernehme Strategie, Gestaltung und Umsetzung und hole bei Bedarf mein Netzwerk dazu.',
    bg: '#6759d7',
    accentColor: '#d5d3e6',
    textColor: '#d5d3e6',
    showHeader: false,
    wideHeadline: true,
    bodyBelow: true,
    cta: true,
  },
]

export function SectionFive() {
  const sectionRef = useRef<HTMLElement>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const headlineRefs = useRef<(HTMLDivElement | null)[]>([])
  const bodyBelowRefs = useRef<(HTMLDivElement | null)[]>([])

  // Scroll mechanic: panels slide in from below
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top
      const vh = window.innerHeight
      const scrollIntoSection = -sectionTop

      const DWELL = 0.5
      const TRANS = 1.0

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return
        if (i === 0) {
          panel.style.transform = 'translateY(0)'
          return
        }
        const slideInStart = (i * DWELL + (i - 1) * TRANS) * vh
        const scrolled = scrollIntoSection - slideInStart
        const ty = Math.max(0, vh - Math.max(0, scrolled))
        panel.style.transform = `translateY(${ty}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Measure actual headline height and position bodyBelow containers accordingly
  useEffect(() => {
    const updateBodyPositions = () => {
      PANELS.forEach((panel, i) => {
        if (!panel.bodyBelow) return
        const headline = headlineRefs.current[i]
        const body = bodyBelowRefs.current[i]
        if (!headline || !body) return
        // headline sits at top: calc(42% + 26px); offsetTop gives its actual px position
        body.style.top = `${headline.offsetTop + headline.offsetHeight + 24}px`
      })
    }

    const ro = new ResizeObserver(updateBodyPositions)
    headlineRefs.current.forEach(el => { if (el) ro.observe(el) })
    updateBodyPositions()
    return () => ro.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ position: 'relative', height: `${(PANELS.length + 2) * 100}vh` }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Section header — persists across all panels */}
        <div style={{ position: 'absolute', top: '5%', left: '32px', zIndex: 10 }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '20px',
            lineHeight: '21px',
            letterSpacing: '0.8px',
            color: '#d5d3e6',
            margin: 0,
          }}>
            Angebot
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 'clamp(24px, 2.43vw, 35px)',
            lineHeight: 1.1,
            letterSpacing: '0.35px',
            color: '#d5d3e6',
            margin: '6px 0 0 0',
          }}>
            So können wir<br />zusammenarbeiten.
          </p>
        </div>

        {PANELS.map((panel, i) => (
          <div
            key={i}
            ref={el => { panelRefs.current[i] = el }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: i + 1,
              backgroundColor: panel.bg,
              willChange: 'transform',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>

              {/* Service label — always at the same viewport height */}
              <p style={{
                position: 'absolute',
                top: '42%',
                left: '10.35%',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '16.498px',
                letterSpacing: '0',
                color: panel.accentColor,
                margin: 0,
              }}>
                {panel.label}
              </p>

              {/* Big italic headline */}
              <div
                ref={el => { headlineRefs.current[i] = el }}
                style={{
                  position: 'absolute',
                  top: 'calc(42% + 26px)',
                  left: '10.35%',
                  right: panel.wideHeadline ? '12%' : '45%',
                }}
              >
                {panel.headline.map((line, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 'clamp(36px, 5.56vw, 80px)',
                      lineHeight: 1.1,
                      letterSpacing: '0.625px',
                      color: panel.accentColor,
                      margin: 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Body text — panels 0–2: rechte Spalte neben Headline */}
              {!panel.bodyBelow && (
                <p style={{
                  position: 'absolute',
                  top: '42%',
                  left: '59.24%',
                  right: '10.35%',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.36,
                  letterSpacing: '0.2px',
                  color: panel.textColor,
                  margin: 0,
                }}>
                  {panel.body}
                </p>
              )}

              {/* Komplettauftritt: Body + Button, positioned dynamically below headline via JS */}
              {panel.bodyBelow && (
                <div
                  ref={el => { bodyBelowRefs.current[i] = el }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '59.24%',
                    right: '10.35%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300,
                    fontSize: '17.762px',
                    lineHeight: 1.36,
                    letterSpacing: '0.2082px',
                    color: panel.textColor,
                    margin: 0,
                  }}>
                    {panel.body}
                  </p>
                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignSelf: 'flex-start',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#d5d3e6',
                      color: '#6759d7',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 800,
                      fontSize: '14px',
                      letterSpacing: '-0.02em',
                      padding: '12px 16px',
                      borderRadius: '24px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Kontakt
                  </a>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
