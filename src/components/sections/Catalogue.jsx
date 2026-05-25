import { useRef, useState, useEffect, useCallback } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  AnimatePresence,
} from 'motion/react'

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
}
import Reveal from '@/components/animations/Reveal'
import SectionTag from '@/components/ui/SectionTag'
import imgBoulio from '@/assets/img/projects/boulio.jpg'
import imgGreengoodies from '@/assets/img/projects/greengoodies.jpg'
import imgAletti from '@/assets/img/projects/aletti.jpg'
import imgCbd from '@/assets/img/projects/cbd.png'
import imgCybermeteo from '@/assets/img/projects/cyber_meteo.jpg'
import imgSaveurdesavoie from '@/assets/img/projects/saveurdesavoie.png'
import imgDicefighter from '@/assets/img/projects/DiceFighter.png'
import imgAlblse from '@/assets/img/projects/alblse.png'
import imgDesidome from '@/assets/img/projects/desidome.png'
import imgSablons from '@/assets/img/projects/sablons.png'
import imgLabougie from '@/assets/img/projects/img_labougie.png'
import imgMemory from '@/assets/img/projects/memory.png'
import imgMarcetpol from '@/assets/img/projects/marcetpol.png'
import imgPortfolio from '@/assets/img/projects/portfolio_v2.jpg'

const featured = [
  {
    n: '01',
    name: 'Boulio',
    kind: 'Plateforme communautaire — full-stack',
    desc: 'Réseau social dédié à la pétanque : forum thématique, blog contributeurs, chat live, messagerie privée et intégration de lives YouTube. Symfony + Mercure côté serveur, React + TanStack côté client.',
    stack: ['React', 'Symfony', 'TanStack', 'Mercure', 'PostgreSQL'],
    url: 'https://boulio.com',
    github: 'https://github.com/Christophe-THEVENET/boulio-showcase',
    linkLabel: "Voir l'application",
    year: '2026',
    img: imgBoulio,
  },
  {
    n: '02',
    name: 'Greengoodies',
    kind: 'E-commerce Symfony',
    desc: 'Catalogue, panier asynchrone, commandes, validations temps réel et notifications. Twig intégré, ORM Doctrine, déploiement Docker. Une démonstration de la chaîne complète Symfony.',
    stack: ['Symfony', 'Sass', 'MySQL', 'Docker'],
    url: 'https://greengoodies.space/',
    github: 'https://github.com/Christophe-THEVENET/symfony_greengoodies',
    linkLabel: 'Voir la boutique',
    year: '2025',
    img: imgGreengoodies,
  },
  {
    n: '03',
    name: 'Aletti Palace',
    kind: 'Site vitrine premium',
    desc: 'Palace thermal, dix pages illustrées, carte de restaurant intégrée, traduction anglaise complète. Esthétique raffinée belle époque, intégration Elementor sur mesure.',
    stack: ['WordPress', 'Elementor'],
    url: 'https://hotel-aletti.fr/',
    linkLabel: 'Voir le site',
    year: '2025',
    img: imgAletti,
  },
]

const index = [
  { name: 'CBD-63', kind: 'Vitrine', stack: ['WordPress', 'Elementor'], year: '2024', img: imgCbd, desc: "Site vitrine complet de 9 pages. Calendrier d'événements, géolocalisation d'une trentaine d'adresses, bibliothèque de documents.", url: 'https://cbd-63.fr/', github: '', extra: null },
  { name: 'Cyber Météo', kind: 'Application front', stack: ['React', 'Tailwind', 'Zustand'], year: '2025', img: imgCybermeteo, desc: "Application météo moderne permettant de consulter la météo en temps réel pour n'importe quelle ville. Intégration de l'API OpenWeather.", url: 'https://cybermeteo.netlify.app/', github: 'https://github.com/Christophe-THEVENET/react_meteo_live', extra: null },
  { name: 'Saveurs de Savoie', kind: 'App full-stack', stack: ['React', 'Symfony', 'MySQL'], year: '2023', img: imgSaveurdesavoie, desc: "Application web pour un restaurant avec back-office complet. Gestion des tarifs, plats, menus. Réservation asynchrone.", url: 'https://lessaveursdesavoie.fr.nf/', github: 'https://github.com/Christophe-THEVENET/lessaveursdesavoie.fr.nf', extra: { title: 'Dossier projet', url: 'https://drive.google.com/file/d/1s4RAbAv_TTM4cB7CSWnBWciVAvxjxdN2/view' } },
  { name: 'DiceFighter', kind: 'Mini-jeu POO', stack: ['Vite', 'JavaScript', 'Sass'], year: '2022', img: imgDicefighter, desc: "Mini-jeu JavaScript POO. Refactoring récent avec Vite, Docker, Sass et modules ES.", url: 'https://dicefighter.netlify.app/', github: 'https://github.com/Christophe-THEVENET/eval_javascript_studi', extra: null },
  { name: 'ALBLSE', kind: 'Vitrine sécurisée', stack: ['WordPress', 'Elementor'], year: '2024', img: imgAlblse, desc: "Site vitrine avec inscription sécurisée, blog, chat et publication depuis le front en fonction des rôles.", url: 'https://alblse.fr/', github: '', extra: null },
  { name: 'Désidôme', kind: 'E-commerce', stack: ['WooCommerce', 'Elementor'], year: '2023', img: imgDesidome, desc: "E-commerce complet avec login popup, sliders animés, personnalisation membre, mégamenu et paiement sécurisé.", url: 'https://desidome.fr/', github: '', extra: null },
  { name: 'Auto école des Sablons', kind: 'Vitrine', stack: ['WordPress', 'Elementor'], year: '2023', img: imgSablons, desc: "Site vitrine de 4 pages avec thème moderne, sécurisation complète et formulaires.", url: 'https://www.autoecole-demo.fr.nf/', github: '', extra: null },
  { name: 'La Bougie', kind: 'E-commerce', stack: ['WooCommerce', 'Elementor'], year: '2022', img: imgLabougie, desc: "E-commerce WooCommerce avec page de connexion personnalisée, blog avec commentaires et avatar custom.", url: 'https://www.labougie.top/', github: '', extra: null },
  { name: 'Avengers Memory', kind: 'Jeu front', stack: ['JavaScript', 'Sass'], year: '2021', img: imgMemory, desc: "Jeu Memory développé en autodidacte pour la maîtrise de JavaScript. Animations avec Animate.css.", url: 'https://avengers-memory.netlify.app/', github: 'https://github.com/Christophe-THEVENET/avengers-memory', extra: null },
  { name: 'Portfolio', kind: 'Application front', stack: ['React', 'Tailwind'], year: '2025', img: imgPortfolio, desc: "Portfolio personnel avec React et Tailwind CSS v4. Architecture componentisée, animations custom et optimisations Lighthouse.", url: 'https://christophethevenet.fr/', github: 'https://github.com/Christophe-THEVENET/react_portfolio', extra: null },
  { name: 'Saveurs de Savoie', kind: 'Maquette Figma', stack: ['Figma'], year: '2023', img: imgSaveurdesavoie, desc: "Maquette desktop d'une application web de vente en ligne de produits locaux savoyards.", url: 'https://www.figma.com/proto/LX0O4tKBPXTJqNmcH7Lj1H/Les-Saveurs-De-Savoie?type=design&node-id=190-2635&t=MtkVick3Yp1Tcasw-1&scaling=scale-down&page-id=190%3A1018&starting-point-node-id=190%3A2635', github: '', extra: null },
  { name: 'Marc & Pol', kind: 'Maquette Figma', stack: ['Figma'], year: '2022', img: imgMarcetpol, desc: "Maquette réalisée dans le cadre d'une formation. Maîtrise de Figma et AdobeXd.", url: 'https://www.figma.com/proto/lZtWsTW3kZ66Gux7pa4ku7/MARK-POL?node-id=92-2695&scaling=min-zoom&page-id=92%3A2694', github: '', extra: null },
]

function FeaturedProject({ p, idx }) {
  const reverse = idx % 2 === 1
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 98%', 'start 75%'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [reverse ? 80 : -80, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.article
      ref={ref}
      style={{ x, opacity }}
      className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-8 md:gap-16 py-12 items-center"
    >
      {!reverse ? (
        <>
          <div
            className="group/img relative overflow-hidden"
            style={{
              aspectRatio: '16/10',
              height: '320px',
              border: '1px solid var(--rule)',
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale-40 brightness-75 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(11,14,14,0.6) 0%, transparent 50%)',
              }}
            />
          </div>
          <div>
            <div className="mono mb-3.5" style={{ color: 'var(--accent)' }}>
              {p.year} · {p.kind}
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
            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="ed-link mono inline-block"
              >
                {p.linkLabel} —&gt;
              </a>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-link mono inline-block"
                >
                  GitHub —&gt;
                </a>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="mono mb-3.5" style={{ color: 'var(--accent)' }}>
              {p.year} · {p.kind}
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
            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="ed-link mono inline-block"
              >
                {p.linkLabel} —&gt;
              </a>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-link mono inline-block"
                >
                  GitHub —&gt;
                </a>
              )}
            </div>
          </div>
          <div
            className="group/img relative overflow-hidden"
            style={{
              aspectRatio: '16/10',
              height: '320px',
              border: '1px solid var(--rule)',
            }}
          >
            <img
              src={p.img}
              alt={p.name}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale-40 brightness-75 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(11,14,14,0.6) 0%, transparent 50%)',
              }}
            />
          </div>
        </>
      )}
    </motion.article>
  )
}

function IndexCard({ p, onSelect }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const glowOpacity = useMotionValue(0)

  const springCfg = { stiffness: 300, damping: 20 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springCfg)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springCfg)
  const scale = useSpring(1, springCfg)

  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.12), transparent 60%)`

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
    glowX.set(((e.clientX - rect.left) / rect.width) * 100)
    glowY.set(((e.clientY - rect.top) / rect.height) * 100)
    glowOpacity.set(1)
    scale.set(1.03)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    glowOpacity.set(0)
    scale.set(1)
  }

  return (
    <motion.div variants={staggerItem} style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        layoutId={`project-${p.name}-${p.kind}`}
        className="group relative cursor-pointer overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          scale,
          willChange: 'transform',
        }}
        onClick={(e) => {
          if (e.target.closest('a')) return
          onSelect(p)
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      >
        <div className="pointer-events-none absolute inset-0 z-20" style={{ boxShadow: 'inset 0 0 0 1px var(--rule)' }} />
        <div className="relative" style={{ aspectRatio: '3/2' }}>
          <img
            src={p.img}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover grayscale-40 brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
          />
        </div>

        {/* Reflet lumineux qui suit la souris */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: glowBackground, opacity: glowOpacity }}
        />

        {/* Overlay au hover */}
        <div
          className="absolute inset-0 flex flex-col p-3.5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          style={{ background: 'rgba(20,24,24,0.92)' }}
        >
          <h4
            className="serif"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              fontWeight: 350,
            }}
          >
            {p.name}
          </h4>
          <div className="mono-sm mt-1" style={{ color: 'var(--accent)', fontSize: '10px' }}>
            {p.kind} &middot; {p.year}
          </div>

          <p className="mt-2" style={{ fontSize: '11px', lineHeight: 1.45, color: 'var(--mute)' }}>
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-1 mt-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="mono-sm px-1.5 py-0.5"
                style={{ color: 'var(--ink-2)', border: '1px solid var(--rule)', fontSize: '9px' }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto pt-2" style={{ borderTop: '1px solid var(--rule)' }}>
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" className="ed-link mono-sm" style={{ color: 'var(--accent)', fontSize: '10px' }}>
                Voir &rarr;
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="ed-link mono-sm" style={{ color: 'var(--accent)', fontSize: '10px' }}>
                GitHub &rarr;
              </a>
            )}
            {p.extra && (
              <a href={p.extra.url} target="_blank" rel="noreferrer" className="ed-link mono-sm" style={{ color: 'var(--accent)', fontSize: '10px' }}>
                {p.extra.title} &rarr;
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    modalRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          layoutId={`project-${project.name}-${project.kind}`}
          className="relative w-full max-w-3xl overflow-y-auto outline-none"
          style={{ background: 'var(--bg)', maxHeight: '90vh' }}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            style={{ background: 'rgba(0,0,0,0.5)', color: 'var(--ink)' }}
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>

          <ModalImage src={project.img} alt={project.name} />

          <div className="flex flex-col gap-5 p-6 md:p-8">
            <div>
              <div className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                {project.kind} &middot; {project.year}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  fontWeight: 350,
                }}
              >
                {project.name}
              </h3>
            </div>

            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--mute)' }}>
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="mono-sm py-1.5 px-3"
                  style={{ color: 'var(--ink-2)', border: '1px solid var(--rule)' }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div
              className="flex flex-wrap gap-4 pt-4"
              style={{ borderTop: '1px solid var(--rule)' }}
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-link mono inline-flex items-center gap-2"
                  style={{ color: 'var(--accent)' }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir le projet
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-link mono inline-flex items-center gap-2"
                  style={{ color: 'var(--accent)' }}
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.extra && (
                <a
                  href={project.extra.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ed-link mono inline-flex items-center gap-2"
                  style={{ color: 'var(--accent)' }}
                >
                  {project.extra.title} &rarr;
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

function ModalImage({ src, alt }) {
  return (
    <div className="relative shrink-0 overflow-hidden" style={{ aspectRatio: '16/9' }}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 50%)' }}
      />
    </div>
  )
}

export const Catalogue = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="catalogue"
      className="relative mx-auto px-6 md:px-16"
      style={{ paddingTop: 'clamp(88px, 11vh, 144px)', paddingBottom: 'clamp(88px, 11vh, 144px)', maxWidth: '1600px' }}
    >
      <SectionTag
        num=""
        eyebrow="Réalisations"
        title={
          <>
            Projets livrés,
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              résultats concrets
            </span>
          </>
        }
        lead="Du site vitrine à la plateforme en production."
      />

      {/* Featured */}
      <div className="flex flex-col">
        {featured.map((p, i) => (
          <FeaturedProject key={p.n} p={p} idx={i} />
        ))}
      </div>

      {/* Index — grille compacte */}
      <div className="mt-24">
        <div className="mono mb-8" style={{ color: 'var(--mute)' }}>
          Autres projets
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {index.map((p) => (
            <IndexCard key={`${p.name}-${p.kind}`} p={p} onSelect={setSelectedProject} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
