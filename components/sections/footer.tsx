'use client'

import { Mail } from 'lucide-react'
import { useActionState } from 'react'
import { subscribeAction, type SubscribeState } from '@/app/actions'
import { EVENT, FOOTER } from '@/lib/content'
import { Input } from '@/components/ui/input'

export function Footer() {
  const [state, formAction, pending] = useActionState<SubscribeState, FormData>(subscribeAction, { status: 'idle' })

  return (
    <footer data-theme="dark" className="relative overflow-hidden border-t border-cream/10 pt-16 text-cream bg-char">
      <div aria-label="Organizers" className="overflow-hidden border-b border-cream/10 pb-12">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-saffron">Organized & Presented By</p>
        <div className="flex w-max animate-marquee gap-14">
          {[...FOOTER.organizers, ...FOOTER.organizers].map((org, i) => (
            <span key={i} aria-hidden={i >= FOOTER.organizers.length} className="whitespace-nowrap font-serif text-2xl italic text-cream/75 md:text-3xl">
              {org}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-bold">
            BITEHACK <span className="text-saffron">2026</span>
          </p>
          <p className="mt-1 font-serif text-xl text-saffron">IDEA 2 PLATE</p>
          <p className="mt-3 max-w-xs text-sm text-cream/70 leading-relaxed">
            {EVENT.location}
            <br />
            Selection: {EVENT.selectionDates} | Main Event: {EVENT.eventDate}
          </p>
          <form action={formAction} className="mt-8 max-w-sm">
            <label htmlFor="newsletter" className="text-sm font-medium">
              Subscribe for Event Updates
            </label>
            <div className="mt-2 flex gap-2">
              <Input id="newsletter" name="email" type="email" required placeholder="your.email@ist.srmtrichy.edu.in" className="h-12 rounded-full bg-char/60 px-5 text-sm" />
              <button type="submit" disabled={pending} className="h-12 shrink-0 rounded-full bg-saffron px-5 font-medium text-char transition-colors hover:bg-cream disabled:opacity-70">
                {pending ? '...' : 'Subscribe'}
              </button>
            </div>
            <p role="status" className={state.status === 'error' ? 'mt-2 text-sm text-[#ff8a8a]' : 'mt-2 text-sm text-basil'}>
              {state.message}
            </p>
          </form>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-saffron">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/80">
            <li><a href="#about" className="hover:text-saffron transition-colors">About IDEA2PLATE</a></li>
            <li><a href="#focus-areas" className="hover:text-saffron transition-colors">Focus Areas</a></li>
            <li><a href="#domains" className="hover:text-saffron transition-colors">Suggested Domains</a></li>
            <li><a href="#why-participate" className="hover:text-saffron transition-colors">Why Participate</a></li>
            <li><a href="#journey" className="hover:text-saffron transition-colors">IDEA2PLATE Journey</a></li>
            <li><a href="#prizes" className="hover:text-saffron transition-colors">Prize Pool & Awards</a></li>
            <li><a href="#coordinators" className="hover:text-saffron transition-colors">Coordinators</a></li>
            <li><a href={EVENT.registerHref} target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors">Register Team</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-saffron">Contact Coordinators</p>
          <div className="mt-4 flex flex-col gap-4 text-sm">
            {FOOTER.contactEmails.map((c) => (
              <div key={c.email}>
                <p className="font-medium text-cream">{c.name}</p>
                <a href={`mailto:${c.email}`} className="mt-1 flex items-center gap-2 text-xs font-mono text-saffron hover:text-cream transition-colors break-all">
                  <Mail className="size-3.5 shrink-0" />
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <a href="#top" className="mt-8 block text-xs font-mono uppercase tracking-wider text-cream/50 hover:text-saffron transition-colors">
            ↑ Back to the top
          </a>
        </div>
      </div>

      <div className="px-6 pb-8 border-t border-cream/10 pt-8">
        <p aria-hidden className="select-none text-center font-serif text-[14vw] font-bold italic leading-[0.8] text-saffron/90">
          {FOOTER.signoff}
        </p>
        <p className="mt-6 text-center font-mono text-xs text-cream/50">{`© 2026 BITEHACK IDEA 2 PLATE. SRM Institute of Science & Technology & Dr. R. Shivakumar Foundation.`}</p>
      </div>
    </footer>
  )
}
