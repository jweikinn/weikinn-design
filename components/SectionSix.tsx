'use client'

import React, { useRef } from 'react'

const TESTIMONIALS = [
  {
    name: 'Klaus Miller',
    role: 'Kolibri Interkulturelle Stiftung',
    quote: `Vielen Dank, Julia Weikinn, für die Broschüre, die Du für unsere Stiftung realisiert hast. Dank Deiner tollen kreativen Ideen und Deiner Professionalität ist eine Publikation entstanden, die durch Farbsprache und Seitenlayout perfekt zu dem sehr sensiblen Thema wie auch zur Identität und den Zielen unserer gemeinnützigen Stiftung passt. Die Broschüre spricht die Zielgruppe in idealer Weise an und stößt ausnahmslos auf positive Resonanz. Sie ist für uns ein großer Gewinn.\n\nVielen Dank auch für die immer angenehme und unkomplizierte Zusammenarbeit und dass Du dabei nie die Geduld mit uns verloren hast 😊\n\nFazit: Eine uneingeschränkte Weiterempfehlung!`,
  },
  {
    name: 'Miriam Szabo',
    role: 'Praxis für Psychotherapie',
    quote: `Ich habe bei Julia einen Flyer und zwei Homepages in Auftrag gegeben und bin mit ihrer Arbeit und den Ergebnissen rundum zufrieden! Ich habe mich mit meinen Anliegen stets ernst genommen und wertgeschätzt gefühlt und fand ihre Anregungen und Änderungsideen sehr hilfreich. Besonders beeindruckt hat mich, wie sie aus meinen Ideen passende Formen und Farben entwickelt und das dann professionell umsetzt. Der Kontakt war immer total unkompliziert und freundlich. Ich würde sie jederzeit wieder kontaktieren und auch sehr gerne weiterempfehlen!`,
  },
  {
    name: 'Dr. Susanne Schaffrath',
    role: 'Private Coaching & Mentorship',
    quote: `Julia wurde mir empfohlen, und ich bin bis heute super happy. Nicht nur hat sie sofort verstanden, was ich wollte, sie hat mich durch ihre tollen Fragen dabei unterstützt, herauszufinden, wie ich auftreten möchte und wie ich wahrgenommen werden will. Julia ist unkompliziert in der Kontaktaufnahme, schnell in der Umsetzung und hat mich in dem Prozess wirklich toll begleitet. Ich könnte mir keine bessere Webdesignerin an meiner Seite wünschen.`,
  },
  {
    name: 'Andrea Degele',
    role: 'Naturschule Wildes Wohnzimmer',
    quote: `Liebe Julia, ich habe mir gerade deinen Entwurf angesehen und bin ganz gerührt!!! Er ist wirklich so unheimlich schön geworden!!! Das musste ich kurz loswerden! Ich danke dir so sehr!`,
  },
  {
    name: 'Lisa Lutter',
    role: 'Luisengymnasium',
    quote: `Julia hat ein fantastisches Gespür für individuelle Bedürfnisse und unterstützt uns seit Jahren optimal, sowohl bei der Konzeptionierung, als auch bei der Gestaltung, bis hin zum fertigen Produkt. Ihre Aufgeschlossenheit, die Begeisterungsfähigkeit und ihr Schwung ist seit Jahren konstant herausragend und darüber hinaus wahnsinnig ansteckend. Gleichzeitig bleibt sie auch in anstrengenden Phasen ruhig und entspannt.`,
  },
  {
    name: 'Simone Hörmann',
    role: 'Employer Branding Fotografie',
    quote: `Ich bin absolut begeistert von der Zusammenarbeit mit Julia! Sie hat nicht nur mein Logo und meine Website erstellt, sondern auch Schriften, Farben und Grafikelemente so perfekt definiert, dass mein Außenauftritt genau meinen Vorstellungen entspricht. Der Austausch mit Julia war nicht nur äußerst professionell, sondern auch unglaublich partnerschaftlich. Es fühlte sich an, als ob wir gemeinsam in eine kreative Welt eingetaucht sind. Julia hat meine Vorstellungen unkompliziert aufgenommen und sie mit ihrem herausragenden Talent in großartige Ergebnisse umgesetzt.`,
  },
]

export function SectionSix() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const didDrag = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    dragging.current = true
    didDrag.current = false
    startX.current = e.pageX - scrollRef.current.getBoundingClientRect().left
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.getBoundingClientRect().left
    const delta = x - startX.current
    if (Math.abs(delta) > 4) didDrag.current = true
    scrollRef.current.scrollLeft = scrollLeft.current - delta * 1.2
  }

  const onMouseUp = () => {
    if (!didDrag.current && scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement | null
      const cardW = card ? card.offsetWidth + 12 : 292
      scrollRef.current.scrollBy({ left: cardW, behavior: 'smooth' })
    }
    dragging.current = false
  }

  const stopDrag = () => { dragging.current = false }

  return (
    <section className="w-full bg-black" style={{ paddingTop: '60px', paddingBottom: '60px' }}>

      {/* Label */}
      <div style={{ paddingLeft: '32px', paddingRight: '32px', marginBottom: '32px' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '21px',
          letterSpacing: '0.8px',
          color: '#d5d3e6',
          margin: 0,
        }}>
          Stimmen
        </p>
      </div>

      {/* Karten-Reihe */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={stopDrag}
        style={{
          display: 'flex',
          gap: '12px',
          paddingLeft: '32px',
          paddingRight: '32px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          userSelect: 'none',
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: 'clamp(260px, 80vw, 380px)',
              scrollSnapAlign: 'start',
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '0px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '32px',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              color: '#d5d3e6',
              margin: 0,
              whiteSpace: 'pre-line',
            }}>
              {t.quote}
            </p>

            <div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '-0.01em',
                color: '#6759d7',
                margin: 0,
                marginBottom: '2px',
              }}>
                {t.name}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '13px',
                letterSpacing: '-0.01em',
                color: 'rgba(213,211,230,0.5)',
                margin: 0,
              }}>
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
