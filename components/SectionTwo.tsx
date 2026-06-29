'use client'

import { useEffect, useRef } from 'react'

// Figma-Asset: Ebene_1 Stempel-SVG (dekoratives Element, rechte Spalte)
const imgEbene1 = '/Strategisch-gedacht-vonHerzen-gemacht.svg'

export function SectionTwo() {
  const stampRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!stampRef.current) return
      // Gegen den Uhrzeigersinn = negative Grad
      const rotation = -window.scrollY * 0.08
      stampRef.current.style.transform = `rotate(${rotation}deg)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative w-full bg-black flex items-center"
      style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px', minHeight: '100vh' }}
    >
      {/* Leicht nach oben verschoben via translateY */}
      <div className="flex items-start w-full" style={{ gap: '24px', transform: 'translateY(-12%)' }}>

        {/* ─── Left: Large italic display heading ─── */}
        <div style={{ width: '50%', flexShrink: 0 }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(56px, 6.87vw, 99px)',
              lineHeight: 1.1,
              letterSpacing: '-0.0098em',
              color: '#d5d3e6',
            }}
          >
            Sichtbar machen,
            <br />
            was trägt.
          </p>
        </div>

        {/* ─── Right: Stamp + body text + CTA ─── */}
        <div
          style={{
            flex: 1,
            marginLeft: '72px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Decorative stamp — right-aligned, rotates on scroll */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '24px', marginBottom: '40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={stampRef}
              src={imgEbene1}
              alt=""
              style={{ width: '130px', height: 'auto', willChange: 'transform' }}
            />
          </div>

          {/* H1 für SEO — visuell wie Fließtext-Bold */}
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: 1.36,
              letterSpacing: '0.2px',
              color: '#d5d3e6',
              margin: 0,
            }}
          >
            Branding und Webdesign München –
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: 1.36,
              letterSpacing: '0.2px',
              color: '#d5d3e6',
              margin: 0,
            }}
          >
            für Unternehmen mit{' '}
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, letterSpacing: '0.8px' }}>
              Sinn und Haltung,{' '}
              <br />
            </span>
            die zu wichtig sind, um schlecht auszusehen.
          </p>

          {/* CTA button */}
          <div style={{ marginTop: '32px' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#d5d3e6',
                color: '#2f2483',
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '-0.02em',
                padding: '12px 16px',
                borderRadius: '24px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Projektanfrage
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
