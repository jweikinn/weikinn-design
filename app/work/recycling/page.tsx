'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { bodyCss } from '@/lib/styles'

const PAD = 32

const sectionLabelCss: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: 'clamp(36px, 4.17vw, 60px)',
  lineHeight: 1.05,
  letterSpacing: '0.5px',
  color: '#6759d7',
  margin: 0,
}

const BASE = '/work/Recycling/editorial-recycling-Technik-Brosch%C3%BCre-weikinn'

export default function Recycling() {
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
              WIPAG
            </h1>
            <div
              className="md:text-right"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#d5d3e6',
                opacity: 0.6,
                marginTop: '32px',
                flexShrink: 0,
              }}
            >
              <div>Branding · Editorial Design</div>
              <div>Brand Guidelines</div>
            </div>
          </div>
        </section>

        {/* ── Bild 1 – Hero ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}.jpg`} alt="WIPAG – We close the loop." fill style={{ objectFit: 'cover' }} priority />
          </div>
        </section>

        {/* ── Aufgabe ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div><p style={sectionLabelCss}>Aufgabe</p></div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                WIPAG ist spezialisiert auf die Wiederaufbereitung von Hochleistungskunststoffen – mit dem Anspruch, den Kreislauf wirklich zu schließen. Gebraucht wurde ein vollständiges Erscheinungsbild: von der Markenentwicklung über die Brand Guidelines bis zur Technikbroschüre für den Hochleistungsverbundwerkstoff WIPAG Carbon (CFRTP).
              </p>
              <p style={{ ...bodyCss, opacity: 0.7 }}>
                Scope: Branding · Brand Guidelines · Editorial Design · Merchandise
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2 – Brand Guidelines ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}2.jpg`} alt="WIPAG – Brand Guidelines" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

        {/* ── Bild 3 – Technikbroschüre Cover ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}3.jpg`} alt="WIPAG – Technikbroschüre Carbon Cover" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

        {/* ── Umsetzung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div><p style={sectionLabelCss}>Umsetzung</p></div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Die Gestaltung übersetzt Kreislaufwirtschaft in ein klares visuelles System: Dunkelgrün als Markenfarbe, Limettengelb als Akzent, ein Key Visual, das den Loop buchstäblich sichtbar macht. Das System trägt vom digitalen Auftritt bis zum Notizbuch – und gibt einer technisch komplexen Materie eine Sprache, die ankommt.
              </p>
              <p style={bodyCss}>
                Die Technikbroschüre für WIPAG Carbon verbindet präzise Fachinformation mit einer Gestaltung, die dem Material gerecht wird: sachlich, klar, mit einem Hauch industrieller Stärke.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bilder 4+5 – Broschüren-Spreads, zwei Spalten ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src={`${BASE}4.jpg`} alt="WIPAG – Technikbroschüre Spread" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src={`${BASE}5.jpg`} alt="WIPAG – Technikbroschüre Tabellen" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* ── Bild 6 – Flat Lay ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}6.jpg`} alt="WIPAG – Merchandise und Broschüre" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>
      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
