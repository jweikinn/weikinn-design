'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { bodyCss } from '@/lib/styles'

const PAD = 32

// Cloudflare Turnstile: Test-Key (immer bestanden, kein sichtbares Widget)
// Ersetze mit echtem Key aus dash.cloudflare.com → Turnstile
const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'

const SERVICES = ['Branding', 'Webdesign', 'Print & Editorial', 'Komplett-Auftritt', 'Etwas anderes']
const BUDGETS = ['bis 3.000 €', '3.000 – 8.000 €', 'ab 8.000 €', 'Bin mir noch unsicher']

const sectionLabelCss: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 'clamp(22px, 2.5vw, 34px)',
  lineHeight: 1.1,
  letterSpacing: '0.3px',
  color: '#d5d3e6',
  margin: '0 0 20px',
  display: 'block',
}

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(213,211,230,0.25)',
  padding: '14px 0',
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '18px',
  lineHeight: 1.4,
  letterSpacing: '0.2px',
  color: '#d5d3e6',
  outline: 'none',
  display: 'block',
  borderRadius: 0,
}

const hintCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '14px',
  letterSpacing: '0.1px',
  color: 'rgba(213,211,230,0.45)',
  margin: '14px 0 0',
}

const errorCss: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 400,
  fontSize: '13px',
  letterSpacing: '0.1px',
  color: '#f08080',
  margin: '8px 0 0',
  display: 'block',
}

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: '44px',
        padding: '10px 20px',
        borderRadius: '24px',
        border: `1px solid ${selected ? '#6759d7' : 'rgba(213,211,230,0.25)'}`,
        background: selected ? 'rgba(103,89,215,0.18)' : 'transparent',
        fontFamily: 'var(--font-sans)',
        fontWeight: selected ? 500 : 300,
        fontSize: '15px',
        letterSpacing: '-0.01em',
        color: selected ? '#d5d3e6' : 'rgba(213,211,230,0.6)',
        transition: 'border-color 0.2s ease, background 0.2s ease, color 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  )
}

interface Errors { name?: string; email?: string; dsgvo?: string }

function validateEmail(v: string) {
  if (!v.trim()) return 'Bitte gib deine E-Mail-Adresse ein.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Diese E-Mail-Adresse sieht nicht ganz richtig aus.'
  return ''
}

export default function KontaktPage() {
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dsgvo, setDsgvo] = useState(false)
  const [honeypot, setHoneypot] = useState('') // Bots füllen dieses Feld aus
  const [turnstileToken, setTurnstileToken] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({})
  const [sent, setSent] = useState(false)
  const [submitHover, setSubmitHover] = useState(false)

  // Turnstile-Callback global registrieren
  useEffect(() => {
    (window as Window & { __turnstileCb?: (t: string) => void }).__turnstileCb = (token) => setTurnstileToken(token)
    return () => { delete (window as Window & { __turnstileCb?: (t: string) => void }).__turnstileCb }
  }, [])

  const blurField = (field: 'name' | 'email') => {
    setTouched(t => ({ ...t, [field]: true }))
    setErrors(e => ({
      ...e,
      name: field === 'name' ? (name.trim() ? '' : 'Bitte gib deinen Namen ein.') : e.name,
      email: field === 'email' ? validateEmail(email) : e.email,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return // Bot erkannt

    const newErrors: Errors = {}
    if (!name.trim()) newErrors.name = 'Bitte gib deinen Namen ein.'
    const emailErr = validateEmail(email)
    if (emailErr) newErrors.email = emailErr
    if (!dsgvo) newErrors.dsgvo = 'Bitte stimme der Datenschutzerklärung zu, um fortzufahren.'
    setErrors(newErrors)
    setTouched({ name: true, email: true })
    if (Object.keys(newErrors).length > 0) return

    const body = [
      `Worum geht's: ${service || '–'}`,
      `Budgetrahmen: ${budget || '–'}`,
      '',
      text || '–',
      '',
      `Name: ${name}`,
      `E-Mail: ${email}`,
    ].join('\n')

    window.location.href = `mailto:julia@weikinn.design?subject=${encodeURIComponent(`Projektanfrage von ${name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputStyle = (field: 'name' | 'email') => ({
    ...inputBase,
    borderBottomColor: errors[field] ? 'rgba(240,128,128,0.6)' : 'rgba(213,211,230,0.25)',
  })

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#d5d3e6' }}>
      {/* Turnstile script */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />

      {/* Placeholder-Farbe für alle Felder */}
      <style>{`
        .kontakt-field::placeholder { color: rgba(213,211,230,0.35); }
        .kontakt-field:focus { outline: none; }
        .kontakt-cb { accent-color: #6759d7; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px; }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#000' }}>
        <Navbar />

        <section style={{ paddingTop: '140px', paddingBottom: '120px', paddingLeft: `${PAD}px`, paddingRight: `${PAD}px` }}>

          <Link href="/" style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '0.02em',
            color: '#d5d3e6',
            opacity: 0.75,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '64px',
          }}>
            ← Zurück zur Homepage
          </Link>

          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 6.94vw, 100px)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: '#d5d3e6',
            margin: '0 0 80px',
          }}>
            Projektanfrage
          </h1>

          {sent ? (
            /* ── Erfolg ── */
            <div style={{ maxWidth: '680px' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                color: '#d5d3e6',
                margin: '0 0 40px',
              }}>
                Danke, deine Anfrage ist bei mir.
              </p>
              <p style={bodyCss}>
                Ich lese sie persönlich und melde mich innerhalb von zwei Werktagen.
              </p>
            </div>
          ) : (
            /* ── Formular ── */
            <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '720px' }}>

              {/* Honeypot – unsichtbar für echte Nutzer:innen */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={e => setHoneypot(e.target.value)}
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
              />

              {/* Worum geht's */}
              <div style={{ marginBottom: '56px' }}>
                <span style={sectionLabelCss}>Worum geht's</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {SERVICES.map(s => (
                    <Chip key={s} label={s} selected={service === s} onClick={() => setService(service === s ? '' : s)} />
                  ))}
                </div>
              </div>

              {/* Budgetrahmen */}
              <div style={{ marginBottom: '56px' }}>
                <span style={sectionLabelCss}>Budgetrahmen</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {BUDGETS.map(b => (
                    <Chip key={b} label={b} selected={budget === b} onClick={() => setBudget(budget === b ? '' : b)} />
                  ))}
                </div>
                <p style={hintCss}>Diese Frage hilft mir, dir direkt eine ehrliche Einschätzung zu geben.</p>
              </div>

              {/* Freitext */}
              <div style={{ marginBottom: '56px' }}>
                <label htmlFor="text" style={sectionLabelCss}>Was beschäftigt dich?</label>
                <textarea
                  id="text"
                  className="kontakt-field"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Erzähl mir kurz, was du machst und was du dir vorstellst."
                  rows={5}
                  style={{
                    ...inputBase,
                    borderBottom: 'none',
                    border: '1px solid rgba(213,211,230,0.25)',
                    padding: '16px',
                    resize: 'none',
                    borderRadius: '4px',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(103,89,215,0.7)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(213,211,230,0.25)' }}
                />
              </div>

              {/* Name + E-Mail */}
              <div className="md:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '56px' }}>
                <div style={{ marginBottom: '32px' }}>
                  <label htmlFor="name" style={{ ...sectionLabelCss, fontSize: 'clamp(18px, 1.8vw, 26px)' }}>Name</label>
                  <input
                    id="name"
                    type="text"
                    className="kontakt-field"
                    required
                    value={name}
                    onChange={e => { setName(e.target.value); if (touched.name) setErrors(err => ({ ...err, name: e.target.value.trim() ? '' : 'Bitte gib deinen Namen ein.' })) }}
                    onBlur={() => blurField('name')}
                    placeholder="Dein Name"
                    style={inputStyle('name')}
                    onFocus={e => { e.target.style.borderBottomColor = errors.name ? 'rgba(240,128,128,0.6)' : 'rgba(103,89,215,0.7)' }}
                  />
                  {errors.name && <span style={errorCss}>{errors.name}</span>}
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <label htmlFor="email" style={{ ...sectionLabelCss, fontSize: 'clamp(18px, 1.8vw, 26px)' }}>E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    className="kontakt-field"
                    required
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (touched.email) setErrors(err => ({ ...err, email: validateEmail(e.target.value) })) }}
                    onBlur={() => blurField('email')}
                    placeholder="deine@email.de"
                    style={inputStyle('email')}
                    onFocus={e => { e.target.style.borderBottomColor = errors.email ? 'rgba(240,128,128,0.6)' : 'rgba(103,89,215,0.7)' }}
                  />
                  {errors.email && <span style={errorCss}>{errors.email}</span>}
                </div>
              </div>

              {/* Turnstile — läuft im Hintergrund, zeigt nichts an */}
              <div
                className="cf-turnstile"
                data-sitekey={TURNSTILE_KEY}
                data-appearance="interaction-only"
                data-callback="__turnstileCb"
              />

              {/* DSGVO-Checkbox */}
              <div style={{ marginBottom: '40px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  cursor: 'pointer',
                }}>
                  <input
                    type="checkbox"
                    className="kontakt-cb"
                    checked={dsgvo}
                    onChange={e => { setDsgvo(e.target.checked); if (e.target.checked) setErrors(err => ({ ...err, dsgvo: '' })) }}
                  />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300,
                    fontSize: '14px',
                    lineHeight: 1.5,
                    letterSpacing: '0.1px',
                    color: 'rgba(213,211,230,0.7)',
                  }}>
                    Ich habe die{' '}
                    <Link href="/datenschutz" style={{ color: '#d5d3e6', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                      Datenschutzerklärung
                    </Link>{' '}
                    gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
                  </span>
                </label>
                {errors.dsgvo && <span style={{ ...errorCss, marginTop: '10px', marginLeft: '32px' }}>{errors.dsgvo}</span>}
              </div>

              {/* Absenden */}
              <button
                type="submit"
                onMouseEnter={() => setSubmitHover(true)}
                onMouseLeave={() => setSubmitHover(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '14px',
                  letterSpacing: '-0.02em',
                  padding: '14px 28px',
                  borderRadius: '24px',
                  border: 'none',
                  background: submitHover ? '#d5d3e6' : '#6759d7',
                  color: submitHover ? '#6759d7' : '#d5d3e6',
                  transition: 'background 0.25s ease, color 0.25s ease',
                  whiteSpace: 'nowrap',
                  minHeight: '48px',
                }}
              >
                Anfrage senden
              </button>

            </form>
          )}
        </section>
      </div>

      <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
        <Footer />
      </div>
    </main>
  )
}
