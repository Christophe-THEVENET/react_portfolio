import { useState } from 'react'

/*
 * Opposition à la mesure de fréquentation (Umami), depuis les mentions légales.
 *
 * Le script d'Umami relit `localStorage['umami.disabled']` à CHAQUE envoi et se tait dès
 * que la clé existe : la poser ou la retirer suffit, sans cookie et sans rechargement.
 *
 * Proposer ce refus est l'une des conditions pour que la mesure soit dispensée de
 * consentement (CNIL), avec le respect du réglage « Ne pas me suivre » (index.html).
 */
const STORAGE_KEY = 'umami.disabled'

// null : stockage local inaccessible (navigation privée stricte, réglage du navigateur)
const readOptOut = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null
  } catch {
    return null
  }
}

const statusText = (optedOut) => {
  if (optedOut === null) {
    return 'Votre navigateur refuse le stockage local : ce choix ne peut pas être mémorisé ici.'
  }

  return optedOut
    ? 'La mesure est désactivée sur cet appareil.'
    : 'La mesure est active sur cet appareil.'
}

export default function AnalyticsOptOut() {
  const [optedOut, setOptedOut] = useState(readOptOut)

  const toggle = () => {
    try {
      if (optedOut) {
        localStorage.removeItem(STORAGE_KEY)
      } else {
        localStorage.setItem(STORAGE_KEY, '1')
      }
    } catch {
      // Stockage refusé : la relecture ci-dessous l'affiche au lieu de promettre un refus impossible
    }
    setOptedOut(readOptOut())
  }

  return (
    <div className="mt-3 space-y-2">
      <button
        type="button"
        onClick={toggle}
        disabled={optedOut === null}
        className="mono-sm cursor-pointer px-4 py-2 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"
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
        {optedOut
          ? 'Recommencer à compter mes visites'
          : 'Ne plus compter mes visites sur cet appareil'}
      </button>
      <p role="status" className="mono-sm" style={{ color: 'var(--faint)' }}>
        {statusText(optedOut)}
      </p>
    </div>
  )
}
