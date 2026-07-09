'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const PAD = 32

const INTRO = 'Ich bin Julia, aufgewachsen südlich von München und heute in Sendling zu Hause – von meinem Schreibtisch nahe der Isar arbeite ich als freie Designerin für Unternehmen aus ganz Deutschland. Bei der Arbeit läuft oft im Hintergrund Hotel Matze – seit Jahren. Und wenn ich weg kann, bin ich gerne am Meer oder in den Bergen.'

const SECTIONS = [
  {
    num: '01',
    title: 'Wie ich bin',
    text: 'Ich stelle Fragen und höre genau hin. Ich verkompliziere nicht und ich arbeite mit gesundem Menschenverstand, den ich in meiner Arbeit für unverzichtbar halte. Gerade jetzt.',
  },
  {
    num: '02',
    title: 'Mein Weg',
    text: 'Aufgewachsen bin ich südlich von München. Kommunikationsdesign habe ich in Nürnberg studiert und danach ein paar Jahre in Hamburg gelebt – bis mir klar wurde, dass sich in der Isar einfach besser baden lässt als in der Elbe. Seit über zwölf Jahren bin ich selbstständig.',
  },
  {
    num: '03',
    title: 'Wie ich arbeite',
    text: 'Ich fange mit Fragen an. Bis ich verstehe, was ein Projekt braucht – und was nicht. Dann kommt die Recherche und die Intuition, dann der Fluss, in dem Gestalten fast von selbst geht. Wir müssen nicht bei Null anfangen. Wir starten da, wo du gerade bist. Kein aufwendiger Workshop, wenn er nicht nötig ist.',
  },
  {
    num: '04',
    title: 'Was mich trägt',
    text: 'Vertrauen. Wenn ich das Vertrauen bekomme, zu gestalten, wie ich es für richtig halte, entstehen die besten Projekte. Was mir dagegen schwerfällt, ist die andere Seite: Akquise, sich selbst verkaufen, den Raum einnehmen. Das lerne ich noch – während ich das hier schreibe, zum Beispiel.',
  },
  {
    num: '05',
    title: 'Was ich für nötig halte',
    text: 'Vertrauen und Wertschätzung, auf beiden Seiten. Und Menschenverstand. In einer Zeit, in der KI vieles gestalten kann, wird umso deutlicher, was Menschen leisten: zuhören, mitdenken, Zusammenhänge sehen, Intuition ins Handwerk übersetzen. Darauf stelle ich meine Arbeit.',
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

const bodyCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '18px',
  lineHeight: 1.5,
  letterSpacing: '0.2px',
  color: '#d5d3e6',
  margin: 0,
}

export default function AboutPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [seen, setSeen] = useState(false)

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

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#d5d3e6' }}>
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <Navbar />

        {/* ── Hero ── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#d5d3e6',
              opacity: 0.5,
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
              fontSize: 'clamp(48px, 7.5vw, 108px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#d5d3e6',
              margin: '0 0 64px',
              opacity: seen ? 1 : 0,
              transition: 'font-weight 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease',
            }}
          >
            Julia<br />Weikinn.
          </h1>

          {/* Intro-Text */}
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(18px, 1.67vw, 24px)',
              lineHeight: 1.5,
              letterSpacing: '0.1px',
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
              paddingBottom: '80px',
              borderTop: '1px solid rgba(213, 211, 230, 0.12)',
              paddingTop: '64px',
            }}
          >
            <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#6759d7',
                  opacity: 0.7,
                  marginBottom: '16px',
                }}>
                  {num}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 3.47vw, 50px)',
                  lineHeight: 1.05,
                  letterSpacing: '0.5px',
                  color: '#6759d7',
                  margin: 0,
                }}>
                  {title}
                </p>
              </div>
              <div style={{ paddingTop: '8px' }}>
                <p style={bodyCss}>{text}</p>
              </div>
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
            marginBottom: '48px',
          }}>
            06
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {WERTE.map(({ label, items }) => (
              <div key={label} className="md:grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'baseline' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 300,
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
                  lineHeight: 1.6,
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
