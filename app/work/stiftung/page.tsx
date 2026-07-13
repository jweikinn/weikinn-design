'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { bodyCss } from '@/lib/styles'

const PAD = 32

export default function Stiftung() {
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

      <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <Navbar />

        {/* ── Hero ── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>

          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '0.06em',
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
              Kolibri Inter&shy;kulturelle Stiftung
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
              <div>Editorial Design</div>
              <div>2024</div>
            </div>
          </div>
        </section>

        {/* ── Bild 1 – Hero, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/stiftung/editorial-01.jpg"
              alt="Kolibri Interkulturelle Stiftung – Broschüre"
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
                Die <a href="https://kolibri-stiftung.de/nachlassspenden/" target="_blank" rel="noopener noreferrer" style={{ color: '#6759d7', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Kolibri Interkulturelle Stiftung</a> unterstützt Geflüchtete und Migrant:innen in München – durch Benefizveranstaltungen, Sprachkurse, psychotherapeutische Begleitung und Sozialberatung. Für das Thema Nachlassspenden brauchte die Stiftung eine Broschüre, die Menschen behutsam anspricht: informativ, vertrauensvoll und gestalterisch auf Augenhöhe mit dem Anliegen.
              </p>
              <p style={{ ...bodyCss, opacity: 0.7 }}>
                Scope: Editorial Design · Broschüre · Typografie · Layout
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2 – volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/stiftung/editorial-02.jpg"
              alt="Kolibri Interkulturelle Stiftung – Broschüre Detail"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* ── Umsetzung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
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
                Eine Gestaltung, die den Geist der Stiftung trägt: lebendig, menschlich, mit Freude an Farbe und Form. Das Layout gibt Inhalt und Bild gleichermaßen Raum – und lässt die Arbeit der Stiftung für sich sprechen.
              </p>
              <p style={bodyCss}>
                Das Ergebnis ist eine Broschüre, die Solidarität sichtbar macht – und bei Veranstaltungen, Fördergebern und Partnern gleichermaßen überzeugt.
              </p>
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
