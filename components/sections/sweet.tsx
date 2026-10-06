'use client'

import { motion } from 'motion/react'
import { FEES } from '@/lib/content'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'
import { CreditCard, Tag } from 'lucide-react'

export function Sweet() {
  return (
    <section id="fees" data-theme="dark" aria-labelledby="fees-title" className="relative py-28 text-cream md:py-36 bg-char/90 border-t border-cream/10">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel index="06" label={FEES.label} className="text-saffron" />
        <RevealText id="fees-title" text={FEES.title} className="mt-6 max-w-3xl font-serif text-5xl leading-none md:text-7xl" />
        <p className="mt-6 max-w-xl text-pretty text-lg text-cream/75">
          Standardized participation fees for all categories. Team registration includes access to selection rounds, evaluation, and certification.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEES.categories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 backdrop-blur transition-all duration-300 hover:border-saffron/60 hover:bg-cream/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-saffron/20 text-saffron">
                    <Tag className="size-6" />
                  </span>
                  <CreditCard className="size-5 text-cream/40 group-hover:text-saffron transition-colors" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-cream">{cat.category}</h3>
                <p className="mt-1 font-mono text-xs text-cream/60">{cat.note}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-cream/10">
                <span className="font-mono text-xs uppercase tracking-wider text-cream/50">Fee per member</span>
                <p className="mt-1 font-serif text-4xl font-bold text-saffron">
                  {cat.currency}{cat.fee}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
