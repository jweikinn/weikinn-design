'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── Blend-Leiste: Logo + Burger ────────────────────────────────
          mix-blend-mode: difference auf dem Container, damit er gegen
          den echten Seiteninhalt darunter blendet — nicht nur intern. */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pointer-events-none"
        style={{
          padding: '24px 32px',
          mixBlendMode: 'difference',
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
          }}
        >
          weikinn
        </Link>

        <button
          className="pointer-events-auto"
          style={{
            color: '#fff',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            lineHeight: 0,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
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

      {/* ── Dropdown: separat, kein Blend ───────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-40 bg-black px-8 pb-12"
          style={{ paddingTop: '72px' }}
        >
          <div className="flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '24px',
                  color: '#fff',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full w-fit mt-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '-0.03em',
                padding: '12px 24px',
                backgroundColor: '#fff',
                color: '#000',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
