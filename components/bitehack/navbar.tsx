'use client'

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { EVENT, NAV_LINKS } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Magnetic } from './magnetic'

import Image from 'next/image'

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(current > previous && current > 160)
    setScrolled(current > 40)
  })

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-110%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-1 z-[65] px-3 md:px-6"
      >
        <nav
          aria-label="Main"
          className={cn(
            'mx-auto mt-2 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-colors duration-300 md:px-6',
            scrolled ? 'border border-cream/10 bg-char/75 backdrop-blur-md' : 'bg-transparent',
          )}
        >
          <a href="#top" className="flex items-center gap-3 font-serif text-2xl font-semibold text-cream tracking-tight">
            <span className="relative size-9 overflow-hidden rounded-full border border-saffron/40 bg-white p-0.5">
              <Image src="/images/logo.png" alt="BITEHACK Logo" fill className="object-contain" />
            </span>
            <span>BITEHACK <span className="text-saffron">2026</span></span>
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-cream/80 transition-colors hover:text-saffron">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Magnetic className="hidden sm:inline-block">
              <a
                href={EVENT.registerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-saffron px-5 py-2.5 text-sm font-medium text-char transition-colors hover:bg-cream"
              >
                Register
              </a>
            </Magnetic>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-lenis-prevent
            initial={{ clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[64] flex flex-col justify-between overflow-y-auto bg-char px-6 pb-10 pt-28 lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
              className="flex flex-col gap-2"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 py-1 font-serif text-3xl sm:text-4xl md:text-5xl text-cream transition-colors hover:text-saffron"
                  >
                    <span className="font-mono text-xs text-saffron">{String(i + 1).padStart(2, '0')}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <p className="mt-10 font-mono text-xs text-cream/60">
              {EVENT.date} · {EVENT.location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
