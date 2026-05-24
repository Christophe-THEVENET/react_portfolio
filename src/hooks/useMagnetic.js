import { useRef, useEffect } from 'react'

export function useMagnetic(strength = 0.25) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    el.classList.add('ed-magnet')
    let raf = null
    let tx = 0, ty = 0, x = 0, y = 0

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      tx = (e.clientX - cx) * strength
      ty = (e.clientY - cy) * strength
      if (!raf) {
        const animate = () => {
          x += (tx - x) * 0.18
          y += (ty - y) * 0.18
          el.style.transform = `translate(${x}px, ${y}px)`
          if (Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2) {
            raf = requestAnimationFrame(animate)
          } else {
            raf = null
          }
        }
        raf = requestAnimationFrame(animate)
      }
    }

    const onLeave = () => {
      tx = 0
      ty = 0
      if (!raf) {
        const animate = () => {
          x += (0 - x) * 0.18
          y += (0 - y) * 0.18
          el.style.transform = `translate(${x}px, ${y}px)`
          if (Math.abs(x) > 0.2 || Math.abs(y) > 0.2) {
            raf = requestAnimationFrame(animate)
          } else {
            el.style.transform = 'translate(0,0)'
            raf = null
          }
        }
        raf = requestAnimationFrame(animate)
      }
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}
