import logo from '@/assets/img/general/logo_digitob.svg'
import { Code, Menu, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '@/utils/constants.js'
import React, { useState, useEffect } from 'react'
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

    <header
      className={`fixed top-0 right-0 left-0 z-1000 w-full py-6 transition-all duration-300 ${
        isScrolled ? ' backdrop-blur-lg' : 'bg-transparent'
      }`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className="max-w-flux mx-auto sm:px-5">
        <div className="flex items-center justify-between">
          {/* logo ************************************** */}
          <div className="-mt-2 flex items-center">
            <a href="https://christophethevenet.fr">
              <img
                className="hover-hue-rotate-loop w-36 transition-all duration-500"
                src={logo}
                alt="logo digitob"
              />
            </a>
          </div>
          {/* desktop navigation ************************* */}
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

          {/* CTA Button ******************************* */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-shimmer cursor-pointer rounded-[17px] bg-white/75 px-3 py-1.5 text-base font-medium text-[#212121] transition-all duration-300"
            >
              Contactez moi
            </button>
          </div>

          {/* mobile hamburger ************************* */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-4 text-white transition-colors duration-300 hover:text-white/80 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* mobile navigation ************************* */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${isMenuOpen ? 'mt-3 max-h-screen opacity-100' : 'mt-0 max-h-0 opacity-0'}`}
        >
          <div
            className={`min-h-[80vh] origin-top transform space-y-4 border-t border-b border-white/20 bg-black/95 px-5 pt-6 pb-14 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full rounded-lg px-4 py-3 text-left font-medium transition-all duration-300 ${activeSection === link.id ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-shimmer mt-10 w-full cursor-pointer rounded-[17px] bg-white/90 px-5 py-2 text-base font-medium text-[#212121] transition-all duration-300"
            >
              Contactez moi
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
