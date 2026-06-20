/* ============================================
   COMPONENT: VisionMission
   FILE: src/components/VisionMission.jsx
   ============================================ */

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGraduationCap, FaLaptopCode, FaRocket,
  FaHandshake, FaHeart, FaEye, FaBullseye
} from 'react-icons/fa'
import { VISION, MISSIONS } from '../data/index.js'

const ICON_MAP = {
  FaGraduationCap, FaLaptopCode, FaRocket, FaHandshake, FaHeart
}

const MISSION_COLORS = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-600',
  'from-fuchsia-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-red-600',
]

export default function VisionMission() {
  return (
    <section id="vision" className="section-padding glass-section-bg relative overflow-hidden">
      <div className="orb orb-3 opacity-25" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="glass-tag mb-4 inline-block">Arah & Tujuan</span>
          <h2 className="section-title mt-3">Visi & Misi</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Landasan semangat dan arah perjuangan Kelas R4A dalam menempuh pendidikan di era digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-elevated p-8 relative overflow-hidden h-full">
              {/* Accent bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-transparent pointer-events-none rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-70" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-900/50">
                    <FaEye className="text-white" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Visi</div>
                    <h3 className="text-white font-display font-bold text-xl">Kelas R4A</h3>
                  </div>
                </div>

                {/* Quote marks */}
                <div className="text-6xl text-primary-600/20 font-serif leading-none mb-2 select-none">"</div>
                <p className="text-gray-300 leading-relaxed text-base pl-2">
                  {VISION}
                </p>
                <div className="text-right text-6xl text-primary-600/20 font-serif leading-none mt-2 select-none">"</div>

                {/* Decorative line */}
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                  <span className="text-xs text-gray-600 font-mono">UNINDRA · Teknik Informatika · R4A</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-fuchsia-600 flex items-center justify-center">
                <FaBullseye className="text-white" size={16} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Misi</div>
                <div className="text-white font-display font-semibold">5 Poin Utama</div>
              </div>
            </div>

            {MISSIONS.map((m, i) => {
              const Icon = ICON_MAP[m.icon] || FaGraduationCap
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass glass-hover flex items-start gap-4 p-5 group cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${MISSION_COLORS[i]} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={15} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-primary-500 font-mono mb-1">M.{String(i + 1).padStart(2, '0')}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
