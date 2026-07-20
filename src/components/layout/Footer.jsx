import { useState } from 'react'
import { Scale } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer
        className="relative z-10 py-6"
        style={{ borderTop: '1px solid var(--rule)' }}
      >
        <div className="mx-auto flex flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-center sm:gap-4">
          <p style={{ color: 'var(--ink-2)', fontSize: '14px' }}>
            {PERSONAL_INFO.name} - {PERSONAL_INFO.title}
          </p>
          <span className="hidden sm:inline" aria-hidden="true" style={{ color: 'var(--faint)' }}>•</span>
          <p style={{ color: 'var(--mute)', fontSize: '14px' }}>
            © <time dateTime={String(currentYear)}>{currentYear}</time>
          </p>
          <span className="hidden sm:inline" aria-hidden="true" style={{ color: 'var(--faint)' }}>•</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer transition-colors duration-200"
            style={{ color: 'var(--mute)', background: 'none', border: 'none', fontSize: '14px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink-2)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mute)')}
          >
            Mentions légales
          </button>
        </div>
      </footer>

      <div
        // `inert` retire toute la modale du DOM accessible et du plan de titres
        // quand elle est fermée (elle reste montée pour conserver les transitions).
        inert={!isModalOpen}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
          isModalOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(6,9,10,0.5)', backdropFilter: 'blur(8px)' }}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mentions-legales-titre"
          className={`relative flex max-h-[80vh] w-full max-w-3xl flex-col p-6 sm:p-8 transition-all ${
            isModalOpen
              ? 'translate-y-0 scale-100 opacity-100 duration-700'
              : 'translate-y-8 scale-95 opacity-0 duration-300'
          }`}
          style={{
            border: '1px solid var(--rule)',
            background: 'rgba(20,24,24,0.98)',
            transitionTimingFunction: isModalOpen
              ? 'cubic-bezier(0.2, 1.35, 0.82, 0.92)'
              : 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
            <div
              className="mb-5 flex items-center gap-3 pb-4"
              style={{ borderBottom: '1px solid var(--rule)' }}
            >
              <Scale className="w-5 h-5" style={{ color: 'var(--accent)' }} aria-hidden="true" />
              <h2 id="mentions-legales-titre" className="serif text-2xl" style={{ color: 'var(--ink)' }}>
                Mentions légales
              </h2>
            </div>

            <p className="mono-sm mb-6 text-center" style={{ color: 'var(--mute)' }}>
              En vigueur au <time dateTime="2025-01-14">14/01/2025</time>
            </p>

            <div
              className="flex-1 overflow-y-auto pr-2 space-y-6"
              style={{ color: 'var(--mute)', fontSize: '14px', lineHeight: 1.7 }}
            >
              <p className="text-justify">
                Conformément aux dispositions des Articles 6-III et 19 de la Loi
                n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie
                numérique, dite L.C.E.N., il est porté à la connaissance des
                Utilisateurs du site https://christophethevenet.fr/ les présentes
                mentions légales.
              </p>

              <section>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 1 : L'éditeur
                </h3>
                <p className="text-justify">
                  L'édition et la direction de la publication du site
                  https://christophethevenet.fr/ est assurée par Christophe
                  THEVENET, dont l'adresse email est : christophethevenet@yahoo.fr
                </p>
              </section>

              <section>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 2 : L'hébergeur
                </h3>
                <p className="text-justify">
                  L'hébergeur du site https://christophethevenet.fr/ est la
                  Société Netlify, dont le siège social est situé au 2325 3rd
                  Street, Suite 296, San Francisco, California 94107.
                </p>
              </section>

              <section>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 3 : Accès au site
                </h3>
                <p className="text-justify">
                  Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas
                  de force majeure, interruption programmée ou non.
                </p>
              </section>

              <section>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 4 : Collecte des données
                </h3>
                <p className="text-justify">
                  Le site est exempté de déclaration à la Commission Nationale
                  Informatique et Libertés (CNIL) dans la mesure où il ne collecte
                  aucune donnée concernant les utilisateurs.
                </p>
              </section>

              <section>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 5 : Propriété intellectuelle
                </h3>
                <p className="text-justify">
                  Toute utilisation, reproduction, diffusion, commercialisation,
                  modification de toute ou partie du site sans autorisation de
                  l'Editeur est prohibée.
                </p>
              </section>
            </div>

            <div
              className="mt-6 pt-4 flex justify-end"
              style={{ borderTop: '1px solid var(--rule)' }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="mono-sm px-5 py-2 cursor-pointer transition-colors duration-200"
                style={{
                  border: '1px solid var(--rule)',
                  color: 'var(--ink-2)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--rule)'
                  e.currentTarget.style.color = 'var(--ink-2)'
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
    </>
  )
}
