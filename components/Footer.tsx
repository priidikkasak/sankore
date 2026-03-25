export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gold py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col leading-none">
          <span className="font-display text-gold text-sm tracking-[0.2em] font-semibold">SANKORE</span>
          <span className="font-body text-cream text-[0.45rem] tracking-[0.35em] uppercase mt-0.5 opacity-60">Holdings</span>
        </div>
        <p className="font-body text-[rgba(245,240,232,0.4)] text-xs tracking-widest text-center">
          African Gold. No Guesswork. No Games.
        </p>
        <p className="font-body text-[rgba(245,240,232,0.3)] text-xs">
          &copy; 2025 SANKORE Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
