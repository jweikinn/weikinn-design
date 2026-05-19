'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const CURSOR_SIZE = 114 // ~3cm at 96 dpi

const TESTIMONIALS = [
  {
    name: 'Simone Hörmann',
    role: 'Fotografin',
    initials: 'S/H.',
    quote: `Ich bin absolut begeistert von der Zusammenarbeit mit Julia! Sie hat nicht nur mein Logo und meine Website erstellt, sondern auch Schriften, Farben und Grafikelemente so perfekt definiert, dass mein Außenauftritt genau meinen Vorstellungen entspricht. Der Austausch mit Julia war nicht nur äußerst professionell, sondern auch unglaublich partnerschaftlich.`,
    detail: `Es fühlte sich an, als ob wir gemeinsam in eine kreative Welt eingetaucht sind. Julia hat meine Vorstellungen unkompliziert aufgenommen und sie mit ihrem herausragenden Talent in großartige Ergebnisse umgesetzt. Jetzt fühle ich mich richtig wohl mit meinem Außenauftritt. Vielen Dank, Julia, für deine herausragende Arbeit und dein Engagement!`,
  },
  {
    name: 'Klaus Weber',
    role: 'Geschäftsführer, Weber & Partner',
    initials: 'K/W.',
    quote: `Julia hat unser gesamtes Erscheinungsbild neu entwickelt — und das Ergebnis hat unsere Erwartungen bei weitem übertroffen. Klare, moderne Gestaltung, die genau zu uns passt. Unsere Kunden sprechen uns seither regelmäßig auf unseren professionellen Auftritt an.`,
    detail: `Die Zusammenarbeit war von Anfang bis Ende strukturiert und angenehm. Julia denkt strategisch und gestaltet mit Herzblut. Ich empfehle sie jedem, der eine starke Marke aufbauen möchte.`,
  },
  {
    name: 'Lena Richter',
    role: 'Gründerin, Studio Richter',
    initials: 'L/R.',
    quote: `Die neue Website ist einfach wunderschön. Julia hat von Anfang an verstanden, worum es bei meinem Studio geht — ohne viele Erklärungen. Das Ergebnis spricht für sich: mehr Anfragen, mehr Sichtbarkeit und vor allem mehr Freude an meinem eigenen Außenauftritt.`,
    detail: `Was ich besonders schätze: Julia denkt mit. Sie schlägt Lösungen vor, bevor man selbst merkt, dass es ein Problem gibt. Kreativ, verlässlich und wärmstens empfehlenswert.`,
  },
]

// Pre-compute start indices for each testimonial's words
const WORD_STARTS = (() => {
  let idx = 0
  return TESTIMONIALS.map(t => {
    const quoteStart = idx
    idx += t.quote.trim().split(/\s+/).length
    const detailStart = idx
    idx += t.detail.trim().split(/\s+/).length
    return { quoteStart, detailStart }
  })
})()

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

function CursorLeft() {
  return (
    <svg width={CURSOR_SIZE} height={CURSOR_SIZE} viewBox="0 0 38 38" fill="none">
      <path d="M24 8L14 19L24 30" stroke="#0044FF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CursorRight() {
  return (
    <svg width={CURSOR_SIZE} height={CURSOR_SIZE} viewBox="0 0 38 38" fill="none">
      <path d="M14 8L24 19L14 30" stroke="#0044FF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SectionSix() {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [cursorSide, setCursorSide] = useState<'left' | 'right'>('right')
  const sectionRef = useRef<HTMLElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorSideRef = useRef<'left' | 'right'>('right')
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  const next = useCallback(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [])

  // Auto-advance
  useEffect(() => {
    if (hovered) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next, hovered])

  // Word-reveal scroll animation
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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cursorRef.current || !sectionRef.current) return
    cursorRef.current.style.transform =
      `translate(${e.clientX - CURSOR_SIZE / 2}px, ${e.clientY - CURSOR_SIZE / 2}px)`
    const rect = sectionRef.current.getBoundingClientRect()
    const side: 'left' | 'right' = e.clientX - rect.left < rect.width / 2 ? 'left' : 'right'
    if (side !== cursorSideRef.current) {
      cursorSideRef.current = side
      setCursorSide(side)
    }
  }, [])

  const sidePad = px(16, 32)

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          visibility: hovered ? 'visible' : 'hidden',
        }}
      >
        {cursorSide === 'left' ? <CursorLeft /> : <CursorRight />}
      </div>

      <section
        ref={sectionRef}
        className="w-full bg-black text-white"
        style={{
          paddingTop: px(60, 80),
          paddingBottom: px(60, 80),
          cursor: hovered ? 'none' : 'auto',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => cursorSideRef.current === 'left' ? prev() : next()}
      >
        {/* ── „Love Letters" Heading ── */}
        <div style={{ paddingLeft: sidePad, paddingRight: sidePad, marginBottom: px(40, 80) }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: px(60, 96),
              lineHeight: 0.86,
              letterSpacing: '-0.02em',
            }}
          >
            Love<br />Letters
          </h2>
        </div>

        {/* ── Karussell ── */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: 'transform 1s ease-in-out',
              }}
            >
              {TESTIMONIALS.map((t, i) => {
                const { quoteStart, detailStart } = WORD_STARTS[i]
                return (
                  <div
                    key={i}
                    className="min-w-full flex flex-col md:flex-row"
                    style={{ paddingLeft: sidePad, paddingRight: sidePad }}
                  >
                    {/* Desktop — linke Spalte */}
                    <div
                      className="hidden md:flex flex-col justify-start"
                      style={{ width: '45%', paddingTop: `calc(${px(40, 56)} + ${px(24, 40)})` }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 700,
                          fontSize: '18px',
                          lineHeight: 1.3,
                          letterSpacing: '-0.03em',
                          color: '#0044FF',
                        }}
                      >
                        {t.name}<br />{t.role}
                      </p>
                    </div>

                    {/* Rechte Spalte */}
                    <div className="flex flex-col" style={{ flex: 1, gap: px(24, 40) }}>
                      <div
                        style={{
                          width: px(40, 56),
                          height: px(40, 56),
                          borderRadius: '50%',
                          backgroundColor: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 700,
                            fontSize: px(8, 12),
                            color: '#000',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {t.initials}
                        </span>
                      </div>

                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 300,
                          fontSize: 'clamp(23px, 3vw, 40px)',
                          lineHeight: 1.2,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        <span aria-hidden style={{ opacity: 0 }}>{'       '}</span>
                        {makeWords(t.quote, quoteStart, wordRefs)}
                      </p>

                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 300,
                          fontSize: 'clamp(15px, 1.4vw, 18px)',
                          lineHeight: 1.3,
                          letterSpacing: '0.02em',
                          maxWidth: '380px',
                        }}
                      >
                        {makeWords(t.detail, detailStart, wordRefs)}
                      </p>
                    </div>

                    {/* Mobil — Name / Rolle */}
                    <p
                      className="md:hidden"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: 1.3,
                        letterSpacing: '-0.02em',
                        color: '#0044FF',
                        marginTop: px(32, 0),
                      }}
                    >
                      {t.name}<br />{t.role}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Punkte ── */}
        <div
          className="flex justify-center items-center"
          style={{ marginTop: px(32, 48) }}
        >
          <div className="flex items-center" style={{ gap: '8px' }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === current ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'none',
                  padding: 0,
                  transition: 'width 0.4s ease, background-color 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
