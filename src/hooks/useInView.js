import { useRef, useState, useEffect } from 'react'

export function useInView(opts = {}) {
  const ref = useRef(null)
  const optsRef = useRef(opts)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (!ref.current || inView) return
    const { once, threshold, rootMargin } = optsRef.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once !== false) obs.disconnect()
        }
      },
      {
        threshold: threshold ?? 0.15,
        rootMargin: rootMargin ?? '200px 0px',
      },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [inView])

  return [ref, inView]
}
