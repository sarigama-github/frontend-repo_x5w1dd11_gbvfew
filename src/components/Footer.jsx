import React from 'react'
import { Github, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} FilmAuswahl · Alle Rechte vorbehalten.</div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white"><Twitter className="w-5 h-5" /></a>
          <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="GitHub" className="text-white/60 hover:text-white"><Github className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}
