import { useState } from 'react'
import { services } from '@/data/services'
import * as Icons from 'lucide-react'
import { Wrench, Check } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

export const Services = () => {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="services" className="relative overflow-hidden py-10">
      {/* cadrillage background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/20 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/10 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
            `,
          backgroundSize: `30px 30px`,
        }}
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <div className="border-primary/30 bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2">
              <Wrench className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Ce que je propose
              </span>
            </div>
            <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-normal text-white lg:text-5xl">
              Prestations & Solutions Web
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/60">
              Applications scalables et maintenables pour équipes agiles, sites
              clés-en-main pour artisans, commerçants et associations
            </p>
          </div>
        </FadeIn>
        {/* card service ******************************************* */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons['Box']
            const isActive = activeCard === service.id
            return (
              <FadeIn
                key={service.id}
                delay={100 + index * 100}
                className="h-full"
              >
                <div className="group relative h-full min-h-120">
                  <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"></div>
                  <div className="hover:border-primary/30 border-primary/15 bg-primary/3 relative h-full overflow-hidden rounded-2xl border p-5 transition-all duration-300">
                    {/* Contenu principal */}
                    <div className="flex h-full flex-col">
                      {/* Header avec icône */}
                      <div className="mb-3 flex items-center justify-center gap-3">
                        <h3 className="text-xl font-medium text-white uppercase">
                          {service.popup.title}
                        </h3>
                      </div>

                      {/* Badge subtitle */}
                      <div className="bg-primary/10  mb-4 flex w-full justify-center rounded-lg px-3 py-2">
                        <span className="text-primary inline-block  text-xs font-medium tracking-wider uppercase">
                          {service.subtitle1}
                        </span>
                      </div>

                      {/* Offres */}
                      <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                        {/* Offre 1 */}
                        <div>
                          <h4 className="mb-1 text-sm font-bold tracking-wider text-white uppercase">
                            {service.title1}: {Object.values(service.price1)[0]}
                          </h4>
                          <p className="text-justify text-sm leading-normal text-white/70">
                            {service.description1}
                          </p>
                        </div>

                        {/* Offre 2 */}
                        <div>
                          <h4 className="mb-1 text-sm font-bold tracking-wider text-white uppercase">
                            {service.title2}: {Object.values(service.price2)[0]}
                          </h4>
                          <p className="text-justify text-sm leading-relaxed text-white/70">
                            {service.description2}
                          </p>
                        </div>

                        {/* Offre 3 (si existante) */}
                        {service.title3 && (
                          <div>
                            <h4 className="mb-1 text-xs font-bold tracking-wider text-white uppercase">
                              {service.title3}:{' '}
                              {Object.values(service.price3)[0]}
                            </h4>
                            <p className="text-justify text-sm leading-relaxed text-white/70">
                              {service.description3}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Bouton */}
                      <button
                        onClick={() => setActiveCard(service.id)}
                        className="border-primary/20 hover:cursor-pointer bg-primary/10 text-primary hover:bg-primary/20 mt-4 w-full shrink-0 rounded-lg border py-1 text-sm font-medium transition-colors"
                      >
                        En savoir plus
                      </button>
                    </div>

                    {/* Popup slide up */}
                    <div
                      className={`absolute inset-0 flex flex-col rounded-2xl border border-primary/10 bg-black p-5 transition-transform duration-800 ${
                        isActive ? 'translate-y-0' : 'translate-y-full'
                      }`}
                      style={{
                        transitionTimingFunction:
                          'cubic-bezier(0.2, 1.35, 0.82, 0.92)',
                      }}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Header like card */}
                      <div className="mb-3 flex items-center justify-center">
                        <h3 className="text-xl font-medium text-white uppercase">
                          {service.popup.title}
                        </h3>
                      </div>

                      {/* Badge subtitle like card */}
                      <div className="bg-primary/10 mb-4 flex w-full justify-center rounded-lg px-3 py-2">
                        <span className="text-primary text-xs font-medium tracking-wider uppercase">
                          {service.popup.subtitle}
                        </span>
                      </div>

                      {/* Liste des skills */}
                      <ul className="relative flex-1 space-y-5 overflow-y-auto pr-1">
                        {service.popup.skills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="text-primary mt-0.5 h-3 w-3 shrink-0" />
                            <span className="text-sm leading-relaxed text-white/70">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
