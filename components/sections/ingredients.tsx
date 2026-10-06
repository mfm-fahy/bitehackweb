'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { ABOUT, IMAGES } from '@/lib/content'
import { FloatingFood } from '@/components/bitehack/floating-food'
import { SectionLabel } from '@/components/bitehack/section-label'

function Statement({ text, index, total, progress }: { text: string; index: number; total: number; progress: MotionValue<number> }) {
  const step = 1 / total
  const start = index * step
  const end = start + step
  const input = [start, start + step * 0.3, end - step * 0.3, end]
  const first = index === 0
  const last = index === total - 1
  const opacity = useTransform(progress, input, [first ? 1 : 0, 1, 1, last ? 1 : 0])
  const y = useTransform(progress, input, [first ? 0 : 60, 0, 0, last ? 0 : -60])

  return (
    <motion.p
      style={{ opacity, y }}
      className="col-start-1 row-start-1 text-balance font-serif text-3xl leading-[1.1] text-cream md:text-5xl lg:text-6xl"
    >
      {text}
    </motion.p>
  )
}

function Dot({ index, total, progress }: { index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total
  const scaleX = useTransform(progress, [start, start + 1 / total], [0, 1])
  return (
    <span className="relative h-1 w-12 overflow-hidden rounded-full bg-cream/15">
      <motion.span style={{ scaleX }} className="absolute inset-0 origin-left rounded-full bg-saffron" />
    </span>
  )
}

export function Ingredients() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const total = ABOUT.points.length

  return (
    <section ref={ref} id="about" data-theme="ingredients" aria-labelledby="about-title" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <FloatingFood src={IMAGES.spices} progress={scrollYProgress} distance={260} className="-left-10 bottom-[4%] size-44 md:left-[3%] md:size-72" />
        <FloatingFood src={IMAGES.chili} progress={scrollYProgress} distance={380} rotate={60} floatDelay={1} className="right-[4%] top-[10%] size-24 md:size-40" />
        <FloatingFood src={IMAGES.herbs} progress={scrollYProgress} distance={180} floatDelay={2} className="bottom-[8%] right-[8%] size-32 md:size-56" />
        <FloatingFood src={IMAGES.tomato} progress={scrollYProgress} distance={320} floatDelay={0.6} className="left-[12%] top-[8%] hidden size-28 md:block" />
        <FloatingFood src={IMAGES.spices} progress={scrollYProgress} distance={460} rotate={90} floatDelay={1.6} className="right-[30%] top-[4%] hidden size-20 lg:block" />

        <div className="relative mx-auto w-full max-w-5xl px-6">
          <SectionLabel index="01" label={ABOUT.label} className="text-saffron" />
          <h2 id="about-title" className="sr-only">
            {ABOUT.title}
          </h2>
          <div className="mt-8 grid">
            {ABOUT.points.map((text, i) => (
              <Statement key={text} text={text} index={i} total={total} progress={scrollYProgress} />
            ))}
          </div>
          <div aria-hidden className="mt-12 flex gap-2">
            {ABOUT.points.map((text, i) => (
              <Dot key={text} index={i} total={total} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
