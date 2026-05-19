'use client'

import { useEffect, useRef } from 'react'

const LOGOS: { src: string; alt: string; w: number; h: number }[] = [
  { src: '/logos/swim.svg', alt: 'SWIM', w: 32, h: 32 },
  { src: '/logos/lug.svg', alt: 'LUG', w: 91, h: 30 },
  { src: '/logos/sh.svg', alt: 'S/H', w: 102, h: 32 },
  { src: '/logos/demir.svg', alt: 'DEMIR', w: 49, h: 32 },
  { src: '/logos/yamaha.svg', alt: 'YAMAHA', w: 137, h: 30 },
  { src: '/logos/brand6.svg', alt: 'Kolibri', w: 85, h: 32 },
  { src: '/logos/brand7.svg', alt: 'NanoMedNL', w: 119, h: 30 },
  { src: '/logos/brand8.svg', alt: 'PNO Innovation', w: 215, h: 30 },
  { src: '/logos/psycho-text.svg', alt: 'Gruner + Jahr', w: 34, h: 20 },
  { src: '/logos/psycho-mark.svg', alt: 'Skoda', w: 122, h: 16 },
]

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex items-center shrink-0 gap-[64px] md:gap-[96px] pr-[64px] md:pr-[96px]"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGOS.map((logo, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${logo.src}-${i}`}
          src={logo.src}
          alt={ariaHidden ? '' : logo.alt}
          width={logo.w}
          height={logo.h}
          style={{ width: `${logo.w}px`, height: `${logo.h}px` }}
          className="block shrink-0"
        />
      ))}
    </div>
  )
}

function makeWords(
  text: string,
  startIdx: number,
  refs: React.MutableRefObject<(HTMLSpanElement | null)[]>,
) {
  return text.trim().split(/\s+/).map((word, i) => (
    <span
      key={startIdx + i}
      ref={el => { refs.current[startIdx + i] = el }}
      style={{ opacity: 0.15 }}
    >
      {word}{' '}
    </span>
  ))
}

export function SectionThree() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      // ── Word reveal ─────────────────────────────────────────────────────
      const readY = window.innerHeight * 0.65
      wordRefs.current.forEach((el) => {
        if (!el) return
        const top = el.getBoundingClientRect().top
        const t   = Math.max(0, Math.min(1, (readY - top) / 55))
        el.style.opacity = (0.15 + 0.85 * t).toFixed(3)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full bg-white text-black overflow-hidden">
      {/* ─── Text-Block ─── */}
      <div
        className="grid gap-y-[40px] md:gap-y-0 md:grid-cols-12 px-[16px] md:px-0"
        style={{ paddingTop: 'clamp(72px, 9vw, 134px)' }}
      >
        {/* Links: blauer Statement-Text — nicht animiert, Farbe bleibt immer blau */}
        <div className="md:col-start-2 md:col-end-6 md:pl-[29px]">
          <p className="type-bu-blau" style={{ maxWidth: '292px' }}>
            Branding, Webdesign und Creative Production.
            <br />
            Gutes Design, das funktioniert.
          </p>
        </div>

        {/* Rechts: Große Copy + Detail-Copy — animiert, erbt Farbe von <section> */}
        <div className="md:col-start-6 md:col-end-12 md:pl-[20px]">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(23px, 3vw, 40px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: '672px',
            }}
          >
            <span className="hidden md:inline">{'       '}</span>
            {makeWords('Strategisch gedacht. Von Herzen gemacht. Gutes Brand-', 0, wordRefs)}
            <br className="hidden md:inline" />
            <span className="md:hidden">{' '}</span>
            {makeWords('und Webdesign, das deine Marke auf ein neues Niveau hebt –', 7, wordRefs)}
            <br className="hidden md:inline" />
            <span className="md:hidden">{' '}</span>
            {makeWords('für Unternehmen, die zu wichtig sind, um schlecht auszusehen.', 18, wordRefs)}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.3,
              letterSpacing: '0.02em',
              maxWidth: '320px',
              marginTop: 'clamp(24px, 2vw, 40px)',
            }}
          >
            {makeWords(
              'Ich entwickle Markenidentitäten, kreative Websites und visuelle Erzählungen, die dein volles Potenzial zur Geltung bringen. Mit Sitz in München arbeite ich mit Kunden weltweit zusammen.',
              27,
              wordRefs,
            )}
          </p>
        </div>
      </div>

      {/* ─── Logo-Marquee ─── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          marginTop: 'clamp(96px, 10vw, 160px)',
          paddingBottom: 'clamp(48px, 5vw, 80px)',
        }}
      >
        <div className="flex w-max marquee-left">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-left {
          animation: marquee-left 60s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-left { animation: none; }
        }
      `}</style>
    </section>
  )
}
