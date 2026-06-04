import { useState, useRef, useEffect, useCallback } from 'react'
import { Play } from 'lucide-react'
import { SiReact, SiSymfony, SiWordpress } from 'react-icons/si'
import { PiFileSqlLight } from 'react-icons/pi'
import Reveal from '@/components/animations/Reveal'
import TextReveal from '@/components/animations/TextReveal'
import AnimatedNumber from '@/components/animations/AnimatedNumber'
import { useMagnetic } from '@/hooks/useMagnetic'
import { motion, AnimatePresence } from 'motion/react'
import { HERO_STATS, PERSONAL_INFO } from '@/utils/constants'

export const Home = () => {
  const ctaPrimaryRef = useMagnetic(0.18)
  const ctaSecondaryRef = useMagnetic(0.18)
  const playBtnRef = useMagnetic(0.3)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef(null)
  const turbulenceRef = useRef(null)
  const displacementRef = useRef(null)

  const animateLiquid = useCallback(() => {
    const startDelay = 700
    const duration = 1900
    const startFreq = 0.02
    const startScale = 120

    const timeout = setTimeout(() => {
      const start = performance.now()
      const step = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)

        const freq = startFreq * (1 - eased)
        const scale = startScale * (1 - eased)

        if (turbulenceRef.current) {
          turbulenceRef.current.setAttribute('baseFrequency', `${freq} ${freq * 1.4}`)
        }
        if (displacementRef.current) {
          displacementRef.current.setAttribute('scale', scale)
        }

        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, startDelay)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    return animateLiquid()
  }, [animateLiquid])

  return (
    <section
      id="home"
      aria-label="Accueil"
      className="relative min-h-screen md:h-screen flex flex-col px-6 md:px-16 mx-auto"
      style={{
        maxWidth: '1600px',
        paddingTop: 'clamp(88px, 9vh, 150px)',
        paddingBottom: 'clamp(24px, 3vh, 48px)',
        marginBottom: 'clamp(110px, 14vh, 200px)',
      }}
    >
      {/* Main — name + video side by side */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center"
        style={{ gap: 'clamp(16px, 2vh, 64px)' }}>
        {/* Left — name + text */}
        <div className="text-left">
          <Reveal delay={200}>
            <div
              className="mono mb-8"
              style={{
                color: 'var(--accent)',
                fontSize: '15px',
                letterSpacing: '0.18em',
              }}
            >
              {PERSONAL_INFO.title}
              <br className="md:hidden" />
              <span className="hidden md:inline" style={{ color: 'var(--faint)' }}> · </span>
              <span style={{ color: 'var(--faint)' }}>{PERSONAL_INFO.location}</span>
            </div>
          </Reveal>
          <h1
            className="serif ed-shimmer-once"
            style={{
              fontSize: 'clamp(62px, 9vw, 150px)',
              lineHeight: 0.92,
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
            }}
          >
             <TextReveal>
              Christophe
              <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Thévenet</span>
            </TextReveal>
          </h1>

          {/* Standfirst */}
          <Reveal delay={700}>
            <p
              className="serif"
              style={{
                marginTop: 'clamp(8px, 1.2vh, 24px)',
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                lineHeight: 1.5,
                color: 'var(--ink-2)',
                maxWidth: '780px',
                textAlign: 'justify',
                fontWeight: 300,
                letterSpacing: '-0.005em',
              }}
            >
              Cinq ans à concevoir des applications web full-stack et des sites professionnels.
              J&apos;interviens sur deux fronts&nbsp;: développement d&apos;applications sur mesure
              en Symfony et React, et création de sites vitrine et e-commerce adaptés
              aux artisans, commerçants et associations.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={900}>
            <div className="flex flex-col sm:flex-row gap-3 items-start"
              style={{ marginTop: 'clamp(16px, 2vh, 40px)' }}>
              <a
                ref={ctaPrimaryRef}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mono inline-block px-6 py-3.5 transition-colors duration-200"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
              >
                Démarrer un projet →
              </a>
              <a
                ref={ctaSecondaryRef}
                href="#realisations"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('realisations')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mono inline-block px-6 py-3.5 transition-colors duration-200"
                style={{
                  color: 'var(--ink)',
                  border: '1px solid var(--rule)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--rule)'
                  e.currentTarget.style.color = 'var(--ink)'
                }}
              >
                Voir mes réalisations →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Video block */}
        <Reveal delay={600} className="hidden md:block self-center relative z-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 1.0, delay: 0.6, ease: 'easeOut' },
              scale: { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <div className="relative aspect-4/5 w-70 md:w-80 lg:w-95 xl:w-115">
              <div className="absolute inset-0 overflow-hidden">
                <div className="rotating-border animate-spin-slow absolute inset-[-50%]" />
              </div>
              <div className="absolute inset-0.5 overflow-hidden bg-black" style={{ filter: 'url(#liquid-distortion)' }}>
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  preload="none"
                  poster="/avatar.webp"
                  playsInline
                  controls={isVideoPlaying}
                  src="/teaser.mp4"
                  onEnded={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      if (videoRef.current) {
                        videoRef.current.load()
                      }
                      setIsVideoPlaying(false)
                      setTimeout(() => setIsTransitioning(false), 300)
                    }, 300)
                  }}
                />

                <AnimatePresence>
                  {isTransitioning && (
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-10 bg-black"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
              </div>

              {!isVideoPlaying && (
                <motion.button
                  className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
                  type="button"
                  aria-label="Lancer la vidéo de présentation"
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      if (videoRef.current) {
                        videoRef.current.play()
                      }
                      setIsVideoPlaying(true)
                      setTimeout(() => setIsTransitioning(false), 300)
                    }, 300)
                  }}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isTransitioning ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span ref={playBtnRef}>
                    <motion.span
                      className="flex items-center justify-center px-6 py-3 border border-white/40"
                      whileHover={{ borderColor: 'rgba(255,255,255,0.9)' }}
                      animate={{ boxShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 12px rgba(255,255,255,0.3)', '0 0 0px rgba(255,255,255,0)'] }}
                      transition={{ boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } }}
                    >
                      <Play className="h-4 w-4 fill-white/50 text-white/50 transition-colors duration-200 group-hover:fill-white/90 group-hover:text-white/90" />
                    </motion.span>
                  </span>
                </motion.button>
              )}

              {!isVideoPlaying && (
                <div className="absolute bottom-6 left-6 z-20">
                  <Reveal delay={800}>
                    <div className="flex items-center gap-3">
                      {[
                        { Icon: SiSymfony },
                        { Icon: SiReact },
                        { Icon: PiFileSqlLight },
                        { Icon: SiWordpress },
                      ].map(({ Icon }) => (
                        <div
                          key={Icon}
                          className="flex h-5 w-5 items-center justify-center"
                        >
                          <Icon className="h-full w-full text-white/80" />
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              )}
            </div>
          </motion.div>
        </Reveal>

      </div>

      {/* Mobile video block */}
      <Reveal delay={600} className="md:hidden mt-10 mb-8">
        <div className="relative aspect-4/5 w-full max-w-80 mx-auto">
          <div className="absolute inset-0 overflow-hidden">
            <div className="rotating-border animate-spin-slow absolute inset-[-50%]" />
          </div>
          <div className="absolute inset-0.5 overflow-hidden bg-black">
            <video
              className="h-full w-full object-cover"
              preload="none"
              poster="/avatar.webp"
              playsInline
              src="/teaser.mp4"
            />
            <button
              className="absolute inset-0 flex cursor-pointer items-center justify-center"
              type="button"
              aria-label="Lancer la vidéo"
              onClick={(e) => {
                const video = e.currentTarget.previousElementSibling
                video.play()
                video.controls = true
                e.currentTarget.style.display = 'none'
              }}
            >
              <span className="relative z-10 flex items-center justify-center px-6 py-3 border border-white/40">
                <Play className="h-4 w-4 fill-white/50 text-white/50" />
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Bottom stats row */}
      <Reveal delay={1100} className="md:mt-auto">
        <div
          className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderTop: '1px solid var(--rule)' }}
        >
        {HERO_STATS.map((s, i) => (
          <Reveal key={s.l} delay={1200 + i * 100}>
            <div
              className="py-1"
              style={{
                borderLeft: i % 2 === 0 ? 'none' : '1px solid var(--rule-soft)',
                paddingLeft: i % 2 === 0 ? 0 : '24px',
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: '48px',
                  fontWeight: 350,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: 'var(--ink)',
                }}
              >
                <AnimatedNumber n={s.n} duration={2000} delay={1400 + i * 100} suffix={s.suffix} />
              </div>
              <div className="mono-sm mt-2.5" style={{ color: 'var(--mute)' }}>
                {s.l}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      </Reveal>

      {/* Liquid distortion SVG filter */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="liquid-distortion">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.02 0.028"
              numOctaves="3"
              seed="2"
              result="turbulence"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="turbulence"
              scale="120"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </section>
  )
}
