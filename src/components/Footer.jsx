/* ============================================
   COMPONENT: Footer
   FILE: src/components/Footer.jsx
   ============================================ */

import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaCode, FaArrowUp } from 'react-icons/fa'
import { NAV_LINKS } from '../data/index.js'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.04] bg-dark-800">
      <div className="orb orb-1 opacity-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-lg shadow-primary-900/40">
                R4
              </div>
              <div>
                <div className="text-white font-display font-bold">KELAS R4A</div>
                <div className="text-gray-600 text-xs font-mono">Teknik Informatika</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Website portofolio resmi Kelas R4A Program Studi Teknik Informatika
              Universitas Indraprasta PGRI — Angkatan 2024.
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 font-display uppercase tracking-wider">Navigasi</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-primary-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 font-display uppercase tracking-wider">Informasi</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex gap-2">
                <span className="text-gray-700">Prodi</span>
                <span className="text-gray-400">Teknik Informatika</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-700">Univ.</span>
                <span className="text-gray-400">Universitas Indraprasta PGRI</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-700">Kelas</span>
                <span className="text-gray-400">R4A</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-700">Angk.</span>
                <span className="text-gray-400">2024 · Semester 4</span>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollTop}
              className="mt-6 flex items-center gap-2 text-xs text-gray-600 hover:text-primary-400 transition-colors duration-200 group"
            >
              <div className="w-7 h-7 rounded-lg glass flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                <FaArrowUp size={11} />
              </div>
              Kembali ke atas
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © 2026 Kelas R4A · Teknik Informatika · Universitas Indraprasta PGRI. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs flex items-center gap-1.5">
              Dibuat dengan <FaHeart size={10} className="text-rose-600" /> dan <FaCode size={10} className="text-primary-500" />
              oleh Kelas R4A
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
