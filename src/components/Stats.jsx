/* ============================================
   COMPONENT: Stats
   FILE: src/components/Stats.jsx
   ============================================ */

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCalendarAlt, FaLayerGroup, FaUserGraduate, FaProjectDiagram } from 'react-icons/fa'
import { STATS } from '../data/index.js'

/* ---- Counter hook ---- */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const num = parseInt(target, 10)
    if (isNaN(num)) { setCount(target); return }
    let startTime = null
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * num))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(num)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])

  return count
}

const ICONS = [FaCalendarAlt, FaLayerGroup, FaUserGraduate, FaProjectDiagram]
const COLORS = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-600',
  'from-fuchsia-500 to-pink-600',
  'from-amber-500 to-orange-600',
]
const GLOW = ['rgba(99,102,241,0.4)', 'rgba(139,92,246,0.4)', 'rgba(217,70,239,0.4)', 'rgba(245,158,11,0.4)']

function StatCard({ stat, icon: Icon, color, glow, index }) {
  const ref  = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCounter(stat.value, 1600, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }}
      className="glass-elevated relative overflow-hidden group hover-lift cursor-default p-8 text-center"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at center, ${glow} 0%, transparent 70%)` }}
      />

      {/* Shimmer strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white" size={22} />
      </div>

      {/* Number */}
      <div className="text-5xl font-display font-bold text-gradient mb-1">
        {typeof stat.value === 'number' || !isNaN(parseInt(stat.value, 10))
          ? `${count}${stat.suffix}`
          : stat.value
        }
      </div>

      <div className="text-gray-400 text-sm font-medium mt-2">{stat.label}</div>

      {/* Bottom line */}
      <div className={`absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full`} />
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="section-padding relative overflow-hidden">
      <div className="orb orb-1 opacity-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="glass-tag mb-4 inline-block">Dalam Angka</span>
          <h2 className="section-title mt-3">Statistik Kelas</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Perjalanan akademik Kelas RA dalam beberapa angka penting yang mencerminkan pertumbuhan kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              icon={ICONS[i]}
              color={COLORS[i]}
              glow={GLOW[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
