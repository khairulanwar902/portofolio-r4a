/* ============================================
   COMPONENT: BackToTop
   FILE: src/components/BackToTop.jsx
   ============================================ */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{    opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-40 w-11 h-11 rounded-xl
                     bg-gradient-to-br from-primary-600 to-accent-600
                     flex items-center justify-center text-white
                     shadow-lg shadow-primary-900/50
                     hover:shadow-primary-700/60 hover:scale-110
                     transition-all duration-300 cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
