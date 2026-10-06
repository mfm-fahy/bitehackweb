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
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-char"
    >
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,#5a2a0e,#14110F_70%)]">
        <Image
          src={IMAGES.heroPan || '/placeholder.svg'}
          alt="A cast iron pan sizzling with garlic, chili and herbs"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-luminosity"
        />
      </motion.div>
      {/* High-contrast dark overlay to ensure text is 100% crisp and readable */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-char/90 via-char/80 to-char pointer-events-none" />
      <Steam />

      <FloatingFood src={IMAGES.tomato} progress={scrollYProgress} distance={120} className="left-[1%] top-[8%] size-14 sm:size-24 md:size-36 opacity-60 sm:opacity-90 pointer-events-none z-0" />
      <FloatingFood src={IMAGES.chili} progress={scrollYProgress} distance={220} rotate={40} floatDelay={1.2} className="right-[1%] top-[8%] size-14 sm:size-24 md:size-40 opacity-60 sm:opacity-90 pointer-events-none z-0" />
      <FloatingFood src={IMAGES.herbs} progress={scrollYProgress} distance={160} floatDelay={2} className="bottom-[10%] right-[6%] hidden size-36 md:block pointer-events-none z-0" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-16 text-center z-10"
      >
        {/* Presenters Tag */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DELAY - 0.2, duration: 0.6 }}
          className="mb-3 rounded-full border border-saffron/50 bg-char/90 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-saffron backdrop-blur shadow-md sm:px-5 sm:py-2 sm:text-xs md:text-sm"
        >
          {EVENT.presenters}
        </motion.p>

        {/* Main Title */}
        <h1 id="hero-title" className="font-serif text-3xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight text-cream flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-5 py-1 sm:py-2">
          <span className="sr-only">{EVENT.name}</span>
          <span aria-hidden className="flex overflow-hidden pb-[0.05em]">
            {'BITEHACK'.split('').map((char, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ delay: INTRO_DELAY + i * 0.04, duration: 0.8, ease: EASE }}
                className="inline-block drop-shadow-lg"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span aria-hidden className="flex overflow-hidden pb-[0.05em] text-saffron italic">
            {'2026'.split('').map((char, i) => (
              <motion.span
                key={`y-${i}`}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ delay: INTRO_DELAY + 0.32 + i * 0.04, duration: 0.8, ease: EASE }}
                className="inline-block drop-shadow-lg"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: INTRO_DELAY + 0.4, duration: 0.7, ease: EASE }}
          className="mt-2.5 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-saffron/40 bg-char/95 px-3.5 py-1.5 sm:px-6 sm:py-3 shadow-xl backdrop-blur-md max-w-[94vw]"
        >
          <span className="relative size-7 sm:size-10 overflow-hidden rounded-full border border-saffron/60 bg-white p-0.5 shadow-md shrink-0">
            <Image src="/images/logo.png" alt="BITEHACK Logo Emblem" fill className="object-contain" />
          </span>
          <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold tracking-wider text-saffron">IDEA 2 PLATE</span>
          <span className="hidden text-cream/40 md:inline">|</span>
          <span className="hidden font-mono text-xs tracking-widest text-cream/90 md:inline">FROM IDEAS TO COMMERCIAL FOOD PRODUCTS</span>
        </motion.div>

        {/* Host Institution Container - High Contrast Dark Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DELAY + 0.55, duration: 0.8, ease: EASE }}
          className="mt-3.5 sm:mt-5 max-w-2xl rounded-2xl border border-cream/15 bg-char/90 p-3 sm:p-5 shadow-2xl backdrop-blur-md"
        >
          <p className="font-serif text-xs sm:text-lg md:text-xl font-semibold text-cream leading-snug">
            Dr. R. Shivakumar Foundation & SRM Institute of Science & Technology
          </p>
          <p className="mt-1 font-sans text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-saffron">
            (Department of Food Technology & Institute of Hotel Management - Tiruchirappalli)
          </p>
        </motion.div>

        {/* Event Details Info Pills - 2x2 Grid on Mobile for Compact Fit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: INTRO_DELAY + 0.7, duration: 0.8 }}
          className="mt-3.5 sm:mt-6 w-full max-w-2xl"
        >
          <ul className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs text-cream">
            <li className="flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full bg-char/90 px-2.5 py-2 sm:px-4 sm:py-2 border border-cream/20 text-cream font-medium shadow-md text-center">
              <CalendarDays className="size-3.5 text-saffron shrink-0" aria-hidden />
              <span>Selection: Oct 14-15</span>
            </li>
            <li className="flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full bg-saffron text-char px-2.5 py-2 sm:px-4 sm:py-2 border border-saffron font-bold shadow-lg shadow-saffron/20 text-center">
              <CalendarDays className="size-3.5 text-char shrink-0" aria-hidden />
              <span>Main Event: Oct 26</span>
            </li>
            <li className="flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full bg-char/90 px-2.5 py-2 sm:px-4 sm:py-2 border border-cream/20 text-cream font-medium shadow-md text-center">
              <MapPin className="size-3.5 text-saffron shrink-0" aria-hidden />
              <span>SRMIST, Trichy</span>
            </li>
            <li className="flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full bg-char/90 px-2.5 py-2 sm:px-4 sm:py-2 border border-cream/20 text-cream font-medium shadow-md text-center">
              <Timer className="size-3.5 text-saffron shrink-0" aria-hidden />
              <span>3 to 5 Members</span>
            </li>
          </ul>
        </motion.div>

        {/* Primary CTA Buttons - Always Visible in Mobile Viewport */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DELAY + 0.85, duration: 0.8, ease: EASE }}
          className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none"
        >
          <Magnetic className="w-full sm:w-auto">
            <a href={EVENT.registerHref} target="_blank" rel="noopener noreferrer" className={`${ctaClass} w-full justify-center shadow-xl shadow-saffron/20 text-sm sm:text-base py-3 sm:py-3.5`}>
              Register Team Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto">
            <a href="#about" className={`${ghostClass} w-full justify-center text-xs sm:text-base py-2.5 sm:py-3.5`}>
              Explore Event Details
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <a
        href="#ingredients"
        className="absolute bottom-3 left-1/2 flex -translate-x-1/2 [@media(max-height:760px)]:hidden flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70"
      >
        <svg
          aria-hidden
          width="18"
          height="26"
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
        Scroll down
      </a>
    </section>
  )
}
