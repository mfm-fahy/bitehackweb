import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'BITEHACK 2026 | IDEA 2 PLATE - From Ideas to Commercial Food Products',
  description:
    'BITEHACK 2026: IDEA2PLATE presented by Future Food Forum, Dr. R. Shivakumar Foundation & SRMIST. Selection: Oct 14 & 15, 2026 | Main Event: Oct 26, 2026. ₹50,000 Prize Pool.',
  keywords: ['BITEHACK', 'IDEA2PLATE', 'SRMIST', 'Dr. R. Shivakumar Foundation', 'Food Technology', 'Hotel Management', 'Food Hackathon', 'Commercial Food Products'],
  openGraph: {
    title: 'BITEHACK 2026 | IDEA 2 PLATE',
    description: 'From Ideas to Commercial Food Products. Presented by Future Food Forum, Dr. R. Shivakumar Foundation & SRMIST.',
    images: [{ url: '/images/hero-pan.png', width: 1600, height: 900, alt: 'BITEHACK 2026 IDEA 2 PLATE' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BITEHACK 2026 | IDEA 2 PLATE',
    description: 'From Ideas to Commercial Food Products. Presented by Future Food Forum, Dr. R. Shivakumar Foundation & SRMIST.',
    images: ['/images/hero-pan.png'],
  },
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#14110F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
