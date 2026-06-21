import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCrown } from 'react-icons/fa'

const MEMBERS = [
  { id: 1,  name: 'Addela Dwi Puspita',        role: 'Ketua Kelas', color: 'from-yellow-500 to-amber-600',   photo: '/foto-addela-dwi.jpg' },
  { id: 2,  name: 'Adella Kartika',             role: 'Anggota',     color: 'from-blue-500 to-indigo-600',   photo: '/foto-adella-kartika.jpg' },
  { id: 3,  name: 'Muhammad Rici Fernanda',     role: 'Anggota',     color: 'from-violet-500 to-purple-600', photo: '/foto-rici-fernanda.jpg' },
  { id: 4,  name: 'Armen Ardiansyah',           role: 'Anggota',     color: 'from-cyan-500 to-blue-600',     photo: '/foto-armen.jpg' },
  { id: 5,  name: 'Sultan Buana Dirgantara',    role: 'Anggota',     color: 'from-emerald-500 to-teal-600',  photo: '/foto-sultan.jpg' },
  { id: 6,  name: 'Cassiopeia Azzah',           role: 'Anggota',     color: 'from-pink-500 to-rose-600',     photo: '/foto-cassiopeia.jpg' },
  { id: 7,  name: 'Darell Kastara Abiansyah',   role: 'Anggota',     color: 'from-fuchsia-500 to-pink-600',  photo: '/foto-darell.jpg' },
  { id: 8,  name: 'Muhammad Farhan Abdillah',   role: 'Anggota',     color: 'from-orange-500 to-amber-600',  photo: '/foto-farhan.jpg' },
  { id: 9,  name: 'Nur Indah Sapitri',          role: 'Anggota',     color: 'from-teal-500 to-cyan-600',     photo: '/foto-nur-indah.jpg' },
  { id: 10, name: 'Nisrina Nurhaliza Zufri',    role: 'Anggota',     color: 'from-rose-500 to-pink-600',     photo: '/foto-nisrina.jpg' },
  { id: 11, name: 'Jonathan',                    role: 'Anggota',     color: 'from-indigo-500 to-blue-600',   photo: '/foto-jonathan.jpg' },
  { id: 12, name: 'Miya Ayu Lestari',           role: 'Anggota',     color: 'from-purple-500 to-violet-600', photo: '/foto-miya.jpg' },
  { id: 13, name: 'M. Abdullah Gimnastiar',     role: 'Anggota',     color: 'from-green-500 to-emerald-600', photo: '/foto-abdullah.jpg' },
  { id: 14, name: 'Dimyati Nur Achmad',         role: 'Anggota',     color: 'from-blue-500 to-cyan-600',     photo: '/foto-dimyati.jpg' },
  { id: 15, name: 'Fajar Rizky Ramadani',       role: 'Anggota',     color: 'from-amber-500 to-orange-600',  photo: '/foto-fajar.jpg' },
  { id: 16, name: 'Rangga Maulana Yusuf',       role: 'Anggota',     color: 'from-red-500 to-rose-600',      photo: '/foto-rangga.jpg' },
  { id: 17, name: 'Najmi Mahdiyah',             role: 'Anggota',     color: 'from-violet-500 to-fuchsia-600',photo: '/foto-najmi.jpg' },
  { id: 18, name: 'Della Tri Anggraeni',        role: 'Anggota',     color: 'from-pink-500 to-fuchsia-600',  photo: '/foto-della.jpg' },
  { id: 19, name: 'Abi Hanifah PrimaSeta',      role: 'Anggota',     color: 'from-sky-500 to-blue-600',      photo: '/foto-abi.jpg' },
]

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

function MemberCard({ member, index }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass glass-hover relative group cursor-default p-4 text-center"
    >
      {member.role === 'Ketua Kelas' && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <FaCrown className="text-yellow-400" size={14} />
        </div>
      )}

      {/* Avatar — foto atau inisial */}
      <div className="w-14 h-14 rounded-2xl mx-auto mb-3 overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
        {!imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg`}>
            {getInitials(member.name)}
          </div>
        )}
      </div>

      <div className="text-white text-xs font-semibold leading-tight mb-1 line-clamp-2">
        {member.name}
      </div>
      <div className={`text-[10px] font-mono mt-1 ${member.role === 'Ketua Kelas' ? 'text-yellow-400' : 'text-gray-600'}`}>
        {member.role}
      </div>
    </motion.div>
  )
}

export default function Members() {
  const [filter, setFilter] = useState('Semua')

  const filtered = filter === 'Semua'
    ? MEMBERS
    : MEMBERS.filter(m => m.role === filter)

  return (
    <section id="members" className="section-padding relative overflow-hidden glass-section-bg">
      <div className="orb orb-1 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="glass-tag mb-4 inline-block">Tim Kami</span>
          <h2 className="section-title mt-3">Anggota Kelas R4A</h2>
          <div className="section-divider" />
          <p className="section-subtitle mt-6">
            Mahasiswa-mahasiswa hebat yang bersama-sama membangun Kelas R4A menjadi kelas terbaik.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-10">
          {['Semua', 'Ketua Kelas', 'Anggota'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${filter === f
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'glass text-gray-400 hover:text-white'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="glass-purple px-5 py-3 rounded-xl text-center">
            <div className="text-2xl font-bold text-gradient">{MEMBERS.length}</div>
            <div className="text-gray-500 text-xs mt-1">Total Anggota</div>
          </div>
          <div className="glass-purple px-5 py-3 rounded-xl text-center">
            <div className="text-2xl font-bold text-gradient">1</div>
            <div className="text-gray-500 text-xs mt-1">Ketua Kelas</div>
          </div>
          <div className="glass-purple px-5 py-3 rounded-xl text-center">
            <div className="text-2xl font-bold text-gradient">2024</div>
            <div className="text-gray-500 text-xs mt-1">Angkatan</div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8 font-mono">
          * Foto anggota akan terus diperbarui 📸
        </p>
      </div>
    </section>
  )
}