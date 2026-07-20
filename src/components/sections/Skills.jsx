import { useRef } from 'react'
import SectionTag from '@/components/ui/SectionTag'
import { motion, useScroll, useTransform } from 'motion/react'
import { stacks } from '@/data/skills'

const SkillCard = ({ stack, scrollYProgress, direction, index }) => {
  const start = (index / stacks.length) * 0.4
  const end = Math.min(start + 0.55, 1)
  const transformX = useTransform(scrollYProgress, [start, end], [direction.from, 0])
  const transformY = useTransform(scrollYProgress, [start, end], [direction.from, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const x = direction.axis === 'x' ? transformX : 0
  const y = direction.axis === 'y' ? transformY : 0

  return (
    <motion.li style={{ x, y, opacity }} className="h-full">
        <article
          className="h-full p-7"
          style={{
            border: '1px solid var(--rule-soft)',
          background: '#192222',
          }}
        >
          <div className="mono" style={{ color: 'var(--accent)' }}>
            {stack.label}
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
            {stack.lead}
          </h3>

          <p className="mono-sm mb-3" style={{ color: 'var(--mute)' }}>
            <span aria-hidden="true">⊹ </span>Ce que je maîtrise
          </p>
          <ul className="flex flex-wrap gap-1.5 mb-7">
            {stack.core.map((c) => (
              <li
                key={c}
                className="mono-sm px-3 py-1.5"
                style={{
                  background: 'rgba(71,179,177,0.10)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(71,179,177,0.2)',
                }}
              >
                {c}
              </li>
            ))}
          </ul>

          <p className="mono-sm mb-3" style={{ color: 'var(--mute)' }}>
            <span aria-hidden="true">⊹ </span>&amp; aussi
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {stack.also.map((c) => (
              <li
                key={c}
                className="mono-sm px-3 py-1.5"
                style={{
                  color: 'var(--mute)',
                  border: '1px solid var(--rule)',
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        </article>
    </motion.li>
  )
}

export const Skills = () => {
  const cardsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start 87%', 'start 52%'],
  })

  const directions = [
    { axis: 'x', from: -30 },
    { axis: 'y', from: 25 },
    { axis: 'x', from: 30 },
  ]

  return (
    <section
      id="competences"
      aria-label="Compétences"
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

      <ul ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {stacks.map((s, i) => (
          <SkillCard
            key={s.label}
            stack={s}
            scrollYProgress={scrollYProgress}
            direction={directions[i]}
            index={i}
          />
        ))}
      </ul>
    </section>
  )
}
