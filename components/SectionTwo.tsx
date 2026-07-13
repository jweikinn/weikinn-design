'use client'

import { useState } from 'react'
import { bodyCss } from '@/lib/styles'

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(56px, 6.87vw, 99px)',
  lineHeight: 1.1,
  letterSpacing: '-0.0098em',
  color: '#d5d3e6',
  margin: 0,
}

const h1Style: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: 1.4,
  letterSpacing: '0.2px',
  color: '#d5d3e6',
  margin: 0,
}

const ctaStyle: React.CSSProperties = {
  display: 'inline-flex',
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

export function SectionTwo() {
  const [ctaHover, setCtaHover] = useState(false)

  const italicSpan = (
    <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, letterSpacing: '0.8px' }}>
      Sinn und Haltung,{' '}
    </span>
  )

  return (
    <section
      className="relative w-full bg-black flex items-center"
      style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px', minHeight: '100vh' }}
    >

      {/* ── Mobile: gestapelt ── */}
      <div className="flex flex-col md:hidden" style={{ gap: '48px', paddingTop: '60px' }}>
        <p style={headingStyle}>
          Sichtbar machen,<br />was trägt.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={h1Style}>Branding und Webdesign München –</h1>
          <p style={bodyCss}>
            für Unternehmen mit {italicSpan}die zu wichtig sind, um schlecht auszusehen.
          </p>
          <div style={{ marginTop: '8px' }}>
            <a
              href="#contact"
              style={{ ...ctaStyle, backgroundColor: ctaHover ? '#d5d3e6' : '#6759d7', color: ctaHover ? '#6759d7' : '#ffffff', transition: 'background-color 0.25s ease, color 0.25s ease' }}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
            >Projektanfrage</a>
          </div>
        </div>
      </div>

      {/* ── Desktop: zwei Spalten ── */}
      <div
        className="hidden md:flex items-start w-full"
        style={{ gap: '8px', transform: 'translateY(-25%)' }}
      >
        {/* Linke Spalte — startet an Spalte 2 */}
        <div style={{ width: '42%', flexShrink: 0, marginTop: '-40px', paddingLeft: 'calc(8.33% + 29px - 32px)' }}>
          <p style={headingStyle}>
            Sichtbar machen,<br />was trägt.
          </p>
        </div>

        {/* Rechte Spalte — Spalten 7–10, tiefer versetzt */}
        <div style={{ width: '38%', flexShrink: 0, display: 'flex', flexDirection: 'column', paddingTop: 'clamp(160px, 17vw, 250px)' }}>
          <h1 style={h1Style}>Branding und Webdesign München –</h1>
          <p style={bodyCss}>
            für Unternehmen mit {italicSpan}die zu wichtig sind, um schlecht auszusehen.
          </p>
          <div style={{ marginTop: '32px' }}>
            <a
              href="#contact"
              style={{ ...ctaStyle, backgroundColor: ctaHover ? '#d5d3e6' : '#6759d7', color: ctaHover ? '#6759d7' : '#ffffff', transition: 'background-color 0.25s ease, color 0.25s ease' }}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
            >Projektanfrage</a>
          </div>
        </div>
      </div>

    </section>
  )
}
