'use client'

import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { CRITERIA } from '@/lib/content'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

export function Protein() {
  return (
    <section id="criteria" data-theme="dark" aria-labelledby="criteria-title" className="relative py-28 text-cream md:py-40 bg-char">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel index="05" label={CRITERIA.label} className="text-saffron" />
        <RevealText id="criteria-title" text={CRITERIA.title} className="mt-6 max-w-3xl font-serif text-5xl leading-none md:text-7xl" />
        <p className="mt-6 max-w-xl text-pretty text-lg text-cream/75">{CRITERIA.description}</p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CRITERIA.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-3xl border border-cream/15 bg-cream/[0.04] p-6 backdrop-blur transition-colors hover:border-saffron/40"
            >
              <div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-6 text-saffron shrink-0" />
                  <span className="font-mono text-xs text-saffron">{`PILLAR 0${i + 1}`}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-cream">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
