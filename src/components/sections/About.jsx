import { useRef, useState } from 'react'
import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'
import GlowCard from '@/components/animations/GlowCard'
import { ExternalLink, Share2, GraduationCap } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { SOCIAL_LINKS } from '@/utils/constants.js'

const diplomes = [
  {
    year: '2025',
    t: 'Bootcamp avancé Symfony',
    sub: 'Compétence BCO4 RNCP Concepteur Logiciel',
    link: 'https://drive.google.com/file/d/1gGJnrjABzNLgi9lt6mCnnkC1gpk29t1U/view',
    label: 'Voir le diplôme',
  },
  {
    year: '2024',
    t: 'Développeur Front-End',
    sub: 'Diplôme Studi',
    link: 'https://drive.google.com/file/d/1Kd4C5VcA02uW3dFCGXtRRcaPFLmn4sJb/view',
    label: 'Voir le diplôme',
  },
  {
    year: '2023',
    t: 'Graduate Web & Web Mobile',
    sub: 'Titre professionnel RNCP Développeur Web',
    link: 'https://drive.google.com/file/d/1FNUcDZuMMUKZsfKsdMWJiecGTDWBRh7_/view',
    label: 'Voir le diplôme',
  },
  {
    year: '2020',
    t: 'Développeur Web Full-Stack',
    sub: 'Certifications professionnelles',
    link: 'https://drive.google.com/drive/folders/1tnrd7ksG92qPS1ucqYy2Lh6I9poaOGpu',
    label: 'Voir les certificats',
  },
]

export const About = () => {
  const diplomesRef = useRef(null)
  const [hoveredDiplome, setHoveredDiplome] = useState(null)
  const { scrollYProgress } = useScroll({
    target: diplomesRef,
    offset: ['start 82%', 'start 48%'],
  })

  return (
    <section
      id="about"
      className="relative mx-auto px-6 md:px-16"
      style={{ paddingTop: 'clamp(88px, 11vh, 144px)', paddingBottom: 'clamp(88px, 11vh, 144px)', maxWidth: '1600px' }}
    >
      <SectionTag
        num=""
        eyebrow="À propos"
        title={
          <>
            Je construis,
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              vous grandissez
            </span>
          </>
        }
        lead="Mon parcours, ma méthode, en quelques lignes."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-24">
        <div>
          <Reveal>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.75,
                color: 'var(--ink-2)',
                maxWidth: '640px',
                textAlign: 'justify',
              }}
            >
              Issu d'une famille d'artisans, je suis devenu développeur il y a
              cinq ans après avoir suivi le web depuis ses débuts. Je travaille
              aujourd'hui en freelance autour de deux axes complémentaires.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p
              style={{
                marginTop: '20px',
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'var(--mute)',
                maxWidth: '640px',
                textAlign: 'justify',
              }}
            >
              D'un côté, des <strong style={{ color: 'var(--ink)' }}>missions techniques</strong> en{' '}
              <span style={{ color: 'var(--accent)' }}>React</span> et{' '}
              <span style={{ color: 'var(--accent)' }}>Symfony</span> pour
              renforcer des équipes ou lancer des projets. Architecture d'API,
              refactoring, debug complexe, mise en production. De l'autre, des{' '}
              <strong style={{ color: 'var(--ink)' }}>sites vitrines et e-commerce</strong>{' '}
              pour les TPE, commerçants et associations. Design moderne,
              référencement local, formation au back-office incluse.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p
              style={{
                marginTop: '20px',
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'var(--mute)',
                maxWidth: '640px',
                textAlign: 'justify',
              }}
            >
              Dans les deux cas, la même approche héritée : fabrication
              minutieuse, solutions durables, attention aux détails. Assisté
              par l'IA pour gagner en vélocité sans rogner sur la qualité.
            </p>
          </Reveal>
        </div>

        {/* Diplômes */}
        <aside ref={diplomesRef}>
          <Reveal>
            <div className="mono mb-7 flex items-center gap-2" style={{ color: 'var(--mute)' }}>
              <GraduationCap className="h-3.5 w-3.5" />
              Formations
            </div>
          </Reveal>
          <div className="flex flex-col">
            {diplomes.map((d, i) => {
              const start = (i / diplomes.length) * 0.5
              const end = Math.min(start + 0.45, 1)
              const x = useTransform(scrollYProgress, [start, end], [35, 0])
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

              return (
                <motion.div key={d.year} style={{ x, opacity }}>
                  {i > 0 && (
                    <div
                      className="mx-3 my-1 transition-opacity duration-200"
                      style={{
                        height: '1px',
                        background: 'var(--rule)',
                        opacity: hoveredDiplome === i || hoveredDiplome === i - 1 ? 0 : 1,
                      }}
                    />
                  )}
                  <GlowCard>
                    <div
                      className="group grid gap-4 items-center py-4 px-3 rounded-xl transition-all duration-300"
                      style={{
                        gridTemplateColumns: '56px 1fr 24px',
                        border: '1px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(71,179,177,0.04)'
                        setHoveredDiplome(i)
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        setHoveredDiplome(null)
                      }}
                    >
                      <div
                        className="mono-num flex flex-col items-center gap-1 py-1 rounded-lg"
                        style={{ background: 'rgba(71,179,177,0.06)' }}
                      >
                        <span
                          style={{
                            color: 'var(--accent)',
                            fontSize: '13px',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {d.year}
                        </span>
                      </div>
                      <div>
                        <div
                          className="serif group-hover:text-[var(--accent)] transition-colors duration-300"
                          style={{ fontSize: '18px', color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.3 }}
                        >
                          {d.t}
                        </div>
                        <div className="mono-sm mt-1" style={{ color: 'var(--mute)' }}>
                          {d.sub}
                        </div>
                      </div>
                      <motion.a
                        href={d.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/tooltip relative flex h-5 w-5 items-center justify-center"
                        style={{ color: 'var(--faint)' }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <ExternalLink className="h-full w-full" />
                        <span
                          className="mono-sm pointer-events-none absolute -top-9 right-0 whitespace-nowrap px-2.5 py-1.5 opacity-0 transition-all duration-200 group-hover/tooltip:opacity-100"
                          style={{
                            background: 'rgba(11,14,14,0.88)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid transparent',
                            color: 'var(--ink)',
                          }}
                        >
                          {d.label}
                          <span
                            className="absolute -bottom-[5px] right-2 border-x-[5px] border-t-[5px] border-x-transparent"
                            style={{ borderTopColor: 'rgba(11,14,14,0.88)' }}
                          />
                        </span>
                      </motion.a>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </div>
        </aside>
      </div>

      {/* Pull-quote + Réseaux */}
      <div className="mt-20 flex flex-col lg:flex-row items-end justify-between gap-8">
        <Reveal delay={400}>
          <blockquote
            style={{
              paddingLeft: '32px',
              borderLeft: '1px solid var(--accent)',
            }}
          >
            <p
              className="serif italic"
              style={{
                fontSize: 'clamp(22px, 2.5vw, 36px)',
                lineHeight: 1.3,
                fontWeight: 300,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              Je fabrique un site internet comme on fabrique un meuble.
            </p>
            <footer className="mono-sm mt-4" style={{ color: 'var(--mute)' }}>
              — Philosophie
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={500}>
          <div className="flex flex-col gap-4">
            <div className="mono flex items-center justify-end gap-2" style={{ color: 'var(--mute)' }}>
              <Share2 className="h-2.5 w-2.5" />
              Réseaux
            </div>
            <div className="flex flex-wrap justify-end gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08, ease: 'easeOut' }}
                  >
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-12 w-16 items-center justify-center"
                      style={{ border: '1px solid transparent' }}
                      whileHover={{
                        scale: 1.3,
                        background: 'rgba(71,179,177,0.10)',
                        boxShadow: '0 4px 12px rgba(47,142,142,0.15)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      onMouseEnter={(e) => {
                        const svg = e.currentTarget.querySelector('svg')
                        if (svg) svg.style.color = 'rgba(255,255,255,0.85)'
                      }}
                      onMouseLeave={(e) => {
                        const svg = e.currentTarget.querySelector('svg')
                        if (svg) svg.style.color = 'rgba(230,226,216,0.72)'
                      }}
                    >
                      <IconComponent className="h-6 w-6 transition-colors duration-300" style={{ color: 'rgba(230,226,216,0.72)' }} />
                    </motion.a>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
