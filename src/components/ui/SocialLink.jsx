import { motion } from 'motion/react'
import { useMagnetic } from '@/hooks/useMagnetic'

const ICON_REST = 'rgba(230,226,216,0.72)'

/**
 * Bouton réseau social, inspiré des CTA du hero : léger effet magnétique
 * (le bouton suit le curseur) + passage de la bordure et de l'icône en accent
 * au survol. Pas de rebond.
 */
export default function SocialLink({ social, index, size = 'md' }) {
  const Icon = social.icon
  const magneticRef = useMagnetic(0.3)
  // Sur mobile : largeur fluide (les boutons remplissent la ligne à parts égales).
  // À partir de sm : largeur fixe d'origine.
  const boxClass =
    size === 'xl'
      ? 'h-11 w-full sm:h-10 sm:w-22'
      : size === 'lg'
        ? 'h-12 w-full sm:w-24'
        : 'h-11 w-full sm:w-20'
  const iconClass = size === 'xl' ? 'h-6 w-6' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'

  return (
    <motion.li
      className="flex-1 basis-0 sm:flex-none"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08, ease: 'easeOut' }}
    >
      <a
        ref={magneticRef}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className={`flex ${boxClass} items-center justify-center transition-colors duration-200`}
        style={{ border: '1px solid var(--rule)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent)'
          const svg = e.currentTarget.querySelector('svg')
          if (svg) svg.style.color = 'var(--accent)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--rule)'
          const svg = e.currentTarget.querySelector('svg')
          if (svg) svg.style.color = ICON_REST
        }}
      >
        <Icon
          className={`${iconClass} transition-colors duration-300`}
          style={{ color: ICON_REST }}
        />
      </a>
    </motion.li>
  )
}
