import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Über mich',
  description: 'Julia Weikinn — Diplom-Kommunikationsdesignerin aus München. 12+ Jahre Erfahrung in Brand Design, Webdesign und Editorial Design.',
}

const px = (mobile: number, desktop: number) =>
  `clamp(${mobile}px, ${((desktop / 1440) * 100).toFixed(2)}vw, ${desktop}px)`

const sidePad = px(16, 32)

const WHY_ITEMS = [
  {
    num: '01',
    title: 'Eine Ansprechpartnerin, viele Disziplinen.',
    text: 'Ich bin breit aufgestellt — von Brand Strategy bis Webdesign. Kein Weitervermitteln, keine Reibungsverluste.',
  },
  {
    num: '02',
    title: 'Intuition trifft Strategie.',
    text: 'Eine besondere Perspektive und ausgeprägte Intuition, verbunden mit deinen Unternehmenszielen. Gutes Design entsteht dort, wo Kreativität auf Verständnis trifft.',
  },
  {
    num: '03',
    title: 'Designsysteme, die skalieren.',
    text: 'Ich entwickle skalierbare Designsysteme, die langfristige Konsistenz sichern. Deine Marke wächst — dein Design wächst mit.',
  },
  {
    num: '04',
    title: 'Handwerk bis ins Detail.',
    text: 'Vom ersten Konzept bis zum fertigen Endprodukt — mit Sorgfalt, Präzision und Herzblut.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* ── 1. Typografischer Opener ── */}
        <section
          className="w-full bg-black text-white"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingLeft: sidePad,
            paddingRight: sidePad,
            paddingBottom: px(40, 64),
            paddingTop: px(100, 0),
            position: 'relative',
          }}
        >
          {/* Label oben links */}
          <span
            style={{
              position: 'absolute',
              top: px(100, 120),
              left: sidePad,
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: px(9, 14),
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              opacity: 0.4,
            }}
          >
            Über mich
          </span>

          {/* Name */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: px(60, 96),
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                whiteSpace: 'nowrap',
              }}
            >
              Julia
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: px(60, 96),
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                whiteSpace: 'nowrap',
                paddingLeft: 'clamp(20px, 4vw, 60px)',
              }}
            >
              Weikinn.
            </p>
          </div>

          {/* Untere Zeile */}
          <div
            className="flex items-end justify-between"
            style={{ marginTop: px(24, 48) }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: px(9, 14),
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                lineHeight: 1.6,
                opacity: 0.45,
              }}
            >
              Diplom-Kommunikationsdesignerin<br />München
            </p>
            <div style={{ textAlign: 'right' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: px(40, 80),
                  letterSpacing: '-0.04em',
                  color: '#6759D7',
                  lineHeight: 0.9,
                }}
              >
                12+
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: px(9, 14),
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#6759D7',
                  opacity: 0.8,
                  marginTop: '6px',
                }}
              >
                Jahre Erfahrung
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Portrait full-bleed mit Bio-Overlay ── */}
        <section className="w-full bg-black" style={{ position: 'relative' }}>
          <img
            src="/portrait.jpg"
            alt="Julia Weikinn"
            style={{
              width: '100%',
              height: 'clamp(480px, 75vh, 860px)',
              objectFit: 'cover',
              objectPosition: '64% 15%',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
              paddingLeft: sidePad,
              paddingRight: sidePad,
              paddingBottom: px(40, 64),
              paddingTop: px(100, 160),
            }}
          >
            <p
              className="text-white"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: 'clamp(23px, 3vw, 40px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                maxWidth: '660px',
              }}
            >
              Ich habe Kommunikationsdesign studiert und mit Diplom abgeschlossen. Seither begleite ich Marken und Unternehmen — vom ersten Konzept bis zum fertigen Produkt.
            </p>
          </div>
        </section>

        {/* ── 3. Zitat ── */}
        <section
          className="w-full bg-black text-white"
          style={{
            paddingTop: px(64, 96),
            paddingBottom: px(64, 96),
            paddingLeft: sidePad,
            paddingRight: sidePad,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(23px, 3vw, 40px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: '820px',
            }}
          >
            „Design is the silent ambassador of your brand."
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#6759D7',
              marginTop: px(16, 24),
            }}
          >
            Paul Rand
          </p>
        </section>

        {/* ── 4. Ansatz ── */}
        <section
          className="w-full bg-white text-black"
          style={{
            paddingTop: px(64, 120),
            paddingBottom: px(64, 120),
            paddingLeft: sidePad,
            paddingRight: sidePad,
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start" style={{ gap: px(40, 80) }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: px(60, 96),
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                flexShrink: 0,
              }}
            >
              Arbeit<br />auf<br />Augenhöhe.
            </p>

            <div style={{ maxWidth: '500px', paddingTop: px(8, 12) }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.5,
                  letterSpacing: '0.02em',
                  marginBottom: px(20, 28),
                }}
              >
                Ich sehe mich als langfristige Begleiterin — am liebsten arbeite ich im Team und als fester Teil kreativer Prozesse. Lösungsorientiert, unkompliziert, mit einer Ansprechpartnerin für alle gestalterischen Aufgaben.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '18px',
                  lineHeight: 1.5,
                  letterSpacing: '0.02em',
                }}
              >
                Ich richte mich vor allem an Unternehmen. Für Soloselbstständige arbeite ich auch — wenn mich das Projekt begeistert und es menschlich gut passt.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. Warum — nummerierte Liste ── */}
        <section
          className="w-full bg-black text-white"
          style={{
            paddingTop: px(64, 120),
            paddingBottom: px(64, 120),
            paddingLeft: sidePad,
            paddingRight: sidePad,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: px(9, 14),
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              opacity: 0.4,
              marginBottom: px(32, 56),
            }}
          >
            Warum Kunden mit mir arbeiten
          </p>

          <div>
            {WHY_ITEMS.map(({ num, title, text }) => (
              <div
                key={num}
                className="flex items-start"
                style={{
                  gap: px(20, 48),
                  borderTop: '1px solid rgba(255,255,255,0.12)',
                  paddingTop: px(24, 44),
                  paddingBottom: px(24, 44),
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300,
                    fontSize: px(9, 14),
                    letterSpacing: '0.05em',
                    color: '#6759D7',
                    paddingTop: px(4, 8),
                    flexShrink: 0,
                    width: px(28, 40),
                  }}
                >
                  {num}
                </span>

                <div className="flex flex-col md:flex-row md:items-baseline" style={{ gap: px(8, 64), flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: 'clamp(23px, 3vw, 40px)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      flexShrink: 0,
                      maxWidth: '520px',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: '18px',
                      lineHeight: 1.5,
                      letterSpacing: '0.02em',
                      opacity: 0.5,
                      maxWidth: '360px',
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
