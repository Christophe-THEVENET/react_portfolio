import { useState, useRef } from 'react'
import { ChevronDown, Star, Play, CodeXml } from 'lucide-react'
import { SiReact, SiMysql, SiSymfony, SiWordpress, SiClaude } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from '@/utils/constants.js'
import { scrollToSection } from '@/hooks/useScrollSpy.js'
import FadeIn from '@/components/animations/FadeIn.jsx'
import TextReveal from '@/components/animations/TextReveal.jsx'
import AnimatedCounter from '@/components/animations/AnimatedCounter.jsx'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react'

import { PiFileSqlLight } from 'react-icons/pi'

export const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef(null)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[3fr_2fr]">
          {/* Left columns */}
          <div className="w-full text-left">
            <FadeIn delay={0}>
              <div className="from-primary/5 via bg-primary/10 to-primary/15 border-primary/20 mb-8 inline-flex items-center gap-2.5 rounded-full border bg-linear-to-r px-4 py-2.5">
                <CodeXml className="h-4 w-4 fill-white text-white" />
                <span className="text-xs tracking-[1.2px] text-white min-[915px]:text-sm">
                  {PERSONAL_INFO.title}
                  <br className="min-[915px]:hidden" />
                  <span className="hidden min-[915px]:inline"> | </span>
                  <span className="min-[915px]:hidden"> </span>
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mb-6 text-2xl leading-tight font-normal text-white max-[1030px]:text-[50px] max-[886px]:text-[47px] max-[839px]:text-[45px] max-[803px]:text-[43px] lg:text-[55px] xl:text-[65px] 2xl:text-7xl">
                <TextReveal staggerDelay={0.025}>
                  Christophe{' '}
                  <span className="text-primary">THEVENET</span>
                </TextReveal>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-8 text-justify text-base text-white/70 md:max-w-[500px] lg:max-w-[530px] xl:max-w-[630px] 2xl:max-w-[700px]">
                Fasciné par le web depuis ses débuts, je suis devenu développeur
                il y a 5 ans. Je travaille en freelance sur deux axes : missions
                techniques en Symfony et React pour des équipes de
                développement, et création de sites WordPress pour TPE,
                commerçants et associations. Issu d'une famille d'artisans, je
                fabrique un site internet comme on fabrique un meuble.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <motion.button
                className="btn-shimmer mb-12 cursor-pointer rounded-[17px] bg-white/75 px-3 py-1.5 text-base font-medium text-[#212121] transition-all duration-300"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Besoin d'un site web ?
              </motion.button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:max-w-[530px] xl:max-w-[630px] 2xl:max-w-[700px]">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="border-r border-white/50 pr-10 text-left last:border-r-0"
                  >
                    <AnimatedCounter
                      value={stat.value}
                      className="text-primary mb-1 font-mono text-2xl font-normal"
                      duration={2.5}
                    />
                    <div className="text-[13px] leading-snug text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right columns */}
          <FadeIn delay={600}>
            <motion.div
              className="relative mt-10 w-full md:mt-0 md:flex md:justify-end"
              initial={{ clipPath: 'circle(0% at 100% 100%)' }}
              animate={{ clipPath: 'circle(150% at 100% 100%)' }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            >
              <div className="group relative aspect-4/5 w-full max-w-[400px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[440px]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="rotating-border animate-spin-slow absolute inset-[-50%]"></div>
                </div>
                <div className="absolute inset-[2px] overflow-hidden rounded-2xl bg-black">
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

                  {!isVideoPlaying && (
                    <motion.button
                      className="group absolute inset-0 flex cursor-pointer items-center justify-center"
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
                      <span className="animate-ping-slow absolute h-10 w-10 rounded-full border border-white/30"></span>
                      <motion.span
                        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.7)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="ml-0.5 h-5 w-5 fill-white/50 text-white/50" />
                      </motion.span>
                    </motion.button>
                  )}
                </div>

                {!isVideoPlaying && (
                  <div className="absolute bottom-6 left-8 z-20">
                    <FadeIn delay={600}>
                      <div className="flex items-center gap-4">
                        {[
                          { Icon: SiReact, label: 'React.js' },
                          { Icon: SiSymfony, label: 'Symfony' },
                          { Icon: PiFileSqlLight, label: 'SQL' },
                          { Icon: SiWordpress, label: 'WordPress' },
                          { Icon: SiClaude, label: 'Claude code' },
                        ].map((item) => {
                          const { Icon, label } = item
                          return (
                          <motion.div
                            key={label}
                            className="group/tooltip relative flex h-6 w-6 items-center justify-center"
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <Icon className="h-full w-full text-white/80" />
                            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                              {label}
                            </span>
                          </motion.div>
                          )
                        })}
                      </div>
                    </FadeIn>
                  </div>
                )}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={4000}>
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-green h-8 w-8" />
        </motion.button>
      </FadeIn>
    </section>
  )
}
