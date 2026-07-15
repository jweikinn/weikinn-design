'use client'

import { useState } from 'react'
import { bodyCss } from '@/lib/styles'

const PAD = 32

const h1Style: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: 1.4,
  letterSpacing: '0.2px',
  color: '#d5d3e6',
  margin: '0',
}

const ctaStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-sans)',
  fontWeight: 800,
  fontSize: '14px',
  letterSpacing: '-0.02em',
  padding: '12px 16px',
  borderRadius: '24px',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(48px, 7.22vw, 104px)',
  lineHeight: 1.05,
  letterSpacing: '-0.01em',
  color: '#d5d3e6',
  margin: '0 0 clamp(16px, 2vw, 24px)',
}


export function SectionTwo() {
  const [ctaHover, setCtaHover] = useState(false)

  const italicSpan = (
    <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, letterSpacing: '0.8px' }}>
      Sinn und Haltung,{' '}
    </span>
  )

  const cta = (
    <a
      href="/kontakt"
      style={{
        ...ctaStyle,
        backgroundColor: ctaHover ? '#d5d3e6' : '#6759d7',
        color: ctaHover ? '#6759d7' : '#fff',
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
      onMouseEnter={() => setCtaHover(true)}
      onMouseLeave={() => setCtaHover(false)}
    >
      Projektanfrage
    </a>
  )

  return (
    <section className="relative w-full bg-black" style={{ minHeight: '100vh' }}>

      {/* ── Mobile: gestapelt ── */}
      <div
        className="flex flex-col md:hidden"
        style={{ padding: `120px ${PAD}px 80px`, gap: '8px' }}
      >
        <p style={{ ...headingStyle, margin: '0 0 24px' }}>
          Sichtbar machen,<br />was trägt.
        </p>
        <h1 style={h1Style}>Branding und Webdesign München –</h1>
        <p style={bodyCss}>
          für Unternehmen mit {italicSpan}die zu wichtig sind, um schlecht auszusehen.
        </p>
        {cta}
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block" style={{ position: 'relative', height: '100vh' }}>

        {/* Hauptinhalt — linksbündig, ab Spalte 2 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: `calc(8.33% + 29px)`,
          right: '30%',
        }}>
          <p style={headingStyle}>
            Sichtbar machen,<br />was trägt.
          </p>
          <h1 style={h1Style}>Branding und Webdesign München –</h1>
          <p style={{ ...bodyCss, margin: '0 0 20px' }}>
            für Unternehmen mit {italicSpan}die zu wichtig sind, um schlecht auszusehen.
          </p>
          {cta}
        </div>

      </div>

    </section>
  )
}
