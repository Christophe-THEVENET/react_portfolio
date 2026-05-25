import { useRef } from 'react'
import SectionTag from '@/components/ui/SectionTag'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'motion/react'

const offers = [
  {
    label: 'Freelance',
    lead: 'Renforcez vos équipes',
    tiers: [
      { name: 'Taux journalier', price: '400€' },
      { name: 'Maintenance', price: '50€/h' },
    ],
    desc: 'Je rejoins vos sprints en renfort : architecture, nouvelles fonctionnalités, refactoring, debug complexe, mise en production. Habitué aux workflows agiles, je suis opérationnel rapidement avec un setup assisté par IA.',
    included: [
      'Symfony sénior',
      'React avancé',
      'TypeScript',
      'API REST',
      'SQL',
      'Docker',
    ],
    also: [
      'conception bdd',
      'déploiement continu',
      'automatisation',
      'Maquettage',
    ],
  },
  {
    label: 'Site vitrine',
    lead: 'Affirmez votre présence',
    tiers: [
      { name: 'One-page', price: '450€' },
      { name: 'Site complet (5 pages)', price: '950€' },
    ],
    desc: 'One-page : une page unique pour présenter votre activité. Site complet : plusieurs pages structurées (services, réalisations, équipe, contact). Dans les deux cas : design moderne, mobile-first, référencement local, formation back-office inclus.',
    included: [
      'Clé en main',
      'Design premium',
      'référencement',
      'sécurité',
      'Responsive',
    ],
    also: [
      'Livraison 2-3 sem.',
      'formulaire de contact',
      'Blog, calendrier',
      'options',
    ],
  },
  {
    label: 'E-commerce',
    lead: 'Développez vos ventes',
    tiers: [
      { name: 'Boutique essentielle', price: '1600€' },
      { name: 'Boutique pro', price: '2500€' },
    ],
    desc: "Essentielle : catalogue jusqu'a 50 produits, panier, paiement sécurisé et gestion de commandes: tout pour démarrer la vente en ligne. Pro : jusqu'a 300 produits, gestion avancée des stocks, variations de produits, coupons, analytics.",
    included: [
      'Fiches produits',
      'référencement',
      'Gestion commandes/stocks/clients',
    ],
    also: [
      'Suivi commandes',
      'Responsive',
      'options disponibles',
      'Design premium',
    ],
  },
  {
    label: 'Application full-stack',
    lead: 'Automatisez vos processus',
    tiers: [
      { name: 'Application web', price: 'sur devis' },
      { name: 'Application mobile', price: 'sur devis' },
    ],
    desc: 'Un besoin métier qui ne rentre dans aucune case ? Je pilote le projet de bout en bout : analyse, conception, développement et livraison. Architecture découplée, pensée pour évoluer sur le long terme.',
    included: [
      'Authentification',
      'Back-office perso',
      'Espace Membre',
      'temps réel',
    ],
    also: [
      'Moidélisation BDD',
      'exploitation de données',
      'algorithmes',
      'sécurité',
    ],
  },
]

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
          border: '1px solid transparent',
          background: '#161c1c',
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

        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--mute)' }}>
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
      id="services"
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

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
