import { useState } from 'react'
import { Code2, Download, Sparkles } from 'lucide-react'
import { SiReact, SiTailwindcss, SiSymfony, SiWordpress } from 'react-icons/si'
import { PERSONAL_INFO, ABOUT_STATS } from '@/utils/constants.js'
import FadeIn from '@/components/animations/FadeIn.jsx'

export const About = () => {
  const skills = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Symfony', icon: SiSymfony, color: '#6F42C1' },
    { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="border-primary/30 bg-primary/10 inline-flex w-fit items-center gap-2.5 rounded-full border px-5 py-2.5">
                  <Code2 className="text-primary h-4 w-4" />
                  <span className="text-primary text-sm font-medium">
                    Développeur Full-Stack
                  </span>
                  <Sparkles className="text-primary h-4 w-4" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl leading-tight font-normal text-white lg:text-5xl">
                  dfqsdf sqdf qsdf qsd f
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

            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="from-primary via-primary/50 to-primary/20 h-full w-1 rounded-full bg-gradient-to-b"></div>
                    <div>
                      <div className="font-mono text-3xl font-normal text-white">
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
          </div>

          {/* Right Column */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative col-span-2">
                <div className="from-primary/10 to-primary/5 absolute inset-0 bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <Code2 className="text-primary h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold break-words text-white">
                        fsdfsdfsdf
                      </h3>
                      <p className="text-sm leading-relaxed break-words text-white/70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="bg-primary/10 mb-4 w-fit rounded-xl p-3">
                    <Sparkles className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold break-words text-white">
                    Clean code
                  </h3>
                  <p className="text-sm leading-relaxed break-words text-white/70">
                    fsqdfqsdfsqdfqsdfsqdfsdfqsdfqsdfqsdfsdfs sqfsq fsq sq sq
                    fqsf sqfqs d
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="bg-primary/10 mb-4 w-fit rounded-xl p-3">
                    <Sparkles className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold break-words text-white">
                    Clean code
                  </h3>
                  <p className="text-sm leading-relaxed break-words text-white/70">
                    fsqdfqsdfsqdfqsdfsqdfsdfqsdfqsdfqsdfsdfs sqfsq fsq sq sq
                    fqsf sqfqs d
                  </p>
                </div>
              </div>

              <div className="group relative col-span-2">
                <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
                <div className="hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        100%
                      </div>
                      <div className="text-xs text-white/70">
                        Client satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        24/7
                      </div>
                      <div className="text-xs text-white/70">
                        Support client
                      </div>
                    </div>
                    <div>
                      <div className="text-primary mb-1 text-2xl font-bold">
                        Fast
                      </div>
                      <div className="text-xs text-white/70">
                        délai développement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
