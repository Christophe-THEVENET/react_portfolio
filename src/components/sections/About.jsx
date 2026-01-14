import {
  Code2,
  Download,
  Sparkles,
  GraduationCap,
  ExternalLink,
  BookOpenCheck,
} from 'lucide-react'
import { PERSONAL_INFO, ABOUT_STATS, SOCIAL_LINKS } from '@/utils/constants.js'
import FadeIn from '@/components/animations/FadeIn.jsx'
import { IoSchoolOutline, IoSchool } from 'react-icons/io5'

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column *********************************************************** */}
          <div className="flex flex-col gap-12">
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
          </div>

          {/* Right Column *********************************************************** */}
          <FadeIn delay={500}>
            <div className="flex flex-col gap-6 lg:mt-12">
              <h2 className="mb-2 text-right text-2xl leading-tight font-normal text-white lg:text-2xl">
                Diplômes Obtenus
              </h2>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 bg-linear-to-br opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 bg-primary/5 relative rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex flex-col items-center rounded-xl px-4 py-3">
                      <IoSchool className="text-primary h-6 w-6" />
                      <span className="mt-1 text-[12px] font-semibold text-white/60">
                        2025
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold break-words text-white">
                        Bootcamp avancé Symfony
                      </h3>
                      <p className="text-sm leading-relaxed break-words text-white/70">
                        Compétence BCO4 Titre pro RNCP Concepteur Logiciel
                      </p>
                    </div>

                    <a
                      href="https://drive.google.com/file/d/1gGJnrjABzNLgi9lt6mCnnkC1gpk29t1U/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
                    >
                      <ExternalLink className="h-full w-full text-white/80" />
                      <span className="pointer-events-none absolute right-full mr-2 translate-x-8 -translate-y-6 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                        Voir le diplôme
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 bg-primary/5 relative rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex flex-col items-center rounded-xl px-4 py-3">
                      <IoSchool className="text-primary h-6 w-6" />
                      <span className="mt-1 text-[12px] font-semibold text-white/60">
                        2024
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold break-words text-white">
                        Développeur Front-End
                      </h3>
                      <p className="text-sm leading-relaxed break-words text-white/70">
                        Diplôme Studi
                      </p>
                    </div>

                    <a
                      href="https://drive.google.com/file/d/1Kd4C5VcA02uW3dFCGXtRRcaPFLmn4sJb/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
                    >
                      <ExternalLink className="h-full w-full text-white/80" />
                      <span className="pointer-events-none absolute right-full mr-2 translate-x-8 -translate-y-6 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                        Voir le diplôme
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 bg-primary/5 relative rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex flex-col items-center rounded-xl px-4 py-3">
                      <IoSchool className="text-primary h-6 w-6" />
                      <span className="mt-1 text-[12px] font-semibold text-white/60">
                        2023
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold break-words text-white">
                        Graduate Développeur Web et Web Mobile
                      </h3>
                      <p className="text-sm leading-relaxed break-words text-white/70">
                        Titre professionnel RNCP Développeur Web
                      </p>
                    </div>

                    <a
                      href="https://drive.google.com/file/d/1FNUcDZuMMUKZsfKsdMWJiecGTDWBRh7_/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
                    >
                      <ExternalLink className="h-full w-full text-white/80" />
                      <span className="pointer-events-none absolute right-full mr-2 translate-x-8 -translate-y-6 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                        Voir le diplôme
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 bg-primary/5 relative rounded-2xl border border-white/10 px-6 py-3 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex flex-col items-center rounded-xl px-4 py-3">
                      <BookOpenCheck className="text-primary h-6 w-6" />
                      <span className="mt-1 text-[12px] font-semibold text-white/60">
                        2021
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold break-words text-white">
                        Développeur Web Full-Stack
                      </h3>
                      <p className="text-sm leading-relaxed break-words text-white/70">
                        Certifications professionnelles
                      </p>
                    </div>

                    <a
                      href="https://drive.google.com/drive/folders/1tnrd7ksG92qPS1ucqYy2Lh6I9poaOGpu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
                    >
                      <ExternalLink className="h-full w-full text-white/80" />
                      <span className="pointer-events-none absolute right-full mr-2 translate-x-8 -translate-y-6 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                        Voir les certificats
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* stats & social media *********************************************************** */}
        <div className="mt-16 grid grid-cols-1 items-end gap-12 lg:mt-6 lg:grid-cols-2 lg:gap-0">
          {/* Stats ************************************************************ */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {ABOUT_STATS.map((stat, index) => (
                <div key={index} className="flex gap-4">
                  <div className="from-primary via-primary/50 to-primary/20 h-full w-1 rounded-full bg-gradient-to-b"></div>
                  <div>
                    <div className="font-mono text-xl font-normal text-white">
                      {stat.value}
                    </div>
                    <p className="text-sm leading-snug text-white/60">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Réseaux sociaux ************************************************* */}
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
                      <div className="hover:border-primary/30 relative flex h-15 w-15 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300">
                        <IconComponent className="h-7 w-7 text-white/70 transition-all duration-300 group-hover/social:text-primary" />
                      </div>
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
