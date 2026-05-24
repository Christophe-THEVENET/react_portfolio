import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'
import imgBoulio from '@/assets/img/projects/boulio.jpg'
import imgGreengoodies from '@/assets/img/projects/greengoodies.jpg'
import imgAletti from '@/assets/img/projects/aletti.jpg'

const featured = [
  {
    n: '01',
    name: 'Boulio',
    kind: 'Plateforme communautaire — full-stack',
    desc: 'Réseau social dédié à la pétanque : forum thématique, blog contributeurs, chat live, messagerie privée et intégration de lives YouTube. Symfony + Mercure côté serveur, React + TanStack côté client.',
    stack: ['React 19', 'Symfony 7', 'TanStack', 'Mercure', 'MySQL'],
    url: 'https://boulio.com',
    year: '2025',
    img: imgBoulio,
  },
  {
    n: '02',
    name: 'Greengoodies',
    kind: 'E-commerce Symfony',
    desc: 'Catalogue, panier asynchrone, commandes, validations temps réel et notifications. Twig intégré, ORM Doctrine, déploiement Docker. Une démonstration de la chaîne complète Symfony.',
    stack: ['Symfony', 'Sass', 'MySQL', 'Docker'],
    url: 'https://greengoodies.space/',
    year: '2024',
    img: imgGreengoodies,
  },
  {
    n: '03',
    name: 'Aletti Palace',
    kind: 'Site vitrine premium',
    desc: 'Palace thermal, dix pages illustrées, carte de restaurant intégrée, traduction anglaise complète. Esthétique raffinée belle époque, intégration Elementor sur mesure.',
    stack: ['WordPress', 'Elementor'],
    url: 'https://hotel-aletti.fr/',
    year: '2024',
    img: imgAletti,
  },
]

const index = [
  { n: '04', name: 'CBD-63', kind: 'Vitrine', stack: 'WordPress', year: '2024' },
  { n: '05', name: 'Cyber Météo', kind: 'Application front', stack: 'React 19', year: '2025' },
  { n: '06', name: 'Saveurs de Savoie', kind: 'App full-stack', stack: 'Symfony / React', year: '2023' },
  { n: '07', name: 'DiceFighter', kind: 'Mini-jeu POO', stack: 'Vite / Sass', year: '2022' },
  { n: '08', name: 'ALBLSE', kind: 'Vitrine sécurisée', stack: 'WordPress', year: '2024' },
  { n: '09', name: 'Désidôme', kind: 'E-commerce', stack: 'WooCommerce', year: '2023' },
  { n: '10', name: 'Auto école des Sablons', kind: 'Vitrine', stack: 'WordPress', year: '2023' },
  { n: '11', name: 'La Bougie', kind: 'E-commerce', stack: 'WooCommerce', year: '2022' },
  { n: '12', name: 'Avengers Memory', kind: 'Jeu front', stack: 'JS / Sass', year: '2021' },
  { n: '13', name: 'Marc & Pol', kind: 'Maquette Figma', stack: 'Figma', year: '2022' },
]

function FeaturedProject({ p, idx }) {
  const reverse = idx % 2 === 1

  const visual = (
    <div
      className="group/img relative overflow-hidden"
      style={{
        aspectRatio: '5/4',
        border: '1px solid var(--rule)',
      }}
    >
      <img
        src={p.img}
        alt={p.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(11,14,14,0.6) 0%, transparent 50%)',
        }}
      />
      <div
        className="mono-sm absolute top-3.5 left-3.5 px-2 py-1"
        style={{
          color: 'var(--ink)',
          background: 'rgba(11,14,14,0.5)',
          backdropFilter: 'blur(4px)',
        }}
      >
        fig. {p.n}
      </div>
    </div>
  )

  const info = (
    <div>
      <div className="mono mb-3.5" style={{ color: 'var(--accent)' }}>
        № {p.n} · {p.year} · {p.kind}
      </div>
      <h3
        className="serif"
        style={{
          fontSize: 'clamp(32px, 4.5vw, 64px)',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          fontWeight: 350,
        }}
      >
        {p.name}
      </h3>
      <p
        className="mt-6"
        style={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: 'var(--mute)',
          maxWidth: '540px',
        }}
      >
        {p.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-6">
        {p.stack.map((s) => (
          <span
            key={s}
            className="mono-sm py-1 px-2.5"
            style={{
              color: 'var(--ink-2)',
              border: '1px solid var(--rule)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        className="ed-link mono inline-block mt-8"
      >
        Voir la pièce —&gt;
      </a>
    </div>
  )

  return (
    <article
      className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-8 md:gap-16 py-12 items-center"
      style={{ borderTop: '1px solid var(--rule)' }}
    >
      {!reverse ? (
        <>
          {visual}
          {info}
        </>
      ) : (
        <>
          {info}
          {visual}
        </>
      )}
    </article>
  )
}

export const Catalogue = () => {
  return (
    <section
      id="catalogue"
      className="relative mx-auto px-6 md:px-16"
      style={{ paddingTop: 'clamp(88px, 11vh, 144px)', paddingBottom: 'clamp(88px, 11vh, 144px)', maxWidth: '1600px' }}
    >
      <SectionTag
        num="04"
        eyebrow="Réalisations"
        title={
          <>
            Pièces
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              livrées
            </span>
            .
          </>
        }
        lead="13 références, du mini-jeu autodidacte à la plateforme communautaire en production. Sélection éditée — trois projets phares développés, le reste indexé."
      />

      {/* Featured */}
      <div className="flex flex-col">
        {featured.map((p, i) => (
          <Reveal key={p.n} delay={i * 120}>
            <FeaturedProject p={p} idx={i} />
          </Reveal>
        ))}
      </div>

      {/* Index */}
      <div className="mt-20">
        <div
          className="mono flex justify-between items-center mb-4"
          style={{ color: 'var(--mute)' }}
        >
          <span>↳ Index des autres pièces</span>
          <span style={{ color: 'var(--faint)' }}>{index.length} entrées</span>
        </div>

        <div style={{ border: '1px solid var(--rule)' }}>
          {/* Header */}
          <div
            className="mono-sm hidden md:grid gap-6 px-6 py-3"
            style={{
              gridTemplateColumns: '50px 2fr 1.5fr 1.5fr 60px 24px',
              color: 'var(--mute)',
              background: 'rgba(255,255,255,0.015)',
              borderBottom: '1px solid var(--rule)',
            }}
          >
            <span>№</span>
            <span>Projet</span>
            <span>Catégorie</span>
            <span>Stack</span>
            <span className="text-right">Année</span>
            <span />
          </div>

          {/* Rows */}
          {index.map((p) => (
            <div
              key={p.n}
              className="grid gap-4 md:gap-6 px-4 md:px-6 py-3.5 items-center cursor-pointer transition-all duration-150"
              style={{
                gridTemplateColumns: '50px 1fr 60px',
                borderBottom: '1px solid var(--rule-soft)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(71,179,177,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {/* Mobile: compact */}
              <div className="md:hidden col-span-3 grid gap-4 items-center" style={{ gridTemplateColumns: '50px 1fr 24px' }}>
                <div className="mono-num" style={{ color: 'var(--accent)', fontSize: '12px' }}>
                  {p.n}
                </div>
                <div>
                  <div className="serif" style={{ fontSize: '18px', color: 'var(--ink)' }}>
                    {p.name}
                  </div>
                  <div className="mono-sm mt-1" style={{ color: 'var(--mute)' }}>
                    {p.kind} · {p.stack} · {p.year}
                  </div>
                </div>
                <div style={{ color: 'var(--accent)', textAlign: 'right' }}>→</div>
              </div>

              {/* Desktop: full grid */}
              <div className="hidden md:contents">
                <div className="mono-num" style={{ color: 'var(--accent)', fontSize: '12px' }}>
                  {p.n}
                </div>
                <div
                  className="serif"
                  style={{ fontSize: '20px', color: 'var(--ink)', letterSpacing: '-0.01em' }}
                >
                  {p.name}
                </div>
                <div className="mono-sm" style={{ color: 'var(--mute)' }}>{p.kind}</div>
                <div className="mono-sm" style={{ color: 'var(--ink-2)' }}>{p.stack}</div>
                <div className="mono-sm text-right" style={{ color: 'var(--mute)' }}>
                  {p.year}
                </div>
                <div style={{ color: 'var(--accent)', textAlign: 'right' }}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
