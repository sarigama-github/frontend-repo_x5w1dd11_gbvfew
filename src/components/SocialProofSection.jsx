import React from 'react'
import ScrollReveal from './ScrollReveal'
import AnimatedCard from './AnimatedCard'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Lena & Max',
    quote: 'Seit FilmAuswahl gibt es bei uns kein endloses Scrollen mehr. In 2 Minuten steht die Entscheidung!'
  },
  { name: 'Gruppe "Movie Night"', quote: 'Die Matches sind super hilfreich – wir entdecken ständig neue Filme.' },
  { name: 'Familie Meier', quote: 'Kinderfreundliche Filter und einfache Bedienung. Top!' }
]

export default function SocialProofSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal stagger={0.1}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">Bewertungen & Zahlen</h2>
          <p className="mt-3 text-white/70 text-center">4.8 von 5 Sternen · 50k+ Swipes · 10k+ Matches</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <AnimatedCard key={i} delay={0.1 * i}>
                <div className="flex items-start gap-3">
                  <div className="flex text-[#FFD700]" aria-hidden>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <div>
                    <p className="text-white/90">“{t.quote}”</p>
                    <p className="text-white/60 text-sm mt-2">— {t.name}</p>
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
