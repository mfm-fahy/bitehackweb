'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, CalendarDays, MapPin, Timer } from 'lucide-react'
import { useRef } from 'react'
import { EVENT, IMAGES } from '@/lib/content'
import { FloatingFood } from '@/components/bitehack/floating-food'
import { Magnetic, ctaClass, ghostClass } from '@/components/bitehack/magnetic'

const EASE = [0.22, 1, 0.36, 1] as const
const INTRO_DELAY = 1.6

function Steam() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[18%] flex justify-center">
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          className="absolute size-28 rounded-full bg-cream/25 blur-2xl md:size-40"
          style={{
            left: `${38 + ((i * 13) % 26)}%`,
            animation: `steam ${5 + (i % 3)}s ease-out ${i * 0.8}s infinite`,
            ['--drift' as string]: `${(i % 2 === 0 ? -1 : 1) * (20 + i * 6)}px`,
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.3])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      data-theme="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,#5a2a0e,#14110F_70%)]">
        <Image
          src={IMAGES.heroPan || '/placeholder.svg'}
          alt="A cast iron pan sizzling with garlic, chili and herbs"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-char/70 via-char/40 to-char" />
      <Steam />

      <FloatingFood src={IMAGES.tomato} progress={scrollYProgress} distance={120} className="left-[2%] top-[18%] size-24 md:size-40" />
      <FloatingFood src={IMAGES.chili} progress={scrollYProgress} distance={220} rotate={40} floatDelay={1.2} className="right-[4%] top-[14%] size-24 md:size-44" />
      <FloatingFood src={IMAGES.herbs} progress={scrollYProgress} distance={160} floatDelay={2} className="bottom-[10%] right-[10%] hidden size-36 md:block" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-24 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DELAY - 0.2, duration: 0.6 }}
          className="mb-4 rounded-full border border-saffron/40 bg-saffron/15 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-saffron backdrop-blur md:text-sm"
        >
          {EVENT.presenters}
        </motion.p>

        <h1 id="hero-title" className="font-serif text-[15vw] font-bold leading-[0.85] tracking-tight text-cream md:text-[11vw] xl:text-[9.5rem]">
          <span className="sr-only">{EVENT.name}</span>
          <span aria-hidden className="inline-flex overflow-hidden pb-[0.08em]">
            {'BITEHACK 2026'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ delay: INTRO_DELAY + i * 0.04, duration: 0.8, ease: EASE }}
                className={i >= 8 ? 'inline-block italic text-saffron' : 'inline-block'}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: INTRO_DELAY + 0.4, duration: 0.7, ease: EASE }}
          className="mt-4 inline-flex items-center gap-3 rounded-3xl border border-cream/20 bg-char/80 px-6 py-3 shadow-2xl backdrop-blur"
        >
          <span className="relative size-10 overflow-hidden rounded-full border border-saffron/50 bg-white p-0.5 shadow-md">
            <Image src="/images/logo.png" alt="BITEHACK Logo Emblem" fill className="object-contain" />
          </span>
          <span className="font-serif text-2xl font-bold tracking-wider text-saffron md:text-3xl">IDEA 2 PLATE</span>
          <span className="hidden text-cream/40 md:inline">|</span>
          <span className="hidden font-mono text-xs tracking-widest text-cream/80 md:inline">FROM IDEAS TO COMMERCIAL FOOD PRODUCTS</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DELAY + 0.55, duration: 0.8, ease: EASE }}
          className="mt-6 max-w-3xl text-pretty font-serif text-lg text-cream/90 md:text-2xl"
        >
          Dr. R Shivakumar Foundation & SRM Institute of Science & Technology
          <br className="hidden sm:inline" />
          <span className="font-sans text-sm tracking-wide text-cream/75 sm:text-base">
            (Department of Food Technology & Institute of Hotel Management - Tiruchirappalli)
          </span>
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: INTRO_DELAY + 0.7, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-xs text-cream/90 md:text-sm"
        >
          <li className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 border border-cream/15">
            <CalendarDays className="size-4 text-saffron" aria-hidden /> Selection: 14th & 15th Oct 2026
          </li>
          <li className="flex items-center gap-2 rounded-full bg-saffron/20 px-4 py-2 border border-saffron/40 text-saffron">
            <CalendarDays className="size-4 text-saffron" aria-hidden /> Main Event: 26th Oct 2026
          </li>
          <li className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 border border-cream/15">
            <MapPin className="size-4 text-saffron" aria-hidden /> SRMIST, Tiruchirappalli
          </li>
          <li className="flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 border border-cream/15">
            <Timer className="size-4 text-saffron" aria-hidden /> Min 3 to Max 5 Members
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DELAY + 0.85, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <a href={EVENT.registerHref} target="_blank" rel="noopener noreferrer" className={ctaClass}>
              Register Team Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#about" className={ghostClass}>
              Explore Event Details
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <a
        href="#ingredients"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 [@media(max-height:760px)]:hidden flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70"
      >
        <svg
          aria-hidden
          width="20"
          height="30"
          viewBox="0 0 24 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-saffron"
          style={{ animation: 'fork-bob 1.6s ease-in-out infinite' }}
        >
          <path d="M6 2v7a6 6 0 0 0 12 0V2" />
          <path d="M12 2v9" />
          <path d="M12 15v15" />
        </svg>
        Scroll to taste
      </a>
    </section>
  )
}
