'use client'

import { ExternalLink, Users, Calendar, Trophy, CheckCircle2 } from 'lucide-react'
import { EVENT, FAQ, FEES, REGISTER } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { RevealText } from '@/components/bitehack/reveal-text'
import { SectionLabel } from '@/components/bitehack/section-label'

function RegisterCard() {
  return (
    <div className="rounded-[2rem] border border-saffron/30 bg-cream/[0.04] p-6 backdrop-blur md:p-10 shadow-[0_0_50px_rgba(244,163,0,0.1)]">
      <div className="flex items-center justify-between border-b border-cream/10 pb-6">
        <div>
          <span className="inline-block rounded-full bg-saffron/20 px-3 py-1 font-mono text-xs font-semibold text-saffron border border-saffron/30">
            Official Google Form
          </span>
          <h3 className="mt-2 font-serif text-3xl font-bold text-cream">Registration Portal</h3>
        </div>
        <div className="hidden sm:flex size-14 items-center justify-center rounded-2xl bg-saffron/10 border border-saffron/30 text-saffron">
          <Users className="size-7" />
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm text-cream/80">
        <p className="leading-relaxed">
          Registration for <strong className="text-saffron">BITEHACK 2026: IDEA 2 PLATE</strong> is conducted via the official Google Form. Please ensure details for all team members (3 to 5) are ready before proceeding.
        </p>

        <div className="rounded-xl border border-cream/10 bg-char/60 p-4">
          <p className="font-mono text-xs uppercase tracking-wider text-saffron mb-3">Registration Fee Structure</p>
          <div className="grid grid-cols-2 gap-3">
            {FEES.categories.map((c) => (
              <div key={c.category} className="rounded-lg bg-cream/5 p-2.5">
                <span className="block text-xs font-medium text-cream">{c.category}</span>
                <span className="font-serif text-lg font-bold text-saffron">{c.currency} {c.fee}</span>
                <span className="block text-[10px] text-cream/50">{c.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-xs text-cream/70">
            <CheckCircle2 className="size-4 text-saffron shrink-0" />
            <span>Min 3 to Max 5 Members per team</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-cream/70">
            <Calendar className="size-4 text-saffron shrink-0" />
            <span>Selection: Oct 14 & 15 | Main Event: Oct 26, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-cream/70">
            <Trophy className="size-4 text-saffron shrink-0" />
            <span>₹50,000 Total Prize Pool + Funding Opportunities</span>
          </div>
        </div>
      </div>

      <a
        href={EVENT.registerHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-saffron font-medium text-char transition-all duration-300 hover:bg-cream hover:shadow-[0_0_30px_rgba(244,163,0,0.4)]"
      >
        <span>Register Team on Google Form</span>
        <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </a>
    </div>
  )
}

export function Register() {
  return (
    <section id="register" data-theme="dark" aria-labelledby="register-title" className="py-28 text-cream md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div id="faq" className="scroll-mt-24">
          <SectionLabel index="11" label={FAQ.label} className="text-saffron" />
          <RevealText text={FAQ.title} className="mt-6 font-serif text-5xl leading-none md:text-6xl" />
          <Accordion className="mt-10">
            {FAQ.items.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border-cream/10">
                <AccordionTrigger className={cn('py-5 text-left font-serif text-xl hover:no-underline md:text-2xl')}>{item.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-cream/75">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <SectionLabel index="12" label={REGISTER.label} className="text-saffron" />
          <RevealText id="register-title" text={REGISTER.title} className="mt-6 font-serif text-5xl leading-none md:text-6xl" />
          <p className="mb-8 mt-4 text-cream/75">{REGISTER.description}</p>
          <RegisterCard />
        </div>
      </div>
    </section>
  )
}
