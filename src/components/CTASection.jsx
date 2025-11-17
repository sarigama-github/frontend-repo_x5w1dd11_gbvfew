import React from 'react'
import AnimatedButton from './AnimatedButton'
import { Apple, Play as PlayIcon } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Bereit für den Kinoabend?</h2>
        <p className="mt-3 text-white/70">Lade die App und finde gemeinsam euren nächsten Film.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AnimatedButton as="a" href="#" ariaLabel="App Store">
            <Apple className="w-5 h-5" /> App Store
          </AnimatedButton>
          <AnimatedButton as="a" href="#" ariaLabel="Google Play" className="bg-[#1A1A2E] border border-white/10">
            <PlayIcon className="w-5 h-5" /> Google Play
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
