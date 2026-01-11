import { useState, useRef } from 'react'
import { ChevronDown, Star, Play, CodeXml } from 'lucide-react'
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
  const videoRef = useRef(null)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/*  <RadialGradientBackground variant='hero'/> */}

      {/* Content Container  */}
      <div className="relative z-10 mx-auto w-full px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[3fr_2fr]">
          {/*  Left columns *******************************************************/}
          <div className="w-full text-left">
            <FadeIn delay={0}>
              <div className="from-primary/5 via bg-primary/10 to-primary/15 border-primary/20 mb-8 inline-flex items-center gap-2.5 rounded-full border bg-linear-to-r px-4 py-2.5">
                <CodeXml className="h-4 w-4 fill-white text-white" />
                <span className="text-xs tracking-[1.2px] text-white min-[915px]:text-sm">
                  {PERSONAL_INFO.title}
                  <br className="min-[915px]:hidden" />
                  <span className="hidden min-[915px]:inline"> | </span>
                  <span className="min-[915px]:hidden"> </span>
                  secteur {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
         
            <FadeIn delay={100}>
              <h1 className="mb-6 text-2xl leading-tight font-normal text-white max-[1030px]:text-[50px] max-[886px]:text-[47px] max-[839px]:text-[45px] max-[803px]:text-[43px] lg:text-[55px] xl:text-[65px] 2xl:text-7xl">
                Christophe
                <span className="text-primary"> THEVENET</span>
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
              <button
                className="group mb-12 inline-flex items-center gap-0"
                onClick={() => scrollToSection('contact')}
              >
                <div className="relative z-10 cursor-pointer rounded-[17px] border border-white bg-white/75 px-3 py-1.5 text-base font-medium text-[#212121] transition-all duration-300 hover:bg-white">
                  Besoin d'un site web ?
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:max-w-[530px] xl:max-w-[630px] 2xl:max-w-[700px]">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="border-r border-white/50 pr-10 text-left last:border-r-0"
                  >
                    <div className="text-primary mb-1 font-mono text-2xl font-normal">
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

          {/*  right columns ****************************************************** */}
          <FadeIn delay={600}>
            <div className="relative mt-10 w-full md:mt-0 md:flex md:justify-end">
              <div className="group relative aspect-4/5 w-full max-w-[400px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[440px]">
                {/* rotating border */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="rotating-border animate-spin-slow absolute inset-[-50%]"></div>
                </div>
                {/* image container */}
                <div className="absolute inset-[2px] overflow-hidden rounded-2xl bg-black">
                  {/* Video */}
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    preload="auto"
                    poster={avatar}
                    playsInline
                    controls={isVideoPlaying}
                    src={videoTeaser}
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
                  <div className="absolute bottom-6 left-8 z-20">
                    <FadeIn delay={600}>
                      <div className="flex items-center gap-4">
                        {/* React */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <SiReact className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            React.js
                          </span>
                        </div>
                        {/* Symfony */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <SiSymfony className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            Symfony
                          </span>
                        </div>
                        {/* SQL */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <PiFileSqlLight className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                            SQL
                          </span>
                        </div>
                        {/* WordPress */}
                        <div className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130">
                          <SiWordpress className="h-full w-full text-white/80" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
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

      {/*  Scroll indicator */}
      <FadeIn delay={4000}>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 hidden translate-x-1/2 animate-bounce md:block"
        >
          <ChevronDown className="text-green h-8 w-8" />
        </button>
      </FadeIn>
    </section>
  )
}
