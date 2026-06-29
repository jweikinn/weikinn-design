const imgPortrait = '/portrait.jpg'

export function SectionThree() {
  return (
    <section
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
          fontSize: '35px',
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
          src={imgPortrait}
          alt="Julia Weikinn"
          style={{
            position: 'absolute',
            width: '100%',
            height: '120.76%',
            top: '-20.7%',
            left: 0,
            objectFit: 'cover',
            objectPosition: 'center top',
            maxWidth: 'none',
          }}
        />
      </div>

      {/* Fließtext — rechte Spalte */}
      <p
        style={{
          position: 'absolute',
          top: '33%',
          left: '59.24%',
          right: '10.35%',
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '17.762px',
          lineHeight: 1.36,
          letterSpacing: '0.2082px',
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
            fontWeight: 400,
          }}
        >
          mit Herz und Verstand.{' '}
        </span>
        <strong style={{ fontWeight: 700 }}>
          Damit sie zeigen können, wer sie sind, was sie ausmacht und warum sie machen, was sie machen.
        </strong>
      </p>

      {/* „Mehr zu mir" — CTA-Button */}
      <a
        href="/about"
        style={{
          position: 'absolute',
          top: '65%',
          left: 'calc(58.33% + 13px)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#d5d3e6',
          color: '#2f2483',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '-0.56px',
          padding: '12px 16px',
          borderRadius: '24px',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Mehr zu mir
      </a>
    </section>
  )
}
