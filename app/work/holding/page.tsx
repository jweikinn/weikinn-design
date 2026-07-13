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

const BASE = '/work/Holding/editorial-holding-Nachhaltigkeitsbericht-Code-of-conduct-weikinn'

export default function Holding() {
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
              Otto Krahn Group
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
              <div>Editorial Design</div>
              <div>Corporate Publishing</div>
            </div>
          </div>
        </section>

        {/* ── Bild 1 – Hero: Buchcover ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}.jpg`} alt="Otto Krahn Group – Nachhaltigkeitsbericht und Code of Conduct" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </section>

        {/* ── Aufgabe ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div><p style={sectionLabelCss}>Aufgabe</p></div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Die Otto Krahn Group – eine Holding mit über 112-jähriger Geschichte, 1.600 Mitarbeitenden und 39 Standorten weltweit – wollte ihre Nachhaltigkeitsstrategie klar und verbindlich kommunizieren. Entstanden sind der Nachhaltigkeitsbericht 2020/2021 und der Code of Conduct in der Reihe „Basic Principles".
              </p>
              <p style={{ ...bodyCss, opacity: 0.7 }}>
                Scope: Editorial Design · Corporate Publishing · Infografik
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2 – Nachhaltigkeitsbericht Übersicht ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}2.jpg`} alt="Otto Krahn Group – Nachhaltigkeitsbericht Seitenübersicht" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

        {/* ── Bild 3 – Profilseite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}3.jpg`} alt="Otto Krahn Group – Profil-Doppelseite" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

        {/* ── Umsetzung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div><p style={sectionLabelCss}>Umsetzung</p></div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Zwei Publikationen, ein System. Türkis und Limettengelb, klare Typografie, präzise Informationsarchitektur – damit komplexe Inhalte verständlich bleiben und Haltung sichtbar wird. Infografiken, Porträts und Leitlinienseiten funktionieren als Einheit.
              </p>
              <p style={bodyCss}>
                Der Nachhaltigkeitsbericht zeigt die 14 Leitlinien der Unternehmensgruppe ebenso lesbar wie die CO₂-Bilanz – ohne Schwere, aber mit der Ernsthaftigkeit, die das Thema verdient.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bilder 4+5 – Leitlinien + Infografik, zwei Spalten ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src={`${BASE}4.jpg`} alt="Otto Krahn Group – 14 Nachhaltigkeitsleitlinien" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <Image src={`${BASE}5.jpg`} alt="Otto Krahn Group – CO₂-Infografik" fill style={{ objectFit: 'contain', padding: '32px' }} />
            </div>
          </div>
        </section>

        {/* ── Bild 6 – Code of Conduct Spreads ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src={`${BASE}6.jpg`} alt="Otto Krahn Group – Code of Conduct Seitenübersicht" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>
      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
