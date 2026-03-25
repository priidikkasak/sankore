import Globe from './Globe'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 w-full pt-28 pb-20 grid md:grid-cols-[58fr_42fr] gap-12 md:gap-16 items-center">

        {/* Left */}
        <div>
          <h1
            className="fade-up fade-up-2 font-display font-semibold leading-[0.93] mb-8"
            style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)', color: '#F5F0E8' }}
          >
            No Games.<br />
            Just Gold.<br />
            <span
              className="italic"
              style={{
                color: '#C9A84C',
                fontSize: '0.72em',
                display: 'block',
                marginTop: '0.15em',
                letterSpacing: '-0.01em',
              }}
            >
              Transparency in every gram.
            </span>
          </h1>

          <p
            className="fade-up fade-up-3 font-body leading-[1.8] mb-10 max-w-lg"
            style={{ color: 'rgba(245,240,232,0.58)', fontSize: '1rem' }}
          >
            SANKORE Holdings connects international buyers with verified, in-country African gold sources.
            Verification, logistics, insurance, and transport—handled.
            Zero upfront fees. Just gold.
          </p>

          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">Begin Acquisition</a>
            <a href="#how-it-works" className="btn-ghost">See The Process</a>
          </div>
        </div>

        {/* Right — Globe */}
        <div className="fade-up fade-up-5 flex items-center justify-center mt-12 md:mt-0">
          <div className="globe-glow" style={{ width: '100%', maxWidth: '380px', aspectRatio: '1' }}>
            <Globe />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-rule" />
    </section>
  )
}
