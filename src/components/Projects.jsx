/* ============================================
   COMPONENT: Projects
   FILE: src/components/Projects.jsx
   ============================================ */

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCheck, FaSpinner } from 'react-icons/fa'
import { PROJECTS } from '../data/index.js'

const FILTERS = ['Semua', 'Frontend', 'Full Stack', 'Database', 'Desktop']

export default function Projects() {
  const [active, setActive] = useState('Semua')

  const filtered = active === 'Semua'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="orb orb-2 opacity-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="glass-tag mb-4 inline-block">Portofolio</span>
          <h2 className="section-title mt-3">Proyek Kelas</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Kumpulan proyek pembelajaran yang dikerjakan oleh mahasiswa kelas R4A sebagai wujud penguasaan kompetensi.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === f
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-900/40'
                  : 'glass text-gray-400 hover:text-white hover:border-primary-500/30'
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`glass-elevated relative overflow-hidden group hover-lift border ${project.border}`}
              >
                {/* Project Preview Area */}
                <div className={`relative h-44 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid-bg opacity-60" />

                  {/* Project icon area */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm text-2xl"
                      style={{ background: `${project.accentColor}20` }}
                    >
                      {/* Category emoji */}
                      {project.category === 'Frontend'    && '🌐'}
                      {project.category === 'Full Stack'  && '⚡'}
                      {project.category === 'Database'    && '🗄️'}
                      {project.category === 'Desktop'     && '💻'}
                    </div>
                    <span className="glass-tag text-[10px]">{project.category}</span>
                  </div>

                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium
                    ${project.status === 'Selesai'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {project.status === 'Selesai'
                      ? <FaCheck size={8} />
                      : <FaSpinner size={8} className="animate-spin" />
                    }
                    {project.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-display font-semibold text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <button
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
                      title="GitHub"
                    >
                      <FaGithub size={13} />
                      <span>Source</span>
                    </button>
                    <button
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-primary-400 transition-colors duration-200 ml-auto"
                      title="Demo"
                    >
                      <span>Demo</span>
                      <FaExternalLinkAlt size={10} />
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
