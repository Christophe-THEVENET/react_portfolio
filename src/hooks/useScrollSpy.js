import { useState, useEffect } from 'react'

export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      // find the current section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}

// smooth scroll to section
const sectionOffsets = {
  about: 80,
  services: 120,
  skills: 20,
  projects: 20,
  contact: 80,
}

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const offset = sectionOffsets[sectionId] ?? 80
    const top = section.offsetTop - offset
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    })
  }
}
