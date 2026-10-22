import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Polices visibles dès l'arrivée : sous-ensemble latin des trois familles du
// héros, Newsreader en romain et en italique (« Thévenet »).
const HERO_FONTS = [
  /newsreader-latin-standard-(normal|italic)-/,
  /jetbrains-mono-latin-wght-normal-/,
  /geist-latin-wght-normal-/,
]

// Précharge les polices du héros depuis index.html. Importées via le CSS, elles
// ne sont découvertes qu'une fois React rendu et le texte mis en page : à la
// première visite elles arrivaient en pleine animation d'intro, et la bascule
// de police décalait les lettres en mouvement. Les noms étant hachés au build,
// on les lit dans le bundle plutôt que de les écrire en dur.
function preloadHeroFonts() {
  return {
    name: 'preload-hero-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, { bundle }) {
        return Object.keys(bundle ?? {})
          .filter((file) => HERO_FONTS.some((pattern) => pattern.test(file)))
          .map((file) => ({
            tag: 'link',
            attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${file}`, crossorigin: '' },
            injectTo: 'head',
          }))
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  // Préfixe vide : loadEnv lit les fichiers .env *et* les variables déjà
  // présentes dans process.env, ce qui récupère SITE_RECAPTCHA_KEY fournie par
  // Netlify au build. Vite n'expose au bundle que les variables préfixées
  // VITE_ ; on réinjecte donc la clé sous forme de constante plutôt que de
  // faire saisir la même valeur sous deux noms différents.
  // Seule la clé de site passe ici : elle est publique par nature (visible dans
  // le HTML de tout site utilisant reCAPTCHA). La clé secrète reste côté
  // Netlify et ne doit jamais atteindre le bundle.
  const env = loadEnv(mode, __dirname, '')

  return {
    define: {
      __RECAPTCHA_SITE_KEY__: JSON.stringify(env.SITE_RECAPTCHA_KEY ?? ''),
    },
    plugins: [react(), tailwindcss(), preloadHeroFonts()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 5175,
    },
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              { name: 'three', test: /node_modules[\\/]three[\\/]/ },
              { name: 'motion', test: /node_modules[\\/](motion|framer-motion|motion-dom|motion-utils)[\\/]/ },
              { name: 'vendor', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            ],
          },
        },
      },
    },
  }
})
