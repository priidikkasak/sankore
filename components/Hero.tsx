export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0D0B08] overflow-hidden">
      <div className="hero-line ml-[3.5rem] md:ml-[5rem] hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16 grid md:grid-cols-[60fr_40fr] gap-12 items-center">
        <div className="relative">
          <p className="fade-up fade-up-1 font-body text-gold text-xs tracking-[0.3em] uppercase mb-6">
            African Gold Brokerage
          </p>
          <h1
            className="fade-up fade-up-2 font-display font-semibold text-cream leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Gold Moves.<br />
            We Make It<br />
            <span className="text-gold">Simple.</span>
          </h1>
          <p className="fade-up fade-up-3 font-body text-[rgba(245,240,232,0.7)] text-lg leading-relaxed max-w-xl mb-10">
            SANKORE Holdings connects international buyers with verified, in-country African gold sources.
            We handle verification, logistics, insurance, and transport — so you don&apos;t have to.
            No upfront fees. No middleman confusion. Just gold.
          </p>
          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="font-body text-sm tracking-[0.12em] uppercase bg-gold text-black px-8 py-4 hover:bg-[#D4A017] transition-colors duration-200 text-center font-medium">
              Begin Acquisition
            </a>
            <a href="#" className="cta-ghost font-body text-sm tracking-[0.12em] uppercase border border-gold text-gold px-8 py-4 text-center">
              Download Info Pack
            </a>
          </div>
        </div>

        <div className="fade-up fade-up-5 relative flex flex-col items-center justify-center select-none">
          <span
            className="font-display font-semibold text-gold leading-none block"
            style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', opacity: 0.07 }}
          >
            0
          </span>
          <p className="font-body text-cream text-sm tracking-[0.2em] uppercase absolute text-center">
            Upfront fees.<br />Ever.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gold-rule" />
    </section>
  )
}
