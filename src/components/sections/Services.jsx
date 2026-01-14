import { useState } from 'react'
import { services } from '@/data/services'
import * as Icons from 'lucide-react'
import { Wrench } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

export const Services = () => {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="services" className="relative overflow-hidden py-4">
      {/* cadrillage background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl" />
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
              Développement full-stack pour équipes tech, sites web pour
              artisans, commerçants et associations
            </p>
          </div>
        </FadeIn>
        {/* card service ******************************************* */}
        <div className="mx-auto grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons['Box']
            const isActive = activeCard === service.id
            return (
              <FadeIn
                key={service.id}
                delay={100 + index * 100}
                className="h-full"
              >
                <div className="group relative h-full">
                  <div className="from-primary/10 to-primary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-50"></div>
                  <div className="hover:border-primary/30 relative h-full overflow-hidden rounded-2xl border border-primary/15 bg-white/2 p-6 transition-all duration-300">
                    {/* Contenu principal */}
                    <div className="flex h-full flex-col">
                      {/* Header avec icône */}
                      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                        <IconComponent className="text-primary h-6 w-6" />
                        <h3 className="text-2xl font-semibold text-white uppercase">
                          {service.popup.title}
                        </h3>
                      </div>

                      {/* Badge subtitle */}
                      <div className="bg-primary/10 mb-6 flex w-full justify-center rounded-lg px-4 py-2">
                        <span className="text-primary text-md inline-block font-medium tracking-wider uppercase">
                          {service.subtitle1}
                        </span>
                      </div>

                      {/* Offres */}
                      <div className="flex-1 space-y-5 overflow-y-auto">
                        {/* Offre 1 */}
                        <div className="rounded-lg">
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="text-md font-semibold tracking-wide text-white uppercase">
                              {service.title1}
                            </h4>
                            <span className="text-primary bg-primary/10 text-md rounded-md px-3 py-1 font-bold">
                              {Object.values(service.price1)[0]}
                            </span>
                          </div>
                          <p className="text-justify text-sm leading-normal text-white/70">
                            {service.description1}
                          </p>
                        </div>

                        {/* Offre 2 */}
                        <div className="">
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="text-md font-semibold tracking-wide text-white uppercase">
                              {service.title2}
                            </h4>
                            <span className="text-primary bg-primary/10 text-md rounded-md px-3 py-1 font-bold">
                              {Object.values(service.price2)[0]}
                            </span>
                          </div>
                          <p className="text-justify text-sm leading-normal text-white/70">
                            {service.description2}
                          </p>
                        </div>

                        {/* Offre 3 (si existante) */}
                        {/* {service.title3 && (
                          <div className="">
                            <div className="mb-2 flex items-center justify-between">
                              <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
                                {service.title3}
                              </h4>
                              <span className="text-primary rounded-md bg-primary/10 px-3 py-1 text-sm font-bold">
                                {Object.values(service.price3)[0]}
                              </span>
                            </div>
                            <p className="text-justify text-sm leading-normal text-white/70">
                              {service.description3}
                            </p>
                          </div>
                        )} */}
                      </div>

                      {/* Bouton */}
                      <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
                        <button
                          onClick={() => setActiveCard(service.id)}
                          className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 shrink-0 rounded-lg border px-5 py-2 text-sm font-semibold transition-colors hover:cursor-pointer"
                        >
                          En savoir plus
                        </button>
                      </div>
                    </div>

                    {/* Popup slide up */}
                    <div
                      className={`absolute inset-0 flex flex-col rounded-2xl border border-white/10 bg-zinc-900/98 p-6 transition-transform ${
                        isActive
                          ? 'translate-y-0 duration-900'
                          : 'translate-y-full duration-700'
                      }`}
                      style={{
                        transitionTimingFunction: isActive
                          ? 'cubic-bezier(0.2, 1.35, 0.82, 0.92)'
                          : 'cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {/* Header avec icône */}
                      <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-semibold text-white uppercase">
                          {service.popup.title}
                        </h3>
                      </div>

                      {/* Badge subtitle */}
                      <div className="mb-6 flex w-full justify-center rounded-lg bg-white/5 px-4 py-2.5">
                        <span className="text-sm font-medium tracking-wider text-white/70 uppercase">
                          {service.popup.subtitle}
                        </span>
                      </div>

                      {/* Skills en badges */}
                      <div className="relative flex-1 overflow-y-auto p-1">
                        <div className="flex flex-wrap gap-x-2 gap-y-4">
                          {service.popup.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-white/80 uppercase transition-all duration-200 hover:scale-105 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bouton fermer */}
                      <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
                        <button
                          onClick={() => setActiveCard(null)}
                          className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 transition-colors hover:cursor-pointer hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                          Fermer
                        </button>
                      </div>
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
