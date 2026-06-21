/* ============================================
   COMPONENT: Contact
   FILE: src/components/Contact.jsx
   ============================================ */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope, FaMapMarkerAlt, FaInstagram,
  FaGithub, FaPaperPlane, FaCheckCircle, FaSpinner
} from 'react-icons/fa'

const SOCIAL_LINKS = [
  { icon: FaInstagram, label: 'Instagram', handle: '@ra_unindra',  href: '#', color: '#e1306c' },
  { icon: FaGithub,    label: 'GitHub',    handle: 'ra-unindra',   href: '#', color: '#ffffff' },
  { icon: FaEnvelope,  label: 'Email',     handle: 'ra@unindra.ac.id', href: 'mailto:ra@unindra.ac.id', color: '#6366f1' },
]

export default function Contact() {
  const [form,     setForm]     = useState({ name: '', email: '', message: '' })
  const [sending,  setSending]  = useState(false)
  const [sent,     setSent]     = useState(false)
  const [errors,   setErrors]   = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())              e.name    = 'Nama wajib diisi.'
    if (!form.email.trim())             e.email   = 'Email wajib diisi.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Format email tidak valid.'
    if (!form.message.trim())           e.message = 'Pesan wajib diisi.'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setErrors({})
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1800)
  }

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb orb-1 opacity-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="glass-tag mb-4 inline-block">Hubungi Kami</span>
          <h2 className="section-title mt-3">Kontak</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Ingin berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi Kelas RA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-elevated p-8">
              <h3 className="text-white font-display font-bold text-2xl mb-2">Ayo Terhubung!</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-7">
                Kami terbuka untuk kolaborasi, pertanyaan seputar proyek, atau sekadar menyapa.
                Kelas RA selalu dengan senang hati mendengar dari Anda.
              </p>

              <div className="space-y-4 mb-7">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-400" size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-0.5">Lokasi</div>
                    <div className="text-gray-300 text-sm">Jakarta Timur, Indonesia</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-400" size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-0.5">Email</div>
                    <div className="text-gray-300 text-sm">ra@unindra.ac.id</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="border-t border-white/5 pt-6">
                <div className="text-xs text-gray-600 font-mono uppercase tracking-widest mb-4">Sosial Media</div>
                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-3 group hover:pl-2 transition-all duration-200"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${s.color}20`, border: `1px solid ${s.color}30` }}
                      >
                        <s.icon style={{ color: s.color }} size={14} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-200">{s.label}</div>
                        <div className="text-gray-600 text-[11px] font-mono">{s.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-elevated p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 opacity-70" />

              <h3 className="text-white font-display font-bold text-xl mb-6">Kirim Pesan</h3>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Nama</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  placeholder="Nama lengkap kamu"
                  className={`input-field ${errors.name ? 'border-red-500/60' : ''}`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  placeholder="email@example.com"
                  className={`input-field ${errors.email ? 'border-red-500/60' : ''}`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-2">Pesan</label>
                <textarea
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  placeholder="Tulis pesanmu di sini..."
                  rows={5}
                  className={`input-field resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={sending || sent}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300
                  ${sent
                    ? 'bg-green-600/20 border border-green-500/30 text-green-400'
                    : 'btn-primary'
                  }
                  disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {sent
                  ? <><FaCheckCircle size={14} /> Pesan Terkirim!</>
                  : sending
                    ? <><FaSpinner size={14} className="animate-spin" /> Mengirim...</>
                    : <><FaPaperPlane size={14} /> Kirim Pesan</>
                }
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
