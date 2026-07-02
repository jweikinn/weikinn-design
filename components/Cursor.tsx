'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dotRef.current) return
      dotRef.current.style.left = `${e.clientX}px`
      dotRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
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
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    />
  )
}
