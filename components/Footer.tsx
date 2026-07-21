'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef, useState } from 'react'

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const REF_FONT_SIZE  = 100
const PAD_LEFT  = 32   // matches WeikinnHeading
const PAD_RIGHT = 32   // matches WeikinnHeading
const LETTERS   = ['w', 'e', 'i', 'k', 'i', 'n', 'n']

function letterWeight(index: number, hovered: number | null): number {
  if (hovered === null) return 800
  const d = Math.abs(index - hovered)
  if (d === 0) return 100
  if (d === 1) return 300
  if (d === 2) return 600
  return 800
}

export function Footer() {
  const sidePad = px(16, 32)

  const containerRef       = useRef<HTMLDivElement>(null)
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const measureRef         = useRef<HTMLSpanElement>(null)
  const letterRefs         = useRef<(HTMLSpanElement | null)[]>([])

  const [wordmarkSize, setWordmarkSize]             = useState<number | null>(null)
  const [mobileWordmarkSize, setMobileWordmarkSize] = useState<number | null>(null)
  const [letterWidths, setLetterWidths]             = useState<number[]>([])
  const [hovered, setHovered]                       = useState<number | null>(null)
  const [kontaktHover, setKontaktHover]             = useState(false)

  // Reset letter widths whenever font size changes so we re-measure
  useLayoutEffect(() => {
    if (!wordmarkSize) return
    setLetterWidths([])
  }, [wordmarkSize])

  // Measure individual letter widths after reset
  useLayoutEffect(() => {
    if (!wordmarkSize || letterWidths.length > 0) return
    const widths = letterRefs.current.map(r => r?.getBoundingClientRect().width ?? 0)
    if (widths.every(w => w > 0)) setLetterWidths(widths)
  })

  useLayoutEffect(() => {
    const compute = () => {
      if (!measureRef.current) return
      const naturalW = measureRef.current.offsetWidth
      if (naturalW === 0) return

      // Desktop — identical math to WeikinnHeading (PAD_LEFT + PAD_RIGHT subtracted from full width)
      if (containerRef.current) {
        const cW = containerRef.current.offsetWidth
        setWordmarkSize(REF_FONT_SIZE * (Math.max(1, cW - PAD_LEFT - PAD_RIGHT) / naturalW))
      }

      // Mobile — fill padded width
      if (mobileContainerRef.current) {
        const mW   = mobileContainerRef.current.offsetWidth
        const padL = parseFloat(getComputedStyle(mobileContainerRef.current).paddingLeft)  || 0
        const padR = parseFloat(getComputedStyle(mobileContainerRef.current).paddingRight) || 0
        setMobileWordmarkSize(REF_FONT_SIZE * (Math.max(1, mW - padL - padR) / naturalW))
      }
    }
    compute()
    document.fonts?.ready.then(compute).catch(() => {})
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return (
    <footer className="w-full text-white" style={{ backgroundColor: '#6759D7', paddingTop: px(40, 48) }}>

      {/* Measurement span — same weight/spacing as WeikinnHeading */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'fixed', top: '-9999px', left: '-9999px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: `${REF_FONT_SIZE}px`,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        weikinn
      </span>

      {/* ── Mobile layout ── */}
      <div ref={mobileContainerRef} className="md:hidden" style={{ paddingLeft: sidePad, paddingRight: sidePad }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: px(18, 24), lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: px(16, 24) }}>
          Hast du ein <span style={{ fontWeight: 800 }}>Projekt</span> im Kopf?{'\n'}
          Schreib mir eine Nachricht an{' '}
          <a href="mailto:julia@weikinn.design" style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: 'inherit' }}>
            julia@weikinn.design
          </a>
        </p>
        <a
          href="mailto:julia@weikinn.design"
          style={{
            fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '14px', letterSpacing: '-0.02em',
            borderRadius: '24px', padding: '10px 20px',
            backgroundColor: kontaktHover ? '#fff' : 'transparent',
            color: kontaktHover ? '#6759d7' : '#fff',
            border: '1.5px solid #fff',
            transition: 'background-color 0.25s ease, color 0.25s ease',
            textDecoration: 'none',
            display: 'inline-block',
          }}
          onMouseEnter={() => setKontaktHover(true)}
          onMouseLeave={() => setKontaktHover(false)}
        >
          Kontakt
        </a>
        <a
          href="https://www.linkedin.com/in/julia-weikinn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '24px', display: 'block', color: 'inherit', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.4)', margin: `${px(20, 32)} 0` }} />
        <div className="text-center" style={{ marginBottom: '16px' }}>
          <Link
            href="/impressum"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, color: 'inherit', textDecoration: 'none' }}
          >
            Impressum
          </Link>
          <span style={{ opacity: 0.7, fontSize: '12px' }}>{' / '}</span>
          <Link
            href="/datenschutz"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'inherit', textDecoration: 'none', opacity: 0.7 }}
          >
            Datenschutz
          </Link>
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: mobileWordmarkSize ? `${mobileWordmarkSize.toFixed(2)}px` : px(52, 100),
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          visibility: mobileWordmarkSize ? 'visible' : 'hidden',
        }}>
          weikinn
        </p>
      </div>

      {/* ── Desktop layout ── */}
      <div
        ref={containerRef}
        className="hidden md:flex md:flex-col"
        style={{ paddingLeft: sidePad, paddingRight: sidePad }}
      >
        {/* Row 1: CTA (left) + Social (right) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: px(20, 32) }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: px(18, 24), lineHeight: 1.4, letterSpacing: '-0.02em', maxWidth: '520px', marginBottom: px(16, 24) }}>
              Hast du ein <span style={{ fontWeight: 800 }}>Projekt</span> im Kopf?{'\n'}
              Schreib mir eine Nachricht an{' '}
              <a href="mailto:julia@weikinn.design" style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: 'inherit' }}>
                julia@weikinn.design
              </a>
            </p>
            <a
              href="mailto:julia@weikinn.design"
              style={{
                fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '14px', letterSpacing: '-0.02em',
                borderRadius: '24px', padding: '10px 20px',
                backgroundColor: kontaktHover ? '#fff' : 'transparent',
                color: kontaktHover ? '#6759d7' : '#fff',
                border: '1.5px solid #fff',
                transition: 'background-color 0.25s ease, color 0.25s ease',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={() => setKontaktHover(true)}
              onMouseLeave={() => setKontaktHover(false)}
            >
              Kontakt
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/julia-weikinn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '18px', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.4, textAlign: 'right', color: 'inherit', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </div>

        {/* Row 2: Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.4)', marginBottom: px(16, 24) }} />

        {/* Row 3: Impressum / Datenschutz — right-aligned */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', marginBottom: px(8, 16) }}>
          <Link
            href="/impressum"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'inherit', textDecoration: 'none', opacity: 0.7 }}
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'inherit', textDecoration: 'none', opacity: 0.7 }}
          >
            Datenschutz
          </Link>
        </div>

        {/* Row 4: interactive weikinn — same logic as WeikinnHeading */}
        <h2
          className="whitespace-nowrap select-none"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: wordmarkSize ? `${wordmarkSize.toFixed(2)}px` : '0px',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: '#d5d3e6',
            visibility: wordmarkSize ? 'visible' : 'hidden',
            margin: 0,
          }}
        >
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              ref={el => { letterRefs.current[i] = el }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontWeight: letterWeight(i, hovered),
                transition: 'font-weight 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                display: 'inline-block',
                width: letterWidths[i] ? `${letterWidths[i]}px` : 'auto',
                textAlign: 'center',
                cursor: 'default',
              }}
            >
              {letter}
            </span>
          ))}
        </h2>
      </div>

    </footer>
  )
}
