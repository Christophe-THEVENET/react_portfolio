import logo from '@/assets/img/general/logo_digitob.svg'
import { Button } from '@/Components/Button.jsx'

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Prestations', href: '#services' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#">
          <img
            className="hover-hue-rotate-loop w-32 transition-all duration-500"
            src={logo}
            alt="logo digitob"
          />
        </a>
        {/* Desktop Nav */}
        <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full px-4 py-2 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button*/}
        <div>
          <Button size="sm">Contact</Button>
        </div>
      </nav>
    </header>
  )
}
