import React from 'react'
import { skills } from '@/data/skills'
import * as SiIcons from 'react-icons/si'
import { Sparkles, Code2 } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

export const Skills = () => {
  // Categorize skills
  const SkillCategories = {
    Frontend: [
      skills.find((skill) => skill.name === 'React.js'),
      skills.find((skill) => skill.name === 'Javascript.js'),
      skills.find((skill) => skill.name === 'Sass'),
      skills.find((skill) => skill.name === 'Tailwind CSS'),
      skills.find((skill) => skill.name === 'Ui/Ux Design'),
      skills.find((skill) => skill.name === 'Figma'),
    ].filter(Boolean),
    Backend: [
      skills.find((skill) => skill.name === 'Symfony'),
      skills.find((skill) => skill.name === 'Php'),
      skills.find((skill) => skill.name === 'Mvc'),
      skills.find((skill) => skill.name === 'Poo'),
      skills.find((skill) => skill.name === 'Api Rest'),
      skills.find((skill) => skill.name === 'Design Patterns'),
    ].filter(Boolean),
    Database: [
      skills.find((skill) => skill.name === 'MySql'),
      skills.find((skill) => skill.name === 'Merise/Uml'),
      skills.find((skill) => skill.name === 'Doctrine'),
    ].filter(Boolean),
    DevOps: [
      skills.find((skill) => skill.name === 'Docker'),
      skills.find((skill) => skill.name === 'Git/Github'),
      skills.find((skill) => skill.name === 'Linux'),
      skills.find((skill) => skill.name === 'CI/CD'),
    ].filter(Boolean),
    Sécurité: [
      skills.find((skill) => skill.name === 'Auth'),
      skills.find((skill) => skill.name === 'Roles'),
      skills.find((skill) => skill.name === 'Validation'),
      skills.find((skill) => skill.name === 'CSRF'),
      skills.find((skill) => skill.name === 'XSS'),
      skills.find((skill) => skill.name === 'SQL Injection'),
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

  // Group skills by level within a category
  const groupByLevel = (categorySkills) => {
    const levels = ['Expert', 'Avancé', 'Intermédiaire']
    return levels
      .map((level) => ({
        level,
        skills: categorySkills.filter((skill) => skill.level === level),
      }))
      .filter((group) => group.skills.length > 0)
  }

  // Get badge styles by level
  const getBadgeStyles = (level) => {
    const styles = {
      Expert: 'border-emerald-500/30 text-emerald-500 bg-emerald-600/10',
      Avancé: 'border-primary/30 text-primary bg-primary/10',
      Intermédiaire: 'border-slate-400/30 text-slate-400 bg-slate-400/10',
    }
    return styles[level] || styles.Intermédiaire
  }

  // Get level label styles
  const getLevelLabelStyles = (level) => {
    const styles = {
      Expert: 'text-emerald-400',
      Avancé: 'text-primary',
      Intermédiaire: 'text-slate-400',
    }
    return styles[level] || styles.Intermédiaire
  }

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      {/* Animated background gradient */}
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

        {/* Skills grid by category */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SkillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100} className="h-full">
                <div className="group relative h-full">
                  <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-50"></div>
                  <div className="hover:border-primary/35 relative h-full rounded-2xl border border-primary/25 bg-white/2 p-5 transition-all duration-300">
                  {/* Category header */}
                  <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                    <div className="h-1 w-6 rounded-full bg-primary/50"></div>
                    <h3 className="text-xl font-medium text-white uppercase">{category}</h3>
                  </div>

                  {/* Skills grouped by level */}
                  <div className="space-y-4">
                    {groupByLevel(categorySkills).map(({ level, skills: levelSkills }) => (
                      <div key={level}>
                        {/* Level row */}
                        <div className="flex items-start justify-between gap-4">
                          {/* Skills badges */}
                          <div className="flex flex-wrap gap-1.5">
                            {levelSkills.map((skill) => {
                              const IconComponent = SiIcons[skill.icon] || Code2
                              return (
                                <div
                                  key={skill.id}
                                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-all duration-200 ${getBadgeStyles(level)}`}
                                >
                                  <IconComponent className="h-4 w-4" />
                                  <span className='uppercase text-[11px]'>{skill.name}</span>
                                </div>
                              )
                            })}
                          </div>
                          {/* Level label */}
                          <span className={`shrink-0 text-xs font-medium ${getLevelLabelStyles(level)}`}>
                            {level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
