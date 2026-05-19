'use client'

import React, { useEffect, useRef } from 'react'

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const ARROW        = '/work/arrow.svg'
const IMG_PRAXIS   = '/work/praxis.png'
const IMG_SAAS     = '/work/saas.png'
const IMG_IMAC     = '/work/imac.png'
const IMG_OFFICE   = '/work/office.png'
const IMG_BROCHURE = '/work/brochure.png'

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

// Intro text: 20 words (indices 0–19)
// Desktop CTA text: 16 words (indices 20–35)
// Mobile CTA text: 16 words (indices 36–51)
const CTA_TEXT = 'Zusammen können wir die Zukunft bauen. Vereinbare einen Termin für ein Gespräch mit mir, um loszulegen.'

function Tags({ labels }: { labels: string[] }) {
  return (
    <div className="flex flex-wrap" style={{ gap: px(4, 8) }}>
      {labels.map((label) => (
        <span
          key={label}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '24px',
            padding: `${px(2, 4)} ${px(4, 8)}`,
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: px(8, 14),
            color: '#111',
            letterSpacing: '-0.04em',
            lineHeight: 'normal',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({
  title,
  tags,
  image,
  image2,
  aspectRatio,
  cropOffsetX,
}: {
  title: React.ReactNode
  tags: string[]
  image: string
  image2?: string
  aspectRatio: string
  cropOffsetX?: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: px(6, 10) }}>
      <div className="relative overflow-hidden w-full" style={{ aspectRatio }}>
        {cropOffsetX ? (
          <img
            alt=""
            className="absolute top-0 h-full max-w-none"
            style={{ width: '175.2%', left: cropOffsetX }}
            src={image}
          />
        ) : (
          <>
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
            {image2 && (
              <img alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" src={image2} />
            )}
          </>
        )}
        <div className="absolute left-0 bottom-0" style={{ padding: px(9, 16) }}>
          <Tags labels={tags} />
        </div>
      </div>

      <div className="flex items-center justify-between" style={{ gap: '12px' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: px(21, 36),
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#000',
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </p>
        <img
          alt=""
          src={ARROW}
          aria-hidden
          className="-rotate-90 shrink-0"
          style={{ width: px(18, 32), height: px(18, 32) }}
        />
      </div>
    </div>
  )
}

function CTABlock({
  desktop = false,
  startIdx,
  wordRefs,
}: {
  desktop?: boolean
  startIdx: number
  wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: 'clamp(15px, 1.4vw, 18px)',
          lineHeight: 1.3,
          letterSpacing: '0.02em',
          color: '#000',
          maxWidth: '465px',
        }}
      >
        {makeWords(CTA_TEXT, startIdx, wordRefs)}
      </p>
      <div className="flex flex-wrap" style={{ gap: desktop ? '10px' : '5px', marginTop: desktop ? '24px' : '14px' }}>
        {['Lass uns sprechen', 'Zeig mir erstmal mehr Arbeiten'].map((label) => (
          <button
            key={label}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontWeight: 900,
              fontSize: desktop ? '14px' : px(12, 14),
              letterSpacing: '-0.04em',
              padding: desktop ? '12px 16px' : `${px(7, 12)} ${px(9, 16)}`,
              borderRadius: desktop ? '24px' : '13px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function SectionFive() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const sidePad = px(16, 32)

  useEffect(() => {
    const handleScroll = () => {
      const readY = window.innerHeight * 0.65
      wordRefs.current.forEach((el) => {
        if (!el) return
        const top = el.getBoundingClientRect().top
        const t = Math.max(0, Math.min(1, (readY - top) / 55))
        el.style.opacity = (0.15 + 0.85 * t).toFixed(3)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="w-full bg-white text-black"
      style={{ padding: `${px(60, 80)} ${sidePad}` }}
    >
      {/* ── Header ── */}
      <div className="flex items-start justify-between" style={{ marginBottom: px(40, 61) }}>
        <div className="flex items-start" style={{ gap: px(5, 10) }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: px(60, 96),
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#000',
            }}
          >
            Selected<br />Work
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: px(8, 14),
              lineHeight: 1.1,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              paddingTop: px(4, 8),
            }}
          >
            004
          </span>
        </div>

        {/* Intro-Text — nur Desktop, animated */}
        <p
          className="hidden md:block"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            lineHeight: 1.3,
            letterSpacing: '0.02em',
            maxWidth: '320px',
            color: '#000',
          }}
        >
          {makeWords(
            'Es ist nie „nur eine Website". Jedes Detail zählt. Ich gestalte das Gesicht deiner Marke. Strategisch gedacht. Von Herzen gemacht.',
            0,
            wordRefs,
          )}
        </p>
      </div>

      {/* ── Desktop: zwei Spalten ── */}
      <div className="hidden md:flex items-end" style={{ gap: '24px' }}>
        <div className="flex-1 self-stretch flex flex-col justify-between">
          <ProjectCard
            title="Praxis für Psychotherapie"
            tags={['Webdesign', 'Branding', 'Key Visual']}
            image={IMG_PRAXIS}
            aspectRatio="676/744"
            cropOffsetX="-43.55%"
          />
          <ProjectCard
            title="Webdesign – SAAS"
            tags={['Social Media', 'Photography']}
            image={IMG_SAAS}
            aspectRatio="676/699"
          />
          <CTABlock desktop startIdx={20} wordRefs={wordRefs} />
        </div>

        <div
          className="flex-1 flex flex-col"
          style={{
            gap: 'clamp(60px, 8.13vw, 117px)',
            paddingTop: 'clamp(0px, 16.67vw, 240px)',
          }}
        >
          <ProjectCard
            title={`Erscheinungsbild\nund Office Dokumente`}
            tags={['Branding', 'Office Documents']}
            image={IMG_IMAC}
            image2={IMG_OFFICE}
            aspectRatio="676/699"
          />
          <ProjectCard
            title="Broschüre"
            tags={['Social Media', 'Photography']}
            image={IMG_BROCHURE}
            aspectRatio="676/744"
          />
        </div>
      </div>

      {/* ── Mobil: eine Spalte ── */}
      <div className="flex flex-col md:hidden" style={{ gap: px(32, 0) }}>
        <ProjectCard
          title="Praxis für Psychotherapie"
          tags={['Webdesign', 'Branding', 'Key Visual']}
          image={IMG_PRAXIS}
          aspectRatio="676/744"
          cropOffsetX="-43.55%"
        />
        <ProjectCard
          title="Webdesign – SAAS"
          tags={['Social Media', 'Photography']}
          image={IMG_SAAS}
          aspectRatio="676/699"
        />
        <ProjectCard
          title={`Erscheinungsbild\nund Office Dokumente`}
          tags={['Branding', 'Office Documents']}
          image={IMG_IMAC}
          image2={IMG_OFFICE}
          aspectRatio="676/699"
        />
        <ProjectCard
          title="Broschüre"
          tags={['Social Media', 'Photography']}
          image={IMG_BROCHURE}
          aspectRatio="676/744"
        />
        <CTABlock startIdx={36} wordRefs={wordRefs} />
      </div>
    </section>
  )
}
