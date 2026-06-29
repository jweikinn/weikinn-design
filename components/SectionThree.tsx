'use client'

import { useEffect, useRef } from 'react'

const imgPortrait = '/portrait.jpg'

export function SectionThree() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current
      const img     = imgRef.current
      if (!section || !img) return

      const rect = section.getBoundingClientRect()
      const vh   = window.innerHeight
      // t: 0 when section enters viewport, 1 when section has fully scrolled past
      const t = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
      img.style.transform = `scale(${1 + t * 0.08})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* "Haltung" — kleines Italic-Label oben links */}
      <p
        style={{
          position: 'absolute',
          top: '5%',
          left: '32px',
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '20px',
          lineHeight: '21px',
          letterSpacing: '0.8px',
          color: '#d5d3e6',
          margin: 0,
          zIndex: 1,
        }}
      >
        Haltung
      </p>

      {/* "Sinnvolle Gestaltung..." — Hauptheading */}
      <p
        style={{
          position: 'absolute',
          top: 'calc(5% + 28px)',
          left: '32px',
          right: '62%',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: 'clamp(24px, 2.43vw, 35px)',
          lineHeight: 1.1,
          letterSpacing: '0.35px',
          color: '#d5d3e6',
          margin: 0,
          zIndex: 1,
        }}
      >
        Sinnvolle Gestaltung,<br />doppelt gemeint.
      </p>

      {/* Portraitfoto — linke Spalte */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10.35%',
          right: '51.11%',
          bottom: '3%',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={imgPortrait}
          alt="Julia Weikinn"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            transformOrigin: 'center top',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Fließtext + CTA — rechte Spalte */}
      <div
        style={{
          position: 'absolute',
          top: '33%',
          left: '59.24%',
          right: '10.35%',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
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
          Meine Kunden und Kundinnen tun etwas, das wirklich gebraucht wird – ob im Bau, in der Therapie,
          im Recycling oder in der nachhaltigen Industrie. Sie verbindet nicht die Branche, sondern die Haltung.
          Ich begegne allen auf Augenhöhe und gestalte{' '}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            mit Herz und Verstand.{' '}
          </span>
          <strong style={{ fontWeight: 700 }}>
            Damit sie zeigen können, wer sie sind, was sie ausmacht und warum sie machen, was sie machen.
          </strong>
        </p>

        <a
          href="/about"
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
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
          Mehr zu mir
        </a>
      </div>
    </section>
  )
}
