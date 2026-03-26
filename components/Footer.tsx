import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,168,76,0.15)' }} className="py-10">
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image src="/sankore-logo.png" alt="SANKORE" width={90} height={18} className="h-[18px] w-auto opacity-70" />
        <p className="font-body" style={{ color: 'rgba(245,240,232,0.2)', fontSize: '0.65rem', letterSpacing: '0.05em' }}>
          &copy; 2026 SANKORE Holdings. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
