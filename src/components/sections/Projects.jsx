import React, { useState, useRef } from 'react'
import { projects, categories } from '@/data/projects'
import {
  Briefcase,
  Target,
  LayoutTemplate,
  Layers,
  ChevronLeft,
  MonitorSmartphone,
  ChevronRight,
  ShoppingCart,
} from 'lucide-react'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeIn from '@/components/animations/FadeIn'

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  // reset carousel when category changes
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
      const cardWidth = container.offsetWidth / 3 // assuming 3 cards are visible
      container.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3)
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

  // Category icons mapping
  const categoryIcons = {
    All: Target,
    'App Front': LayoutTemplate,
    'App Full-Stack': Layers,
    'Site Vitrine': MonitorSmartphone,
    'E-Commerce': ShoppingCart,
  }

  return (
    <section id="projects" className="relative overflow-hidden py-26">
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
              <span className="text-primary text-sm font-medium">
                Mes réalisations
              </span>
            </div>

            <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-normal text-white lg:text-5xl">
              Projets Représentatifs
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/60">
              Une sélection d'applications full-stack, front-end, boutiques
              e-commerce et sites WordPress parmi mes réalisations
            </p>
          </div>
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group cursor-pointer relative rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary/10'
                      : 'border border-white/10 bg-white/5 group-hover:bg-white/10'
                  }`}
                />
                {/* Glow effect */}
                {activeCategory === category && (
                  <div className="absolute inset-0 -z-10 rounded-full bg-primary opacity-30 blur-xl" />
                )}
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  {React.createElement(categoryIcons[category], {
                    className: 'h-4 w-4',
                  })}
                  <span className="text-sm">{category}</span>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects carousel */}
        <FadeIn delay={200}>
          <div className="">
            <div ref={scrollContainerRef} className="">
              <div className="">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/*  Navigation arrow */}
            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className=""
                  aria-label="Projet précédent"
                >
                  <ChevronLeft className="" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  className=""
                  aria-label="Projet suivant"
                >
                  <ChevronRight className="" />
                </button>
              </>
            )}

            {/* Navigation dots */}
            {filteredProjects.length > 3 && (
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({
                  length: Math.max(0, filteredProjects.length - 2),
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
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
