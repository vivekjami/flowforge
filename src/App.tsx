import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-system">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <SocialProof />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;