'use client'

import Lenis from 'lenis'
import { MotionConfig } from 'motion/react'
import { useEffect } from 'react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, autoRaf: true, anchors: { offset: -72 } })
    return () => lenis.destroy()
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
