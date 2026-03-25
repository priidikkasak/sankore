'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', volume: '', destination: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('SANKORE enquiry:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#0D0B08] py-24 md:py-32 border-t border-[rgba(201,168,76,0.2)]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-semibold text-cream leading-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Ready to Move Gold?
        </h2>
        <p className="font-body text-[rgba(245,240,232,0.6)] text-base leading-relaxed mb-14 max-w-xl">
          Fill in the form and a SANKORE representative will respond within one business day.
          All enquiries are treated with strict confidentiality.
        </p>

        {submitted ? (
          <div className="border border-gold p-10 text-center">
            <p className="font-display text-gold text-3xl mb-3">Enquiry Received.</p>
            <p className="font-body text-[rgba(245,240,232,0.6)] text-sm">A SANKORE representative will contact you within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input className="input-underline" type="text"  name="name"        placeholder="Full Name"              value={form.name}        onChange={handleChange} required />
              <input className="input-underline" type="text"  name="company"     placeholder="Company / Organisation" value={form.company}     onChange={handleChange} />
              <input className="input-underline" type="email" name="email"       placeholder="Email Address"          value={form.email}       onChange={handleChange} required />
              <input className="input-underline" type="text"  name="volume"      placeholder="Target Volume (kg)"     value={form.volume}      onChange={handleChange} />
              <input className="input-underline md:col-span-2" type="text" name="destination" placeholder="Destination" value={form.destination} onChange={handleChange} />
              <textarea className="input-underline resize-none md:col-span-2" name="message" placeholder="Message (optional)" rows={4} value={form.message} onChange={handleChange} />
            </div>
            <div>
              <button type="submit" className="w-full bg-gold text-black font-body text-sm tracking-[0.2em] uppercase py-5 hover:bg-[#D4A017] transition-colors duration-200 font-medium">
                Send Enquiry
              </button>
              <p className="font-body text-[rgba(245,240,232,0.35)] text-xs mt-4 text-center tracking-wide">
                No upfront commitments. No spam. We will contact you directly and professionally.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
