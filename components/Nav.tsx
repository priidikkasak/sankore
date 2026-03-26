'use client'

import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? 'rgba(8,8,8,0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 h-[4.5rem] flex items-center justify-between">

          <a href="/" onClick={handleLogoClick} className="flex-shrink-0 gold-shimmer relative z-50">
            <Image src="/sankore-logo.png" alt="SANKORE" width={110} height={22} className="h-[22px] w-auto" priority />
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[0.65rem] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300"
                style={{ color: 'rgba(245,240,232,0.52)', border: '1px solid rgba(201,168,76,0.14)', background: 'transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'rgba(245,240,232,0.92)'
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.42)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(245,240,232,0.52)'
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.14)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta hidden md:inline-block">Start a Transaction</a>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-gold transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px w-6 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-gold transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col px-8 pt-24 pb-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: '#080808' }}
      >
        {/* Nav links with numbered rows */}
        <div className="flex flex-col mt-8 flex-1">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-5 transition-all duration-500 group"
              style={{
                borderTop: '1px solid rgba(201,168,76,0.15)',
                transitionDelay: menuOpen ? `${0.06 + i * 0.06}s` : '0s',
                transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
                opacity: menuOpen ? 1 : 0,
              }}
            >
              <span
                className="font-display font-semibold text-cream"
                style={{ fontSize: 'clamp(2rem, 9vw, 3rem)', lineHeight: 1.1 }}
              >
                {link.label}
              </span>
              <span
                className="font-body"
                style={{ color: '#C9A84C', fontSize: '0.6rem', letterSpacing: '0.25em', opacity: 0.7 }}
              >
                0{i + 1}
              </span>
            </a>
          ))}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }} />
        </div>

        {/* Bottom CTA */}
        <div
          className="transition-all duration-500"
          style={{
            transitionDelay: menuOpen ? '0.28s' : '0s',
            transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <a href="#contact" className="btn-primary block text-center" onClick={() => setMenuOpen(false)}>
            Start a Transaction
          </a>
        </div>
      </div>
    </>
  )
}
