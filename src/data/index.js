/* ============================================
   DATA / CONSTANTS - PORTFOLIO KELAS R4A
   ============================================ */

// ---- Navigation Links ----
export const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'Tentang' },
  { href: '#stats',      label: 'Statistik' },
  { href: '#courses',    label: 'Mata Kuliah' },
  { href: '#projects',   label: 'Proyek' },
  { href: '#skills',     label: 'Skills' },
  { href: '#gallery',    label: 'Galeri' },
  { href: '#vision',     label: 'Visi & Misi' },
  { href: '#contact',    label: 'Kontak' },
  { href: '#members', label: 'Anggota' },
]

// ---- Stats ----
export const STATS = [
  { value: '2024', label: 'Angkatan',           suffix: '' },
  { value: '4',    label: 'Semester',            suffix: '' },
  { value: '30',   label: 'Mahasiswa Aktif',     suffix: '+' },
  { value: '2',    label: 'Proyek Pembelajaran', suffix: '' }, 
]
// ---- Courses ----
export const COURSES = [
  {
    id: 1,
    title:   'Pemrograman Web',
    icon:    'FaGlobe',
    color:   'from-blue-500 to-indigo-600',
    glow:    'rgba(99,102,241,0.3)',
    desc:    'Membangun antarmuka web modern menggunakan HTML, CSS, JavaScript, dan React JS.',
    badge:   'Frontend',
  },
  {
    id: 2,
    title:   'Sistem Basis Data',
    icon:    'FaDatabase',
    color:   'from-violet-500 to-purple-600',
    glow:    'rgba(139,92,246,0.3)',
    desc:    'Perancangan, implementasi, dan optimasi database menggunakan MySQL dan SQL.',
    badge:   'Database',
  },
  {
    id: 3,
    title:   'Manajemen Proyek',
    icon:    'FaProjectDiagram',
    color:   'from-fuchsia-500 to-pink-600',
    glow:    'rgba(217,70,239,0.3)',
    desc:    'CPM, Network Diagram, WBS, dan metodologi manajemen proyek perangkat lunak.',
    badge:   'Management',
  },
  {
    id: 4,
    title:   'Jaringan Komputer',
    icon:    'FaNetworkWired',
    color:   'from-cyan-500 to-blue-600',
    glow:    'rgba(6,182,212,0.3)',
    desc:    'Protokol jaringan, topologi, keamanan jaringan, dan konfigurasi infrastruktur.',
    badge:   'Network',
  },
  {
    id: 5,
    title:   'Analisis & Perancangan Sistem',
    icon:    'FaChartLine',
    color:   'from-emerald-500 to-teal-600',
    glow:    'rgba(16,185,129,0.3)',
    desc:    'UML, DFD, ERD, dan metodologi pengembangan Teknik Informatika terstruktur.',
    badge:   'Analysis',
  },
  {
    id: 6,
    title:   'Pemrograman Berorientasi Objek',
    icon:    'FaCode',
    color:   'from-amber-500 to-orange-600',
    glow:    'rgba(245,158,11,0.3)',
    desc:    'Konsep OOP: encapsulation, inheritance, polymorphism menggunakan Java.',
    badge:   'OOP',
  },
  {
    id: 7,
    title:   'Struktur Data & Algoritma',
    icon:    'FaSitemap',
    color:   'from-rose-500 to-red-600',
    glow:    'rgba(239,68,68,0.3)',
    desc:    'Array, linked list, tree, graph, sorting, searching, dan kompleksitas algoritma.',
    badge:   'Algorithm',
  },
]

// ---- Projects ----
export const PROJECTS = [
  {
    id: 1,
    title:       'Website Portofolio Kelas R4A',
    desc:        'Website portofolio resmi Kelas R4A Teknik Informatika UNINDRA yang modern dan responsif menggunakan React JS, Vite, dan Tailwind CSS.',
    tech:        ['React JS', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    color:       'from-blue-500/20 to-indigo-500/20',
    border:      'border-blue-500/20',
    accentColor: '#6366f1',
    category:    'Frontend',
    status:      'Selesai',
  },
  {
    id: 2,
    title:       'Website UMKM Kelorku',
    desc:        'Website profil dan pemasaran produk UMKM Kelorku. Proyek ini sedang dalam tahap perencanaan dan akan segera dikerjakan.',
    tech:        ['TBD'],
    color:       'from-emerald-500/20 to-teal-500/20',
    border:      'border-emerald-500/20',
    accentColor: '#10b981',
    category:    'Full Stack',
    status:      'Ongoing',
  },
]

// ---- Skills ----
export const SKILLS = {
  Frontend: [
    { name: 'HTML5',      level: 85, icon: 'FaHtml5',      color: '#e34f26' },
    { name: 'CSS3',       level: 80, icon: 'FaCss3Alt',    color: '#1572b6' },
    { name: 'JavaScript', level: 72, icon: 'FaJs',         color: '#f7df1e' },
    { name: 'React JS',   level: 60, icon: 'FaReact',      color: '#61dafb' },
  ],
  'Backend & Database': [
    { name: 'PHP',        level: 70, icon: 'FaPhp',        color: '#777bb4' },
    { name: 'MySQL',      level: 75, icon: 'FaDatabase',   color: '#00758f' },
  ],
  'Programming Language': [
    { name: 'Java',       level: 65, icon: 'FaJava',       color: '#ed8b00' },
  ],
  'Tools & Version Control': [
    { name: 'Git',        level: 68, icon: 'FaGitAlt',     color: '#f05032' },
    { name: 'GitHub',     level: 70, icon: 'FaGithub',     color: '#ffffff' },
  ],
}

// ---- Gallery ----
export const GALLERY_ITEMS = [
  { id: 1, title: 'Presentasi Project',    category: 'Presentasi',  gradient: 'from-blue-600 to-indigo-700',    icon: 'FaChalkboardTeacher' },
  { id: 2, title: 'Praktikum Lab',         category: 'Praktikum',   gradient: 'from-violet-600 to-purple-700',  icon: 'FaLaptopCode' },
  { id: 3, title: 'Diskusi Kelompok',      category: 'Diskusi',     gradient: 'from-fuchsia-600 to-pink-700',   icon: 'FaUsers' },
  { id: 4, title: 'Seminar Teknologi',     category: 'Seminar',     gradient: 'from-cyan-600 to-blue-700',      icon: 'FaMicrophone' },
  { id: 5, title: 'Workshop Coding',       category: 'Workshop',    gradient: 'from-emerald-600 to-teal-700',   icon: 'FaCode' },
  { id: 6, title: 'Ujian Tengah Semester', category: 'Akademik',    gradient: 'from-amber-600 to-orange-700',   icon: 'FaFileAlt' },
  { id: 7, title: 'Hackathon',             category: 'Kompetisi',   gradient: 'from-rose-600 to-red-700',       icon: 'FaTrophy' },
  { id: 8, title: 'Study Group Malam',     category: 'Belajar',     gradient: 'from-indigo-600 to-violet-700',  icon: 'FaBook' },
]

// ---- Vision & Mission ----
export const VISION = 'Menjadi kelas unggulan dalam bidang Teknik Informatika yang menghasilkan lulusan kompeten, inovatif, dan berkarakter, siap menghadapi tantangan era digital 4.0 dan 5.0.'

export const MISSIONS = [
  { id: 1, text: 'Membangun kultur belajar yang aktif, kolaboratif, dan berbasis proyek nyata.',           icon: 'FaGraduationCap' },
  { id: 2, text: 'Mengembangkan kemampuan teknis melalui praktik langsung dan proyek team.',               icon: 'FaLaptopCode' },
  { id: 3, text: 'Menerapkan teknologi terkini dalam setiap aspek pembelajaran dan pengembangan diri.',    icon: 'FaRocket' },
  { id: 4, text: 'Membina jiwa kepemimpinan, tanggung jawab, dan etika profesional mahasiswa.',            icon: 'FaHandshake' },
  { id: 5, text: 'Menjaga semangat kebersamaan, saling mendukung, dan tumbuh bersama sebagai satu tim.',  icon: 'FaHeart' },
]
