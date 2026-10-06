'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type Props = {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  delay?: number
  id?: string
}

export function RevealText({ text, as = 'h2', className, delay = 0, id }: Props) {
  const Tag = motion[as]
  const words = text.split(' ')

  return (
    <Tag
      id={id}
      className={cn('text-balance', className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              show: { y: '0%', opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </Tag>
  )
}
