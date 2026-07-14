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

export default function SafetyYou() {
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
              Mitarbeiter&shy;kampagne Safety you
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
              <div>Kampagnendesign</div>
              <div>Key Visual · Illustration</div>
            </div>
          </div>
        </section>

        {/* ── Bild 1 – Hero, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit.jpg"
              alt="Safety you. – Kampagne Mitarbeitersicherheit"
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
              <p style={sectionLabelCss}>Aufgabe</p>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Ein internationales Unternehmen wollte seine Mitarbeitenden für fünf zentrale Sicherheitsthemen sensibilisieren: Driving Safety, Handrail Use, No Alcohol & Drugs, Care for People und See It – Own it – Report it. Ausgangspunkt war das bestehende Safety you.-Logo. Daraus sollte eine Kampagne entstehen, die nicht belehrt, sondern einlädt – lebendig, klar und auf allen Kanälen einsetzbar.
              </p>
              <p style={{ ...bodyCss, opacity: 0.7 }}>
                Scope: Kampagnendesign · Key Visual · Ikonographie · Medienproduktion
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2 – Ausgangspunkt: Logo + Bereiche ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit-Ausgangspunkt.jpg"
              alt="Safety you. – Logo und die fünf Themenbereiche"
              fill
              style={{ objectFit: 'contain', padding: '48px' }}
            />
          </div>
        </section>

        {/* ── Bild 3 – Ein Icon pro Bereich ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit3.jpg"
              alt="Safety you. – Ikonographie, ein Icon pro Themenbereich"
              fill
              style={{ objectFit: 'contain', padding: '48px' }}
            />
          </div>
        </section>

        {/* ── Bild 4 – Layoutsystematik ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit-Layoutsystematik.jpg"
              alt="Safety you. – Grafische Elemente und Rastersystem"
              fill
              style={{ objectFit: 'contain', padding: '48px' }}
            />
          </div>
        </section>

        {/* ── Umsetzung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <p style={sectionLabelCss}>Umsetzung</p>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p style={{ ...bodyCss, margin: '0 0 24px' }}>
                Für jeden der fünf Bereiche entstand ein eigenes Icon – geometrisch, direkt, sofort erkennbar. Aus diesen Icons und einem kraftvollen Farbraum entwickelten wir eine Layoutsystematik, die sich beliebig kombinieren und skalieren lässt: vom Bildschirm über den Kundenstopper bis zum Lanyard am Werkstor.
              </p>
              <p style={bodyCss}>
                Das System hält zusammen, was zusammengehört – und gibt jedem Thema trotzdem seinen eigenen Auftritt.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 5 – System in Anwendung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit6.jpg"
              alt="Safety you. – System in Anwendung, Badges und Elemente"
              fill
              style={{ objectFit: 'contain', padding: '48px' }}
            />
          </div>
        </section>

        {/* ── Bild 7 – Banner ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit_01.jpg"
              alt="Safety you. – Kampagnen-Banner"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* ── Bild 6 – Werbemittel ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit4.jpg"
              alt="Safety you. – Werbemittel und Medien"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
