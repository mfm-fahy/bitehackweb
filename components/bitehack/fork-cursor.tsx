'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

const INTERACTIVE = 'a, button, input, select, textarea, label, [role="tab"]'

export function ForkCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: PointerEvent) => {
      setHovering(Boolean((e.target as Element | null)?.closest?.(INTERACTIVE)))
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[120]"
    >
      <motion.div
        animate={{ scale: hovering ? 1.5 : 1, rotate: hovering ? -10 : -35 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        className="-translate-x-1/2 -translate-y-[4px] origin-top"
      >
        <svg
          width="26"
          height="34"
          viewBox="0 0 24 32"
          fill="none"
          stroke={hovering ? '#F4A300' : '#FFF4E0'}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          <path d="M6 2v7a6 6 0 0 0 12 0V2" />
          <path d="M12 2v9" />
          <path d="M12 15v15" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
