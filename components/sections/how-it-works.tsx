'use client'

import { AnimatePresence, motion, useInView, useScroll } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { JOURNEY } from '@/lib/content'
import { cn } from '@/lib/utils'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

type Stage = (typeof JOURNEY.stages)[number]

function StepItem({ stage, index, active, onActive }: { stage: Stage; index: number; active: boolean; onActive: (i: number) => void }) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <li ref={ref} className="flex min-h-[35vh] items-center lg:min-h-[55vh]">
      <div
        className={cn(
          'w-full rounded-3xl border p-8 transition-all duration-500 md:p-10',
          active ? 'border-saffron/60 bg-cream/[0.08] opacity-100 shadow-xl shadow-saffron/5' : 'border-cream/10 opacity-40',
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-saffron">{`STAGE 0${index + 1}`}</span>
          <span className="rounded-full bg-saffron/20 px-3 py-1 font-mono text-xs text-saffron">{stage.date}</span>
        </div>
        <span className="mt-3 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-saffron">{stage.tag}</span>
        <h3 className="mt-2 font-serif text-3xl md:text-4xl">{stage.title}</h3>
        <p className="mt-4 max-w-md text-pretty text-base text-cream/80 leading-relaxed">{stage.description}</p>
      </div>
    </li>
  )
}

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] })

  return (
    <section id="journey" data-theme="dark" aria-labelledby="journey-title" className="relative pb-20 pt-40 text-cream md:pt-56">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="self-start lg:sticky lg:top-32">
          <SectionLabel index="07" label={JOURNEY.label} className="text-saffron" />
          <RevealText id="journey-title" text={JOURNEY.title} className="mt-6 font-serif text-5xl leading-none md:text-7xl" />

          <div aria-hidden className="mt-12 hidden items-end gap-6 lg:flex">
            <div className="relative h-40 w-24 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 font-serif text-[9rem] leading-none text-saffron"
                >
                  {active + 1}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="pb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-cream/60">{`/ 0${JOURNEY.stages.length}`}</p>
              <p className="mt-1 font-serif text-2xl">{JOURNEY.stages[active].tag}</p>
            </div>
          </div>

          <div aria-hidden className="mt-8 hidden h-1 w-full max-w-xs overflow-hidden rounded-full bg-cream/10 lg:block">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-gradient-to-r from-saffron to-tomato" />
          </div>
        </div>

        <ol ref={listRef} className="flex flex-col">
          {JOURNEY.stages.map((stage, i) => (
            <StepItem key={stage.title} stage={stage} index={i} active={active === i} onActive={setActive} />
          ))}
        </ol>
      </div>
    </section>
  )
}
