'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { bodyCss } from '@/lib/styles'

const REF_SIZE = 100

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
  const sectionRef = useRef<HTMLElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [headingSize, setHeadingSize] = useState(0)

  useLayoutEffect(() => {
    const compute = () => {
      if (!sectionRef.current || !measureRef.current) return
      const sectionW = sectionRef.current.offsetWidth
      const contentW = sectionW - 64 // 32px padding each side
      // Left column is 42% of contentW; text starts at col-2 offset
      const colW = contentW * 0.42
      const col2Offset = contentW * 0.0833 + 29 - 32
      const textW = colW - col2Offset
      const refW = measureRef.current.offsetWidth
      if (textW <= 0 || refW <= 0) return
      setHeadingSize(REF_SIZE * textW / refW)
    }
    compute()
    document.fonts?.ready.then(compute).catch(() => {})
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  const ready = headingSize > 0

  // Right block top = bottom of "was trägt." + small gap
  // Heading starts at -40px (marginTop on left col), 2 lines × headingSize × lineHeight 1.1
  const rightPaddingTop = ready ? Math.max(headingSize * 2.2 - 40 + headingSize * 0.4, 0) : 0

  const headingStyle: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: ready ? `${headingSize.toFixed(2)}px` : '0px',
    lineHeight: 1.1,
    letterSpacing: '-0.0098em',
    color: '#d5d3e6',
    margin: 0,
    visibility: ready ? 'visible' : 'hidden',
  }

  const italicSpan = (
    <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, letterSpacing: '0.8px' }}>
      Sinn und Haltung,{' '}
    </span>
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black flex items-center"
      style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px', minHeight: '100vh' }}
    >
      {/* Hidden span to measure "Sichtbar machen," at REF_SIZE */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'fixed', top: '-9999px', left: '-9999px',
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
          fontSize: `${REF_SIZE}px`, letterSpacing: '-0.0098em',
          whiteSpace: 'nowrap', opacity: 0, pointerEvents: 'none',
        }}
      >
        Sichtbar machen,
      </span>

      {/* ── Mobile: gestapelt ── */}
      <div className="flex flex-col md:hidden" style={{ gap: '48px', paddingTop: '60px' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(36px, 10vw, 56px)',
          lineHeight: 1.1,
          letterSpacing: '-0.0098em',
          color: '#d5d3e6',
          margin: 0,
        }}>
          Sichtbar machen,<br />was trägt.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={h1Style}>Branding und Webdesign München –</h1>
          <p style={bodyCss}>
            für Unternehmen mit {italicSpan}die zu wichtig sind, um schlecht auszusehen.
          </p>
          <div style={{ marginTop: '8px' }}>
            <a
              href="/kontakt"
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

        {/* Rechte Spalte — Spalten 7–10 */}
        <div style={{ width: '38%', flexShrink: 0, display: 'flex', flexDirection: 'column', paddingTop: ready ? `${rightPaddingTop}px` : '0' }}>
          <h1 style={h1Style}>Branding und Webdesign München –</h1>
          <p style={bodyCss}>
            für Unternehmen mit {italicSpan}die zu wichtig sind, um schlecht auszusehen.
          </p>
          <div style={{ marginTop: '32px' }}>
            <a
              href="/kontakt"
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
