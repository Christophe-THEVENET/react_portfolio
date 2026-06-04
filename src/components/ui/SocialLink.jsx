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
  const boxClass = size === 'lg' ? 'h-16 w-20' : 'h-12 w-16'
  const iconClass = size === 'lg' ? 'h-8 w-8' : 'h-6 w-6'
  // En « lg », on laisse le bouton dépasser vers le HAUT (marge négative) pour
  // ne pas augmenter la hauteur de la rangée → la ligne ne se décale pas.
  const wrapperClass = size === 'lg' ? '-mt-4' : ''

  return (
    <motion.div
      className={wrapperClass}
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
    </motion.div>
  )
}
