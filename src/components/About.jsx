/* ============================================
   COMPONENT: About
   FILE: src/components/About.jsx
   ============================================ */

import React from 'react'
import { motion } from 'framer-motion'
import { FaUniversity, FaBook, FaLightbulb, FaUsers, FaCheckCircle } from 'react-icons/fa'

const INFO_CARDS = [
  { icon: FaUniversity, label: 'Universitas',   value: 'Universitas Indraprasta PGRI',      color: 'text-blue-400'   },
  { icon: FaBook,       label: 'Prodi',          value: 'Teknik Informatika',                  color: 'text-violet-400' },
  { icon: FaUsers,      label: 'Kelas',          value: 'R4A',                               color: 'text-fuchsia-400'},
  { icon: FaLightbulb, label: 'Angkatan',        value: '2024 · Semester 4',                color: 'text-amber-400'  },
]

const HIGHLIGHTS = [
  'Kolaborasi tim dalam pengerjaan proyek nyata',
  'Kurikulum berbasis teknologi terkini 2024',
  'Bimbingan dosen berpengalaman di bidangnya',
  'Aktif dalam seminar, workshop, dan kompetisi',
  'Pengembangan soft skill dan hard skill terpadu',
]

export default function About() {
  return (
    <section id="about" className="section-padding glass-section-bg relative overflow-hidden">
      <div className="orb orb-2 opacity-30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="glass-tag mb-4 inline-block">Tentang Kami</span>
          <h2 className="section-title mt-3">Tentang Kelas R4A</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Kelas R4A adalah bagian dari Program Studi Teknik Informatika UNINDRA,
            tempat mahasiswa bersemangat bertumbuh bersama dalam satu ekosistem belajar yang kolaboratif.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-elevated p-8 relative overflow-hidden">
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/20 to-accent-600/10 rounded-bl-[60px] pointer-events-none" />

              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Siapa Kami?
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5">
                Kelas R4A merupakan salah satu kelas terbaik di Program Studi Teknik Informatika
                Universitas Indraprasta PGRI Angkatan 2024. Terdiri dari mahasiswa-mahasiswa
                penuh semangat yang berkomitmen untuk menguasai dunia teknologi informasi secara
                mendalam dan menyeluruh.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Dengan semangat kolaborasi dan inovasi, kami membangun berbagai proyek,
                mengerjakan tugas bersama, saling berbagi ilmu, dan mendukung satu sama lain
                untuk berkembang menjadi profesional IT masa depan yang kompeten dan berkarakter.
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="text-primary-400 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-300 text-sm">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass glass-hover p-5 flex items-center gap-5 cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-primary-600/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <card.icon className={`${card.color} transition-transform duration-300 group-hover:scale-110`} size={20} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-mono uppercase tracking-wider">{card.label}</div>
                  <div className="text-white font-semibold mt-0.5">{card.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-purple p-6 relative overflow-hidden"
            >
              <div className="text-5xl text-primary-600/30 font-serif absolute -top-2 left-4 select-none">"</div>
              <p className="text-gray-300 italic text-sm leading-relaxed pl-6 pt-4">
                Bersama kita tumbuh, bersama kita berinovasi,
                bersama kita wujudkan mimpi menjadi profesional IT masa depan.
              </p>
              <div className="mt-3 text-right">
                <span className="text-xs text-primary-400 font-mono">— Kelas R4A, UNINDRA 2024</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
