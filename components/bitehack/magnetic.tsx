'use client'

import { motion, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const x = useSpring(0, { stiffness: 250, damping: 18, mass: 0.5 })
  const y = useSpring(0, { stiffness: 250, damping: 18, mass: 0.5 })

  return (
    <motion.div
      style={{ x, y }}
      className={cn('inline-block', className)}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * strength)
        y.set((e.clientY - rect.top - rect.height / 2) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export const ctaClass =
  'group inline-flex items-center gap-3 rounded-full bg-saffron px-7 py-4 font-medium text-char shadow-[0_10px_40px_-10px_rgba(244,163,0,0.7)] transition-colors hover:bg-cream'

export const ghostClass =
  'inline-flex items-center gap-3 rounded-full border border-cream/25 px-7 py-4 font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10'
