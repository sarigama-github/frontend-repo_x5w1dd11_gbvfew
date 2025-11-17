import React from 'react'
import ScrollReveal from './ScrollReveal'
import AnimatedCard from './AnimatedCard'

const steps = [
  { title: 'Gruppe erstellen oder beitreten', desc: 'Starte eine neue Runde oder nutze einen Invite-Code.' },
  { title: 'Dienste & Genres wählen', desc: 'Lege fest, welche Streamingdienste und Kategorien euch interessieren.' },
  { title: 'Swipen', desc: 'Gefällt euch ein Film? Rechts swipen. Sonst links.' },
  { title: 'Match!', desc: 'Sobald mindestens zwei Personen liken, erscheint ein Match.' }
]

export default function HowItWorksSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal stagger={0.08}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">So funktioniert’s</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((s, i) => (
              <AnimatedCard key={i} delay={0.1 * i}>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B35] text-white font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
