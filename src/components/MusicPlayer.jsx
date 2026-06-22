import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaMusic } from 'react-icons/fa'

const TRACKS = [
  {
    title: 'Laskar Pelangi',
    artist: 'Nidji',
    url: '/music.mp3',
  },
]

export default function MusicPlayer() {
  const audioRef             = useRef(null)
  const [playing,  setPlaying]  = useState(false)
  const [muted,    setMuted]    = useState(false)
  const [volume,   setVolume]   = useState(0.5)
  const [expanded, setExpanded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100)
    }
    const onEnd = () => setPlaying(false)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnd)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnd)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        audio.volume = volume
        audio.muted  = muted
        await audio.play()
        setPlaying(true)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleVolume = (e) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  return (
    <div style={{ position: 'fixed', bottom: '96px', right: '24px', zIndex: 9999 }}>
      <audio ref={audioRef} src="/music.mp3" preload="auto" />

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: 10, scale: 0.95 }}
            style={{
              background: 'rgba(13,21,38,0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '12px',
              width: '220px',
            }}
          >
            {/* Track info */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
                {TRACKS[0].title}
              </div>
              <div style={{ color: '#6b7280', fontSize: '12px' }}>{TRACKS[0].artist}</div>
            </div>

            {/* Progress */}
            <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '12px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', borderRadius: '4px', transition: 'width 0.3s' }} />
            </div>

            {/* Play button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <button
                onClick={togglePlay}
                style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
                }}
              >
                {playing ? <FaPause size={14} /> : <FaPlay size={14} />}
              </button>
            </div>

            {/* Volume */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => {
                  setMuted(!muted)
                  if (audioRef.current) audioRef.current.muted = !muted
                }}
                style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer' }}
              >
                {muted ? <FaVolumeMute size={13} /> : <FaVolumeUp size={13} />}
              </button>
              <input
                type="range" min="0" max="1" step="0.05"
                value={volume}
                onChange={handleVolume}
                style={{ flex: 1, accentColor: '#8b5cf6' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '44px', height: '44px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(99,102,241,0.5)',
          position: 'relative',
        }}
      >
        <FaMusic size={15} />
        {playing && (
          <span style={{
            position: 'absolute', top: '-4px', right: '-4px',
            width: '10px', height: '10px',
            borderRadius: '50%',
            background: '#4ade80',
            border: '2px solid #030712',
          }} />
        )}
      </button>
    </div>
  )
}