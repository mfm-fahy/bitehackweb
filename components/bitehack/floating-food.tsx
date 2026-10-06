'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useTransform, type MotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  progress: MotionValue<number>
  distance?: number
  rotate?: number
  className?: string
  floatDelay?: number
}

export function FloatingFood({ src, progress, distance = 200, rotate = 20, className, floatDelay = 0 }: Props) {
  const reduce = useReducedMotion()
  const y = useTransform(progress, [0, 1], reduce ? [0, 0] : [distance, -distance])
  const r = useTransform(progress, [0, 1], reduce ? [0, 0] : [-rotate, rotate])

  return (
    <motion.div
      aria-hidden
      style={{ y, rotate: r }}
      className={cn('pointer-events-none absolute mix-blend-screen will-change-transform', className)}
    >
      <div className="relative size-full animate-float" style={{ animationDelay: `${floatDelay}s` }}>
        <Image
          src={src || '/placeholder.svg'}
          alt=""
          fill
          sizes="(min-width: 768px) 240px, 120px"
          className="object-contain [mask-image:radial-gradient(circle,black_45%,transparent_70%)]"
        />
      </div>
    </motion.div>
  )
}
