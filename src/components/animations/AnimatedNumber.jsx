import { useState, useEffect, useRef } from 'react'
import { useInView } from '@/hooks/useInView'

function useCountUp(target, duration = 1600, startWhen = true, delay = 0) {
  // Fallback statique : on affiche directement le vrai chiffre (SEO — évite
  // qu'un crawler indexe « 0 % » avant le déclenchement de l'animation).
  const [v, setV] = useState(target)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!startWhen || startedRef.current) return
    startedRef.current = true
    setV(0) // on repart de 0 uniquement quand l'animation se déclenche
    let raf
    const timer = setTimeout(() => {
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        setV(target * eased)
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [target, duration, startWhen, delay])

  return v
}

export default function AnimatedNumber({
  n,
  duration = 1600,
  delay = 0,
  pad = 0,
  suffix = '',
  prefix = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const v = useCountUp(n, duration, inView, delay)
  const rounded = Math.round(v)
  const text = pad ? String(rounded).padStart(pad, '0') : String(rounded)

  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}
