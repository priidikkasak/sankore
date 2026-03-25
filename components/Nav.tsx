'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[rgba(10,10,10,0.97)] border-b border-[rgba(201,168,76,0.12)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-[4.5rem] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex-shrink-0 gold-shimmer">
          <Image src="/sankore-logo.png" alt="SANKORE" width={120} height={24} className="h-6 w-auto" />
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {['How It Works', 'Why Us', 'Contact'].map((label, i) => (
            <a
              key={label}
              href={['#how-it-works', '#why-sankore', '#contact'][i]}
              className="font-body text-xs tracking-[0.18em] uppercase transition-colors duration-200"
              style={{ color: 'rgba(245,240,232,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="nav-cta hidden md:inline-block">
          Start a Transaction
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-5 h-px bg-gold transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-gold transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[rgba(201,168,76,0.1)] px-8 pb-8 pt-5 flex flex-col gap-6">
          {['How It Works', 'Why Us', 'Contact'].map((label, i) => (
            <a key={label} href={['#how-it-works','#why-sankore','#contact'][i]}
              className="font-body text-xs tracking-[0.18em] uppercase text-cream"
              onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center" onClick={() => setMenuOpen(false)}>
            Start a Transaction
          </a>
        </div>
      )}
    </nav>
  )
}
