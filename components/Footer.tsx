'use client'

import { useLayoutEffect, useRef, useState } from 'react'

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const REF_FONT_SIZE = 100

export function Footer() {
  const sidePad = px(16, 32)

  const containerRef       = useRef<HTMLDivElement>(null)
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const measureRef         = useRef<HTMLSpanElement>(null)
  const impressumRef       = useRef<HTMLDivElement>(null)
  const [wordmarkSize, setWordmarkSize]             = useState<number | null>(null)
  const [mobileWordmarkSize, setMobileWordmarkSize] = useState<number | null>(null)

  useLayoutEffect(() => {
    const compute = () => {
      if (!measureRef.current) return
      const naturalW = measureRef.current.offsetWidth
      if (naturalW === 0) return

      // Desktop
      if (containerRef.current && impressumRef.current) {
        const containerW = containerRef.current.offsetWidth
        const impressumW = impressumRef.current.offsetWidth
        const padLeft    = parseFloat(getComputedStyle(containerRef.current).paddingLeft) || 0
        const available  = Math.max(1, containerW - padLeft - impressumW - 24)
        setWordmarkSize(REF_FONT_SIZE * (available / naturalW))
      }

      // Mobile — fills full padded width, no impressum column
      if (mobileContainerRef.current) {
        const mW       = mobileContainerRef.current.offsetWidth
        const padLeft  = parseFloat(getComputedStyle(mobileContainerRef.current).paddingLeft)  || 0
        const padRight = parseFloat(getComputedStyle(mobileContainerRef.current).paddingRight) || 0
        const available = Math.max(1, mW - padLeft - padRight)
        setMobileWordmarkSize(REF_FONT_SIZE * (available / naturalW))
      }
    }
    compute()
    document.fonts?.ready.then(compute).catch(() => {})
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return (
    <footer className="w-full text-white" style={{ backgroundColor: '#1626FF', paddingTop: px(40, 48), position: 'sticky', bottom: 0, zIndex: 0 }}>

      {/* Measurement span */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: `${REF_FONT_SIZE}px`,
          letterSpacing: '-0.03em',
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        Weikinn.Design
      </span>

      {/* ── Mobile layout ── */}
      <div ref={mobileContainerRef} className="md:hidden" style={{ paddingLeft: sidePad, paddingRight: sidePad, paddingBottom: px(24, 32) }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: px(18, 24), lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: px(16, 24) }}>
          Hast du ein <span style={{ fontWeight: 900 }}>Projekt</span> im Kopf?{'\n'}
          Schreib mir eine Nachricht an{' '}
          <a href="mailto:julia@weikinn.design" style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: 'inherit' }}>
            julia@weikinn.design
          </a>
        </p>
        <button style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '14px', letterSpacing: '-0.04em', color: '#fff', backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: '24px', padding: '10px 20px', cursor: 'pointer' }}>
          Kontakt
        </button>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '24px' }}>
          Instagram / Linkedin
        </p>
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.4)', margin: `${px(20, 32)} 0` }} />
        <p className="text-center" style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0.7 }}>
          Impressum / Datenschutz
        </p>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: mobileWordmarkSize ? `${mobileWordmarkSize.toFixed(2)}px` : px(52, 100), lineHeight: 0.88, letterSpacing: '-0.03em', whiteSpace: 'nowrap' }}>
          Weikinn.Design
        </p>
      </div>

      {/* ── Desktop layout ──────────────────────────────────────────────────
          2-column grid: left = 1fr, right = auto.
          paddingLeft on grid creates left margin.
          paddingRight lives on the right-column divs → creates right margin.
          Both right-column divs are in the same grid column → always aligned.
      ────────────────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '1fr auto',
          gridTemplateRows: 'auto auto auto',
          paddingLeft: sidePad,
          paddingBottom: px(24, 32),
          // No paddingRight — handled per right-column div below
        }}
      >
        {/* ── Row 1 left: CTA ── */}
        <div style={{ marginBottom: px(20, 32) }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: px(18, 24), lineHeight: 1.3, letterSpacing: '-0.02em', maxWidth: '520px', marginBottom: px(16, 24) }}>
            Hast du ein <span style={{ fontWeight: 900 }}>Projekt</span> im Kopf?{'\n'}
            Schreib mir eine Nachricht an{' '}
            <a href="mailto:julia@weikinn.design" style={{ textDecoration: 'underline', textUnderlineOffset: '3px', color: 'inherit' }}>
              julia@weikinn.design
            </a>
          </p>
          <button style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '14px', letterSpacing: '-0.04em', color: '#fff', backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: '24px', padding: '10px 20px', cursor: 'pointer', display: 'inline-block' }}>
            Kontakt
          </button>
        </div>

        {/* ── Row 1 right: Instagram / Linkedin ── */}
        <div
          className="flex flex-col items-end"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '18px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
            marginBottom: px(20, 32),
            paddingRight: sidePad, // ← creates the right blue margin
          }}
        >
          <span>Instagram</span>
          <span>Linkedin</span>
        </div>

        {/* ── Row 2: Divider (full span) ── */}
        <div style={{ gridColumn: '1 / -1', height: '1px', backgroundColor: 'rgba(255,255,255,0.4)', marginBottom: px(32, 120), marginRight: sidePad }} />

        {/* ── Row 3 left: Weikinn.Design wordmark ── */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: wordmarkSize ? `${wordmarkSize.toFixed(2)}px` : px(52, 120),
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap',
            alignSelf: 'end',
          }}
        >
          Weikinn.Design
        </p>

        {/* ── Row 3 right: Impressum / Datenschutz ──
            paddingRight: sidePad → same right margin as Instagram above.
            paddingBottom: px(4, 22) → lifts text to the "n" baseline of the wordmark,
            above the "g" descender. Same approach as original design.
        ── */}
        <div
          ref={impressumRef}
          className="flex flex-col items-end"
          style={{
            gap: '6px',
            alignSelf: 'end',
            paddingRight: sidePad,   // ← matches right margin of Instagram row
            paddingBottom: px(3, 17), // ← aligns with "n" baseline of Weikinn.Design
          }}
        >
          {['Impressum', 'Datenschutz'].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.7,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}
