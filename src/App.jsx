import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import ParticleField from '@/components/backgrounds/ParticleField'

function App() {
  const [showParticles, setShowParticles] = useState(true)

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY < window.innerHeight * 0.9
      setShowParticles((prev) => (prev === shouldShow ? prev : shouldShow))
    }

    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    updateVisibility()

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {showParticles && <ParticleField key="particles" />}
      <div className="max-w-flux relative z-10 mx-auto pb-[100vh]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
