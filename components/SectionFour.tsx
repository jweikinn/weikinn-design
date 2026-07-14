'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const ARROW         = '/work/arrow.svg'
const IMG_PRAXIS    = '/work/praxis.png'
const IMG_SAAS      = '/work/saas.png'
const IMG_IMAC      = '/work/imac.png'
const IMG_OFFICE    = '/work/office.png'
const IMG_BROCHURE  = '/work/brochure.png'
const IMG_SAFETY    = '/Safety-you/Kampagne-Safety-you-weikinn-Mitarbeitersicherheit_01.jpg'
const IMG_RECYCLING = '/work/Recycling/editorial-recycling-Technik-Brosch%C3%BCre-weikinn6.jpg'
const IMG_HOLDING   = '/work/Holding/editorial-holding-Nachhaltigkeitsbericht-Code-of-conduct-weikinn.jpg'

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
  href,
}: {
  title: React.ReactNode
  tags: string[]
  image: string
  image2?: string
  aspectRatio: string
  cropOffsetX?: string
  href?: string
}) {
  const Wrapper = href
    ? ({ children }: { children: React.ReactNode }) => (
        <Link href={href} style={{ display: 'flex', flexDirection: 'column', gap: px(6, 10), textDecoration: 'none' }}>{children}</Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: px(6, 10) }}>{children}</div>
      )
  return (
    <Wrapper>
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
            <Image alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={image} />
            {image2 && (
              <Image alt="" aria-hidden fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={image2} />
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
            color: '#d5d3e6',
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </p>
        <Image
          alt=""
          src={ARROW}
          aria-hidden
          width={32}
          height={32}
          className="-rotate-90 shrink-0"
          style={{ width: px(18, 32), height: px(18, 32), filter: 'invert(1)' }}
        />
      </div>
    </Wrapper>
  )
}

const slideUp: React.CSSProperties = {
  opacity: 0,
  transform: 'translateY(48px)',
  transition: 'opacity 0.75s ease, transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
}

const ctaButtons = ['mehr Arbeiten']

export function SectionFour() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const sidePad = px(16, 32)
  const [btnHover, setBtnHover] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )
    cardRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="w-full bg-black"
      style={{ padding: `${px(60, 80)} ${sidePad}` }}
    >
      {/* ── Header ── */}
      <div style={{ marginBottom: px(40, 61) }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '21px',
            letterSpacing: '0.8px',
            color: '#d5d3e6',
            margin: 0,
          }}
        >
          Arbeiten
        </p>
      </div>

      {/* ── Desktop: zwei Spalten ── */}
      <div className="hidden md:flex items-start" style={{ gap: '24px' }}>

        {/* Linke Spalte */}
        <div className="flex-1 flex flex-col" style={{ gap: 'clamp(60px, 8.13vw, 117px)' }}>
          <div ref={el => { cardRefs.current[0] = el }} style={slideUp}>
            <ProjectCard
              title="Praxis für Psychotherapie"
              tags={['Webdesign', 'Branding', 'Key Visual']}
              image={IMG_PRAXIS}
              aspectRatio="676/744"
              cropOffsetX="-43.55%"
              href="/work/praxis-psychotherapie"
            />
          </div>
          <div ref={el => { cardRefs.current[1] = el }} style={slideUp}>
            <ProjectCard
              title="SaaS-Unternehmen"
              tags={['Webdesign', 'Erscheinungsbild', 'Key-Visual']}
              image={IMG_SAAS}
              aspectRatio="676/699"
              href="/work/saas-unternehmen"
            />
          </div>
          <div ref={el => { cardRefs.current[2] = el }} style={slideUp}>
            <ProjectCard
              title={"Mitarbeiter­kampagne\nSafety you."}
              tags={['Kampagne', 'Key Visual', 'Illustration']}
              image={IMG_SAFETY}
              aspectRatio="676/744"
              href="/work/safety-you"
            />
          </div>
          <div ref={el => { cardRefs.current[10] = el }} style={slideUp}>
            <ProjectCard
              title="Recycling"
              tags={['Branding', 'Brand Guidelines', 'Editorial Design']}
              image={IMG_RECYCLING}
              aspectRatio="676/699"
              href="/work/recycling"
            />
          </div>
          {/* mehr Arbeiten — temporär ausgeblendet */}
        </div>

        {/* Rechte Spalte — versetzt nach unten */}
        <div
          className="flex-1 flex flex-col"
          style={{
            gap: 'clamp(60px, 8.13vw, 117px)',
            paddingTop: 'clamp(0px, 16.67vw, 240px)',
          }}
        >
          <div ref={el => { cardRefs.current[3] = el }} style={slideUp}>
            <ProjectCard
              title="Forschung"
              tags={['Branding', 'Office Documents']}
              image={IMG_IMAC}
              image2={IMG_OFFICE}
              aspectRatio="676/699"
              href="/work/forschung"
            />
          </div>
          <div ref={el => { cardRefs.current[4] = el }} style={slideUp}>
            <ProjectCard
              title="Stiftung"
              tags={['Broschüre', 'Editorial Design']}
              href="/work/stiftung"
              image={IMG_BROCHURE}
              aspectRatio="676/744"
            />
          </div>
          <div ref={el => { cardRefs.current[11] = el }} style={slideUp}>
            <ProjectCard
              title="Holding"
              tags={['Editorial Design', 'Corporate Publishing']}
              image={IMG_HOLDING}
              aspectRatio="676/699"
              href="/work/holding"
            />
          </div>
        </div>
      </div>

      {/* ── Mobil: eine Spalte ── */}
      <div className="flex flex-col md:hidden" style={{ gap: px(32, 0) }}>
        <div ref={el => { cardRefs.current[5] = el }} style={slideUp}>
          <ProjectCard
            title="Praxis für Psychotherapie"
            tags={['Webdesign', 'Branding', 'Key Visual']}
            image={IMG_PRAXIS}
            aspectRatio="676/744"
            cropOffsetX="-43.55%"
            href="/work/praxis-psychotherapie"
          />
        </div>
        <div ref={el => { cardRefs.current[6] = el }} style={slideUp}>
          <ProjectCard
            title="SaaS-Unternehmen"
            tags={['Webdesign', 'Erscheinungsbild', 'Key-Visual']}
            image={IMG_SAAS}
            aspectRatio="676/699"
            href="/work/saas-unternehmen"
          />
        </div>
        <div ref={el => { cardRefs.current[7] = el }} style={slideUp}>
          <ProjectCard
            title="Forschung"
            tags={['Branding', 'Office Documents']}
            image={IMG_IMAC}
            image2={IMG_OFFICE}
            aspectRatio="676/699"
            href="/work/forschung"
          />
        </div>
        <div ref={el => { cardRefs.current[8] = el }} style={slideUp}>
          <ProjectCard
            title="Stiftung"
            tags={['Broschüre', 'Editorial Design']}
            image={IMG_BROCHURE}
            aspectRatio="676/744"
            href="/work/stiftung"
          />
        </div>
        <div ref={el => { cardRefs.current[9] = el }} style={slideUp}>
          <ProjectCard
            title={"Mitarbeiter­kampagne\nSafety you."}
            tags={['Kampagne', 'Key Visual', 'Illustration']}
            image={IMG_SAFETY}
            aspectRatio="676/744"
            href="/work/safety-you"
          />
        </div>
        <div ref={el => { cardRefs.current[12] = el }} style={slideUp}>
          <ProjectCard
            title="WIPAG"
            tags={['Branding', 'Brand Guidelines', 'Editorial Design']}
            image={IMG_RECYCLING}
            aspectRatio="676/699"
            href="/work/recycling"
          />
        </div>
        <div ref={el => { cardRefs.current[13] = el }} style={slideUp}>
          <ProjectCard
            title="Otto Krahn Group"
            tags={['Editorial Design', 'Corporate Publishing']}
            image={IMG_HOLDING}
            aspectRatio="676/699"
            href="/work/holding"
          />
        </div>
        {/* mehr Arbeiten — temporär ausgeblendet */}
      </div>
    </section>
  )
}
