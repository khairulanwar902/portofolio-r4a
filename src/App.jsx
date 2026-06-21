/* ============================================
   APP.JSX - ROOT COMPONENT
   Portfolio Kelas R4A - Teknik Informatika UNINDRA
   ============================================ */

import Members from './components/Member.jsx'
import Countdown   from './components/Countdown.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen  from './components/LoadingScreen.jsx'
import Navbar         from './components/Navbar.jsx'
import Hero           from './components/Hero.jsx'
import About          from './components/About.jsx'
import Stats          from './components/Stats.jsx'
import Courses        from './components/Courses.jsx'
import Projects       from './components/Projects.jsx'
import Skills         from './components/Skills.jsx'
import Gallery        from './components/Gallery.jsx'
import VisionMission  from './components/VisionMission.jsx'
import Contact        from './components/Contact.jsx'
import Footer         from './components/Footer.jsx'
import BackToTop      from './components/BackToTop.jsx'
import CustomCursor   from './components/CustomCursor.jsx'
import Aurora         from './components/Aurora.jsx'

export default function App() {
  const [loading,  setLoading]  = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      document.body.style.background = '#030712'
    } else {
      root.classList.remove('dark')
      document.body.style.background = '#f8fafc'
    }
  }, [darkMode])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className={`min-h-screen ${darkMode ? 'bg-dark-900 text-white' : 'bg-slate-50 text-gray-900'} transition-colors duration-300`}>
          <CustomCursor />
          <Aurora />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <About />
            <Stats />
            <Courses />
            <Projects />
            <Skills />
            <Gallery />
            <VisionMission />
            <Members />
            <Countdown />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <MusicPlayer />
        </div>
      )}
    </>
  )
}