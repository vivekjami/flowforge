import Navigation from '@/components/landing/Navigation'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import Testimonials from '@/components/landing/Testimonials'
import BetaSignup from '@/components/landing/BetaSignup'
import Footer from '@/components/landing/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <BetaSignup />
      <Footer />
    </main>
  )
}