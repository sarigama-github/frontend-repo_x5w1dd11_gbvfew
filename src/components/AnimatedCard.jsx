import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedCard({ children, className = '', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay }}
      className={
        'relative rounded-2xl bg-slate-900/60 border border-white/10 shadow-xl p-5 hover:shadow-2xl transition-shadow ' +
        className
      }
    >
      {children}
    </motion.div>
  )
}
