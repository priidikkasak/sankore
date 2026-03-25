export default function TrustBar() {
  const stats = [
    { value: 'Verified', label: 'Partners', sub: 'In-country sourcing across West & Central Africa' },
    { value: 'Active', label: 'Corridors', sub: 'Dubai · Geneva · Singapore · Tallinn' },
    { value: 'Zero', label: '', sub: 'Upfront fees, hidden charges, or vague commitments' },
  ]

  return (
    <section className="border-y border-[rgba(201,168,76,0.12)]" style={{ background: '#0F0D0A' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[rgba(201,168,76,0.12)]">
        {stats.map((s) => (
          <div key={s.value} className="px-0 md:px-14 first:pl-0 last:pr-0 py-12 md:py-0">
            <p className="font-display font-semibold leading-none mb-1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#C9A84C' }}>
              {s.value}
            </p>
            {s.label && (
              <p className="font-body mb-3" style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '6px' }}>
                {s.label}
              </p>
            )}
            <p className="font-body leading-relaxed max-w-xs" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', marginTop: s.label ? '0' : '10px' }}>
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
