'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Für welche Branchen arbeitest du?',
    a: 'Für Unternehmen mit Sinn und Haltung – aus Bau und Industrie, Recycling, Gesundheit, nachhaltiger Produktion und Beratung. Wichtiger als die Branche ist mir, was ihr macht und wie ihr es macht. Wer für seine Sache steht und sie gestalterisch ernst nimmt, ist hier richtig.',
  },
  {
    q: 'Was kostet ein Projekt bei dir?',
    a: 'Kommt darauf an, was ihr braucht – jedes Projekt hat einen anderen Zuschnitt. Deshalb vereinbaren wir zu Beginn einen Festpreis. Ein grober Budgetrahmen im Kontaktformular hilft mir, dir schnell eine ehrliche Einschätzung zu geben – so weißt du schon nach dem ersten Kontakt, ob wir zusammenpassen.',
  },
  {
    q: 'Wie läuft eine Zusammenarbeit ab?',
    a: 'Meistens in vier Phasen: Erstgespräch (kostenlos, ca. 45 Minuten), Briefing und Angebot, Konzept- und Designphase, Umsetzung. Bei Komplettaufträgen koordiniere ich zusätzlich Foto, Text und Entwicklung aus meinem Netzwerk. Du hast mich als Ansprechpartnerin – von Anfang bis Ende.',
  },
  {
    q: 'Arbeitest du auch außerhalb Münchens?',
    a: 'Ja. Die meisten Kund:innen sitzen verstreut in Deutschland, ein paar in Österreich und der Schweiz. Persönliche Treffen sind schön, aber selten nötig – das meiste läuft seit Jahren hybrid oder remote. Und wenn du in München bist, gehen wir gerne mal einen Kaffee trinken.',
  },
  {
    q: 'Was, wenn ich noch kein Briefing habe?',
    a: 'Kein Problem. Wir starten da, wo du gerade bist – auch wenn das erst mal nur ein Bauchgefühl ist. Ein aufwendiger Workshop ist bei mir selten nötig; oft reichen ein bis zwei gute Gespräche.',
  },
  {
    q: 'Wir haben schon eine Marke – geht das trotzdem?',
    a: 'Ja. Wenn euer Auftritt grundsätzlich funktioniert, entwickle ich ihn weiter. Wenn er nicht mehr passt, denken wir gemeinsam neu. Beides geht – die Frage ist immer, was gerade wirklich gebraucht wird.',
  },
  {
    q: 'Kannst du auch kleinere Projekte übernehmen?',
    a: 'Klar. Einzelne Bausteine sind jederzeit möglich – ein Logo, eine kleine Website, eine Broschüre. Oft ist das ein guter Einstieg, um zu sehen, wie wir zusammenarbeiten.',
  },
  {
    q: 'Nutzt du KI in deiner Arbeit?',
    a: 'Ja, dort, wo sie sinnvoll unterstützt: bei Recherche, Textvarianten, schnellem Sortieren, beim Ausloten von Varianten, beim Coden und manchmal für Visuals – ich bilde mich hier laufend weiter. Die eigentliche Gestaltung braucht aber auch Handwerk, einen guten Blick, Verantwortung und gesunden Menschenverstand, der entscheidet, wann was passt.',
  },
]

export function SectionFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full bg-black" style={{ padding: 'clamp(60px, 6vw, 80px) clamp(16px, 2.22vw, 32px)' }}>

      {/* Label */}
      <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>
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
          Fragen
        </p>
      </div>

      {/* Items */}
      <div>
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <div style={{ height: '1px', backgroundColor: 'rgba(213,211,230,0.15)' }} />
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 'clamp(18px, 2vw, 24px) 0',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '24px',
                textAlign: 'left',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.39vw, 20px)',
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                color: '#d5d3e6',
              }}>
                {item.q}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '24px',
                lineHeight: 1,
                color: '#6759d7',
                flexShrink: 0,
                marginTop: '1px',
                transition: 'transform 0.35s ease',
                display: 'inline-block',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}>
                +
              </span>
            </button>
            <div style={{
              overflow: 'hidden',
              maxHeight: open === i ? '600px' : '0px',
              transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: 'clamp(15px, 1.11vw, 16px)',
                lineHeight: 1.4,
                letterSpacing: '0.1px',
                color: 'rgba(213,211,230,0.7)',
                margin: 0,
                paddingBottom: 'clamp(18px, 2vw, 28px)',
                maxWidth: '720px',
              }}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
        <div style={{ height: '1px', backgroundColor: 'rgba(213,211,230,0.15)' }} />
      </div>

    </section>
  )
}
