import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Barlow } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SANKORE Holdings - African Gold Brokerage',
  description: 'Verified African gold sourcing, logistics, and brokerage. Zero upfront fees. Full transparency.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
