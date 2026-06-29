'use client'

import { useLayoutEffect, useRef, useState } from 'react'

const LETTERS = ['w', 'e', 'i', 'k', 'i', 'n', 'n']
const REF_FONT_SIZE = 100
const PAD_LEFT  = 32
const PAD_RIGHT = 64
const LETTER_SPACING = '-0.02em'
// ↓ Blend-Effekt: 'difference' | 'normal' zum Abschalten
const BLEND_MODE: React.CSSProperties['mixBlendMode'] = 'difference'
const BLEND_COLOR = '#d5d3e6'

function letterWeight(index: number, hovered: number | null): number {
  if (hovered === null) return 800
  const d = Math.abs(index - hovered)
  if (d === 0) return 100
  if (d === 1) return 300
  if (d === 2) return 600
  return 800
}

export function WeikinnHeading() {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef   = useRef<HTMLSpanElement>(null)
  const letterRefs   = useRef<(HTMLSpanElement | null)[]>([])

  const [fontSizePx, setFontSizePx]     = useState(0)
  const [letterWidths, setLetterWidths] = useState<number[]>([])
  const [hovered, setHovered]           = useState<number | null>(null)

  useLayoutEffect(() => {
    if (!fontSizePx) return
    setLetterWidths([])
  }, [fontSizePx])

  useLayoutEffect(() => {
    if (!fontSizePx || letterWidths.length > 0) return
    const widths = letterRefs.current.map(r => r?.getBoundingClientRect().width ?? 0)
    if (widths.every(w => w > 0)) setLetterWidths(widths)
  })

  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current || !measureRef.current) return
      const sw = containerRef.current.offsetWidth
      const nw = measureRef.current.offsetWidth
      if (nw === 0 || sw === 0) return
      setFontSizePx(REF_FONT_SIZE * ((sw - PAD_LEFT - PAD_RIGHT) / nw))
    }
    measure()
    document.fonts?.ready.then(measure).catch(() => {})
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const sharedStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: fontSizePx ? `${fontSizePx}px` : '0px',
    lineHeight: 0.85,
    letterSpacing: LETTER_SPACING,
    color: BLEND_COLOR,
    visibility: fontSizePx ? 'visible' : 'hidden',
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: '5%' }}
    >
      {/* Mess-Span */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: `${REF_FONT_SIZE}px`,
          letterSpacing: LETTER_SPACING,
        }}
      >
        weikinn
      </span>

      {/* Desktop: interaktive Buchstaben */}
      <div
        className="hidden md:flex"
        style={{ pointerEvents: 'auto' }}
      >
        <h1
          className="whitespace-nowrap select-none"
          style={{ ...sharedStyle, marginLeft: `${PAD_LEFT}px` }}
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
        </h1>
      </div>

      {/* Mobile: statisch */}
      <div
        className="md:hidden"
        style={{
          paddingLeft: `${PAD_LEFT}px`,
          paddingRight: `${PAD_RIGHT}px`,
          pointerEvents: 'auto',
        }}
      >
        <h1
          className="w-full whitespace-nowrap select-none"
          style={{ ...sharedStyle, fontWeight: 800 }}
        >
          weikinn
        </h1>
      </div>
    </div>
  )
}
