/* ============================================
   COMPONENT: Navbar
   FILE: src/components/Navbar.jsx
   ============================================ */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import { NAV_LINKS } from '../data/index.js'

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeSection, setActive]    = useState('home')

  /* ---- Scroll handler ---- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ---- Close menu on resize ---- */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id  = href.replace('#', '')
    const el  = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? 'scrolled shadow-xl shadow-black/30' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-primary-900/50 group-hover:shadow-primary-700/60 transition-all duration-300">
                RA
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-400 border-2 border-dark-900 animate-pulse-slow" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-display font-semibold text-sm leading-none">KELAS R4A</div>
              <div className="text-gray-500 text-[10px] font-mono leading-none mt-0.5">Teknik Informatika · UNINDRA</div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link px-3 py-2 text-sm rounded-lg transition-all duration-200
                  ${activeSection === link.href.replace('#', '')
                    ? 'text-white bg-primary-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1 }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <FaMoon size={15} /> : <FaSun size={15} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{    height: 0,    opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-white/5 pb-4"
            >
              <div className="pt-2 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0,   opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200
                      ${activeSection === link.href.replace('#', '')
                        ? 'text-white bg-primary-500/15 font-medium'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
