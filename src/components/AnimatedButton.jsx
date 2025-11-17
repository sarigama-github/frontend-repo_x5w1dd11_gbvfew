import React, { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * AnimatedButton
 * - Glow on hover
 * - Ripple on click
 * - Respect reduced motion
 */
export default function AnimatedButton({ children, className = '', onClick, as = 'button', href, ariaLabel }) {
  const prefersReducedMotion = useReducedMotion()
  const [ripples, setRipples] = useState([])
  const ref = useRef(null)

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (prefersReducedMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { id: Date.now(), x, y }
    setRipples((r) => [...r, newRipple])
    setTimeout(() => {
      setRipples((r) => r.filter((rr) => rr.id !== newRipple.id))
    }, 600)
    // Haptic feedback if available
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate?.(15) } catch {}
    }
  }

  const glow = prefersReducedMotion ? {} : {
    boxShadow: [
      '0 0 0px rgba(255,107,53,0.0)',
      '0 0 20px rgba(255,107,53,0.35)',
      '0 0 0px rgba(255,107,53,0.0)'
    ]
  }

  const Comp = as === 'a' ? 'a' : 'button'

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
    >
      <Comp
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={
          'relative inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#FF6B35] text-white font-semibold shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-slate-900 transition-transform active:scale-95 ' +
          ' ' + className
        }
      >
        {!prefersReducedMotion && (
          <motion.span
            aria-hidden
            className="absolute -inset-1 rounded-xl blur-md"
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.35), transparent 60%)' }}
            whileHover={glow}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {/* Ripples */}
        <span aria-hidden className="absolute inset-0 overflow-hidden rounded-xl">
          {ripples.map((r) => (
            <span
              key={r.id}
              className="absolute block w-24 h-24 rounded-full bg-white/25 animate-[ripple_600ms_ease-out]"
              style={{ left: r.x - 48, top: r.y - 48 }}
            />
          ))}
        </span>
      </Comp>
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.6; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </motion.div>
  )
}
