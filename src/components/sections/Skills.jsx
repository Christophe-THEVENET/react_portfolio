import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'

const stacks = [
  {
    n: '01',
    label: 'Pour les équipes tech',
    lead: 'Missions en régie, applications métier complexes',
    core: ['Symfony 7', 'React 19', 'TypeScript', 'API Platform'],
    also: ['Doctrine ORM', 'Mercure', 'Tailwind v4', 'TanStack', 'Zustand', 'Motion'],
  },
  {
    n: '02',
    label: 'Pour les TPE',
    lead: 'Sites vitrine, e-commerce, présence locale',
    core: ['WordPress', 'WooCommerce', 'Elementor'],
    also: ['SEO local', 'PrestaShop', 'Optimisation Lighthouse', 'Multi-langue'],
  },
  {
    n: '03',
    label: 'Transversal',
    lead: 'Outils et savoir-faire qui traversent les deux axes',
    core: ['MySQL', 'Docker', 'Git', 'Linux'],
    also: ['Claude Code', 'Copilot', 'Figma', 'CI/CD', 'Agile/Scrum', 'Sécurité (CSRF/XSS)'],
  },
]

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-6 py-24 md:px-16 md:py-40"
    >
      <SectionTag
        num="03"
        eyebrow="Stack"
        title={
          <>
            Une stack,
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>deux univers</span>
            .
          </>
        }
        lead="Plutôt que d'aligner des barres de progression, voici comment ma stack se répartit selon les besoins du projet."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {stacks.map((s, i) => (
          <Reveal key={s.n} delay={i * 110}>
            <article
              className="p-7 transition-all duration-250"
              style={{
                border: '1px solid var(--rule)',
                background: 'var(--bg-card)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'rgba(71,179,177,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--rule)'
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
            >
              <div className="mono" style={{ color: 'var(--accent)' }}>
                {s.n} — {s.label}
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
                ⊹ Cœur de stack
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
