import { useRef } from 'react'
import {
  Code2,
  Sparkles,
  ExternalLink,
  BookOpenCheck,
} from 'lucide-react'
import { PERSONAL_INFO, ABOUT_STATS, SOCIAL_LINKS } from '@/utils/constants.js'
import FadeIn from '@/components/animations/FadeIn.jsx'
import GlowCard from '@/components/animations/GlowCard'
import ScrollReveal from '@/components/animations/ScrollReveal'
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'motion/react'
import { IoSchool } from 'react-icons/io5'

const diplomes = [
  {
    year: '2025',
    title: 'Bootcamp avancé Symfony',
    desc: 'Compétence BCO4 RNCP Concepteur Logiciel',
    link: 'https://drive.google.com/file/d/1gGJnrjABzNLgi9lt6mCnnkC1gpk29t1U/view',
    label: 'Voir le diplôme',
    icon: IoSchool,
  },
  {
    year: '2024',
    title: 'Développeur Front-End',
    desc: 'Diplôme Studi',
    link: 'https://drive.google.com/file/d/1Kd4C5VcA02uW3dFCGXtRRcaPFLmn4sJb/view',
    label: 'Voir le diplôme',
    icon: IoSchool,
  },
  {
    year: '2023',
    title: 'Graduate Développeur Web et Web Mobile',
    desc: 'Titre professionnel RNCP Développeur Web',
    link: 'https://drive.google.com/file/d/1FNUcDZuMMUKZsfKsdMWJiecGTDWBRh7_/view',
    label: 'Voir le diplôme',
    icon: IoSchool,
  },
  {
    year: '2020⇢',
    title: 'Développeur Web Full-Stack',
    desc: 'Certifications professionnelles',
    link: 'https://drive.google.com/drive/folders/1tnrd7ksG92qPS1ucqYy2Lh6I9poaOGpu',
    label: 'Voir les certificats',
    icon: BookOpenCheck,
  },
]

const ScrollRevealCard = ({ children, index, total, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'start 30%'],
  })

  const start = index / total * 0.5
  const end = Math.min(start + 0.4, 1)
  const x = useTransform(scrollYProgress, [start, end], [120, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

  return (
    <motion.div style={{ x, opacity }}>
      {children}
    </motion.div>
  )
}

export const About = () => {
  const sectionRef = useRef(null)
  const diplomesRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div className="relative flex flex-col gap-12" style={{ y: textY }}>
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="border-primary/30 bg-primary/10 inline-flex w-fit items-center gap-2.5 rounded-full border px-5 py-2.5">
                  <Code2 className="text-primary h-4 w-4" />
                  <span className="text-primary text-sm font-medium">
                    À propos de moi
                  </span>
                  <Sparkles className="text-primary h-4 w-4" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl leading-tight font-normal text-white lg:text-5xl">
                  Solutions Web Sur Mesure Fiables et Performantes
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div>
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-justify text-base leading-relaxed text-white/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </motion.div>

          <div ref={diplomesRef}>
            <div className="flex flex-col gap-6 lg:mt-12">
              <h2 className="mb-2 text-right text-2xl leading-tight font-normal text-white lg:text-2xl">
                Diplômes Obtenus
              </h2>

              <div className="flex flex-col gap-4">
                {diplomes.map((diplome, index) => {
                  const IconComp = diplome.icon
                  return (
                    <ScrollReveal
                      key={diplome.year}
                      index={index}
                      total={diplomes.length}
                      containerRef={diplomesRef}
                    >
                      <GlowCard>
                        <div className="group relative">
                          <div className="from-primary/10 to-primary/5 absolute inset-0 bg-linear-to-br opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-75" />
                          <div className="hover:border-primary/30 bg-primary/5 relative rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300">
                            <div className="flex items-center gap-4">
                              <div className="bg-primary/10 flex flex-col items-center rounded-xl px-4 py-3">
                                <IconComp className="text-primary h-6 w-6" />
                                <span className="mt-1 text-[12px] font-semibold text-white/60">
                                  {diplome.year}
                                </span>
                              </div>
                              <div className="flex-1">
                                <h3 className="mb-2 text-lg font-semibold break-words text-white">
                                  {diplome.title}
                                </h3>
                                <p className="text-sm leading-relaxed break-words text-white/70">
                                  {diplome.desc}
                                </p>
                              </div>
                              <a
                                href={diplome.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/tooltip relative flex h-6 w-6 items-center justify-center"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.3 }}
                                  transition={{ type: 'spring', stiffness: 400 }}
                                >
                                  <ExternalLink className="h-full w-full text-white/80" />
                                </motion.div>
                                <span className="pointer-events-none absolute right-full mr-2 -translate-y-6 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                                  {diplome.label}
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </GlowCard>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-end gap-12 lg:mt-6 lg:grid-cols-2 lg:gap-0">
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {ABOUT_STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="from-primary via-primary/50 to-primary/20 h-full w-1 rounded-full bg-gradient-to-b"></div>
                  <div>
                    <div className="font-mono text-xl font-normal text-white">
                      {stat.value}
                    </div>
                    <p className="text-sm leading-snug text-white/60">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="-mt-12 flex flex-col gap-4 sm:mt-0">
              <h3 className="text-right text-2xl font-normal text-white">
                Réseaux
              </h3>
              <div className="flex flex-wrap justify-end gap-3">
                {SOCIAL_LINKS.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social relative"
                      style={{ '--social-color': social.color }}
                    >
                      <div className="from-primary/30 to-primary/15 absolute inset-0 rounded-xl bg-linear-to-br opacity-0 blur-xl transition-opacity duration-300 group-hover/social:opacity-95"></div>
                      <motion.div
                        className="hover:border-primary/30 relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <IconComponent className="group-hover/social:text-primary h-8 w-8 text-white/70 transition-colors duration-300" />
                      </motion.div>
                    </a>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
