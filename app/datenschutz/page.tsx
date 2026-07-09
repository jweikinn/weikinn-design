import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const PAD = 32

const sectionTitleCss: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontStyle: 'italic',
  fontWeight: 400,
  fontSize: 'clamp(22px, 2.08vw, 30px)',
  lineHeight: 1.1,
  letterSpacing: '0.3px',
  color: '#6759d7',
  margin: '0 0 20px',
}

const subHeadCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: '15px',
  letterSpacing: '0.02em',
  color: '#d5d3e6',
  margin: '28px 0 6px',
}

const questionCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: '14px',
  letterSpacing: '0.02em',
  color: 'rgba(213,211,230,0.7)',
  margin: '20px 0 4px',
}

const bodyCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: 1.7,
  letterSpacing: '0.1px',
  color: 'rgba(213,211,230,0.8)',
  margin: '0 0 12px',
}

const linkStyle: React.CSSProperties = {
  color: '#6759d7',
  textDecoration: 'none',
}

export default function DatenschutzPage() {
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
            Datenschutz.
          </h1>

          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column' }}>

            {/* 1 */}
            <div style={{ borderTop: '1px solid rgba(213,211,230,0.12)', paddingTop: '40px', paddingBottom: '40px' }}>
              <p style={sectionTitleCss}>1. Datenschutz auf einen Blick</p>

              <p style={subHeadCss}>Allgemeine Hinweise</p>
              <p style={bodyCss}>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst. Ausführliche Informationen zum Thema Datenschutz entnimmst du dieser Datenschutzerklärung.
              </p>

              <p style={subHeadCss}>Datenerfassung auf dieser Website</p>

              <p style={questionCss}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p style={bodyCss}>
                Die Datenverarbeitung auf dieser Website erfolgt durch die Website-Betreiberin. Deren Kontaktdaten findest du im Impressum.
              </p>

              <p style={questionCss}>Wie erfasse ich deine Daten?</p>
              <p style={bodyCss}>
                Deine Daten werden zum einen dadurch erhoben, dass du sie mir mitteilst – z.B. wenn du das Kontaktformular ausfüllst oder mir eine E-Mail schreibst.
              </p>
              <p style={bodyCss}>
                Andere Daten werden automatisch beim Besuch der Website durch das Hosting-System (Vercel) erfasst. Das sind vor allem technische Daten wie IP-Adresse, Browsertyp und Uhrzeit des Aufrufs.
              </p>

              <p style={questionCss}>Wofür nutze ich deine Daten?</p>
              <p style={bodyCss}>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten dienen der Bearbeitung deiner Anfragen.
              </p>

              <p style={questionCss}>Welche Rechte hast du bezüglich deiner Daten?</p>
              <p style={bodyCss}>
                Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem das Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn du eine Einwilligung zur Datenverarbeitung erteilt hast, kannst du diese jederzeit widerrufen. Außerdem hast du das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung deiner personenbezogenen Daten zu verlangen. Des Weiteren steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p style={bodyCss}>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du mich jederzeit unter der im Impressum angegebenen Adresse kontaktieren.
              </p>
            </div>

            {/* 2 */}
            <div style={{ borderTop: '1px solid rgba(213,211,230,0.12)', paddingTop: '40px', paddingBottom: '40px' }}>
              <p style={sectionTitleCss}>2. Hosting</p>
              <p style={bodyCss}>Die Inhalte dieser Website hoste ich beim folgenden Anbieter:</p>
              <p style={{ ...bodyCss, marginBottom: '20px' }}>
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, USA
              </p>
              <p style={bodyCss}>
                Vercel ist ein Dienstleister für das Hosting und die Auslieferung von Websites. Beim Aufruf meiner Website werden verschiedene Logfiles inklusive deiner IP-Adresse erfasst.
              </p>
              <p style={bodyCss}>
                Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein berechtigtes Interesse an einer möglichst zuverlässigen und schnellen Darstellung meiner Website.
              </p>
              <p style={bodyCss}>
                Ich habe mit Vercel einen Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO geschlossen. Statische Inhalte und Serverless-Funktionen werden über die europäische Region Frankfurt am Main (fra1) ausgeliefert, um Datenübertragungen in Drittländer zu minimieren.
              </p>
              <p style={bodyCss}>
                Datenschutzerklärung Vercel:{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://vercel.com/legal/privacy-policy
                </a>
                <br />
                Data Processing Addendum:{' '}
                <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://vercel.com/legal/dpa
                </a>
              </p>
            </div>

            {/* 3 */}
            <div style={{ borderTop: '1px solid rgba(213,211,230,0.12)', paddingTop: '40px', paddingBottom: '40px' }}>
              <p style={sectionTitleCss}>3. Allgemeine Hinweise und Pflichtinformationen</p>

              <p style={subHeadCss}>Datenschutz</p>
              <p style={bodyCss}>
                Ich nehme den Schutz deiner persönlichen Daten sehr ernst. Ich behandle deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p style={bodyCss}>
                Wenn du diese Website benutzt, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen du persönlich identifiziert werden kannst. Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>

              <p style={subHeadCss}>Hinweis zur verantwortlichen Stelle</p>
              <p style={bodyCss}>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p style={{ ...bodyCss, marginBottom: '12px' }}>
                Julia Weikinn<br />
                Auenstraße 60<br />
                80469 München<br />
                <br />
                Telefon: 0176 - 23 95 31 77<br />
                E-Mail:{' '}
                <a href="mailto:julia@weikinn.design" style={linkStyle}>
                  julia@weikinn.design
                </a>
              </p>
              <p style={bodyCss}>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>

              <p style={subHeadCss}>Speicherdauer</p>
              <p style={bodyCss}>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben deine personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt. Wenn du ein berechtigtes Löschersuchen geltend machst oder eine Einwilligung zur Datenverarbeitung widerrufst, werden deine Daten gelöscht, sofern ich keine anderen rechtlich zulässigen Gründe für die Speicherung habe (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
              </p>

              <p style={subHeadCss}>Widerruf deiner Einwilligung zur Datenverarbeitung</p>
              <p style={bodyCss}>
                Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <p style={subHeadCss}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen (Art. 21 DSGVO)</p>
              <p style={bodyCss}>
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, hast du jederzeit das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, gegen die Verarbeitung deiner personenbezogenen Daten Widerspruch einzulegen. Werden deine personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, hast du das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen.
              </p>

              <p style={subHeadCss}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
              <p style={bodyCss}>
                Im Falle von Verstößen gegen die DSGVO steht dir ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat deines gewöhnlichen Aufenthalts, deines Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
              </p>
              <p style={bodyCss}>
                Für Bayern zuständig:<br />
                Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                Promenade 27, 91522 Ansbach<br />
                <a href="https://www.lda.bayern.de/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://www.lda.bayern.de/
                </a>
              </p>

              <p style={subHeadCss}>Recht auf Datenübertragbarkeit</p>
              <p style={bodyCss}>
                Du hast das Recht, Daten, die ich auf Grundlage deiner Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeite, an dich oder einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <p style={subHeadCss}>Auskunft, Berichtigung und Löschung</p>
              <p style={bodyCss}>
                Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu kannst du dich jederzeit an mich wenden.
              </p>

              <p style={subHeadCss}>SSL- bzw. TLS-Verschlüsselung</p>
              <p style={bodyCss}>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers auf &ldquo;https://&rdquo; wechselt und am Schloss-Symbol in deiner Browserzeile.
              </p>
            </div>

            {/* 4 */}
            <div style={{ borderTop: '1px solid rgba(213,211,230,0.12)', paddingTop: '40px', paddingBottom: '40px' }}>
              <p style={sectionTitleCss}>4. Datenerfassung auf dieser Website</p>

              <p style={subHeadCss}>Cookies</p>
              <p style={bodyCss}>
                Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den fehlerfreien Betrieb der Website erforderlich sind (z.B. Session-Cookies). Diese Cookies werden nach Verlassen der Website automatisch gelöscht oder verlieren ihre Gültigkeit.
              </p>
              <p style={bodyCss}>Es werden keine Cookies zu Analyse-, Tracking- oder Werbezwecken eingesetzt.</p>
              <p style={bodyCss}>
                Die Rechtsgrundlage für die Nutzung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen Website) sowie § 25 Abs. 2 Nr. 2 TDDDG (unbedingt erforderlich zur Bereitstellung des angeforderten Dienstes).
              </p>
              <p style={bodyCss}>
                Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst und diese ablehnen kannst. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              </p>

              <p style={subHeadCss}>Server-Log-Dateien</p>
              <p style={bodyCss}>
                Der Provider dieser Seiten (Vercel Inc.) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die dein Browser automatisch übermittelt. Dies sind:
              </p>
              <ul style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.7,
                letterSpacing: '0.1px',
                color: 'rgba(213,211,230,0.8)',
                margin: '0 0 12px',
                paddingLeft: '20px',
              }}>
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p style={bodyCss}>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung meiner Website.
              </p>

              <p style={subHeadCss}>Kontaktformular</p>
              <p style={bodyCss}>
                Wenn du mir per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
              </p>
              <p style={bodyCss}>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p style={bodyCss}>
                Die von dir im Kontaktformular eingegebenen Daten verbleiben bei mir, bis du mich zur Löschung aufforderst, deine Einwilligung zur Speicherung widerrufst oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung deiner Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <p style={subHeadCss}>Anfrage per E-Mail oder Telefon</p>
              <p style={bodyCss}>
                Wenn du mich per E-Mail oder Telefon kontaktierst, wird deine Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung deines Anliegens bei mir gespeichert und verarbeitet. Diese Daten gebe ich nicht ohne deine Einwilligung weiter.
              </p>
              <p style={bodyCss}>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung deiner Anfrage (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            {/* 5 */}
            <div style={{ borderTop: '1px solid rgba(213,211,230,0.12)', paddingTop: '40px', paddingBottom: '40px' }}>
              <p style={sectionTitleCss}>5. Schriftarten (Fonts)</p>

              <p style={subHeadCss}>Adobe Fonts</p>
              <p style={bodyCss}>
                Diese Website nutzt zur einheitlichen Darstellung bestimmter Schriftarten Web Fonts, die von Adobe Systems Software Ireland Companies Limited, 4-6 Riverwalk, Citywest Business Campus, Dublin 24, Irland (&ldquo;Adobe&rdquo;) bereitgestellt werden.
              </p>
              <p style={bodyCss}>
                Beim Aufrufen dieser Website lädt dein Browser die benötigten Web Fonts in den Browser-Cache. Dazu muss der von dir verwendete Browser Verbindung zu den Servern von Adobe aufnehmen. Hierdurch erlangt Adobe Kenntnis darüber, dass über deine IP-Adresse diese Website aufgerufen wurde.
              </p>
              <p style={bodyCss}>
                Die Nutzung von Adobe Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung dieser Website. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p style={bodyCss}>
                Weitere Informationen zu Adobe Fonts:{' '}
                <a href="https://www.adobe.com/de/privacy/policies/adobe-fonts.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://www.adobe.com/de/privacy/policies/adobe-fonts.html
                </a>
                <br />
                Datenschutzerklärung von Adobe:{' '}
                <a href="https://www.adobe.com/de/privacy/policy.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  https://www.adobe.com/de/privacy/policy.html
                </a>
              </p>
            </div>

            {/* 6 */}
            <div style={{ borderTop: '1px solid rgba(213,211,230,0.12)', paddingTop: '40px', paddingBottom: '40px' }}>
              <p style={sectionTitleCss}>6. Änderung dieser Datenschutzerklärung</p>
              <p style={bodyCss}>
                Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen in der Datenschutzerklärung umzusetzen. Für deinen erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.05em',
                color: 'rgba(213,211,230,0.4)',
                margin: '24px 0 0',
              }}>
                Stand: Juli 2026
              </p>
            </div>

          </div>
        </section>
      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
