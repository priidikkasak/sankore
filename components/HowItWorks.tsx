'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'You Reach Out',
    body: 'Tell us your target volume, preferred delivery destination, and timeline. We respond within 24 hours with a verified offer — no vague quotes, no runaround.',
  },
  {
    num: '02',
    title: 'Source Verification',
    body: 'Our in-country African partner network locates and verifies the gold against internationally accepted standards. You receive full documentation before any commitment.',
  },
  {
    num: '03',
    title: 'Logistics & Insurance',
    body: 'We arrange secure transport and full cargo insurance to your destination — Dubai, Geneva, Singapore, or anywhere else. You don\'t touch the complexity.',
  },
  {
    num: '04',
    title: 'Settlement',
    body: 'Payment happens against delivery. No upfront wire transfers. No leap of faith. We have structured the process this way deliberately — because trust is built through process, not promises.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-[#0D0B08] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal mb-16 md:mb-24">
          <h2 className="font-display font-semibold text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            The Process
          </h2>
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mt-3">Four steps. Full clarity. No surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal border-[rgba(201,168,76,0.2)] py-12 md:py-14 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ${i < 2 ? 'border-b' : ''} ${i % 2 === 0 ? 'md:border-r' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="font-display font-semibold text-gold leading-none block mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', opacity: 0.25 }}>
                {step.num}
              </span>
              <h3 className="font-display font-semibold text-cream text-2xl md:text-3xl mb-4">{step.title}</h3>
              <p className="font-body text-[rgba(245,240,232,0.65)] text-base leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
