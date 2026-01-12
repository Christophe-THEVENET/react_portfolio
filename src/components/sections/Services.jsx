import { useState } from 'react'
import { services } from '@/data/services'
import * as Icons from 'lucide-react'
import { Wrench, X, Check } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'

export const Services = () => {
  const [activeCard, setActiveCard] = useState(null)

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id)
  }

  return (
    <section id="services" className="relative overflow-hidden py-20">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <div className="border-primary/30 bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2">
              <Wrench className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Ce que je propose
              </span>
            </div>
            <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-normal text-white lg:text-5xl">
              Conçu pour l'innovation et axé sur les résultats
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/60">
              Des solutions complètes pour transformer vos idées en une
              expérience digitale exceptionnelle
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons['Box']
            const isActive = activeCard === service.id
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group bg-primary/5 hover:border-primary/50 relative h-120 overflow-hidden rounded-2xl border border-white/10 p-5 transition-all duration-300 md:h-130 xl:h-140">
                  {/* Contenu principal */}
                  <div className="flex h-full flex-col">
                    {/* Header avec icône */}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="bg-primary/20 rounded-lg p-2">
                        <IconComponent className="text-primary h-5 w-5" />
                      </div>
                      <h3 className="text-base font-black tracking-wide text-white uppercase">
                        {service.popup.title}
                      </h3>
                    </div>

                    {/* Badge subtitle */}
                    <div className="mb-4">
                      <span className="border-primary/30 bg-primary/10 text-primary inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wider uppercase">
                        {service.popup.subtitle}
                      </span>
                    </div>

                    {/* Offres */}
                    <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                      {/* Offre 1 */}
                      <div>
                        <h4 className="mb-1 text-xs font-bold tracking-wide text-white uppercase">
                          {service.title1}: {Object.values(service.price1)[0]}
                        </h4>
                        <p className="text-xs leading-relaxed text-white/70">
                          {service.description1}
                        </p>
                      </div>

                      {/* Offre 2 */}
                      <div>
                        <h4 className="mb-1 text-xs font-bold tracking-wide text-white uppercase">
                          {service.title2}: {Object.values(service.price2)[0]}
                        </h4>
                        <p className="text-xs leading-relaxed text-white/70">
                          {service.description2}
                        </p>
                      </div>

                      {/* Offre 3 (si existante) */}
                      {service.title3 && (
                        <div>
                          <h4 className="mb-1 text-xs font-bold tracking-wide text-white uppercase">
                            {service.title3}: {Object.values(service.price3)[0]}
                          </h4>
                          <p className="text-xs leading-relaxed text-white/70">
                            {service.description3}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bouton */}
                    <button
                      onClick={() => toggleCard(service.id)}
                      className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 mt-4 w-full shrink-0 rounded-lg border py-2 text-sm font-medium transition-colors"
                    >
                      En savoir plus
                    </button>
                  </div>

                  {/* Popup slide up */}
                  <div
                    className={`absolute inset-0 flex flex-col rounded-2xl bg-gray-900/95 p-5 backdrop-blur-sm transition-transform duration-500 ease-out ${
                      isActive ? 'translate-y-0' : 'translate-y-full'
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {service.popup.title}
                        </h3>
                        <p className="text-primary text-sm">
                          {service.popup.subtitle}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleCard(service.id)}
                        className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Liste des skills */}
                    <ul className="flex-1 space-y-2 overflow-y-auto">
                      {service.popup.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                          <span className="text-sm text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
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
