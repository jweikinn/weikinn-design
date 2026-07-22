'use client'

import { useRef, useLayoutEffect } from 'react'
import { Footer } from './Footer'

export function FixedFooter() {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      document.documentElement.style.setProperty('--footer-height', `${el.offsetHeight}px`)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 0 }}>
      <Footer />
    </div>
  )
}
