'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', volume: '', destination: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('SANKORE enquiry:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 md:py-36" style={{ background: '#080808' }}>
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <h2 className="font-display font-semibold text-cream leading-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Ready to Move Gold?
        </h2>
        <p className="font-body leading-relaxed mb-16 max-w-lg" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.95rem' }}>
          Fill in the form and a SANKORE representative will respond within one business day.
          All enquiries are treated with strict confidentiality.
        </p>

        {submitted ? (
          <div style={{ border: '1px solid rgba(201,168,76,0.25)', padding: '3rem', textAlign: 'center' }}>
            <p className="font-display text-gold mb-3" style={{ fontSize: '2rem' }}>Enquiry Received.</p>
            <p className="font-body" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.9rem' }}>
              A SANKORE representative will contact you within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              <input className="input-underline" type="text"  name="name"        placeholder="Full Name"              value={form.name}        onChange={handleChange} required />
              <input className="input-underline" type="text"  name="company"     placeholder="Company / Organisation" value={form.company}     onChange={handleChange} />
              <input className="input-underline" type="email" name="email"       placeholder="Email Address"          value={form.email}       onChange={handleChange} required />
              <input className="input-underline" type="text"  name="volume"      placeholder="Target Volume (kg)"     value={form.volume}      onChange={handleChange} />
              <div className="md:col-span-2">
                <input className="input-underline" type="text" name="destination" placeholder="Destination" value={form.destination} onChange={handleChange} />
              </div>
              <div className="md:col-span-2">
                <textarea className="input-underline resize-none" name="message" placeholder="Message (optional)" rows={4} value={form.message} onChange={handleChange} />
              </div>
            </div>
            <div>
              <button type="submit" className="btn-primary w-full" style={{ padding: '18px', fontSize: '0.78rem' }}>
                Send Enquiry
              </button>
              <p className="font-body text-center mt-5" style={{ color: 'rgba(245,240,232,0.25)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>
                No upfront commitments. No spam. We will contact you directly and professionally.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
