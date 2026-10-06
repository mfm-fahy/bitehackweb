'use client'

import { motion, useScroll, useSpring, useTransform } from 'motion/react'

export function CookingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const percent = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)
  const label = useTransform(scrollYProgress, (v): string =>
    v < 0.15 ? 'Prepping' : v < 0.45 ? 'Simmering' : v < 0.8 ? 'Plating' : 'Served',
  )

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-basil via-saffron to-tomato"
      />
      <div
        aria-hidden
        className="fixed bottom-5 right-5 z-[60] hidden items-center gap-2 rounded-full border border-cream/15 bg-char/80 px-4 py-2 font-mono text-xs text-cream backdrop-blur-md sm:flex"
      >
        <span className="size-2 animate-pulse rounded-full bg-tomato" />
        <motion.span>{label}</motion.span>
        <motion.span className="text-saffron">{percent}</motion.span>
      </div>
    </>
  )
}
