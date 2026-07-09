'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Zu mir', href: '/about' },
  { label: 'Arbeiten', href: '/#arbeiten' },
  { label: 'Angebot', href: '/#angebot' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── Fixed bar: logo + burger ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pointer-events-none"
        style={{
          padding: '24px 32px',
          mixBlendMode: menuOpen ? 'normal' : 'difference',
        }}
      >
        <Link
          href="/"
          className="pointer-events-auto"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: '26.5px',
            letterSpacing: '0.023em',
            color: '#fff',
            textDecoration: 'none',
          }}
          onClick={close}
        >
          weikinn
        </Link>

        <button
          className="pointer-events-auto"
          style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 0 }}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 9h18M3 15h18" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Fullscreen overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center"
          style={{ backgroundColor: '#6759d7', paddingLeft: '32px', paddingRight: '32px' }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 'clamp(52px, 9vw, 108px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  color: hoveredIdx !== null && hoveredIdx !== i
                    ? 'rgba(213,211,230,0.3)'
                    : '#d5d3e6',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ marginTop: '48px' }}>
            <a
              href="mailto:julia@weikinn.design"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '-0.02em',
                padding: '12px 24px',
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '9999px',
                backgroundColor: '#d5d3e6',
                color: '#6759d7',
                textDecoration: 'none',
              }}
              onClick={close}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </>
  )
}
