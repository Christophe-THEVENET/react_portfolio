import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite
        ],
        languageOptions: {
            ecmaVersion: 2020,
            // Constante injectée au build par `define` dans vite.config.js
            globals: { ...globals.browser, __RECAPTCHA_SITE_KEY__: 'readonly' },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module'
            }
        },
        rules: {
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]|^motion$' }]
        }
    }
]);
