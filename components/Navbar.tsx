'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

type Phase = 'hero' | 'scrolling-out' | 'sticky'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [phase, setPhase] = useState<Phase>('hero')

  useEffect(() => {
    const NAV_HEIGHT = 72 // px — approximate navbar height
    // The hero animation completes after scrolling 1 viewport height
    const getThreshold = () => 10

    const handleScroll = () => {
      const y = window.scrollY
      const threshold = getThreshold()
      if (y < threshold) setPhase('hero')
      else if (y < threshold + NAV_HEIGHT) setPhase('scrolling-out')
      else setPhase('sticky')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSticky = phase === 'sticky'
  const isHidden = phase === 'scrolling-out'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: isSticky ? '#fff' : 'transparent',
        transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s ease, background-color 0.25s ease',
      }}
    >
      <div
        className="flex items-center justify-between px-8 md:px-12"
        style={{
          paddingTop: isSticky ? '7px' : '24px',
          paddingBottom: isSticky ? '7px' : '24px',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-black tracking-tight"
          style={{
            fontSize: isSticky ? '14px' : '17px',
            color: isSticky ? '#000' : '#fff',
            transition: 'font-size 0.3s ease, color 0.25s ease',
          }}
        >
          Weikinn.Design
        </Link>

        {/* Desktop nav links – absolute centered */}
        <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link-roll font-medium"
              style={{
                fontSize: isSticky ? '12px' : '15px',
                color: isSticky ? '#000' : '#fff',
                transition: 'font-size 0.3s ease, color 0.25s ease',
              }}
              data-text={link.label}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="nav-btn hidden md:inline-flex items-center rounded-full font-black"
          style={{
            fontSize: isSticky ? '11px' : '14px',
            padding: isSticky ? '6px 12px' : '12px 24px',
            backgroundColor: isSticky ? '#000' : '#fff',
            color: isSticky ? '#fff' : '#000',
            transition: 'font-size 0.3s ease, padding 0.3s ease, background-color 0.25s ease, color 0.25s ease',
          }}
        >
          <span>Let&apos;s talk</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: isSticky ? '#000' : '#fff', transition: 'color 0.25s ease' }}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-8 pt-8 pb-12">
          <div className="flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-2xl font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-medium w-fit mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
