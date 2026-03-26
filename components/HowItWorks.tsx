'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01', title: 'You Reach Out',
    body: 'Tell us your target volume, preferred delivery destination, and timeline. We respond within 24 hours with a verified offer - no vague quotes, no runaround.',
  },
  {
    num: '02', title: 'Source Verification',
    body: 'Our in-country African partner network locates and verifies the gold against internationally accepted standards. Full documentation before any commitment.',
  },
  {
    num: '03', title: 'Logistics & Insurance',
    body: "Secure transport and full cargo insurance to your destination - Dubai, Geneva, Singapore, or anywhere else. You don't touch the complexity.",
  },
  {
    num: '04', title: 'Settlement',
    body: 'Payment against delivery. No upfront wire transfers. No leap of faith. Trust is built through process, not promises.',
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="py-28 md:py-36" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        <div className="reveal mb-16 md:mb-24">
          <h2 className="font-display font-semibold text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            The Process
          </h2>
          <p className="font-body mt-3" style={{ color: '#C9A84C', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Four steps. Full clarity. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal p-10 md:p-12 cursor-default transition-all duration-300"
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
              <span
                className="inline-block font-body text-[0.58rem] tracking-[0.3em] uppercase mb-7 px-2.5 py-1"
                style={{ color: '#C9A84C', border: '1px solid rgba(201,168,76,0.28)' }}
              >
                Step {step.num}
              </span>
              <h3 className="font-display font-semibold text-cream mb-4" style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)' }}>
                {step.title}
              </h3>
              <p className="font-body leading-[1.85]" style={{ color: 'rgba(245,240,232,0.52)', fontSize: '0.94rem' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
