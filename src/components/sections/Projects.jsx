import { useRef, useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink, FolderSearch } from 'lucide-react'
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
import { featured, index } from '@/data/projects'

function FeaturedProject({ p, idx }) {
  const reverse = idx % 2 === 1
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'start 68%'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [reverse ? 40 : -40, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.article
      ref={ref}
      style={{ x, opacity }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-0 pb-8 items-center"
    >
      {!reverse ? (
        <>
          <div
            className="group/img relative overflow-hidden w-full"
            style={{ height: '320px', border: '1px solid var(--rule)' }}
          >
            <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale-40 brightness-75 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,14,14,0.6) 0%, transparent 50%)' }} />
          </div>
          <div>
            <div className="mono mb-3.5" style={{ color: 'var(--accent)' }}>{p.year} · {p.kind}</div>
            <h3 className="serif" style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)', fontWeight: 350 }}>{p.name}</h3>
            <p className="mt-6" style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--mute)', maxWidth: '540px' }}>{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-6">{p.stack.map((s) => (<span key={s} className="mono-sm py-1 px-2.5" style={{ color: 'var(--ink-2)', border: '1px solid var(--rule)' }}>{s}</span>))}</div>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="ed-link mono inline-block">{p.linkLabel} —&gt;</a>
              {p.github && (<a href={p.github} target="_blank" rel="noopener noreferrer" className="ed-link mono inline-block">GitHub —&gt;</a>)}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="group/img relative overflow-hidden w-full md:order-2"
            style={{ height: '320px', border: '1px solid var(--rule)' }}
          >
            <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 grayscale-40 brightness-75 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,14,14,0.6) 0%, transparent 50%)' }} />
          </div>
          <div className="md:order-1">
            <div className="mono mb-3.5" style={{ color: 'var(--accent)' }}>{p.year} · {p.kind}</div>
            <h3 className="serif" style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink)', fontWeight: 350 }}>{p.name}</h3>
            <p className="mt-6" style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--mute)', maxWidth: '540px' }}>{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-6">{p.stack.map((s) => (<span key={s} className="mono-sm py-1 px-2.5" style={{ color: 'var(--ink-2)', border: '1px solid var(--rule)' }}>{s}</span>))}</div>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="ed-link mono inline-block">{p.linkLabel} —&gt;</a>
              {p.github && (<a href={p.github} target="_blank" rel="noopener noreferrer" className="ed-link mono inline-block">GitHub —&gt;</a>)}
            </div>
          </div>
        </>
      )}
    </motion.article>
  )
}

function IndexCard({ p, onSelect, isSelected }) {
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
    <motion.div variants={staggerItem} style={{ perspective: 800, zIndex: isSelected ? 50 : 'auto', position: 'relative' }}>
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
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="ed-link mono-sm" style={{ color: 'var(--accent)', fontSize: '10px' }}>
                Voir &rarr;
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="ed-link mono-sm" style={{ color: 'var(--accent)', fontSize: '10px' }}>
                GitHub &rarr;
              </a>
            )}
            {p.extra && (
              <a href={p.extra.url} target="_blank" rel="noopener noreferrer" className="ed-link mono-sm" style={{ color: 'var(--accent)', fontSize: '10px' }}>
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
    modalRef.current?.focus()
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return createPortal(
    <>
      <motion.div
        className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-8"
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

          <div className="flex flex-col gap-4 p-5 md:p-6">
            <div>
              <div className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                {project.kind} &middot; {project.year}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: 'clamp(26px, 3.5vw, 42px)',
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
    </>,
    document.body
  )
}

function ModalImage({ src, alt }) {
  return (
    <div className="relative shrink-0 overflow-hidden" style={{ aspectRatio: '2/1' }}>
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

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [boostedProject, setBoostedProject] = useState(null)

  const handleSelect = (p) => {
    setBoostedProject(p)
    setSelectedProject(p)
  }

  const handleClose = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id="realisations"
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
        <div className="mono mb-8 flex items-center gap-2" style={{ color: 'var(--mute)' }}>
          <FolderSearch className="h-3.5 w-3.5" />
          Autres projets
        </div>
        <motion.div
          className="grid grid-cols-1 min-[708px]:grid-cols-2 min-[1150px]:grid-cols-3 min-[1500px]:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {index.map((p) => (
            <IndexCard key={`${p.name}-${p.kind}`} p={p} onSelect={handleSelect} isSelected={boostedProject?.name === p.name && boostedProject?.kind === p.kind} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence onExitComplete={() => setBoostedProject(null)}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
