import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import HowItWorks from '@/components/HowItWorks'
import WhySankore from '@/components/WhySankore'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <WhySankore />
      <Contact />
      <Footer />
    </main>
  )
}
