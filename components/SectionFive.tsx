'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { bodyCss } from '@/lib/styles'

const PAD = 32
const REF_SIZE = 100

const SERVICES = [
  {
    name: 'branding',
    headline: ['Eine Marke,', 'die trägt.'],
    body: 'Du machst etwas, das zählt. Deine Marke soll das auch zeigen. Ich gestalte Brandings, die deine Arbeit ernst nehmen: Sie machen sichtbar, wofür du stehst, und verbinden dich mit den Menschen, die mit dir arbeiten wollen. Markenentwicklung von Strategie bis Guideline.',
  },
  {
    name: 'webdesign',
    headline: ['Eine Website,', 'die ankommt.'],
    body: 'Konzept, Gestaltung und Umsetzung – als ein Gedanke, nicht als drei Etappen. Eine Website, die erlebt und gefühlt wird, nicht durchgescrollt. Mit Stimmung, Tempo und Substanz.',
  },
  {
    name: 'print&editorial',
    headline: ['Print, das man', 'behalten will.'],
    body: 'Magazine, Geschäftsberichte, Broschüren, Geschäftsausstattung. Inhalt, der eine eigene Form verdient – mit Gewicht, Stimmung und der Haptik, die nur gedruckte Dinge haben. Konzept, Gestaltung und Drucksachen-Begleitung aus einer Hand.',
  },
]

const KOMPLETT_HEADLINE = [
  'Branding, Website und Kommunikation –',
  'aus einer Hand, aufeinander abgestimmt, mit System.',
]
const KOMPLETT_BODY = 'Für Unternehmen, die nicht in Bausteinen denken, sondern in einem stimmigen Auftritt. Ich übernehme Strategie, Gestaltung und Umsetzung und hole bei Bedarf mein Netzwerk dazu.'

export function SectionFive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [fontSize, setFontSize] = useState<number>(0)

  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const [seen, setSeen] = useState<boolean[]>(() => new Array(SERVICES.length + 1).fill(false))
  const [kontaktHover, setKontaktHover] = useState(false)
  const [vh, setVh] = useState(0)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    panelRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSeen(prev => { const n = [...prev]; n[i] = true; return n })
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  useLayoutEffect(() => {
    const compute = () => {
      if (!containerRef.current || !measureRef.current) return
      const w = containerRef.current.offsetWidth - PAD * 2
      const nw = measureRef.current.offsetWidth
      if (w <= 0 || nw <= 0) return
      setFontSize(REF_SIZE * (w / nw))
      setVh(window.innerHeight)
    }
    compute()
    document.fonts?.ready.then(compute).catch(() => {})
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  const ready = fontSize > 0

  // Bottom edge of the two-line fluid title — used for the absolute title wrapper animation
  const titleBottomPx = vh * 0.08 + fontSize * 0.88 * 2

  const nameCss: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: ready ? `${fontSize.toFixed(2)}px` : '0px',
    lineHeight: 0.88,
    letterSpacing: '-0.02em',
    color: '#d5d3e6',
    visibility: ready ? 'visible' : 'hidden',
    margin: 0,
    whiteSpace: 'nowrap',
  }

  const headlineDesktop: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 'clamp(36px, 5.56vw, 80px)',
    lineHeight: 1.1,
    letterSpacing: '0.625px',
    color: '#6759d7',
    margin: 0,
  }

  const headlineMobile: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 'clamp(28px, 7vw, 36px)',
    lineHeight: 1.1,
    letterSpacing: '0.625px',
    color: '#6759d7',
    margin: 0,
  }

  const kontaktBtn: React.CSSProperties = {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 800,
    fontSize: '14px',
    letterSpacing: '-0.02em',
    padding: '12px 16px',
    borderRadius: '24px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }

  return (
    <section ref={containerRef} style={{ position: 'relative' }}>

      {/* Hidden measurement span */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'fixed', top: '-9999px', left: '-9999px',
          fontFamily: 'var(--font-sans)', fontWeight: 800,
          fontSize: `${REF_SIZE}px`, letterSpacing: '-0.02em',
          whiteSpace: 'nowrap', opacity: 0, pointerEvents: 'none',
        }}
      >
        print&amp;editorial
      </span>

      {/* "Angebot" label — scrolls with content */}
      <div style={{ position: 'absolute', top: '5vh', left: `${PAD}px`, zIndex: 10 }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
          fontSize: '20px', lineHeight: '21px', letterSpacing: '0.8px',
          color: '#d5d3e6', margin: 0,
        }}>
          Angebot
        </p>
      </div>

      {/* ── Service panels ── */}
      {SERVICES.map((svc, i) => (
        <div
          key={i}
          ref={el => { panelRefs.current[i] = el }}
          className="md:h-screen"
          style={{
            position: 'relative',
            backgroundColor: '#000000',
            overflow: 'hidden',
          }}
        >
          {/* Fluid service name — Desktop only: absolute */}
          <p className="hidden md:block" style={{
            ...nameCss,
            position: 'absolute',
            top: '10%',
            left: `${PAD}px`,
            fontWeight: seen[i] ? 800 : 100,
            opacity: seen[i] ? 1 : 0,
            transition: ready
              ? 'font-weight 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease'
              : 'none',
          }}>
            {svc.name}
          </p>

          {/* Desktop: two columns */}
          <div className="hidden md:block">
            <div style={{ position: 'absolute', top: '47%', left: '10.35%', right: '44%' }}>
              {svc.headline.map((line, j) => (
                <p key={j} style={headlineDesktop}>{line}</p>
              ))}
            </div>
            <p style={{ position: 'absolute', top: '47%', left: '59.24%', right: '10.35%', ...bodyCss }}>
              {svc.body}
            </p>
          </div>

          {/* Mobile: flow layout, panel grows with content */}
          <div
            className="md:hidden flex flex-col"
            style={{
              padding: `80px ${PAD}px 80px`,
              gap: '20px',
            }}
          >
            <p style={{
              ...nameCss,
              fontWeight: seen[i] ? 800 : 100,
              opacity: seen[i] ? 1 : 0,
              transition: ready
                ? 'font-weight 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease'
                : 'none',
              marginBottom: '4px',
            }}>
              {svc.name}
            </p>
            <div>
              {svc.headline.map((line, j) => (
                <p key={j} style={headlineMobile}>{line}</p>
              ))}
            </div>
            <p style={bodyCss}>{svc.body}</p>
          </div>
        </div>
      ))}

      {/* ── Komplett-auftritt panel ── */}
      <div
        ref={el => { panelRefs.current[SERVICES.length] = el }}
        className="komplett-panel"
        style={{
          position: 'relative',
          backgroundColor: '#6759d7',
        }}
      >
        {/* Giant two-line name — same on all breakpoints */}
        <div style={{
          position: 'absolute',
          top: '8vh',
          left: `${PAD}px`,
          visibility: ready ? 'visible' : 'hidden',
          fontWeight: seen[SERVICES.length] ? 800 : 100,
          opacity: seen[SERVICES.length] ? 1 : 0,
          transition: ready
            ? 'font-weight 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease'
            : 'none',
        }}>
          {['komplett-', 'auftritt'].map((line, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'inherit',
              fontSize: ready ? `${fontSize.toFixed(2)}px` : '0px',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              color: '#d5d3e6',
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Desktop: Headline + Copy gestapelt, Spalte 2–10 */}
        <div
          className="hidden md:block"
          style={{
            paddingTop: ready ? `${Math.max(vh * 0.47, titleBottomPx + 40)}px` : '50vh',
            paddingLeft: 'calc(8.33% + 29px)',
            paddingRight: 'calc(16.67% + 25px)',
            paddingBottom: '80px',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(36px, 5.56vw, 80px)',
            lineHeight: 1.1,
            letterSpacing: '0.625px',
            color: '#d5d3e6',
            margin: '0 0 40px',
          }}>
            {KOMPLETT_HEADLINE[0]} {KOMPLETT_HEADLINE[1]}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p style={bodyCss}>{KOMPLETT_BODY}</p>
            <a
              href="mailto:julia@weikinn.design"
              style={{ ...kontaktBtn, backgroundColor: kontaktHover ? '#fff' : '#d5d3e6', color: '#6759d7', transition: 'background-color 0.25s ease' }}
              onMouseEnter={() => setKontaktHover(true)}
              onMouseLeave={() => setKontaktHover(false)}
            >Kontakt</a>
          </div>
        </div>

        {/* Mobile: stacked below the name */}
        <div
          className="md:hidden flex flex-col"
          style={{
            paddingTop: '42%',
            paddingLeft: `${PAD}px`,
            paddingRight: `${PAD}px`,
            paddingBottom: '80px',
            gap: '20px',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(28px, 7vw, 36px)',
            lineHeight: 1.1,
            letterSpacing: '0.625px',
            color: '#d5d3e6',
            margin: 0,
          }}>
            {KOMPLETT_HEADLINE[0]} {KOMPLETT_HEADLINE[1]}
          </p>
          <p style={bodyCss}>{KOMPLETT_BODY}</p>
          <a
            href="mailto:julia@weikinn.design"
            style={{ ...kontaktBtn, backgroundColor: kontaktHover ? '#fff' : '#d5d3e6', color: '#6759d7', transition: 'background-color 0.25s ease' }}
            onMouseEnter={() => setKontaktHover(true)}
            onMouseLeave={() => setKontaktHover(false)}
          >Kontakt</a>
        </div>

      </div>

    </section>
  )
}
