import React, { useEffect, useRef } from 'react'

export default function Aurora() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const drawWaveBlob = (cx, cy, r, color1, color2, waveAmp, waveFreq) => {
      ctx.save()
      ctx.beginPath()
      const points = 120
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2
        const wave  = 1 + waveAmp * Math.sin(waveFreq * angle + t * 3)
        const x = cx + Math.cos(angle) * r * wave
        const y = cy + Math.sin(angle) * r * wave
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.closePath()
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.5)
      g.addColorStop(0,   color1)
      g.addColorStop(0.6, color2)
      g.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.filter = 'blur(60px)'
      ctx.fill()
      ctx.restore()
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Blob 1 — indigo besar
      drawWaveBlob(
        w * (0.25 + 0.1 * Math.sin(t * 0.5)),
        h * (0.3  + 0.1 * Math.cos(t * 0.4)),
        w * 0.38,
        'rgba(99,102,241,0.5)',
        'rgba(79,70,229,0.15)',
        0.18, 4
      )

      // Blob 2 — violet
      drawWaveBlob(
        w * (0.75 + 0.08 * Math.cos(t * 0.45)),
        h * (0.55 + 0.12 * Math.sin(t * 0.35)),
        w * 0.32,
        'rgba(139,92,246,0.45)',
        'rgba(109,40,217,0.1)',
        0.22, 5
      )

      // Blob 3 — fuchsia bawah
      drawWaveBlob(
        w * (0.5  + 0.15 * Math.sin(t * 0.3)),
        h * (0.85 + 0.06 * Math.cos(t * 0.55)),
        w * 0.28,
        'rgba(192,132,252,0.4)',
        'rgba(167,139,250,0.08)',
        0.25, 6
      )

      // Blob 4 — cyan kecil kiri bawah
      drawWaveBlob(
        w * (0.1  + 0.06 * Math.cos(t * 0.7)),
        h * (0.75 + 0.1  * Math.sin(t * 0.5)),
        w * 0.2,
        'rgba(56,189,248,0.25)',
        'rgba(14,165,233,0.05)',
        0.3, 7
      )

      t += 0.012
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div className="noise-overlay" aria-hidden="true" />
    </>
  )
}