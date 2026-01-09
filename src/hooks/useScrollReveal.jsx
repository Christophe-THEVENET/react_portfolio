import { useEffect, useState, useRef } from 'react'

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options

  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const currentElement = elementRef.current
    if (!currentElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(currentElement)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin])

  return [isVisible, elementRef]
}
