import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const PAD = 32

export default function PraxisPsychotherapie() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#d5d3e6' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* ── Hero ── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>

          {/* Back link */}
          <Link
            href="/#projects"
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
            ← Alle Projekte
          </Link>

          {/* Project title + meta */}
          <div className="md:flex md:items-end md:justify-between" style={{ gap: '40px' }}>
            <h1 style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6.94vw, 100px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#d5d3e6',
              margin: 0,
              maxWidth: '800px',
            }}>
              Praxis für<br />Psycho&shy;therapie
            </h1>

            <div
              className="md:text-right"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#d5d3e6',
                opacity: 0.6,
                marginTop: '32px',
                flexShrink: 0,
              }}
            >
              <div>Branding</div>
              <div>2024</div>
            </div>
          </div>
        </section>

        {/* ── Erstes Bild – groß, volle Breite ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111' }}>
            <Image
              src="/work/praxis.png"
              alt="Praxis für Psychotherapie – Branding"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </section>

        {/* ── Aufgabe ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

            {/* Label */}
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(36px, 4.17vw, 60px)',
                lineHeight: 1.05,
                letterSpacing: '0.5px',
                color: '#6759d7',
                margin: 0,
              }}>
                Aufgabe
              </p>
            </div>

            {/* Text */}
            <div style={{ paddingTop: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: 1.5,
                letterSpacing: '0.2px',
                color: '#d5d3e6',
                margin: '0 0 24px',
              }}>
                Die Praxis für Psychotherapie suchte eine Identität, die Nähe schafft – ohne klinisch zu wirken. Gefragt war ein Erscheinungsbild, das Vertrauen kommuniziert: zugänglich, ruhig, mit einer Wärme, die Menschen bereits vor dem ersten Gespräch spüren.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: 1.5,
                letterSpacing: '0.2px',
                color: '#d5d3e6',
                margin: 0,
                opacity: 0.7,
              }}>
                Scope: Markenentwicklung · Logo · Farbkonzept · Typografie · Geschäftsausstattung
              </p>
            </div>

          </div>
        </section>

        {/* ── Bildblock 2 – zwei Bilder nebeneinander ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Bild 2 */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111' }}>
              {/* Platzhalter – wird durch echtes Bild ersetzt */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d5d3e6', opacity: 0.3 }}>Bild 2</span>
              </div>
            </div>
            {/* Bild 3 */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d5d3e6', opacity: 0.3 }}>Bild 3</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Umsetzung ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

            {/* Label */}
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(36px, 4.17vw, 60px)',
                lineHeight: 1.05,
                letterSpacing: '0.5px',
                color: '#6759d7',
                margin: 0,
              }}>
                Umsetzung
              </p>
            </div>

            {/* Text */}
            <div style={{ paddingTop: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: 1.5,
                letterSpacing: '0.2px',
                color: '#d5d3e6',
                margin: '0 0 24px',
              }}>
                Ausgangspunkt war die Frage, wie sich Vertrauen gestalten lässt. Die Antwort lag in Reduktion: ein ruhiges Farbspektrum aus Warmtönen, eine Typografie mit Charakter ohne Schärfe, ein Logo, das Offenheit und Haltung gleichzeitig vermittelt.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: 1.5,
                letterSpacing: '0.2px',
                color: '#d5d3e6',
                margin: 0,
              }}>
                Das Ergebnis ist ein Erscheinungsbild, das auf allen Trägern konsistent wirkt – von der Visitenkarte bis zur Website – und das Menschen anspricht, die sich in einem sensiblen Moment befinden.
              </p>
            </div>

          </div>
        </section>

        {/* ── Bildblock 3 – großes Einzelbild ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '120px' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d5d3e6', opacity: 0.3 }}>Bild 4</span>
            </div>
          </div>
        </section>

        {/* ── Bildblock 4 – drei Bilder ── */}
        <section style={{ paddingLeft: `${PAD}px`, paddingRight: `${PAD}px`, paddingBottom: '160px' }}>
          <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {[5, 6, 7].map(n => (
              <div key={n} style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#111' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#d5d3e6', opacity: 0.3 }}>Bild {n}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
