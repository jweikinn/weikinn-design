import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const PAD = 32

const SECTIONS = [
  {
    title: 'Angaben gemäß § 5 TMG',
    content: (
      <>
        <p>Julia Weikinn</p>
        <p>Weikinn.Design</p>
        <p>Auenstraße 60</p>
        <p>80469 München</p>
      </>
    ),
  },
  {
    title: 'Kontakt',
    content: (
      <>
        <p>Telefon: 0176 - 23 95 31 77</p>
        <p>
          E-Mail:{' '}
          <a
            href="mailto:julia@weikinn.design"
            style={{ color: '#6759d7', textDecoration: 'none' }}
          >
            julia@weikinn.design
          </a>
        </p>
      </>
    ),
  },
  {
    title: 'Umsatzsteuer',
    content: (
      <>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </p>
        <p style={{ marginTop: '8px' }}>DE276131056</p>
      </>
    ),
  },
  {
    title: 'Berufsbezeichnung und berufsrechtliche Regelungen',
    content: (
      <>
        <p>Berufsbezeichnung: Diplom-Designerin (FH)</p>
        <p>Verliehen durch: Georg-Simon-Ohm-Hochschule Nürnberg</p>
      </>
    ),
  },
  {
    title: 'Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV',
    content: (
      <>
        <p>Julia Weikinn</p>
        <p>Weikinn.Design</p>
        <p>Auenstraße 60</p>
      </>
    ),
  },
  {
    title: 'EU-Streitschlichtung',
    content: (
      <>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#6759d7', textDecoration: 'none' }}
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p style={{ marginTop: '8px' }}>Meine E-Mail-Adresse findest du oben im Impressum.</p>
      </>
    ),
  },
  {
    title: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
    content: (
      <p>
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    ),
  },
  {
    title: 'Haftung für Inhalte',
    content: (
      <>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p style={{ marginTop: '12px' }}>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.
        </p>
      </>
    ),
  },
  {
    title: 'Haftung für Links',
    content: (
      <>
        <p>
          Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p style={{ marginTop: '12px' }}>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.
        </p>
      </>
    ),
  },
  {
    title: 'Urheberrecht',
    content: (
      <>
        <p>
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p style={{ marginTop: '12px' }}>
          Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
        </p>
      </>
    ),
  },
]

const bodyCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: 1.7,
  letterSpacing: '0.1px',
  color: 'rgba(213,211,230,0.8)',
}

export default function ImpressumPage() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#d5d3e6' }}>
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <Navbar />

        <section style={{ paddingTop: '140px', paddingBottom: '120px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '14px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#d5d3e6',
              opacity: 0.5,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '64px',
            }}
          >
            ← Zurück zur Homepage
          </Link>

          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#d5d3e6',
              margin: '0 0 80px',
            }}
          >
            Impressum.
          </h1>

          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {SECTIONS.map(({ title, content }) => (
              <div
                key={title}
                style={{
                  borderTop: '1px solid rgba(213,211,230,0.12)',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: 'clamp(22px, 2.08vw, 30px)',
                    lineHeight: 1.1,
                    letterSpacing: '0.3px',
                    color: '#6759d7',
                    margin: '0 0 16px',
                  }}
                >
                  {title}
                </p>
                <div style={bodyCss}>{content}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
