import { HeroSection } from '@/components/landing/hero-section'
import { ProblemSolution } from '@/components/landing/problem-solution'
import { FeaturesShowcase } from '@/components/landing/features-showcase'
import { SocialProof } from '@/components/landing/social-proof'
import { PricingSection } from '@/components/landing/pricing-section'
import { Footer } from '@/components/landing/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <FeaturesShowcase />
      <SocialProof />
      <PricingSection />
      <Footer />
    </main>
  )
}