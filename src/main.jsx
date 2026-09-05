import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Polices auto-hébergées : aucun appel à fonts.googleapis.com depuis le
// navigateur du visiteur (son IP ne part pas chez Google), et le woff2 est
// découvert dès le parsing du CSS au lieu d'attendre deux connexions externes.
// Newsreader en variante « standard » : elle porte l'axe optical-size, dont
// dépend le rendu du h1 à 150 px. Pas d'italique pour Geist ni JetBrains Mono,
// aucun n'est utilisé.
import '@fontsource-variable/geist/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import '@fontsource-variable/newsreader/standard.css'
import '@fontsource-variable/newsreader/standard-italic.css'

import './index.css'
import App from './App.jsx'

// TODO: retirer après quelques jours (ajouté 2026-05-27)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((r) => r.unregister())
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
