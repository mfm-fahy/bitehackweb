'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function IntroCloche() {
  const [visible, setVisible] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), reduce ? 0 : 1900)
    return () => clearTimeout(timer)
  }, [reduce])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          aria-hidden
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-char"
        >
          <div className="relative h-48 w-72">
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.6, ease: EASE }}
              className="absolute inset-x-0 bottom-9 text-center font-serif text-5xl font-semibold text-cream"
            >
              Bite<span className="text-saffron">Hack</span>
            </motion.span>
            <motion.div
              initial={{ y: 0, rotate: 0, opacity: 1 }}
              animate={{ y: -170, rotate: -14, opacity: 0 }}
              transition={{ delay: 0.55, duration: 1.05, ease: EASE }}
              className="absolute bottom-6 left-1/2 h-36 w-60 -translate-x-1/2 rounded-t-full bg-gradient-to-b from-[#f1ece4] via-[#c8c0b4] to-[#7d756b] shadow-[inset_-18px_-10px_40px_rgba(0,0,0,0.35)]"
            >
              <span className="absolute -top-4 left-1/2 size-7 -translate-x-1/2 rounded-full bg-[#e2dbd0]" />
              <span className="absolute left-8 top-8 h-12 w-6 rotate-[25deg] rounded-full bg-white/50 blur-[2px]" />
            </motion.div>
            <div className="absolute -inset-x-4 bottom-0 h-7 rounded-[50%] bg-cream/90 shadow-[0_10px_30px_rgba(244,163,0,0.25)]" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-cream/60"
          >
            {'> preheating the kitchen...'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
