import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#080706] border-t border-[rgba(201,168,76,0.2)] py-10">
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <Image src="/sankore-logo.png" alt="SANKORE" width={100} height={20} className="h-5 w-auto opacity-80" />

        <p className="font-body text-center" style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.7rem', letterSpacing: '0.22em' }}>
          AFRICAN GOLD. NO GUESSWORK. NO GAMES.
        </p>

        <p className="font-body" style={{ color: 'rgba(245,240,232,0.25)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
          &copy; 2025 SANKORE Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
