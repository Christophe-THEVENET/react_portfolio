import logo from '@/assets/img/general/logo_digitob.svg'
import { Code, Menu, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '@/utils/constants.js'
import React, { useState, useEffect } from 'react'
/* import useScrollReveal from '@/hooks/useScrollReveal.jsx' */
import { useScrollSpy, scrollToSection } from '@/hooks/useScrollSpy.js'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    /*   <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#">
          <img
            className="hover-hue-rotate-loop w-32 transition-all duration-500"
            src={logo}
            alt="logo digitob"
          />
        </a>
        
        <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full px-4 py-2 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div></div>
      </nav>
    </header> */

    <header
      className={`fixed top-0 right-0 left-0 z-1000 w-full py-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'
      }`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className="mx-auto max-w-[1320px] px-5">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center -mt-2">
            <a href="#">
              <img
                className="hover-hue-rotate-loop w-32 transition-all duration-500"
                src={logo}
                alt="logo digitob"
              />
            </a>
          </div>
          {/* desktop navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`cursor-pointer text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => handleNavClick('contact')}
              className="rounded-[17px] border border-white bg-white/90 px-3 py-1 text-base font-medium text-[#212121] transition-all duration-300 hover:bg-white"
            >
              Contactez moi
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
