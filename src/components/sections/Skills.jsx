import React, { useRef } from 'react'
import { skills } from '@/data/skills'
import * as SiIcons from 'react-icons/si'
import { Sparkles, Code2 } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import GlowCard from '@/components/animations/GlowCard'
import ScrollReveal from '@/components/animations/ScrollReveal'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'

export const Skills = () => {
  const gridRef = useRef(null)

  const SkillCategories = {
    Frontend: [
      skills.find((skill) => skill.name === 'React.js'),
      skills.find((skill) => skill.name === 'Javascript'),
      skills.find((skill) => skill.name === 'Sass'),
      skills.find((skill) => skill.name === 'Tailwind'),
      skills.find((skill) => skill.name === 'TanStack'),
      skills.find((skill) => skill.name === 'Zustand'),
      skills.find((skill) => skill.name === 'TypeScript'),
    ].filter(Boolean),
    Backend: [
      skills.find((skill) => skill.name === 'Symfony'),
      skills.find((skill) => skill.name === 'Php'),
      skills.find((skill) => skill.name === 'Mvc'),
      skills.find((skill) => skill.name === 'Poo'),
      skills.find((skill) => skill.name === 'Api Rest'),
      skills.find((skill) => skill.name === 'Design Patterns'),
      skills.find((skill) => skill.name === 'Symfony UX'),
      skills.find((skill) => skill.name === 'Mercure'),
    ].filter(Boolean),
    'BDD/DevOps': [
      skills.find((skill) => skill.name === 'MySql'),
      skills.find((skill) => skill.name === 'Merise/Uml'),
      skills.find((skill) => skill.name === 'Doctrine'),
      skills.find((skill) => skill.name === 'Docker'),
      skills.find((skill) => skill.name === 'Git/Github'),
      skills.find((skill) => skill.name === 'Linux'),
      skills.find((skill) => skill.name === 'CI/CD'),
    ].filter(Boolean),
    Design: [
      skills.find((skill) => skill.name === 'Wireframing'),
      skills.find((skill) => skill.name === 'Prototyping'),
      skills.find((skill) => skill.name === 'Ui/Ux Design'),
      skills.find((skill) => skill.name === 'Responsive'),
      skills.find((skill) => skill.name === 'Accessibility'),
      skills.find((skill) => skill.name === 'User Stories'),
    ].filter(Boolean),
    Sécurité: [
      skills.find((skill) => skill.name === 'Auth'),
      skills.find((skill) => skill.name === 'Authorization'),
      skills.find((skill) => skill.name === 'Validation'),
      skills.find((skill) => skill.name === 'CSRF'),
      skills.find((skill) => skill.name === 'XSS'),
      skills.find((skill) => skill.name === 'SQL Injection'),
      skills.find((skill) => skill.name === 'Encryption'),
    ].filter(Boolean),
    Outils: [
      skills.find((skill) => skill.name === 'Copilot'),
      skills.find((skill) => skill.name === 'Claude Code'),
      skills.find((skill) => skill.name === 'Wordpress'),
      skills.find((skill) => skill.name === 'WooCommerce'),
      skills.find((skill) => skill.name === 'PrestaShop'),
      skills.find((skill) => skill.name === 'Agile/Scrum'),
    ].filter(Boolean),
  }

  const groupByLevel = (categorySkills) => {
    const levels = ['Expert', 'Avancé', 'Intermédiaire']
    return levels
      .map((level) => ({
        level,
        skills: categorySkills.filter((skill) => skill.level === level),
      }))
      .filter((group) => group.skills.length > 0)
  }

  const getBadgeStyles = (level) => {
    const styles = {
      Expert: 'border-emerald-500/30 text-emerald-500 bg-emerald-600/10',
      Avancé: 'border-primary/30 text-primary bg-primary/10',
      Intermédiaire: 'border-slate-400/30 text-slate-400 bg-slate-400/10',
    }
    return styles[level] || styles.Intermédiaire
  }

  const getLevelLabelStyles = (level) => {
    const styles = {
      Expert: 'text-emerald-400',
      Avancé: 'text-primary',
      Intermédiaire: 'text-slate-400',
    }
    return styles[level] || styles.Intermédiaire
  }

  const categories = Object.entries(SkillCategories)

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/10 absolute top-1/4 left-0 h-96 w-96 rounded-full opacity-50 blur-3xl"></div>
        <div className="bg-primary/10 absolute right-0 bottom-1/4 h-96 w-96 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="mb-12 text-center">
            <div className="bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <Sparkles className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium">
                Mon expertise
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-normal text-white lg:text-5xl">
              Compétences Techniques
            </h2>
            <p className="text-white/60">Niveau de maîtrise par technologie</p>
          </div>
        </FadeIn>

        <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, categorySkills], index) => (
            <ScrollReveal
              key={category}
              index={index}
              total={categories.length}
              containerRef={gridRef}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'bottom' : 'right'}
            >
              <GlowCard className="h-full">
                <div className="group relative h-full">
                  <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-50"></div>
                  <div className="hover:border-primary/35 relative h-full rounded-2xl border border-primary/25 bg-white/2 p-5 transition-all duration-300">
                    <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                      <div className="h-1 w-6 rounded-full bg-primary/50"></div>
                      <h3 className="text-xl font-medium text-white uppercase">{category}</h3>
                    </div>

                    <div className="space-y-4">
                      {groupByLevel(categorySkills).map(({ level, skills: levelSkills }) => (
                        <div key={level}>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-wrap gap-1.5">
                              {levelSkills.map((skill) => {
                                const IconComponent = SiIcons[skill.icon] || Code2
                                return (
                                  <motion.div
                                    key={skill.id}
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs ${getBadgeStyles(level)}`}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                  >
                                    <IconComponent className="h-4 w-4" />
                                    <span className="text-[11px] uppercase">{skill.name}</span>
                                  </motion.div>
                                )
                              })}
                            </div>
                            <span className={`shrink-0 text-xs font-medium ${getLevelLabelStyles(level)}`}>
                              {level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
