'use client'

import Image from 'next/image'
import { motion, useMotionValue, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'
import { DOMAINS } from '@/lib/content'
import { useMediaQuery } from '@/hooks/use-media-query'
import { SectionLabel } from '@/components/bitehack/section-label'

type Item = (typeof DOMAINS.items)[number]

function DomainCard({ item, index }: { item: Item; index: number }) {
  return (
    <motion.article className="group w-[80vw] shrink-0 snap-center sm:w-[280px] lg:w-[300px]">
      <div className="relative flex h-[340px] sm:h-[350px] lg:h-[350px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-cream/15 bg-char shadow-2xl shadow-black/60 backdrop-blur-md transition-all duration-500 hover:border-saffron/80 hover:shadow-saffron/20">
        {/* Background Image */}
        {item.image && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 300px, 80vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-75 group-hover:opacity-90"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-char via-char/75 to-char/30 group-hover:via-char/55 transition-colors duration-500" />
          </div>
        )}

        {/* Card Overlay Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6 text-cream">
          {/* Top Tag */}
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-char/80 px-3 py-0.5 font-mono text-[10px] font-semibold text-saffron border border-cream/15 backdrop-blur-md shadow-sm">
              {`DOMAIN ${String(index + 1).padStart(2, '0')}`}
            </span>
            <span className="size-2 rounded-full bg-saffron animate-ping" />
          </div>

          {/* Bottom Details */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-cream group-hover:text-saffron transition-colors drop-shadow-md">
              {item.name}
            </h3>
            <p className="mt-1.5 text-xs text-cream/90 font-sans leading-snug drop-shadow-sm line-clamp-2">
              {item.note}
            </p>
            <div className="mt-3 flex items-center justify-between border-t border-cream/20 pt-2.5 font-mono text-[11px]">
              <span className="text-[10px] uppercase tracking-widest text-cream/60">BITEHACK 2026</span>
              <span className="font-semibold text-saffron group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Explore Domain →
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Harvest() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const distance = useMotionValue(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform([scrollYProgress, distance], ([p, d]: number[]) => -p * d)

  useEffect(() => {
    const track = trackRef.current
    if (!isDesktop || !track) {
      distance.set(0)
      return
    }
    const measure = () => distance.set(Math.max(0, track.scrollWidth - window.innerWidth))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [isDesktop, distance])

  return (
    <section
      ref={sectionRef}
      id="domains"
      data-theme="harvest"
      aria-labelledby="domains-title"
      className="relative text-cream lg:h-[350vh]"
    >
      <div className="flex flex-col justify-start gap-4 pt-28 pb-16 sm:pt-32 lg:sticky lg:top-0 lg:h-svh lg:overflow-hidden lg:pt-28 lg:pb-12 lg:gap-5">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionLabel index="03" label={DOMAINS.label} className="text-saffron" />
          <div className="mt-2 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <h2 id="domains-title" className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              {DOMAINS.title}
            </h2>
            <p className="max-w-sm text-xs text-cream/80 md:text-sm">{DOMAINS.description}</p>
          </div>
        </div>
        <div className="no-scrollbar snap-x snap-mandatory overflow-x-auto lg:overflow-visible mt-2">
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 px-6 lg:gap-6 lg:px-[8vw]">
            {DOMAINS.items.map((item, i) => (
              <DomainCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
