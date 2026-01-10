import { useState } from 'react'
import { ChevronDown, Star, Play } from 'lucide-react'
import { SiReact, SiMysql, SiSymfony, SiWordpress } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from '@/utils/constants.js'
import { scrollToSection } from '@/hooks/useScrollSpy.js'
import FadeIn from '@/components/animations/FadeIn.jsx'
import avatar from '@/assets/img/general/avatar_digitob.png'
import videoTeaser from '@/assets/video/teaser_digitob_v3.mp4'

import { PiFileSqlLight } from 'react-icons/pi'
/* import RadialGradientBackground from "@/components/backgrounds/RadialGradientBackground.jsx"
 */

export const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
            <div className="relative">
              <div className="group relative ml-auto aspect-4/5 max-w-[500px]">
                {/* rotating border */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="rotating-border animate-spin-slow absolute inset-[-50%]"></div>
                </div>
                {/* image container */}
                <div className="absolute inset-[2px] overflow-hidden rounded-2xl bg-black">
                  {/* Video */}
                  <video
                    id="my-video"
                    className="h-full w-full object-cover"
                    preload="auto"
                    poster={avatar}
                    playsInline
                    controls={isVideoPlaying}
                    src={videoTeaser}
                    onEnded={(e) => {
                      setIsTransitioning(true)
                      setTimeout(() => {
                        e.target.load()
                        setIsVideoPlaying(false)
                        setTimeout(() => setIsTransitioning(false), 300)
                      }, 300)
                    }}
                  />

                  {/* Transition overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 z-10 bg-black transition-opacity duration-500 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Play button with rotating border */}
                  {!isVideoPlaying && (
                    <button
                      className={`group absolute inset-0 flex cursor-pointer items-center justify-center transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                      type="button"
                      aria-label="Lancer la vidéo de présentation"
                      onClick={(e) => {
                        const video = e.currentTarget.previousElementSibling.previousElementSibling
                        setIsTransitioning(true)
                        setTimeout(() => {
                          video.play()
                          setIsVideoPlaying(true)
                          setTimeout(() => setIsTransitioning(false), 300)
                        }, 300)
                      }}
                    >
                      {/* Subtle ping effect */}
                      <span className="animate-ping-slow absolute h-10 w-10 rounded-full border border-white/30"></span>

                      {/* Play button */}
                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/70">
                        <Play className="ml-0.5 h-5 w-5 fill-white/50 text-white/50" />
                      </span>
                    </button>
                  )}
                </div>

                {/*  techno logo - hidden during video playback */}
                {!isVideoPlaying && (
                  <div className="absolute bottom-6 left-6 z-20">
                    <FadeIn delay={600}>
                      <div className="flex items-center gap-4">
                        {/* React */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <SiReact className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            React.js
                          </span>
                        </div>
                        {/* Symfony */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <SiSymfony className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            Symfony
                          </span>
                        </div>
                        {/* SQL */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <PiFileSqlLight className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            SQL
                          </span>
                        </div>
                        {/* WordPress */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <SiWordpress className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-white/90 px-2 py-1 text-xs font-medium text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            WordPress
                          </span>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
