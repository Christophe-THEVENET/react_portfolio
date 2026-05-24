import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'

const offers = [
  {
    n: '01',
    label: 'Mission tech',
    price: '400€',
    unit: '/ jour',
    desc: 'Renfort en régie sur vos équipes — Symfony, React, refactoring, debug complexe, mise en production.',
    bullets: ['À la journée', 'Min. 5 jours', 'Maintenance · 50€/h'],
  },
  {
    n: '02',
    label: 'Site vitrine',
    price: '450€',
    to: '950€',
    desc: 'Une à cinq pages, design moderne, mobile-first, référencement local, formulaire de contact, hébergement la 1ʳᵉ année.',
    bullets: ['Livraison 2-3 semaines', 'Formation back-office', 'Garantie 6 mois'],
  },
  {
    n: '03',
    label: 'E-commerce',
    price: '1600€',
    to: '2500€',
    desc: 'Boutique en ligne complète, paiement sécurisé, gestion stocks, options clients personnalisées et analytics.',
    bullets: ['WooCommerce ou Symfony', 'Catalogue jusqu’à 50 produits', 'Suivi commandes inclus'],
  },
  {
    n: '04',
    label: 'Application sur mesure',
    price: 'sur',
    to: 'devis',
    desc: "Application métier complète avec back-office, API, espace membre. De la note d’intention à la livraison itérative.",
    bullets: ['Cahier des charges co-rédigé', 'Architecture évolutive', 'Sprints 2 semaines'],
  },
]

export const Services = () => {
  return (
    <section
      id="services"
      className="relative px-6 py-24 md:px-16 md:py-40"
    >
      <SectionTag
        num="05"
        eyebrow="Prestations"
        title={
          <>
            Quatre
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              points d'entrée
            </span>
            .
          </>
        }
        lead="Tarifs publics, garantie de transparence. Tous les projets démarrent par un appel gratuit de 30 minutes pour cadrer le besoin."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((o, i) => (
          <Reveal key={o.n} delay={i * 90}>
            <article
              className="flex flex-col gap-5 p-7 md:p-9 transition-all duration-250"
              style={{
                border: '1px solid var(--rule)',
                background: 'var(--bg-card)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--rule)'
              }}
            >
              <div
                className="mono flex justify-between"
                style={{ color: 'var(--accent)' }}
              >
                <span>Réf. {o.n}</span>
                <span>{o.label}</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span
                  className="serif"
                  style={{
                    fontSize: 'clamp(48px, 5vw, 72px)',
                    fontWeight: 300,
                    letterSpacing: '-0.035em',
                    lineHeight: 1,
                    color: 'var(--ink)',
                  }}
                >
                  {o.price}
                </span>
                {o.to && (
                  <>
                    <span className="mono-sm" style={{ color: 'var(--mute)' }}>→</span>
                    <span
                      className="serif italic"
                      style={{
                        fontSize: 'clamp(28px, 3vw, 40px)',
                        fontWeight: 300,
                        color: 'var(--mute)',
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {o.to}
                    </span>
                  </>
                )}
                {o.unit && (
                  <span className="mono-sm" style={{ color: 'var(--mute)' }}>{o.unit}</span>
                )}
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--mute)' }}>
                {o.desc}
              </p>

              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {o.bullets.map((b) => (
                  <li
                    key={b}
                    className="mono-sm grid gap-2.5"
                    style={{
                      color: 'var(--ink-2)',
                      gridTemplateColumns: '14px 1fr',
                    }}
                  >
                    <span style={{ color: 'var(--accent)' }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
