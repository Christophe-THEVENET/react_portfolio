import { useState } from 'react'
import { Code2, Sparkles } from 'lucide-react'
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
    <section id="about" className="">
      <div className="">
        {/* Main grid */}
        <div className="">
          {/* Left Column */}
          <div>
            <div>
              <FadeIn delay={60}>
                <div>
                  <Code2 />
                  <span>Développeur Full-Stack</span>
                  <Sparkles />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2>dfqsdf sqdf qsdf qsd f</h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div>
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-justify text-base text-white/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>

              <FadeIn delay={300}>
                <div>
                    {ABOUT_STATS.map((stat, index) => (
                      <div key={index}>
                        <div></div>
                        <div>
                            {stat.value}
                        </div>
                        <p>
                            {stat.label}
                        </p>
                      </div>
                    ))}
                </div>
              </FadeIn>

              <FadeIn delay={400}>
<button>
    Télécharger mon résumé
</button>

                </FadeIn>




          </div>
        </div>
      </div>
    </section>
  )
}
