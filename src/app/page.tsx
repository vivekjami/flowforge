import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import BetaSignup from "@/components/landing/BetaSignup";
import FloatingElements from "@/components/animations/FloatingElements";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingElements />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <BetaSignup />
    </main>
  );
}