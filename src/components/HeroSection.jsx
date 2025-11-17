import React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import AnimatedButton from './AnimatedButton'
import { Film, Play, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : -60])
  const y2 = useTransform(scrollY, [0, 400], [0, prefersReducedMotion ? 0 : 40])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(1200px 600px at 10% 10%, rgba(255,107,53,0.25), transparent 60%), radial-gradient(1000px 500px at 90% 20%, rgba(255,215,0,0.15), transparent 60%), radial-gradient(800px 400px at 50% 100%, rgba(255,107,53,0.2), transparent 60%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating logo */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2"
        initial={{ y: -10 }}
        animate={prefersReducedMotion ? {} : { y: [ -6, 6, -6 ] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur">
          <Film className="w-5 h-5 text-[#FF6B35]" />
          <span className="text-sm text-white/80">FilmAuswahl</span>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ y: y1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Finde gemeinsam den perfekten Film
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Gruppen erstellen, swipen, matchen – schneller zur Entscheidung mit einem Hauch Kino-Magie.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton ariaLabel="Jetzt starten">
              <Play className="w-5 h-5" /> Jetzt starten
            </AnimatedButton>
            <AnimatedButton as="a" href="#features" className="bg-transparent border border-white/15 hover:border-white/25">
              <Sparkles className="w-5 h-5" /> Funktionen entdecken
            </AnimatedButton>
          </div>
        </motion.div>

        {/* Poster mockups with parallax */}
        <motion.div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6" style={{ y: y2 }}>
          {['/posters/1.svg','/posters/2.svg','/posters/3.svg','/posters/4.svg','/posters/5.svg','/posters/6.svg'].map((src, i) => (
            <motion.div
              key={src}
              className="aspect-[2/3] rounded-xl overflow-hidden border border-white/10 bg-white/5 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ rotateX: 6, rotateY: -6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img src={src} alt="Film Poster" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
