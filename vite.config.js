import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 5175,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three/')) return 'three'
            if (id.includes('node_modules/motion/') || id.includes('node_modules/framer-motion/')) return 'motion'
            if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) return 'vendor'
          },
        },
      },
    },
  }
})
