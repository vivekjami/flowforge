import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import BetaSignup from "@/components/landing/BetaSignup";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="about">
        <BetaSignup />
      </section>
      <Footer />
    </main>
  );
}