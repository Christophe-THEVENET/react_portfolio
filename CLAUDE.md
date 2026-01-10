# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Architecture

Single-page React 19 portfolio with section-based layout. French language content.

**Tech stack:** Vite (rolldown-vite), TailwindCSS v4, Three.js (particle background), Lucide/React Icons

**Key directories:**
- `src/components/sections/` - Page sections: Hero, About, Services, Projects, Contact
- `src/components/layout/` - Navbar, Footer
- `src/components/backgrounds/` - ParticleField (Three.js), RadialGradientBackground
- `src/components/animations/` - FadeIn, ScrollReveal
- `src/data/` - Static data arrays (projects.js, services.js, skills.js)
- `src/utils/constants.js` - Site-wide constants (PERSONAL_INFO, STATS, NAV_LINKS)

**Import alias:** `@` maps to `src/` (configured in vite.config.js)

## Styling

TailwindCSS v4 with custom theme defined in `src/index.css` using `@theme` directive:
- Custom colors: `--color-green` (#2F8E8E), `--color-green-light` (#47b3b1)
- Font: Urbanist
- Custom animations: `animate-spin-slow`, `animate-ping-slow`, `rotating-border`

## Code Style

- No semicolons, single quotes (Prettier)
- Tailwind classes auto-sorted via prettier-plugin-tailwindcss
- Named exports for section components, default exports elsewhere
