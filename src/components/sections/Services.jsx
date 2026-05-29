import { useRef } from 'react'
import SectionTag from '@/components/ui/SectionTag'
import { motion, useScroll, useTransform } from 'motion/react'
import { offers } from '@/data/services'

const directions = [
  { axis: 'x', from: -30 },
  { axis: 'x', from: 30 },
  { axis: 'x', from: -30 },
  { axis: 'x', from: 30 },
]

const ServiceCard = ({ offer, scrollYProgress, direction, index }) => {
  const total = offers.length
  const start = (index / total) * 0.4
  const end = Math.min(start + 0.55, 1)
  const transformX = useTransform(scrollYProgress, [start, end], [direction.from, 0])
  const transformY = useTransform(scrollYProgress, [start, end], [direction.from, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const x = direction.axis === 'x' ? transformX : 0
  const y = direction.axis === 'y' ? transformY : 0

  return (
    <motion.div style={{ x, y, opacity }} className="h-full">
      <article
        className="flex h-full flex-col p-7"
        style={{
          border: '1px solid var(--rule-soft)',
          background: '#192222',
        }}
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className="serif italic"
            style={{
              fontSize: '26px',
              color: 'var(--ink)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              fontWeight: 350,
            }}
          >
            {offer.lead}
          </h3>
          <div className="mono" style={{ color: 'var(--accent)' }}>
            {offer.label}
          </div>
        </div>

        <div className="mt-5 mb-5 flex flex-col gap-2">
          {offer.tiers.map((tier) => (
            <div key={tier.name} className="flex items-baseline justify-between gap-4">
              <span className="mono-sm" style={{ color: 'var(--mute)' }}>{tier.name}</span>
              {tier.price && (
                <span
                  className="serif"
                  style={{
                    fontSize: '28px',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                  }}
                >
                  {tier.price}
                </span>
              )}
            </div>
          ))}
        </div>

        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--mute)', textAlign: 'justify' }}>
          {offer.desc}
        </p>

        <div className="mono-sm mt-6 mb-3" style={{ color: 'var(--mute)' }}>
          ⊹ Inclus
        </div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {offer.included.map((item) => (
            <span
              key={item}
              className="mono-sm px-3 py-1.5"
              style={{
                background: 'rgba(71,179,177,0.10)',
                color: 'var(--accent)',
                border: '1px solid rgba(71,179,177,0.2)',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mono-sm mb-3" style={{ color: 'var(--mute)' }}>
          ⊹ &amp; aussi
        </div>
        <div className="flex flex-wrap gap-1.5">
          {offer.also.map((item) => (
            <span
              key={item}
              className="mono-sm px-3 py-1.5"
              style={{
                color: 'var(--mute)',
                border: '1px solid var(--rule)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </motion.div>
  )
}

export const Services = () => {
  const cardsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start 87%', 'start 52%'],
  })

  return (
    <section
      id="prestations"
      aria-label="Prestations"
      className="relative mx-auto px-6 md:px-16"
      style={{ paddingTop: 'clamp(88px, 11vh, 144px)', paddingBottom: 'clamp(88px, 11vh, 144px)', maxWidth: '1600px' }}
    >
      <SectionTag
        num=""
        eyebrow="Prestations"
        title={
          <>
             A chaque besoin,
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              sa formule
            </span>
          </>
        }
        lead="Deux axes : renforcer vos équipes tech, ou construire votre présence en ligne."
      />

      <div ref={cardsRef} className="grid grid-cols-1 min-[910px]:grid-cols-2 gap-6">
        {offers.map((o, i) => (
          <ServiceCard
            key={o.label}
            offer={o}
            scrollYProgress={scrollYProgress}
            direction={directions[i]}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
