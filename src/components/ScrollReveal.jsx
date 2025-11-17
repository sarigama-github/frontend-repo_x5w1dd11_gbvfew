import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useReducedMotion } from 'framer-motion'

export default function ScrollReveal({ children, className = '', delay = 0, stagger = 0.1 }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [controls])

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay } } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, when: 'beforeChildren', staggerChildren: stagger }
        }
      }

  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  )
}
