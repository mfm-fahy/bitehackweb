'use client'

import { motion } from 'motion/react'
import { Mail, UserCheck, Users } from 'lucide-react'
import { COORDINATORS } from '@/lib/content'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

export function Judges() {
  return (
    <section id="coordinators" data-theme="dark" aria-labelledby="coordinators-title" className="py-28 text-cream md:py-36 bg-char">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel index="08" label={COORDINATORS.label} className="text-saffron" />
        <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <RevealText id="coordinators-title" text={COORDINATORS.title} className="font-serif text-5xl leading-none md:text-7xl" />
          <p className="max-w-md text-cream/75">{COORDINATORS.description}</p>
        </div>

        {/* Executive Coordinators */}
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-saffron mb-6 flex items-center gap-2">
            <UserCheck className="size-4" /> Executive Coordinators
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COORDINATORS.coordinators.map((coord, i) => (
              <motion.div
                key={coord.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col justify-between rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 backdrop-blur transition-all duration-300 hover:border-saffron/50 hover:bg-cream/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-saffron">{`COORDINATOR 0${i + 1}`}</span>
                  </div>
                  <h4 className="mt-4 font-serif text-2xl text-cream">{coord.name}</h4>
                  <p className="mt-1 font-semibold text-saffron text-sm">{coord.role}</p>
                  <p className="mt-2 text-xs text-cream/75 leading-relaxed">{coord.institution}</p>
                </div>
                {coord.email && (
                  <div className="mt-6 pt-4 border-t border-cream/10">
                    <a
                      href={`mailto:${coord.email}`}
                      className="inline-flex items-center gap-2 text-xs font-mono text-saffron hover:text-cream transition-colors break-all"
                    >
                      <Mail className="size-3.5 shrink-0" />
                      {coord.email}
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Co-Coordinators */}
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-saffron mb-6 flex items-center gap-2">
            <Users className="size-4" /> Co-Coordinators
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {COORDINATORS.coCoordinators.map((coCoord, i) => (
              <motion.div
                key={coCoord.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-5 rounded-3xl border border-cream/15 bg-cream/[0.03] p-6 backdrop-blur"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-saffron/20 font-serif text-xl text-saffron font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-cream">{coCoord.name}</h4>
                  <p className="mt-1 text-sm text-saffron font-medium">{coCoord.role}</p>
                  <p className="mt-0.5 text-xs text-cream/70">{coCoord.department}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
