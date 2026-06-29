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
  const [wordmarkSize, setWordmarkSize]             = useState<number | null>(null)
  const [mobileWordmarkSize, setMobileWordmarkSize] = useState<number | null>(null)

  useLayoutEffect(() => {
    const compute = () => {
      if (!measureRef.current) return
      const naturalW = measureRef.current.offsetWidth
      if (naturalW === 0) return

      // Desktop — fills full padded width
      if (containerRef.current) {
        const cW      = containerRef.current.offsetWidth
        const padLeft = parseFloat(getComputedStyle(containerRef.current).paddingLeft)  || 0
        const padRight= parseFloat(getComputedStyle(containerRef.current).paddingRight) || 0
        setWordmarkSize(REF_FONT_SIZE * (Math.max(1, cW - padLeft - padRight) / naturalW))
      }

      // Mobile — fills full padded width
      if (mobileContainerRef.current) {
        const mW      = mobileContainerRef.current.offsetWidth
        const padLeft = parseFloat(getComputedStyle(mobileContainerRef.current).paddingLeft)  || 0
        const padRight= parseFloat(getComputedStyle(mobileContainerRef.current).paddingRight) || 0
        setMobileWordmarkSize(REF_FONT_SIZE * (Math.max(1, mW - padLeft - padRight) / naturalW))
      }
    }
    compute()
    document.fonts?.ready.then(compute).catch(() => {})
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return (
    <footer className="w-full text-white" style={{ backgroundColor: '#6759D7', paddingTop: px(40, 48), position: 'sticky', bottom: 0, zIndex: 0 }}>

      {/* Measurement span */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
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
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: mobileWordmarkSize ? `${mobileWordmarkSize.toFixed(2)}px` : px(52, 100),
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}>
          weikinn
        </p>
      </div>

      {/* ── Desktop layout ── */}
      <div
        ref={containerRef}
        className="hidden md:block"
        style={{ paddingLeft: sidePad, paddingRight: sidePad }}
      >
        {/* Row 1: CTA (left) + Social (right) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: px(20, 32) }}>
          <div>
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
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '18px', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.4, textAlign: 'right' }}>
            <div>Instagram</div>
            <div>Linkedin</div>
          </div>
        </div>

        {/* Row 2: Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.4)', marginBottom: px(16, 24) }} />

        {/* Row 3: Impressum / Datenschutz */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', marginBottom: px(8, 16) }}>
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

        {/* Row 4: weikinn wordmark — full width */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: wordmarkSize ? `${wordmarkSize.toFixed(2)}px` : px(52, 120),
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          weikinn
        </p>
      </div>

    </footer>
  )
}
