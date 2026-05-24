import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'

const diplomes = [
  { year: '2025', t: 'Bootcamp avancé Symfony', sub: 'BCO4 RNCP — Concepteur Logiciel' },
  { year: '2024', t: 'Développeur Front-End', sub: 'Diplôme Studi' },
  { year: '2023', t: 'Graduate Web & Web Mobile', sub: 'Titre pro RNCP' },
  { year: '2020', t: 'Développeur Web Full-Stack', sub: 'Certifications professionnelles' },
]

export const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-24 md:px-16 md:py-40"
    >
      <SectionTag
        num="02"
        eyebrow="Portrait"
        title={
          <>
            Une approche
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              sur mesure
            </span>
            .
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-24">
        <div>
          <Reveal>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.75,
                color: 'var(--ink-2)',
                maxWidth: '580px',
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
                maxWidth: '580px',
              }}
            >
              D'un côté, des <strong style={{ color: 'var(--ink)' }}>missions techniques</strong> en{' '}
              <span style={{ color: 'var(--accent)' }}>Symfony</span> et{' '}
              <span style={{ color: 'var(--accent)' }}>React</span> pour
              renforcer des équipes de développement. Architecture d'API,
              refactoring, debug complexe, mise en production. De l'autre, la{' '}
              <strong style={{ color: 'var(--ink)' }}>création de sites WordPress</strong>{' '}
              pour les TPE, commerçants et associations — design moderne,
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
                maxWidth: '580px',
              }}
            >
              Dans les deux cas, la même approche héritée : fabrication
              minutieuse, solutions durables, attention aux détails. Assisté
              par l'IA pour gagner en vélocité sans rogner sur la qualité.
            </p>
          </Reveal>

          {/* Pull-quote */}
          <Reveal delay={400}>
            <blockquote
              className="mt-14"
              style={{
                paddingLeft: '32px',
                borderLeft: '1px solid var(--accent)',
                maxWidth: '540px',
              }}
            >
              <p
                className="serif italic"
                style={{
                  fontSize: '28px',
                  lineHeight: 1.4,
                  fontWeight: 300,
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                }}
              >
                Je fabrique un site internet
                <br />
                comme on fabrique un meuble.
              </p>
              <footer className="mono-sm mt-4" style={{ color: 'var(--mute)' }}>
                — Manifeste
              </footer>
            </blockquote>
          </Reveal>
        </div>

        {/* Diplômes */}
        <aside>
          <div className="mono mb-7" style={{ color: 'var(--mute)' }}>
            ⊹ Formation
          </div>
          {diplomes.map((d, i) => (
            <Reveal key={d.year} delay={i * 90}>
              <div
                className="grid gap-4 items-baseline py-5"
                style={{
                  gridTemplateColumns: '64px 1fr 24px',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                <div
                  className="mono-num"
                  style={{
                    color: 'var(--accent)',
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {d.year}
                </div>
                <div>
                  <div
                    className="serif"
                    style={{ fontSize: '20px', color: 'var(--ink)', letterSpacing: '-0.01em' }}
                  >
                    {d.t}
                  </div>
                  <div className="mono-sm mt-1.5" style={{ color: 'var(--mute)' }}>
                    {d.sub}
                  </div>
                </div>
                <div style={{ color: 'var(--faint)', textAlign: 'right' }}>↗</div>
              </div>
            </Reveal>
          ))}
        </aside>
      </div>
    </section>
  )
}
