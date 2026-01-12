import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Skills } from '@/components/sections/Skills'
import ParticleField from '@/components/backgrounds/ParticleField'

function App() {
  const [showParticles, setShowParticles] = useState(true)

  useEffect(() => {
    const updateVisibility = () => {
      const scrollY = window.scrollY
      const shouldShow = scrollY < window.innerHeight * 0.9
      setShowParticles((prev) => (prev === shouldShow ? prev : shouldShow))
      document.body.classList.toggle('bg-darkened', scrollY > 10)
    }

    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    updateVisibility()

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
      document.body.classList.remove('bg-darkened')
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {showParticles && <ParticleField key="particles" />}
      <div className="max-w-flux relative z-10 mx-auto">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />

        </main>
      </div>
    </div>
  )
}

export default App
