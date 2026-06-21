/* ============================================
   COMPONENT: Hero
   FILE: src/components/Hero.jsx
   ============================================ */

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown, FaCode, FaUsers } from 'react-icons/fa'

function useTypewriter(words, speed = 90, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx,   setWordIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout
    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }
    setDisplayed(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

export default function Hero() {
  const words = [
    'Pemrograman Web',
    'Basis Data',
    'Manajemen Proyek',
    'Jaringan Komputer',
    'Struktur Data',
    'Teknik Informatika',
  ]
  const typed = useTypewriter(words)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-8 select-none"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">
            Universitas Indraprasta PGRI · Angkatan 2024
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4"
        >
          <span className="text-gradient neon-text">KELAS</span>
          <br />
          <span className="text-white">RA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-xl sm:text-2xl text-primary-300 font-display font-medium mb-4"
        >
          Teknik Informatika — Universitas Indraprasta PGRI
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 mb-6 h-8 flex items-center justify-center gap-1 font-mono"
        >
          <span>Menguasai </span>
          <span className="text-primary-300">{typed}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
        >
          Belajar, Berkembang, dan Berinovasi Bersama dalam Dunia Teknologi Informasi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm px-7 py-3.5"
          >
            <FaCode size={13} />
            Lihat Proyek
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-sm px-7 py-3.5"
          >
            <FaUsers size={13} />
            Tentang Kelas
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: 'Angkatan',  value: '2024' },
            { label: 'Semester',  value: '4' },
            { label: 'Mahasiswa', value: '30+' },
            { label: 'Proyek',    value: '2' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="glass-purple rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1 font-mono">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-primary-400 transition-colors duration-200 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FaArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}