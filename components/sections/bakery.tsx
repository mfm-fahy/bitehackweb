'use client'

import { motion } from 'motion/react'
import { Lightbulb, Hammer, Presentation, Users, TrendingUp } from 'lucide-react'
import { WHY_PARTICIPATE } from '@/lib/content'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

const STEP_ICONS = [Lightbulb, Hammer, Presentation, Users, TrendingUp]

export function Bakery() {
  return (
    <section id="why-participate" data-theme="dark" aria-labelledby="why-title" className="relative py-28 text-cream md:py-40 bg-char/95 border-y border-cream/10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel index="04" label={WHY_PARTICIPATE.label} className="text-saffron" />
        <RevealText id="why-title" text={WHY_PARTICIPATE.title} className="mt-6 max-w-3xl font-serif text-3xl sm:text-5xl leading-none md:text-7xl" />
        <p className="mt-4 max-w-xl text-pretty text-base sm:text-lg text-cream/75">{WHY_PARTICIPATE.description}</p>

        <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_PARTICIPATE.steps.map((step, i) => {
            const Icon = STEP_ICONS[i]
            return (
              <motion.div
                key={step.tag}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04] p-5 sm:p-6 backdrop-blur transition-all duration-300 hover:border-saffron/50 hover:bg-cream/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-saffron text-char font-bold">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-saffron">{`STEP 0${i + 1}`}</span>
                  </div>
                  <span className="mt-6 inline-block rounded-md bg-saffron/20 px-2.5 py-1 font-mono text-xs font-bold text-saffron">
                    {step.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-cream">{step.title}</h3>
                  <p className="mt-3 text-sm text-cream/75 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
