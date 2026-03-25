import Globe from './Globe'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0D0B08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 w-full pt-28 pb-20 grid md:grid-cols-[58fr_42fr] gap-16 items-center">

        {/* Left */}
        <div>
          <h1
            className="fade-up fade-up-2 font-display font-semibold text-cream leading-[0.93] mb-7"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)' }}
          >
            Gold Moves.<br />
            We Make It<br />
            <span style={{ color: '#C9A84C' }}>Simple.</span>
          </h1>

          <p className="fade-up fade-up-3 font-body text-lg leading-[1.75] mb-10 max-w-lg"
            style={{ color: 'rgba(245,240,232,0.65)', fontSize: '1.05rem' }}>
            SANKORE Holdings connects international buyers with verified, in-country African gold sources.
            We handle verification, logistics, insurance, and transport—so you don&apos;t have to.
            No upfront fees. Just gold.
          </p>

          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">Begin Acquisition</a>
            <a href="#" className="btn-ghost">Download Info Pack</a>
          </div>
        </div>

        {/* Right — Rotating Globe */}
        <div className="fade-up fade-up-5 flex items-center justify-center">
          <div className="globe-glow" style={{ width: '100%', maxWidth: '420px', aspectRatio: '1' }}>
            <Globe />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-rule" />
    </section>
  )
}
