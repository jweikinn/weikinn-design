'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const REF_FONT_SIZE = 100
const LOGO_PAD_DESKTOP = 48

export function HeroSection() {
  const sectionRef    = useRef<HTMLElement>(null)
  const measureRef    = useRef<HTMLSpanElement>(null)
  const [fontSizePx, setFontSizePx]       = useState(0)
  const [translateDist, setTranslateDist] = useState(0)
  const [progress, setProgress]           = useState(0)

  // Schriftgröße messen sobald Fonts geladen
  useLayoutEffect(() => {
    const measure = () => {
      if (!sectionRef.current || !measureRef.current) return
      const sectionWidth = sectionRef.current.offsetWidth
      const naturalWidth = measureRef.current.offsetWidth
      if (naturalWidth === 0 || sectionWidth === 0) return
      const contentWidth = Math.max(1, sectionWidth - 2 * LOGO_PAD_DESKTOP)
      setFontSizePx(REF_FONT_SIZE * (contentWidth / naturalWidth))
      setTranslateDist(contentWidth)
    }
    measure()
    document.fonts?.ready.then(measure).catch(() => {})
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Scroll treibt die Animation — Seite scrollt frei, kein Sticky
  useEffect(() => {
    const handleScroll = () => setProgress(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parallax: Text bewegt sich 2.0px pro 1px Scroll, maximal bis translateDist
  const translateX = -Math.min(progress * 2.0, translateDist)

  const blueTextBottomCss = fontSizePx
    ? `calc(5% + ${(0.74 * fontSizePx).toFixed(2)}px)`
    : undefined

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden isolate"
      style={{ height: '100vh' }}
    >
      {/* Mess-Span (versteckt) */}
      <span
        ref={measureRef}
        aria-hidden
        className="absolute -z-10 opacity-0 pointer-events-none whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: `${REF_FONT_SIZE}px`,
          letterSpacing: '-0.03em',
        }}
      >
        Weikinn&nbsp;
      </span>

      {/* Hintergrund-GIF */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/background.gif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dezente Abdunklung für Overlay-Blend */}
      <div
        className="absolute inset-0 z-[1] bg-black pointer-events-none"
        style={{ mixBlendMode: 'multiply', opacity: 0.05 }}
      />

      {/* Desktop: Watermark — bewegt sich automatisch nach links */}
      <div className="hidden md:flex absolute inset-0 items-end pb-[5%] pointer-events-none z-10">
        <h1
          className="whitespace-nowrap will-change-transform"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: fontSizePx ? `${fontSizePx}px` : '0px',
            lineHeight: 0.8,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            mixBlendMode: 'overlay',
            marginLeft: `${LOGO_PAD_DESKTOP}px`,
            transform: `translate3d(${translateX}px, 0, 0)`,
            visibility: fontSizePx ? 'visible' : 'hidden',
          }}
        >
          Weikinn&nbsp;Design
        </h1>
      </div>

      {/* Desktop: Blauer Claim */}
      <p
        className="hidden md:block absolute z-20 pointer-events-none type-bu-blau"
        style={{
          left: '75.55%',
          bottom: blueTextBottomCss,
          width: '15.3%',
          visibility: fontSizePx ? 'visible' : 'hidden',
        }}
      >
        Brand &amp; Web<br />Design Spezialistin
      </p>

      {/* Mobile */}
      <div className="md:hidden absolute inset-0 z-10">
        <p
          className="absolute type-bu-blau pointer-events-none"
          style={{ left: '32px', top: '70px', width: '213px' }}
        >
          Brand &amp; Web<br />Design Spezialistin
        </p>
        <h1
          className="absolute capitalize whitespace-pre-line"
          style={{
            left: '32px',
            right: '32px',
            bottom: '12%',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'min(98px, 24vw)',
            lineHeight: 0.8,
            letterSpacing: '-0.01em',
            color: '#ffffff',
            mixBlendMode: 'overlay',
          }}
        >
          {'Weikinn\nDesign'}
        </h1>
        <a
          href="#contact"
          className="absolute inline-flex items-center justify-center bg-white text-black rounded-[24px] pointer-events-auto"
          style={{
            left: '32px',
            bottom: '24px',
            padding: '12px 16px',
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  )
}
