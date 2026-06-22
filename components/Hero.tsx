'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className={`max-w-3xl w-full text-center fade-up ${visible ? 'visible' : ''}`}>
        {/* Avatar */}
        <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg select-none">
          JD
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-4">
          Jane Doe
        </h1>

        <p className="text-lg sm:text-xl text-emerald-600 font-medium mb-6">
          Full-Stack Engineer · Builder of delightful things
        </p>

        <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          I build fast, accessible, and well-crafted software. Passionate about developer tooling,
          distributed systems, and turning complex problems into simple, elegant products.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors shadow-sm"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-gray-400">
          <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-emerald-600 transition-colors">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-emerald-600 transition-colors">
            <LinkedInIcon />
          </a>
          <a href="mailto:jane@example.com" aria-label="Email" className="hover:text-emerald-600 transition-colors">
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
