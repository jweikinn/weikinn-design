'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const over = (e: MouseEvent) => {
      const el = e.target as Element | null
      const clickable = !!el?.closest('a, button, [role="button"]')
      if (clickable) {
        dot.style.transition = 'none'
        dot.style.animation = 'cursor-pulse 4s ease-in-out infinite'
        dot.style.opacity = '0.6'
      } else {
        dot.style.animation = 'none'
        dot.style.transition = 'transform 0.25s ease, opacity 0.25s ease'
        dot.style.transform = 'translate(-50%, -50%) scale(1)'
        dot.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{
        position: 'fixed',
        left: '-100px',
        top: '-100px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: '#6759d7',
        mixBlendMode: 'difference',
        transform: 'translate(-50%, -50%) scale(1)',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.25s ease, opacity 0.25s ease',
      }}
    />
  )
}
