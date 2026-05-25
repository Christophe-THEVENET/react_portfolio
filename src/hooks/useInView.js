import { useRef, useState, useEffect } from 'react'

export function useInView(opts = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (opts.once !== false) obs.disconnect()
        }
      },
      {
        threshold: opts.threshold ?? 0.15,
        rootMargin: opts.rootMargin ?? '200px 0px',
      },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}
