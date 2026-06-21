/* ============================================
   COMPONENT: Courses
   FILE: src/components/Courses.jsx
   ============================================ */

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGlobe, FaDatabase, FaProjectDiagram, FaNetworkWired,
  FaChartLine, FaCode, FaSitemap
} from 'react-icons/fa'
import { COURSES } from '../data/index.js'

/* Map icon string → component */
const ICON_MAP = {
  FaGlobe, FaDatabase, FaProjectDiagram, FaNetworkWired,
  FaChartLine, FaCode, FaSitemap
}

export default function Courses() {
  return (
    <section id="courses" className="section-padding glass-section-bg relative overflow-hidden">
      <div className="orb orb-3 opacity-25" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="glass-tag mb-4 inline-block">Kurikulum</span>
          <h2 className="section-title mt-3">Mata Kuliah Utama</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Tujuh mata kuliah inti yang membentuk kompetensi mahasiswa Teknik Informatika kelas RA di semester ini.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {COURSES.map((course, i) => {
            const Icon = ICON_MAP[course.icon] || FaCode
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass glass-hover relative overflow-hidden group cursor-default"
              >
                {/* Top gradient strip */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${course.color} opacity-60`} />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${course.glow} 0%, transparent 60%)` }}
                />

                <div className="p-6 relative">
                  {/* Badge */}
                  <span className={`glass-tag text-[10px] mb-4 inline-flex`}>
                    {course.badge}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={18} />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-display font-semibold text-base mb-2 leading-snug group-hover:text-gradient transition-all duration-300">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {/* Last card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: COURSES.length * 0.08 }}
            className="glass-purple relative overflow-hidden group cursor-pointer flex flex-col items-center justify-center p-6 text-center hover-lift"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary-500/40 flex items-center justify-center mb-4 group-hover:border-primary-400 transition-colors duration-300">
              <span className="text-primary-400 text-2xl font-light">+</span>
            </div>
            <div className="text-primary-300 font-semibold text-sm">Lihat Semua Skills</div>
            <div className="text-gray-600 text-xs mt-1">yang dipelajari →</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
