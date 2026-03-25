'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01', title: 'You Reach Out',
    body: 'Tell us your target volume, preferred delivery destination, and timeline. We respond within 24 hours with a verified offer—no vague quotes, no runaround.',
  },
  {
    num: '02', title: 'Source Verification',
    body: 'Our in-country African partner network locates and verifies the gold against internationally accepted standards. Full documentation before any commitment.',
  },
  {
    num: '03', title: 'Logistics & Insurance',
    body: 'Secure transport and full cargo insurance to your destination—Dubai, Geneva, Singapore, or anywhere else. You don\'t touch the complexity.',
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
        <div className="reveal mb-20 md:mb-28">
          <h2 className="font-display font-semibold text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            The Process
          </h2>
          <p className="font-body mt-3" style={{ color: '#C9A84C', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
            Four steps. Full clarity. No surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal py-14 md:py-16
                ${i % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}
                ${i < 2 ? 'border-b' : ''}
                ${i % 2 === 0 ? 'md:border-r' : ''}`}
              style={{ borderColor: 'rgba(201,168,76,0.1)', transitionDelay: `${i * 0.08}s` }}
            >
              <span className="font-display font-semibold block mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#C9A84C', opacity: 0.15 }}>
                {step.num}
              </span>
              <h3 className="font-display font-semibold text-cream mb-4" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)' }}>
                {step.title}
              </h3>
              <p className="font-body leading-[1.8]" style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.95rem' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
