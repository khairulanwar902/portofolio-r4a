/* ============================================
   COMPONENT: Gallery
   FILE: src/components/Gallery.jsx
   ============================================ */

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaChalkboardTeacher, FaLaptopCode, FaUsers,
  FaMicrophone, FaCode, FaFileAlt,
  FaTimes, FaCamera, FaHeart
} from 'react-icons/fa'

const REAL_PHOTOS = [
  {
    id: 'p1',
    src: '/foto-kelas-1.jpg',
    title: 'Foto Bersama Kelas RA',
    caption: 'Momen kebersamaan di akhir semester bersama dosen tercinta 🙏',
    category: 'Foto Kelas',
  },
  {
    id: 'p2',
    src: '/foto-kelas-2.jpg',
    title: 'Foto Bersama Kelas RA',
    caption: 'Kenangan indah bersama dosen yang selalu membimbing kami ❤️',
    category: 'Foto Kelas',
  },
]

const ACTIVITY_ITEMS = [
  { id: 1, title: 'Presentasi Project',  gradient: 'from-blue-600 to-indigo-700',   icon: FaChalkboardTeacher },
  { id: 2, title: 'Praktikum Lab',       gradient: 'from-violet-600 to-purple-700', icon: FaLaptopCode },
  { id: 3, title: 'Diskusi Kelompok',    gradient: 'from-fuchsia-600 to-pink-700',  icon: FaUsers },
  { id: 4, title: 'Seminar Teknologi',   gradient: 'from-cyan-600 to-blue-700',     icon: FaMicrophone },
  { id: 5, title: 'Workshop Coding',     gradient: 'from-emerald-600 to-teal-700',  icon: FaCode },
  { id: 6, title: 'Ujian Semester',      gradient: 'from-amber-600 to-orange-700',  icon: FaFileAlt },
]

function TiltCard({ photo, onClick }) {
  const cardRef = useRef(null)
  const [tilt,   setTilt]   = useState({ x: 0, y: 0 })
  const [glare,  setGlare]  = useState({ x: 50, y: 50, opacity: 0 })
  const [active, setActive] = useState(false)

  const calcTilt = (clientX, clientY) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx   = rect.left + rect.width  / 2
    const cy   = rect.top  + rect.height / 2
    const dx   = (clientX - cx) / (rect.width  / 2)
    const dy   = (clientY - cy) / (rect.height / 2)
    setTilt({ x: dy * -18, y: dx * 18 })
    setGlare({
      x: ((clientX - rect.left) / rect.width)  * 100,
      y: ((clientY - rect.top)  / rect.height) * 100,
      opacity: 0.18,
    })
    setActive(true)
  }

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
    setActive(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={e => calcTilt(e.clientX, e.clientY)}
      onMouseLeave={resetTilt}
      onTouchMove={e => {
        const t = e.touches[0]
        calcTilt(t.clientX, t.clientY)
      }}
      onTouchEnd={resetTilt}
      onClick={onClick}
      style={{ perspective: '1000px', cursor: 'pointer' }}
    >
      <div style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${active ? 1.04 : 1})`,
        transition: active ? 'transform 0.1s ease' : 'transform 0.5s ease',
        transformStyle: 'preserve-3d',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: active
          ? '0 30px 60px rgba(99,102,241,0.4), 0 10px 30px rgba(0,0,0,0.5)'
          : '0 10px 30px rgba(0,0,0,0.3)',
      }}>
        <img
          src={photo.src}
          alt={photo.title}
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          pointerEvents: 'none', borderRadius: '20px',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px',
          transform: 'translateZ(30px)',
        }}>
          <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{photo.title}</div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem', marginTop: 4 }}>{photo.caption}</div>
        </div>
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(99,102,241,0.25)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '999px', padding: '3px 10px',
          fontSize: '0.65rem', color: '#a5b4fc',
          transform: 'translateZ(40px)',
        }}>
          {photo.category}
        </div>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '20px',
          border: active
            ? '1px solid rgba(99,102,241,0.5)'
            : '1px solid rgba(255,255,255,0.06)',
          pointerEvents: 'none', transition: 'border-color 0.3s',
        }} />
      </div>
    </div>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="orb orb-2 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="glass-tag mb-4 inline-block">Momen Berharga</span>
          <h2 className="section-title mt-3">Galeri Kegiatan</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">Dokumentasi perjalanan dan kegiatan bersama Kelas RA.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
              <FaCamera className="text-white" size={13} />
            </div>
            <h3 className="text-white font-display font-semibold text-lg">Foto Bersama</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            <div className="flex items-center gap-1.5 text-xs text-rose-400 font-mono">
              <FaHeart size={10} /> Kenangan Akhir Semester
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {REAL_PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <TiltCard photo={photo} onClick={() => setSelected(photo)} />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs mt-4 font-mono">
            * PC: arahkan mouse ke foto | HP: geser jari di atas foto untuk efek 3D
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
              <FaLaptopCode className="text-white" size={13} />
            </div>
            <h3 className="text-white font-display font-semibold text-lg">Kegiatan Kelas</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-xs text-gray-600 font-mono">Segera ditambahkan</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ACTIVITY_ITEMS.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group relative aspect-square rounded-xl overflow-hidden" whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-9 h-9 rounded-xl glass flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={16} />
                  </div>
                  <div className="text-white font-semibold text-[10px] leading-tight">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 glass-overlay flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full glass-elevated flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <FaTimes size={13} />
              </button>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src={selected.src} alt={selected.title} className="w-full object-cover max-h-[75vh]" />
                <div className="glass-dark p-4">
                  <div className="text-white font-semibold text-sm">{selected.title}</div>
                  <div className="text-gray-400 text-xs mt-1">{selected.caption}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}