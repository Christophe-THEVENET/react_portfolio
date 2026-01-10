import { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { SiReact, SiMysql, SiSymfony, SiWordpress } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from '@/utils/constants.js'
import { scrollToSection } from '@/hooks/useScrollSpy.js'
import FadeIn from '@/components/animations/FadeIn.jsx'
import avatar from '@/assets/img/general/avatar_digitob.png'
/* import RadialGradientBackground from "@/components/backgrounds/RadialGradientBackground.jsx"
 */

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/*  <RadialGradientBackground variant='hero'/> */}

      {/* Content Container  */}
      <div className="relative z-10 mx-auto w-full px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[3fr_2fr]">
          {/*  Left columns*/}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="from-green/15 via -green/25 to-green/30 border-green/20 mb-8 inline-flex items-center gap-2.5 rounded-full border bg-linear-to-r px-4 py-2.5">
                <Star className="h-4 w-4 fill-white text-white" />
                <span className="text-xs tracking-[1.2px] text-white md:text-sm">
                  {PERSONAL_INFO.title}
                  <br className="md:hidden" />
                  <span className="hidden md:inline"> | </span>
                  <span className="md:hidden"> </span>
                  secteur {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mb-6 text-3xl leading-tight font-normal text-white md:text-5xl lg:text-[58px] 2xl:text-7xl">
                Christophe
                <span className="text-green-light"> THEVENET</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mb-8 text-justify text-base text-white/70 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px]">
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
                <div className="relative z-10 cursor-pointer rounded-[17px] border border-white bg-white/90 px-4 py-2 text-base font-medium text-[#212121] transition-all duration-300 hover:bg-white">
                  Contact
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 gap-10 sm:max-w-[400px] md:max-w-[500px] md:grid-cols-4 lg:max-w-[700px]">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="border-r border-white/50 pr-10 text-left last:border-r-0"
                  >
                    <div className="text-green-light mb-1 font-mono text-2xl font-normal">
                      {stat.value}
                    </div>
                    <div className="text-sm leading-snug text-white">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/*  right columns developer image*/}
          <FadeIn delay={400}>
            <div className="relative ml-auto max-w-[500px]">
              {/* image container */}
              <div className="aspect-4/5 overflow-hidden rounded-2xl">
                <img
                  src={avatar}
                  alt="développeur design fond vert"
                  className="h-full w-full object-cover"
                />
              </div>

              {/*  techno logo*/}
              <FadeIn delay={600}>
                <div className="">
                  <div className="">
                    <SiReact className="" title="React.js" />
                  </div>
                  <div className="">
                    <SiSymfony className="" title="Symfony" />
                  </div>
                  <div className="">
                    <SiMysql className="" title="SQL" />
                  </div>
                  <div className="">
                    <SiWordpress className="" title="WordPress" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  )
}
