import React, { useState, useEffect, useRef } from 'react'

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //Trigger when element is visible
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      // Trigger slightly before the element is in view
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [isVisible, threshold])

  return (
    <div
      ref={elementRef}
      className={isVisible ? 'animate-fade-in' : 'opacity-0'}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn
