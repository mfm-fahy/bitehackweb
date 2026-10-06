'use client'

import { motion } from 'motion/react'
import { SCHEDULE } from '@/lib/content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

export function Schedule() {
  return (
    <section id="schedule" data-theme="dark" aria-labelledby="schedule-title" className="py-28 text-cream md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel index="10" label={SCHEDULE.label} className="text-saffron" />
        <RevealText id="schedule-title" text={SCHEDULE.title} className="mt-6 font-serif text-5xl leading-none md:text-7xl" />

        <Tabs defaultValue={SCHEDULE.days[0].id} className="mt-12">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-full bg-cream/[0.06] p-1.5 sm:w-auto">
            {SCHEDULE.days.map((day) => (
              <TabsTrigger
                key={day.id}
                value={day.id}
                className="rounded-full px-5 py-2.5 font-mono text-xs text-cream/70 data-[active]:bg-saffron data-[active]:text-char"
              >
                {day.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {SCHEDULE.days.map((day) => (
            <TabsContent key={day.id} value={day.id} className="mt-8">
              <p className="font-serif text-3xl italic text-saffron">{day.theme}</p>
              <ol className="mt-6 divide-y divide-cream/10 border-y border-cream/10">
                {day.items.map((item, i) => (
                  <motion.li
                    key={item.time + item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[6rem_1fr_auto]"
                  >
                    <time className="font-mono text-sm text-saffron">{item.time}</time>
                    <span className="font-serif text-xl transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">{item.title}</span>
                    <span className="col-start-2 font-mono text-xs text-cream/60 sm:col-start-auto">{item.tag}</span>
                  </motion.li>
                ))}
              </ol>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
