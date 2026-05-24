import { useRef } from 'react'
import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'
import GlowCard from '@/components/animations/GlowCard'
import { motion, useScroll, useTransform } from 'motion/react'

const stacks = [
  {
    label: 'Missions techniques',
    lead: "Applications métier, renfort d'équipe",
    core: ['Symfony', 'React.js', 'TypeScript', 'SQL'],
    also: [
      'design patterns',
      'Mercure',
      'TanStack',
      'Zustand',
      'Symfony ux',
      'sass',
      'Tailwind',
    ],
  },
  {
    label: 'Sites professionnels',
    lead: 'Vitrine, e-commerce, visibilité locale',
    core: ['WordPress', 'WooCommerce', 'Thèmes premium'],
    also: [
      'Next.js',
      'Elementor',
      'SEO local',
      'Shopify',
      'Multi-langue',
      'Accessibilité',
    ],
  },
  {
    label: 'Fondations ',
    lead: 'Commun aux deux axes',
    core: ['Linux', 'Docker', 'Git', 'api rest'],
    also: [
      'Sécurité (CSRF/XSS)',
      'mvc/poo',
      'Claude AI',
      'UI/UX design',
      'Merise',
      'CI/CD',
      'Agile/Scrum',
    ],
  },
]

export const Skills = () => {
  const cardsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start 75%', 'start 25%'],
  })

  const directions = [
    { axis: 'x', from: -80 },
    { axis: 'y', from: 60 },
    { axis: 'x', from: 80 },
  ]

  return (
    <section
      id="skills"
      className="relative mx-auto px-6 md:px-16"
      style={{ paddingTop: 'clamp(88px, 11vh, 144px)', paddingBottom: 'clamp(88px, 11vh, 144px)', maxWidth: '1600px' }}
    >
      <SectionTag
        num=""
        eyebrow="Compétences"
        title={
          <>
            Technologies
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>et savoir-faire</span>
          </>
        }
        lead="Ce que j'utilise, selon le type de mission."
      />

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {stacks.map((s, i) => {
              const dir = directions[i]
              const start = (i / stacks.length) * 0.4
              const end = Math.min(start + 0.55, 1)
              const x = dir.axis === 'x' ? useTransform(scrollYProgress, [start, end], [dir.from, 0]) : 0
              const y = dir.axis === 'y' ? useTransform(scrollYProgress, [start, end], [dir.from, 0]) : 0
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

              return (
                <motion.div key={s.label} style={{ x, y, opacity }}>
                  <GlowCard>
                    <article
                      className="p-7 transition-all duration-300"
                      style={{
                        border: '1px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(71,179,177,0.04)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
              <div className="mono" style={{ color: 'var(--accent)' }}>
                {s.label}
              </div>
              <h3
                className="serif italic mt-4 mb-6"
                style={{
                  fontSize: '26px',
                  color: 'var(--ink)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  fontWeight: 350,
                }}
              >
                {s.lead}
              </h3>

              <div className="mono-sm mb-3" style={{ color: 'var(--mute)' }}>
                ⊹ Ce que je maîtrise
              </div>
              <div className="flex flex-wrap gap-1.5 mb-7">
                {s.core.map((c) => (
                  <span
                    key={c}
                    className="mono-sm px-3 py-1.5"
                    style={{
                      background: 'rgba(71,179,177,0.10)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(71,179,177,0.2)',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mono-sm mb-3" style={{ color: 'var(--mute)' }}>
                ⊹ &amp; aussi
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.also.map((c) => (
                  <span
                    key={c}
                    className="mono-sm px-3 py-1.5"
                    style={{
                      color: 'var(--mute)',
                      border: '1px solid var(--rule)',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </article>
                  </GlowCard>
                </motion.div>
              )
            })}
      </div>
    </section>
  )
}
