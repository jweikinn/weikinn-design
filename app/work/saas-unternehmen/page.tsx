'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { bodyCss } from '@/lib/styles'

const PAD = 32

export default function SaasUnternehmen() {
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
              SaaS-Unter&shy;nehmen
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
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/saas/branding-01.jpg"
              alt="SaaS-Unternehmen – Branding"
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
                Das SaaS-Unternehmen brauchte ein Erscheinungsbild, das in einem schnellen, digitalen Markt sofort Orientierung schafft – professionell, klar und unverwechselbar. Gefragt war eine Marke, die Vertrauen aufbaut, bevor das Produkt überhaupt geöffnet wird.
              </p>
              <p style={{ ...bodyCss, opacity: 0.7 }}>
                Scope: Farbkonzept · Typografie · Webdesign · Key Visuals
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 2 – zweites Branding-Bild, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/work/saas/branding-02.jpg"
              alt="SaaS-Unternehmen – Branding Detail"
              fill
              style={{ objectFit: 'cover' }}
            />
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
                Ausgangspunkt war das bestehende Logo – daraus wurden Farben abgeleitet und die Website entwickelt. Bewusst haben wir uns für ein helles Erscheinungsbild mit viel Weißraum entschieden: eine klare Abgrenzung von der Masse der SaaS-Anbieter, die oft auf dunkle, technische Ästhetik setzen.
              </p>
              <p style={bodyCss}>
                Für den Headerbereich entstanden eigene Key Visuals, die der Seite Tiefe und einen wiedererkennbaren Charakter geben.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bild 3 – MacBook Webseitenscreenshot, zentriert ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(70%, 900px)', aspectRatio: '1512/6099', borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="/work/saas/macbook.png"
                alt="SaaS-Unternehmen – Website"
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
