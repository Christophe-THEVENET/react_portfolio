import { useRef } from 'react'
import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'
import { ExternalLink, Share2, GraduationCap } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { SOCIAL_LINKS } from '@/utils/constants'
import SocialLink from '@/components/ui/SocialLink'
import { diplomes } from '@/data/diplomes'

function DiplomeItem({ d, i, scrollYProgress }) {
  const total = diplomes.length
  const start = (i / total) * 0.5
  const end = Math.min(start + 0.45, 1)
  const x = useTransform(scrollYProgress, [start, end], [35, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

  return (
    <motion.div style={{ x, opacity }}>
      {i > 0 && (
        <div
          className="mx-3 my-1"
          style={{ height: '1px', background: 'var(--rule)' }}
        />
      )}
      <div
        className="grid gap-4 items-center py-4 px-3"
        style={{ gridTemplateColumns: '56px 1fr 24px' }}
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
            className="serif"
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
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
            }}
          >
            {d.label}
            <span
              className="absolute right-2"
              style={{
                bottom: '-5px',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid var(--accent)',
              }}
            />
          </span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export const About = () => {
  const diplomesRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: diplomesRef,
    offset: ['start 82%', 'start 48%'],
  })

  return (
    <section
      id="a-propos"
      aria-label="À propos"
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
              <span style={{ color: 'var(--accent)' }}>Symfony</span> et{' '}
              <span style={{ color: 'var(--accent)' }}>React</span> pour
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
            {diplomes.map((d, i) => (
              <DiplomeItem
                key={d.year}
                d={d}
                i={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
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
            <div className="flex flex-wrap items-end justify-end gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink
                  key={social.name}
                  social={social}
                  index={index}
                  size="xl"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
