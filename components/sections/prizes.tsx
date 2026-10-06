'use client'

import { animate, motion, useInView } from 'motion/react'
import { Award, Sparkles, Trophy } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { PRIZES } from '@/lib/content'
import { cn } from '@/lib/utils'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

function format(value: number, prefix: string, suffix: string) {
  return `${prefix}${Math.round(value).toLocaleString('en-IN')}${suffix}`
}

function Counter({ value, prefix = '', suffix = '', className }: { value: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v, prefix, suffix)
      },
    })
    return () => controls.stop()
  }, [inView, value, prefix, suffix])

  return (
    <span className={className}>
      <span className="sr-only">{format(value, prefix, suffix)}</span>
      <span ref={ref} aria-hidden className="tabular-nums">
        {format(0, prefix, suffix)}
      </span>
    </span>
  )
}

export function Prizes() {
  return (
    <section id="prizes" data-theme="dark" aria-labelledby="prizes-title" className="relative py-28 text-cream md:py-36 bg-char/95">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel index="09" label={PRIZES.label} className="text-saffron" />
        <RevealText id="prizes-title" text={PRIZES.title} className="mt-6 font-serif text-5xl leading-none md:text-7xl" />
        <p className="mt-4 max-w-xl text-cream/75 text-lg">{PRIZES.description}</p>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 md:grid-cols-4">
          {PRIZES.stats.map((stat) => (
            <div key={stat.label} className="bg-char p-6 md:p-8">
              <dd className="font-serif text-4xl text-saffron md:text-5xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/65">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-widest text-saffron mb-6 flex items-center gap-2">
            <Trophy className="size-4" /> Category Awards (₹10,000 Each)
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRIZES.awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={cn(
                  'relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 backdrop-blur',
                  i === 0 ? 'border-saffron/60 bg-gradient-to-br from-saffron/20 via-cream/[0.04] to-transparent' : 'border-cream/15 bg-cream/[0.04]',
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-saffron/20 text-saffron">
                      <Award className="size-6" />
                    </span>
                    <span className="font-mono text-xs text-saffron font-bold">₹10,000</span>
                  </div>
                  <h4 className="mt-6 font-serif text-2xl text-cream">{award.title}</h4>
                  <Counter value={award.amount} prefix={award.prefix || '₹'} className="mt-2 block font-mono text-3xl font-bold text-saffron" />
                  <p className="mt-3 text-sm text-cream/75 leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate & Incubation Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-saffron/40 bg-gradient-to-r from-saffron/15 via-cream/[0.05] to-saffron/10 p-8 backdrop-blur"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-saffron text-char font-bold">
              <Sparkles className="size-7" />
            </span>
            <div>
              <h4 className="font-serif text-2xl text-cream">Certificates & Commercial Support</h4>
              <p className="mt-1 text-sm text-cream/80">
                Certificates will be provided to all participants. Selected concepts receive opportunities for funding, mentorship, and commercialization through the Dr. R. Shivakumar Foundation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
