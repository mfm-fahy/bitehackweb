'use client'

import { motion } from 'motion/react'
import { Cpu, Leaf, Recycle } from 'lucide-react'
import { FOCUS_AREAS } from '@/lib/content'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

const ICONS = [Leaf, Recycle, Cpu]

function Embers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 28 }).map((_, i) => {
        const size = 2 + (i % 4)
        return (
          <span
            key={i}
            className="absolute bottom-[-10px] rounded-full bg-saffron shadow-[0_0_10px_2px_rgba(244,163,0,0.8)]"
            style={{
              left: `${(i * 37) % 100}%`,
              width: size,
              height: size,
              animation: `ember ${6 + (i % 5)}s linear ${(i * 0.45) % 6}s infinite`,
              ['--drift' as string]: `${((i % 7) - 3) * 25}px`,
            }}
          />
        )
      })}
    </div>
  )
}

export function Fire() {
  return (
    <section id="focus-areas" data-theme="fire" aria-labelledby="focus-title" className="relative overflow-hidden py-28 text-cream md:py-40">
      <Embers />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[70vh] w-[130vw] -translate-x-1/2 animate-flicker rounded-[50%] bg-[radial-gradient(closest-side,rgba(244,163,0,0.85),rgba(230,57,70,0.4),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel index="02" label={FOCUS_AREAS.label} className="text-saffron" />
        <RevealText id="focus-title" text={FOCUS_AREAS.title} className="mt-6 max-w-3xl font-serif text-3xl sm:text-5xl leading-[1] md:text-7xl" />
        <p className="mt-4 max-w-xl text-pretty text-base sm:text-lg text-cream/85">{FOCUS_AREAS.description}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FOCUS_AREAS.tracks.map((track, i) => {
            const Icon = ICONS[i]
            return (
              <motion.article
                key={track.id}
                initial={{ opacity: 0, y: 70, rotate: i === 1 ? 0 : i === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-cream/15 bg-char/75 p-6 sm:p-8 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-saffron text-char transition-transform duration-500 group-hover:rotate-12">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-saffron">{track.id}</span>
                </div>
                <h3 className="mt-8 font-serif text-3xl">{track.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-cream/75">{track.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-cream/20 px-3 py-1 font-mono text-[11px] text-cream/80">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden
                  className="absolute -bottom-20 -right-20 size-48 rounded-full bg-tomato/30 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
                />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
