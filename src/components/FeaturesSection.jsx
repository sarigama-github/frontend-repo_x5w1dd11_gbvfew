import React from 'react'
import ScrollReveal from './ScrollReveal'
import AnimatedCard from './AnimatedCard'
import { Users, Swipe, Heart, Tv } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Gruppen erstellen',
    desc: 'Starte eine Runde mit Freund:innen, Familie oder zu zweit. Optionaler Gastmodus – kein Konto nötig.'
  },
  {
    icon: Swipe,
    title: 'Intuitive Swipe-Mechanik',
    desc: 'Rechts für Like, links für Dislike. Schnell, spaßig und mobil optimiert.'
  },
  { icon: Heart, title: 'Matches finden', desc: 'Sobald mindestens zwei zustimmen, erscheint ein Match – priorisiert nach Likes.' },
  { icon: Tv, title: 'Streaming-Integration', desc: 'Filtere nach Netflix, Prime, Disney+ und mehr, damit der Film sofort verfügbar ist.' }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal stagger={0.12}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">Was FilmAuswahl besonders macht</h2>
          <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
            Die wichtigsten Funktionen, die euch schnell zum gemeinsamen Film bringen.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((f, i) => (
              <AnimatedCard key={i} delay={0.1 * i} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/15 border border-[#FF6B35]/30 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
                  <div className="mt-auto" />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
