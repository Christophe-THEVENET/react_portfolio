import React from 'react'
import { skills } from '@/data/skills'
import * as Icons from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

const Skills = () => {
  // Cateforize skills
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

  // Get proficiency percentage
  const getProficiencyPercentage = (level) => {
    const levels = {
      Intermédiaire: 65,
      Confirmé: 80,
      Expert: 95,
    }
    return levels[level] || 50
  }

  return (
    <section id="skills" className="">
      {/* Animated backgound gradient */}
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="">
        <FadeIn delay={100}>
          <div className="">
            <div className="">
              <Icons.Sparkles className="" />
              <span className="">Mon expertise</span>
            </div>
            <h2 className="">Skills & Technologies</h2>
            <p className="">Aperçu de mon niveau technique et maîtrise</p>
          </div>
        </FadeIn>

        {/* Skills categories */}

        <div className="">
          {Object.entries(SkillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="">
                  <div className="">
                    <div className=""></div>
                    <h3 className="">{category}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = Icons[skill.icon] || Icons.Code2
                      const proficiency = getProficiencyPercentage(skill.level)
                      return (
                        <div key={skill.id} className="">
                          <div className="">
                            <div className="">
                              <div className="">
                                <IconComponent className="" />
                              </div>
                              <div>
                                <div className="">{skill.name}</div>
                                <div className="">{skill.experience}</div>
                              </div>
                            </div>

                            <span
                              className={`rounded-full border px-2 py-1 text-xs ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="">
                            <div
                              className=""
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Hover glow effect */}

                  
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
