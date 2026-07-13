'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { bodyCss } from '@/lib/styles'

const PAD = 32
const REF_SIZE = 100

const INTRO = 'Ich bin Julia. Seit über zwölf Jahren gestalte ich als freie Designerin Marken und Websites – für Unternehmen mit Sinn und Haltung im gesamten deutschsprachigen Raum und darüber hinaus.'

const SECTIONS = [
  {
    num: '01',
    title: 'Wie ich bin',
    text: 'Ich stelle Fragen und höre genau hin. Ich verkompliziere nicht und ich arbeite mit gesundem Menschenverstand, den ich in meiner Arbeit für unverzichtbar halte.',
  },
  {
    num: '02',
    title: 'Mein Weg',
    text: 'Aufgewachsen bin ich südlich von München. Kommunikationsdesign habe ich in Nürnberg studiert und danach acht Jahre in Hamburg gelebt. Ich liebe Hamburg bis heute – das Weltstädtische, den Hafen. Trotzdem hat mich München am Ende wieder eingesammelt: Auf Dauer fehlte mir der blaue Himmel. Seit über zwölf Jahren bin ich selbstständig.',
  },
  {
    num: '03',
    title: 'Wie ich arbeite',
    text: 'Ich fange mit Fragen an. Bis ich verstehe, was ein Projekt braucht – und was nicht. Dann kommt die Recherche und die Intuition, dann der Fluss, in dem Gestalten fast von selbst geht. Wir müssen nicht bei Null anfangen. Wir starten da, wo du gerade bist.',
  },
  {
    num: '04',
    title: 'Was mich trägt',
    text: 'Vertrauen. Wenn ich das Vertrauen bekomme, zu gestalten, wie ich es für richtig halte, entstehen die besten Projekte.',
  },
  {
    num: '05',
    title: 'Was ich für nötig halte',
    text: 'Auf beiden Seiten: Vertrauen und Wertschätzung. Und Menschenverstand. In einer Zeit, in der KI vieles gestalten kann, wird umso deutlicher, was Menschen leisten: zuhören, mitdenken, Zusammenhänge sehen, Intuition ins Handwerk übersetzen. Darauf stelle ich meine Arbeit.',
  },
]

const WERTE = [
  {
    label: 'Was zählt.',
    items: ['Vertrauen', 'Wertschätzung', 'Klartext', 'gesunder Menschenverstand', 'Ruhe im Prozess', 'Ehrlichkeit', 'Nachhaltigkeit'],
  },
  {
    label: 'Was mich freut.',
    items: ['Fragen, die weiterführen', 'Kund:innen, die für ihre Sache stehen', 'Gute Haptik', 'Podcasts', 'Design ohne Show', 'guter Kaffee', 'Meer und Berge', 'Rückbeugen im Yoga'],
  },
  {
    label: 'Kein Interesse.',
    items: ['Buzzwords ohne Substanz', 'Hektik ohne Grund', 'KI-Beliebigkeit', 'unnötige Meetings'],
  },
]


export default function AboutPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [seen, setSeen] = useState(false)
  const [headingSize, setHeadingSize] = useState<number | null>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSeen(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useLayoutEffect(() => {
    const compute = () => {
      if (!containerRef.current || !measureRef.current) return
      const w = containerRef.current.offsetWidth - PAD * 2
      const nw = measureRef.current.offsetWidth
      if (w <= 0 || nw <= 0) return
      setHeadingSize(REF_SIZE * (w / nw))
    }
    compute()
    document.fonts?.ready.then(compute).catch(() => {})
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#d5d3e6' }}>
      {/* Messspanne für fluid heading */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'fixed', top: '-9999px', left: '-9999px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: `${REF_SIZE}px`,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        Julia Weikinn
      </span>

      <div ref={containerRef} style={{ position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <Navbar />

        {/* ── Hero ── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '0.02em',
              color: '#d5d3e6',
              opacity: 0.75,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '64px',
            }}
          >
            ← Zurück zur Homepage
          </Link>

          <h1
            ref={headingRef}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: seen ? 800 : 100,
              fontSize: headingSize ? `${headingSize.toFixed(2)}px` : '0px',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#d5d3e6',
              margin: '0 0 64px',
              opacity: seen ? 1 : 0,
              transition: 'font-weight 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease',
              whiteSpace: 'nowrap',
              visibility: headingSize ? 'visible' : 'hidden',
            }}
          >
            Julia Weikinn
          </h1>

          {/* Intro-Text */}
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: 1.4,
              letterSpacing: '0.2px',
              color: '#d5d3e6',
              margin: 0,
            }}>
              {INTRO}
            </p>
          </div>
        </section>

        {/* ── Portrait ── */}
        <section style={{ paddingBottom: '120px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.jpg"
            alt="Julia Weikinn"
            style={{
              width: '100%',
              height: 'clamp(400px, 70vh, 800px)',
              objectFit: 'cover',
              objectPosition: '64% 15%',
              display: 'block',
            }}
          />
        </section>

        {/* ── Nummerierte Sektionen 01–05 ── */}
        {SECTIONS.map(({ num, title, text }) => (
          <section
            key={num}
            style={{
              paddingLeft: `${PAD}px`,
              paddingRight: `${PAD}px`,
              paddingTop: '40px',
              paddingBottom: 'clamp(64px, 8vw, 120px)',
              borderTop: '1px solid rgba(213, 211, 230, 0.12)',
            }}
          >
            {/* Nummer */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '13px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#d5d3e6',
              opacity: 0.6,
              margin: '0 0 20px',
            }}>
              {num}
            </p>

            {/* Großer Titel — volle Breite */}
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(48px, 6.87vw, 99px)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              color: '#d5d3e6',
              margin: '0 0 clamp(32px, 4vw, 56px)',
            }}>
              {title}
            </p>

            {/* Fließtext — auf Desktop rechts eingerückt */}
            <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
              <div />
              <p style={bodyCss}>{text}</p>
            </div>
          </section>
        ))}

        {/* ── 06 · Werte ── */}
        <section style={{
          backgroundColor: '#6759d7',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: `${PAD}px`,
          paddingRight: `${PAD}px`,
          marginTop: '40px',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '13px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#d5d3e6',
            opacity: 0.6,
            margin: '0 0 48px',
          }}>
            06
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {WERTE.map(({ label, items }) => (
              <div key={label} className="md:grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'baseline' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 'clamp(22px, 2.08vw, 30px)',
                  lineHeight: 1.1,
                  letterSpacing: '0.3px',
                  color: '#d5d3e6',
                  margin: '0 0 12px',
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.4,
                  letterSpacing: '0.2px',
                  color: '#d5d3e6',
                  opacity: 0.85,
                  margin: 0,
                }}>
                  {items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
