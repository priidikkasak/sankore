'use client'

import { useEffect, useRef } from 'react'

const usps = [
  {
    label: 'Zero Upfront Fees',
    body: "We don't ask for your money before we've earned it. Every competitor will ask for a processing fee. We don't. Full stop.",
  },
  {
    label: 'End-to-End Logistics',
    body: 'Insurance, transport, customs clearance, delivery to Dubai or beyond — SANKORE handles it. You source capital. We handle everything else.',
  },
  {
    label: 'Real African Network',
    body: 'Our partner in Africa has spent years building direct relationships with licensed, verifiable gold producers. No second-hand sourcing. No inflated chain.',
  },
  {
    label: 'Transparent Documentation',
    body: 'Every step is documented. Assay reports, chain of custody, insurance certificates — you receive copies of everything. No black boxes.',
  },
]

export default function WhySankore() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-sankore" ref={sectionRef} className="bg-[#13110A] py-28 md:py-36 border-t border-[rgba(201,168,76,0.12)]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        <div className="reveal mb-20 md:mb-28 grid md:grid-cols-2 gap-8 items-end">
          <h2 className="font-display font-semibold text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Why SANKORE
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.95rem' }}>
            This industry has a reputation problem.<br />We built our model to fix it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[rgba(201,168,76,0.12)]">
          {usps.map((usp, i) => (
            <div
              key={usp.label}
              className="reveal border-b border-r border-[rgba(201,168,76,0.12)] p-10 md:p-14"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <p className="font-body text-[0.68rem] tracking-[0.32em] uppercase mb-6" style={{ color: '#C9A84C' }}>
                {usp.label}
              </p>
              <p className="font-display font-normal leading-snug" style={{ color: 'rgba(245,240,232,0.88)', fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
                {usp.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
