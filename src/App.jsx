import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import SocialProofSection from './components/SocialProofSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle starry background pattern */}
      <div aria-hidden className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(255,107,53,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,215,0,0.08),transparent_40%)]" />

      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
