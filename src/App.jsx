import { useState, useEffect, lazy, Suspense } from 'react'
import CursorGlow from '@/components/animations/CursorGlow'

const ParticleField = lazy(() => import('@/components/backgrounds/ParticleField'))
import { Navbar } from '@/components/layout/Navbar'
import { Home } from '@/components/sections/Home'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import bgImage from '@/assets/img/general/background.webp'

function App() {
  const [scrollOpacity, setScrollOpacity] = useState(0)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => setShowParticles(true), 1200)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      // L'assombrissement se termine un peu avant l'entrée dans « À propos »
      const about = document.getElementById('a-propos')
      const end = (about ? about.offsetTop : window.innerHeight) * 0.7
      const progress = end > 0 ? Math.min(window.scrollY / end, 1) : 0
      setScrollOpacity(progress)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      {/* Background image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'var(--bg)',
            opacity: 0.78 + scrollOpacity * 0.15,
          }}
        />
      </div>
      <CursorGlow />
      {showParticles && (
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      )}
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
