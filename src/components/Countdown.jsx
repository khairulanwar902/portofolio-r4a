import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000)  / 60000),
        s: Math.floor((diff % 60000)    / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

const PAD = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  // Ganti tanggal ini sesuai mulai semester 5
  const time = useCountdown('2026-09-01T00:00:00')

  return (
    <section className="section-padding relative overflow-hidden glass-section-bg">
      <div className="orb orb-1 opacity-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 glass-purple px-4 py-2 rounded-full mb-6">
            <FaRocket className="text-primary-400" size={12} />
            <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">
              Menuju Semester 5
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">
            Countdown Semester 5
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-gray-400 mb-12">
            Semangat terus! Semester 5 sudah menanti kita semua 🚀
          </p>

          {/* Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Hari',   val: time.d },
              { label: 'Jam',    val: time.h },
              { label: 'Menit',  val: time.m },
              { label: 'Detik',  val: time.s },
            ].map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                className="glass-elevated p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {PAD(t.val ?? 0)}
                </div>
                <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                  {t.label}
                </div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-50" />
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 text-xs font-mono mt-8">
            * Target: 1 September 2026 — Sesuaikan tanggal di Countdown.jsx
          </p>
        </motion.div>
      </div>
    </section>
  )
}