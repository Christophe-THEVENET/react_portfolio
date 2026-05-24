import { useRef, useEffect, useState } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let x = window.innerWidth / 2, y = 200
    let tx = x, ty = y
    let hideTimer
    let active = false

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!active) {
        active = true
        el.classList.add('visible')
      }
      clearTimeout(hideTimer)
      hideTimer = setTimeout(() => {
        active = false
        el.classList.remove('visible')
      }, 2500)
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    let raf
    function tick() {
      x += (tx - x) * 0.1
      y += (ty - y) * 0.1
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="ed-glow"
      aria-hidden="true"
      style={{ opacity: scrolled ? 0 : undefined, transition: 'opacity 600ms' }}
    />
  )
}
