/* ============================================
   COMPONENT: Skills
   FILE: src/components/Skills.jsx
   ============================================ */

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPhp, FaDatabase, FaJava,
  FaGitAlt, FaGithub
} from 'react-icons/fa'
import { SKILLS } from '../data/index.js'

const ICON_MAP = {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPhp, FaDatabase, FaJava,
  FaGitAlt, FaGithub
}

const CATEGORY_COLORS = {
  'Frontend':              'from-blue-500 to-indigo-600',
  'Backend & Database':    'from-violet-500 to-purple-600',
  'Programming Language':  'from-amber-500 to-orange-600',
  'Tools & Version Control':'from-emerald-500 to-teal-600',
}

function SkillBar({ skill, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          {/* Icon */}
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}30` }}
          >
            {ICON_MAP[skill.icon]
              ? React.createElement(ICON_MAP[skill.icon], { size: 13, style: { color: skill.color } })
              : <span className="text-xs">{skill.name[0]}</span>
            }
          </div>
          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-primary-400 text-xs font-mono">{skill.level}%</span>
      </div>

      {/* Track */}
      <div className="progress-bar-track">
        <motion.div
          className="progress-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
          }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

function CategoryCard({ title, skills, index }) {
  const colorClass = CATEGORY_COLORS[title] || 'from-primary-500 to-accent-600'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="glass-elevated p-7 relative overflow-hidden"
    >
      {/* Top stripe */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colorClass} opacity-70`} />

      {/* Category Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${colorClass} opacity-80`} />
        <h3 className="text-white font-display font-semibold text-base">{title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding glass-section-bg relative overflow-hidden">
      <div className="orb orb-1 opacity-25" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="glass-tag mb-4 inline-block">Kompetensi</span>
          <h2 className="section-title mt-3">Skills yang Dipelajari</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Berbagai teknologi dan tool yang dikuasai mahasiswa kelas RA melalui pembelajaran intensif dan proyek nyata.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <CategoryCard key={category} title={category} skills={skills} index={i} />
          ))}
        </div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-purple p-6 rounded-2xl">
            <p className="text-gray-500 text-sm mb-5 font-mono uppercase tracking-widest">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(SKILLS).flat().map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white cursor-default transition-colors duration-200 border border-white/5 hover:border-primary-500/30"
                  style={{ boxShadow: `0 0 12px ${s.color}15` }}
                >
                  {ICON_MAP[s.icon] && React.createElement(ICON_MAP[s.icon], { size: 12, style: { color: s.color } })}
                  {s.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
