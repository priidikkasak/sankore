'use client'

import { useEffect, useRef } from 'react'

const usps = [
  {
    label: "Zero Upfront Fees",
    body: "We don't ask for your money before we've earned it. Every competitor will ask for a processing fee. We don't. Full stop.",
  },
  {
    label: "End-to-End Logistics",
    body: "Insurance, transport, customs clearance, delivery to Dubai or beyond - SANKORE handles it. You source capital. We handle everything else.",
  },
  {
    label: "Real African Network",
    body: "Years building direct relationships with licensed, verifiable gold producers. No second-hand sourcing. No inflated chain.",
  },
  {
    label: "Transparent Documentation",
    body: "Assay reports, chain of custody, insurance certificates - you receive copies of everything. No black boxes.",
  },
]

export default function WhySankore() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-sankore" ref={sectionRef} className="py-28 md:py-36" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        <div className="reveal mb-16 md:mb-24">
          <h2 className="font-display font-semibold text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Why SANKORE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {usps.map((usp, i) => (
            <div
              key={usp.label}
              className="reveal p-10 md:p-14 cursor-default transition-all duration-300"
              style={{
                border: '1px solid rgba(201,168,76,0.13)',
                background: 'rgba(255,255,255,0.012)',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.32)'
                e.currentTarget.style.background = 'rgba(201,168,76,0.03)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.13)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.012)'
              }}
            >
              <p className="font-body mb-4" style={{ color: '#C9A84C', fontSize: '0.63rem', letterSpacing: '0.32em', textTransform: 'uppercase' }}>
                {usp.label}
              </p>
              <p className="font-display font-normal leading-snug" style={{ color: 'rgba(245,240,232,0.85)', fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)' }}>
                {usp.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
