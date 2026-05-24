import { useState } from 'react'
import { Scale } from 'lucide-react'

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer
        className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-10 md:px-16"
        style={{ borderTop: '1px solid var(--rule)' }}
      >
        <div className="mono-sm" style={{ color: 'var(--mute)' }}>
          © 2026 — Christophe Thevenet · Digitob
        </div>
        <div
          className="serif italic text-sm hidden md:block"
          style={{ color: 'var(--mute)' }}
        >
          « Je fabrique un site internet comme on fabrique un meuble. »
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mono-sm cursor-pointer transition-colors duration-200"
            style={{ color: 'var(--mute)', background: 'none', border: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--mute)')}
          >
            Mentions légales
          </button>
        </div>
      </footer>

      {/* Modal Mentions légales */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(6,9,10,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex max-h-[80vh] w-full max-w-3xl flex-col p-6 sm:p-8"
            style={{
              border: '1px solid var(--rule)',
              background: 'var(--bg)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mb-5 flex items-center gap-3 pb-4"
              style={{ borderBottom: '1px solid var(--rule)' }}
            >
              <Scale className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              <h2 className="serif text-2xl" style={{ color: 'var(--ink)' }}>
                Mentions légales
              </h2>
            </div>

            <div className="mono-sm mb-6 text-center" style={{ color: 'var(--mute)' }}>
              En vigueur au 14/01/2025
            </div>

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

              <div>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 1 : L'éditeur
                </h3>
                <p className="text-justify">
                  L'édition et la direction de la publication du site
                  https://christophethevenet.fr/ est assurée par Christophe
                  THEVENET, dont l'adresse email est : christophethevenet@yahoo.fr
                </p>
              </div>

              <div>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 2 : L'hébergeur
                </h3>
                <p className="text-justify">
                  L'hébergeur du site https://christophethevenet.fr/ est la
                  Société Netlify, dont le siège social est situé au 2325 3rd
                  Street, Suite 296, San Francisco, California 94107.
                </p>
              </div>

              <div>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 3 : Accès au site
                </h3>
                <p className="text-justify">
                  Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas
                  de force majeure, interruption programmée ou non.
                </p>
              </div>

              <div>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 4 : Collecte des données
                </h3>
                <p className="text-justify">
                  Le site est exempté de déclaration à la Commission Nationale
                  Informatique et Libertés (CNIL) dans la mesure où il ne collecte
                  aucune donnée concernant les utilisateurs.
                </p>
              </div>

              <div>
                <h3 className="mono-sm mb-2" style={{ color: 'var(--accent)' }}>
                  Article 5 : Propriété intellectuelle
                </h3>
                <p className="text-justify">
                  Toute utilisation, reproduction, diffusion, commercialisation,
                  modification de toute ou partie du site sans autorisation de
                  l'Editeur est prohibée.
                </p>
              </div>
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
      )}
    </>
  )
}
