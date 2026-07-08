'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const PAD = 32

export default function Forschung() {
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
              NanoMedNL
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
              <div>Branding</div>
              <div>2024</div>
            </div>
          </div>
        </section>

        {/* ── Bild 1 – Hero, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/forschung/hero.jpg"
              alt="NanoMedNL – Branding"
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
                fontWeight: 300,
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
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.2px', color: '#d5d3e6', margin: '0 0 24px' }}>
                NanoMedNL ist eine niederländische Initiative, die Wissenschaft und Gesellschaft in der Nanomedizinenforschung zusammenbringt – mit 29 Partnern aus Forschung, Industrie, Kliniken und Patientenorganisationen. Gefragt war ein Erscheinungsbild, das diese Vielfalt trägt: seriös genug für die Wissenschaft, zugänglich genug für die Öffentlichkeit.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.2px', color: '#d5d3e6', margin: 0, opacity: 0.7 }}>
                Scope: Markenentwicklung · Logo · Farbkonzept · Typografie · Office Documents
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2 – Medizin-Mockup, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '16px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/forschung/medizin-02.jpg"
              alt="NanoMedNL – Markenmockup"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* ── Bild 3+4 – zwei Bilder nebeneinander ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { src: '/work/forschung/portfolio-02.jpg', alt: 'NanoMedNL – Portfolio' },
              { src: '/work/forschung/medizin-03.jpg', alt: 'NanoMedNL – Medizin Detail' },
            ].map((img, i) => (
              <div key={i} style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '4px', overflow: 'hidden' }}>
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
                fontWeight: 300,
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
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.2px', color: '#d5d3e6', margin: '0 0 24px' }}>
                Die Herausforderung lag in der Breite: Ein Erscheinungsbild, das bei Fördergebern und Forschungspartnern genauso funktioniert wie in der Kommunikation mit Patientengruppen. Die Antwort war ein klares, reduziertes System – mit einem Logo, das Vernetzung und Präzision gleichzeitig vermittelt.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.2px', color: '#d5d3e6', margin: 0 }}>
                Angewendet auf Office-Dokumenten entsteht ein Auftritt, der in der täglichen Zusammenarbeit der 29 Partner Konsistenz schafft – und NanoMedNL als verlässliche, professionelle Institution positioniert.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 5 – Webdesign, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/forschung/webdesign.jpg"
              alt="NanoMedNL – Webdesign"
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
