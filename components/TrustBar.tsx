export default function TrustBar() {
  const stats = [
    { value: 'Verified', label: 'Partners',  sub: 'In-country sourcing across West & Central Africa' },
    { value: 'Active',   label: 'Corridors', sub: 'Dubai · Geneva · Singapore · Tallinn' },
    { value: 'Zero',     label: '',          sub: 'Upfront fees, hidden charges, or vague commitments' },
  ]

  return (
    <section className="bg-[#13110A] border-y border-[rgba(201,168,76,0.2)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[rgba(201,168,76,0.2)]">
        {stats.map((s) => (
          <div key={s.value} className="px-0 md:px-12 first:pl-0 last:pr-0 py-10 md:py-0">
            <p className="font-display font-semibold text-gold leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {s.value}
              {s.label && (
                <span className="block font-body text-cream text-base tracking-[0.2em] uppercase font-normal mt-1">
                  {s.label}
                </span>
              )}
            </p>
            <p className="font-body text-[rgba(245,240,232,0.55)] text-sm leading-relaxed max-w-xs mt-3">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
