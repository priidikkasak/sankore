export default function TrustBar() {
  const stats = [
    { value: 'Verified', label: 'Partners',  sub: 'In-country sourcing across West & Central Africa' },
    { value: 'Active',   label: 'Corridors', sub: 'Dubai - Geneva - Singapore - Tallinn' },
    { value: 'Zero',     label: 'Fees',      sub: 'No upfront charges, hidden costs, or vague commitments' },
  ]

  return (
    <section style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        {stats.map((s, i) => (
          <div key={s.value} className={`md:px-14 ${i === 0 ? 'md:pl-0' : ''} ${i === 2 ? 'md:pr-0' : ''}`}>
            <p className="font-display font-semibold leading-none mb-2" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: '#C9A84C' }}>
              {s.value}
            </p>
            <p className="font-body mt-1 mb-3" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              {s.label}
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'rgba(245,240,232,0.38)', fontSize: '0.85rem' }}>
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
