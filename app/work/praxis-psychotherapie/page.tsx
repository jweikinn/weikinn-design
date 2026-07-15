'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { bodyCss } from '@/lib/styles'

const PAD = 32

export default function PraxisPsychotherapie() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setSeen(true); obs.disconnect() }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#d5d3e6' }}>

      {/* Content above footer — needs own background to cover sticky footer beneath */}
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <Navbar />

        {/* ── Hero ── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>

          <Link
            href="/#arbeiten"
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
            ← Zurück zu den Arbeiten
          </Link>

          <div className="md:flex md:items-end md:justify-between" style={{ gap: '40px' }}>
            <h1
              ref={headingRef}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: seen ? 800 : 100,
                fontSize: 'clamp(40px, 6.94vw, 100px)',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                color: '#d5d3e6',
                margin: 0,
                maxWidth: '800px',
                opacity: seen ? 1 : 0,
                transition: 'font-weight 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease',
              }}
            >
              Praxis für<br />Psycho&shy;therapie
            </h1>

            <div
              className="md:text-right"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#d5d3e6',
                opacity: 0.6,
                marginTop: '32px',
                flexShrink: 0,
              }}
            >
              <div>Branding</div>
              <div>2024</div>
            </div>
          </div>
        </section>

        {/* ── Bild 1 – Hero, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden' }}>
            <Image
              src="/work/praxis.png"
              alt="Praxis für Psychotherapie – Branding"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </section>

        {/* ── Aufgabe ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(36px, 4.17vw, 60px)',
                lineHeight: 1.05,
                letterSpacing: '0.5px',
                color: '#6759d7',
                margin: 0,
              }}>
                Aufgabe
              </p>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Die Praxis für Psychotherapie suchte eine Identität, die Nähe schafft – ohne klinisch zu wirken. Gefragt war ein Erscheinungsbild, das Vertrauen kommuniziert: zugänglich, ruhig, mit einer Wärme, die Menschen bereits vor dem ersten Gespräch spüren. Dazu gehörten die Praxis-Website, eine eigene Landingpage für das Gruppenangebot »Mutterzeit« sowie ein passender Flyer.
              </p>
              <p style={{ ...bodyCss, opacity: 0.7 }}>
                Scope: Markenentwicklung · Logo · Farbkonzept · Typografie · Website · Landingpage · Flyer
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2+3 – zwei Flyer nebeneinander ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { src: '/work/psycho/flyer-01.jpg', alt: 'Flyer Praxis für Psychotherapie' },
              { src: '/work/psycho/flyer-02.jpg', alt: 'Flyer Praxis für Psychotherapie – Variante' },
            ].map((img, i) => (
              <div key={i} style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '2px', overflow: 'hidden' }}>
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Umsetzung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(36px, 4.17vw, 60px)',
                lineHeight: 1.05,
                letterSpacing: '0.5px',
                color: '#6759d7',
                margin: 0,
              }}>
                Umsetzung
              </p>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Ausgangspunkt war die Frage, wie sich Vertrauen gestalten lässt. Die Antwort lag in Reduktion: ein ruhiges Farbspektrum aus Warmtönen, eine Typografie mit Charakter ohne Schärfe, ein Logo, das Offenheit und Haltung gleichzeitig vermittelt.
              </p>
              <p style={bodyCss}>
                Das Ergebnis ist ein Erscheinungsbild, das auf allen Trägern konsistent wirkt – von der Visitenkarte bis zur Website – und das Menschen anspricht, die sich in einem sensiblen Moment befinden.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 5 – Webdesign Mockup animiert, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '16px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '2px', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/psycho/webdesign.gif"
              alt="Praxis für Psychotherapie – Webdesign"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </section>

        {/* ── Bild 6 – Hochformat Flyer, zentriert ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(50%, 600px)', aspectRatio: '2/3', borderRadius: '2px', overflow: 'hidden' }}>
              <Image
                src="/work/psycho/flyer-03.jpg"
                alt="Praxis für Psychotherapie – Hochformat Flyer"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
