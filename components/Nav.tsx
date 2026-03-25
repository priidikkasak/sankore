'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us',       href: '#why-sankore' },
  { label: 'Contact',      href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[rgba(201,168,76,0.1)]'
          : ''
      }`}
        style={{
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 h-[4.5rem] flex items-center justify-between">

          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex-shrink-0 gold-shimmer">
            <Image
              src="/sankore-logo.png"
              alt="SANKORE"
              width={110}
              height={22}
              className="h-[22px] w-auto"
              priority
            />
          </a>

          {/* Desktop center links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-body text-[0.68rem] tracking-[0.2em] uppercase mx-5 transition-colors duration-200"
                style={{ color: 'rgba(245,240,232,0.52)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.52)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="#contact" className="nav-cta hidden md:inline-block">
            Start a Transaction
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-px bg-gold transition-all duration-300 origin-center ${menuOpen ? 'w-5 rotate-45 translate-y-[6px]' : 'w-5'}`} />
            <span className={`block h-px bg-gold transition-all duration-300 ${menuOpen ? 'w-5 opacity-0' : 'w-5'}`} />
            <span className={`block h-px bg-gold transition-all duration-300 origin-center ${menuOpen ? 'w-5 -rotate-45 -translate-y-[6px]' : 'w-5'}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ background: 'rgba(8,8,8,0.98)', borderTop: menuOpen ? '1px solid rgba(201,168,76,0.1)' : 'none' }}
        >
          <div className="px-8 pt-5 pb-8 flex flex-col gap-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-[0.2em] uppercase"
                style={{ color: 'rgba(245,240,232,0.7)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Start a Transaction
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
