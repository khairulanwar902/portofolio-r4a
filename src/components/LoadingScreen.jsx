/* ============================================
   COMPONENT: LoadingScreen
   FILE: src/components/LoadingScreen.jsx
   ============================================ */

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('Memuat sistem...')

  const loadingTexts = [
    'Memuat sistem...',
    'Menginisialisasi data...',
    'Menyiapkan animasi...',
    'Hampir selesai...',
    'Selamat datang!',
  ]

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 18 + 8
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => onComplete(), 500)
      }
      setProgress(Math.min(current, 100))
      const idx = Math.min(Math.floor(current / 22), loadingTexts.length - 1)
      setText(loadingTexts[idx])
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        {/* Logo / Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <div className="text-xs font-mono tracking-[0.4em] text-primary-400 mb-2 uppercase">
            Universitas Indraprasta PGRI
          </div>
          <h1 className="text-5xl font-display font-bold text-gradient mb-1">
            R4A
          </h1>
          <div className="text-gray-500 text-sm font-mono tracking-wider">
            Teknik Informatika · 2024
          </div>
        </motion.div>

        {/* Loader Ring */}
        <motion.div
          className="relative mb-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <div className="loader-ring">
            <div className="loader-ring-inner" />
            <div className="loader-dot" />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span className="font-mono">{text}</span>
            <span className="font-mono text-primary-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary-500"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
