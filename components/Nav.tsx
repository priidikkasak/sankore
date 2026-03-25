'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(10,10,10,0.95)] border-b border-[rgba(201,168,76,0.15)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-gold text-xl tracking-[0.2em] font-semibold gold-shimmer">
            SANKORE
          </span>
          <span className="font-body text-cream text-[0.5rem] tracking-[0.35em] uppercase mt-0.5 opacity-70">
            Holdings
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="font-body text-sm tracking-wider hover:text-cream transition-colors" style={{ color: 'rgba(245,240,232,0.6)' }}>How It Works</a>
          <a href="#why-sankore"   className="font-body text-sm tracking-wider hover:text-cream transition-colors" style={{ color: 'rgba(245,240,232,0.6)' }}>Why Us</a>
          <a href="#contact"       className="font-body text-sm tracking-wider hover:text-cream transition-colors" style={{ color: 'rgba(245,240,232,0.6)' }}>Contact</a>
          <a href="#contact" className="font-body text-sm tracking-[0.1em] uppercase border border-gold text-gold px-5 py-2 hover:bg-gold hover:text-black transition-all duration-200">
            Start a Transaction
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-gold transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D0B08] border-t border-[rgba(201,168,76,0.15)] px-6 pb-6 pt-4 flex flex-col gap-5">
          <a href="#how-it-works" className="font-body text-cream text-sm tracking-wider" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#why-sankore"  className="font-body text-cream text-sm tracking-wider" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#contact"      className="font-body text-cream text-sm tracking-wider" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="font-body text-sm tracking-[0.1em] uppercase border border-gold text-gold px-5 py-3 text-center hover:bg-gold hover:text-black transition-all duration-200" onClick={() => setMenuOpen(false)}>
            Start a Transaction
          </a>
        </div>
      )}
    </nav>
  )
}
