'use client'

import { useEffect, useState } from 'react'

const THEMES: Record<string, string> = {
  hero: 'radial-gradient(circle at 50% 70%, #3a1d0c 0%, #14110F 65%)',
  ingredients: 'radial-gradient(circle at 75% 25%, #3d2410 0%, #1a1310 45%, #14110F 80%)',
  fire: 'linear-gradient(180deg, #4a0d08 0%, #9e2716 45%, #d4561a 80%, #f08a1c 100%)',
  harvest: 'linear-gradient(160deg, #10261a 0%, #24552f 50%, #6d7a22 100%)',
  bakery: 'radial-gradient(circle at 30% 20%, #fffaf0 0%, #FFF4E0 45%, #f6e2bf 100%)',
  protein: 'linear-gradient(180deg, #0b2638 0%, #12202a 50%, #1b1917 100%)',
  sweet: 'linear-gradient(180deg, #fbe0e4 0%, #f6cbd2 60%, #efb7c1 100%)',
  dark: 'radial-gradient(circle at 50% 0%, #2a1a12 0%, #14110F 60%)',
}

export function ScrollBackground() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-theme]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.getAttribute('data-theme') ?? 'dark')
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 bg-char">
      {Object.entries(THEMES).map(([key, background]) => (
        <div
          key={key}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ background, opacity: active === key ? 1 : 0 }}
        />
      ))}
    </div>
  )
}
