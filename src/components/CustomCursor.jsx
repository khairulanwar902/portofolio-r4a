import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const trails   = useRef([])
  const mouse    = useRef({ x: 0, y: 0 })
  const ring     = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Create trail elements
    const trailCount = 8
    const trailEls = Array.from({ length: trailCount }, (_, i) => {
      const el = document.createElement('div')
      el.className = 'cursor-trail'
      el.style.opacity = `${1 - i / trailCount}`
      el.style.width = `${4 - i * 0.3}px`
      el.style.height = `${4 - i * 0.3}px`
      document.body.appendChild(el)
      return { el, x: 0, y: 0 }
    })
    trails.current = trailEls

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top  = `${e.clientY}px`
      }
    }

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.width  = '14px'
        dotRef.current.style.height = '14px'
        dotRef.current.style.opacity = '0.6'
      }
      if (ringRef.current) {
        ringRef.current.style.width  = '50px'
        ringRef.current.style.height = '50px'
        ringRef.current.style.borderColor = 'rgba(167,139,250,0.8)'
      }
    }

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.width  = '8px'
        dotRef.current.style.height = '8px'
        dotRef.current.style.opacity = '1'
      }
      if (ringRef.current) {
        ringRef.current.style.width  = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(167,139,250,0.5)'
      }
    }

    // Smooth ring follow
    let rafId
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top  = `${ring.current.y}px`
      }
      // Trail
      let px = mouse.current.x, py = mouse.current.y
      trailEls.forEach((t) => {
        t.x += (px - t.x) * 0.35
        t.y += (py - t.y) * 0.35
        t.el.style.left = `${t.x}px`
        t.el.style.top  = `${t.y}px`
        px = t.x; py = t.y
      })
      rafId = requestAnimationFrame(animate)
    }
    animate()

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      trailEls.forEach(t => t.el.remove())
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}