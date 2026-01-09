import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { SiReact, SiMysql, SiSymfony, SiWordpress } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from '@/utils/constants.js'
import { scrollToSection } from '@/hooks/useScrollSpy.js'
import FadeIn from '@/components/animations/FadeIn.jsx'
/* import RadialGradientBackground from "@/components/backgrounds/RadialGradientBackground.jsx"
 */

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/*  <RadialGradientBackground variant='hero'/> */}

      {/*  Content Container */}
      <div className="relative z-10 mx-auto w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/*  Left columns*/}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="from-primary/10 via -primary/15 to-primary/20 border-primary/20 mb-8 inline-flex items-center gap-2.5 rounded-full border bg-linear-to-r px-[18px] py-[11px]">
                <Star className="h-4 w-4 fill-white text-white" />
                <span className="text-xs tracking-[1.2px] text-white md:text-sm">
                  {PERSONAL_INFO.title} | secteur {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mb-6 text-4xl leading-tight font-normal text-white md:text-5xl lg:text-6xl">
                Portfolio Développeur
                <span className="text-emerald-300"> Full-Stack</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-8 max-w-[550px] text-lg text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                eos veritatis! Nulla hic provident perspiciatis mollitia natus
                quod. Atque temporibus quo quibusdam possimus dolore autem
                molestias in cum impedit corporis?
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                className="group mb-12 inline-flex items-center gap-0"
                onClick={() => scrollToSection('contact')}
              >
                <div className="relative z-10 rounded-[17px] border border-white bg-white/90 px-[20px] py-[10px] text-base font-medium text-[#212121] hover:bg-white transition-all duration-300 cursor-pointer">
                  Contact
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-left border-r border-white/50 pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">{stat.value}</div>
                    <div className="text-sm text-white leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
