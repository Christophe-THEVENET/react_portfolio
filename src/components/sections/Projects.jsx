import React, { useState, useRef, useEffect } from 'react'
import { projects, categories } from '@/data/projects'
import {
  Briefcase,
  Target,
  LayoutTemplate,
  Layers,
  ChevronLeft,
  MonitorSmartphone,
  PanelsTopLeft,
  ChevronRight,
  ShoppingCart,
} from 'lucide-react'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeIn from '@/components/animations/FadeIn'
import { FadeInStagger, FadeInStaggerItem } from '@/components/animations/FadeIn'
import GlowCard from '@/components/animations/GlowCard'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3)
      else if (window.innerWidth >= 768) setVisibleCards(2)
      else setVisibleCards(1)
    }
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentIndex(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const scrollToIndex = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth / visibleCards
      container.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - visibleCards)
    const newIndex = Math.min(currentIndex + 1, maxIndex)
    if (newIndex !== currentIndex) {
      scrollToIndex(newIndex)
    }
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0)
    if (newIndex !== currentIndex) {
      scrollToIndex(newIndex)
    }
  }

  const categoryIcons = {
    All: Target,
    Maquette: LayoutTemplate,
    Front: PanelsTopLeft,
    'Full-Stack': Layers,
    Vitrine: MonitorSmartphone,
    'E-Commerce': ShoppingCart,
  }

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/3 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/20 absolute bottom-1/3 left-0 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/10 absolute top-1/2 right-1/3 h-96 w-96 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <div className="bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <Briefcase className="text-primary h-4 w-4" />
              <span className="mono-sm text-primary">
                Mes réalisations
              </span>
            </div>

            <h2 className="serif mx-auto mb-4 max-w-2xl text-4xl text-ink lg:text-5xl">
              Projets Représentatifs
            </h2>
            <p className="mx-auto max-w-xl text-lg text-ink-2/60">
              Sélection d'applications web, boutiques e-commerce et sites
              vitrines parmi mes projets livrés
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group relative cursor-pointer rounded-full px-6 py-3 focus:outline-none ${
                  activeCategory === category
                    ? 'text-ink'
                    : 'text-ink/60 hover:text-ink'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary/5 border border-primary/20'
                      : 'border border-white/10 bg-white/5 group-hover:bg-white/10'
                  }`}
                />
                {activeCategory === category && (
                  <motion.div
                    className="bg-primary absolute inset-0 -z-10 rounded-full blur-lg"
                    layoutId="activeCategoryBg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative flex items-center gap-2">
                  {React.createElement(categoryIcons[category], {
                    className: 'h-4 w-4',
                  })}
                  <span className="mono-sm">{category}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="hide-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-visible scroll-smooth py-4"
            >
              <FadeInStagger
                key={activeCategory}
                staggerDelay={0.1}
                delayChildren={0.2}
                className="flex gap-6 pb-4"
                once={true}
              >
                  {filteredProjects.map((project) => (
                    <FadeInStaggerItem
                      key={`${activeCategory}-${project.id}`}
                      className="w-full shrink-0 snap-start md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                      <GlowCard>
                        <ProjectCard project={project} />
                      </GlowCard>
                    </FadeInStaggerItem>
                  ))}
              </FadeInStagger>
            </div>

            {filteredProjects.length > visibleCards && (
              <>
                <motion.button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="bg-primary/10 border-primary/20 hover:bg-primary/20 absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:w-12 lg:-translate-x-4"
                  aria-label="Projet précédent"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - visibleCards}
                  className="bg-primary/10 border-primary/20 hover:bg-primary/20 absolute top-1/2 right-0 z-10 flex h-10 w-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50 lg:h-12 lg:w-12 lg:translate-x-4"
                  aria-label="Projet suivant"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </motion.button>
              </>
            )}

            <div className="mt-8 flex h-2 items-center justify-center gap-2">
              {filteredProjects.length > visibleCards &&
                Array.from({
                  length: Math.max(0, filteredProjects.length - visibleCards + 1),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'bg-primary h-2 w-6'
                        : 'h-2 w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Aller au projet ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
