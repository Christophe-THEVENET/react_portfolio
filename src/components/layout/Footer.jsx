import { useState } from 'react'
import { Scale } from 'lucide-react'

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-center sm:gap-4">
          <span className="text-white/80">
            Christophe THEVENET - Développeur Web
          </span>
          <span className="hidden text-white/40 sm:inline">•</span>
          <span className="text-white/60">© {currentYear}</span>
          <span className="hidden text-white/40 sm:inline">•</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-primary hover:text-primary/80 cursor-pointer transition-colors"
          >
            Mentions légales
          </button>
        </div>
      </footer>

      {/* Modal Mentions légales */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all ${
          isModalOpen
            ? 'visible bg-black/80 opacity-100 duration-500'
            : 'pointer-events-none invisible bg-black/0 opacity-0 duration-300'
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className={`relative flex max-h-[80vh] w-full max-w-3xl flex-col rounded-2xl border border-white/10 bg-zinc-900/98 p-6 transition-all sm:p-8 ${
            isModalOpen
              ? 'translate-y-0 scale-100 opacity-100 duration-700'
              : 'translate-y-8 scale-95 opacity-0 duration-300'
          }`}
          style={{
            transitionTimingFunction: isModalOpen
              ? 'cubic-bezier(0.2, 1.35, 0.82, 0.92)'
              : 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
            <Scale className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-semibold text-white uppercase">
              Mentions légales
            </h2>
          </div>

          {/* Badge date */}
          <div className="mb-6 flex w-full justify-center rounded-lg bg-white/5 px-4 py-2.5">
            <span className="text-sm font-medium tracking-wider text-white/70 uppercase">
              En vigueur au 14/01/2025
            </span>
          </div>

          {/* Contenu scrollable */}
          <div className="relative flex-1 space-y-6 overflow-y-auto pr-2 text-white/80">
            <p className="text-justify text-sm leading-relaxed">
              Conformément aux dispositions des Articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie
              numérique, dite L.C.E.N., il est porté à la connaissance des
              Utilisateurs du site https://christophethevenet.fr/ les présentes
              mentions légales. La connexion et la navigation sur le site par
              l'Utilisateur implique acceptation intégrale et sans réserve des
              présentes mentions légales. Ces dernières sont accessibles sur le
              site à la rubrique « Mentions légales ».
            </p>

            <div>
              <h3 className="text-primary mb-2 text-sm font-semibold uppercase">
                Article 1 : L'éditeur
              </h3>
              <p className="text-justify text-sm leading-relaxed">
                L'édition et la direction de la publication du site
                https://christophethevenet.fr/ est assurée par Christophe
                THEVENET, dont l'adresse email est : christophethevenet@yahoo.fr
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-2 text-sm font-semibold uppercase">
                Article 2 : L'hébergeur
              </h3>
              <p className="text-justify text-sm leading-relaxed">
                L'hébergeur du site https://christophethevenet.fr/ est la
                Société Netlify, dont le siège social est situé au 2325 3rd
                Street, Suite 296, San Francisco, California 94107.
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-2 text-sm font-semibold uppercase">
                Article 3 : Accès au site
              </h3>
              <p className="text-justify text-sm leading-relaxed">
                Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas
                de force majeure, interruption programmée ou non et pouvant
                découlant d'une nécessité de maintenance. En cas de
                modification, interruption ou suspension des services le site
                https://christophethevenet.fr/ ne saurait être tenu responsable.
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-2 text-sm font-semibold uppercase">
                Article 4 : Collecte des données
              </h3>
              <p className="text-justify text-sm leading-relaxed">
                Le site est exempté de déclaration à la Commission Nationale
                Informatique et Libertés (CNIL) dans la mesure où il ne collecte
                aucune donnée concernant les utilisateurs.
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-2 text-sm font-semibold uppercase">
                Article 5 : Cookies
              </h3>
              <p className="text-justify text-sm leading-relaxed">
                L'Utilisateur est informé que lors de ses visites sur le site,
                un cookie peut s'installer automatiquement sur son logiciel de
                navigation. En naviguant sur le site, il les accepte. Un cookie
                est un élément qui ne permet pas d'identifier l'Utilisateur mais
                sert à enregistrer des informations relatives à la navigation de
                celui-ci sur le site Internet. L'Utilisateur pourra désactiver
                ce cookie par l'intermédiaire des paramètres figurant au sein de
                son logiciel de navigation.
              </p>
            </div>

            <div>
              <h3 className="text-primary mb-2 text-sm font-semibold uppercase">
                Article 6 : Propriété intellectuelle
              </h3>
              <p className="text-justify text-sm leading-relaxed">
                Toute utilisation, reproduction, diffusion, commercialisation,
                modification de toute ou partie du site
                https://christophethevenet.fr/, sans autorisation de l'Editeur
                est prohibée et pourra entraînée des actions et poursuites
                judiciaires telles que notamment prévues par le Code de la
                propriété intellectuelle et le Code civil.
              </p>
            </div>
          </div>

          {/* Bouton fermer */}
          <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="shrink-0 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
