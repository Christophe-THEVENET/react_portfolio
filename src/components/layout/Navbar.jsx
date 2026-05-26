import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import logoDigitob from '@/assets/img/general/logo_digitob.svg'

const links = [
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'catalogue', label: 'Réalisations' },
  { id: 'services', label: 'Prestations' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)

      if (currentY > 100 && !menuOpen) {
        setHeaderVisible(currentY < lastScrollY.current)
      } else {
        setHeaderVisible(true)
      }
      lastScrollY.current = currentY

      const sections = ['hero', 'about', 'skills', 'catalogue', 'services', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(sections[i])
          return
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: (scrolled || menuOpen) ? 'rgba(15,18,18,0.82)' : 'rgba(15,18,18,0)',
        backdropFilter: (scrolled || menuOpen) ? 'blur(12px) saturate(150%)' : 'none',
        WebkitBackdropFilter: (scrolled || menuOpen) ? 'blur(12px) saturate(150%)' : 'none',
        boxShadow: (scrolled || menuOpen) ? '0 1px 20px rgba(0,0,0,0.4)' : 'none',
        transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="flex items-center justify-between px-6 py-3 md:px-16 md:py-3">
        <a href="#hero">
          <img
            src={logoDigitob}
            alt="Digitob"
            className="transition-opacity duration-300 hover:opacity-80"
            style={{ height: '38px', width: 'auto' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={'#' + l.id}
              className="mono relative px-3.5 py-2.5 transition-colors duration-150 rounded-lg"
              style={{
                color: active === l.id ? 'var(--accent)' : 'var(--ink-2)',
              }}
              onMouseEnter={(e) => {
                if (active !== l.id) e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                if (active !== l.id) e.currentTarget.style.color = 'var(--ink-2)'
              }}
            >
              {l.label}
              {active === l.id && (
                <span
                  className="absolute left-3.5 right-3.5 bottom-1 h-px"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          style={{ color: 'var(--ink)' }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden flex flex-col px-6 pb-6 gap-1 overflow-hidden"
            style={{
              background: 'rgba(11,14,14,0.95)',
              backdropFilter: 'blur(12px)',
            }}
          >
          {links.map((l) => (
            <a
              key={l.id}
              href={'#' + l.id}
              onClick={(e) => {
                e.preventDefault()
                setMenuOpen(false)
                setTimeout(() => {
                  document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })
                }, 300)
              }}
              className="mono py-3 px-4 rounded-lg transition-colors duration-150"
              style={{
                color: active === l.id ? 'var(--accent)' : 'var(--ink-2)',
                background: active === l.id ? 'rgba(71,179,177,0.08)' : 'transparent',
              }}
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
