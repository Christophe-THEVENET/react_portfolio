# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project installs with **pnpm**. Netlify builds it with `pnpm install --frozen-lockfile`,
so `pnpm-lock.yaml` is the lockfile that decides whether a deploy succeeds. Adding a
dependency with `npm i` updates nothing pnpm reads and fails the build with
`ERR_PNPM_OUTDATED_LOCKFILE` — the deploy is skipped and production silently stays on the
previous build.

```bash
pnpm install     # Install dependencies
pnpm add <pkg>   # Add a dependency (never npm i)
pnpm dev         # Start Vite dev server with HMR
pnpm build       # Production build
pnpm lint        # ESLint check
pnpm preview     # Preview production build
```

## Architecture

Single-page React 19 portfolio with section-based layout. French language content.

**Tech stack:** Vite (rolldown-vite), TailwindCSS v4, Three.js (particle background),
Motion (animations), Lucide/React Icons

**Key directories:**
- `src/components/sections/` - Page sections: Home, About, Skills, Projects, Services, Contact
- `src/components/layout/` - Navbar, Footer
- `src/components/backgrounds/` - ParticleField (Three.js)
- `src/components/animations/` - Reveal, TextReveal, AnimatedNumber, CursorGlow, GlowCard
- `src/components/ui/` - SectionTag, SocialLink
- `src/hooks/` - useInView (IntersectionObserver), useMagnetic
- `src/data/` - Static data arrays (projects.js, services.js, skills.js, diplomes.js)
- `src/utils/constants.js` - Site-wide constants (PERSONAL_INFO, SOCIAL_LINKS, HERO_STATS, NAV_LINKS)

**Import alias:** `@` maps to `src/` (configured in vite.config.js)

**Deployment:** Netlify. Security headers and the CSP live in `public/_headers`; the
contact form is declared to Netlify by the inert static form in `index.html`.

## Styling

TailwindCSS v4 with custom theme defined in `src/index.css` using `@theme` directive:
- Custom colors: `--color-green` (#2F8E8E), `--color-primary` (#47b3b1)
- Fonts: Geist (display), Newsreader (serif), JetBrains Mono (`.mono`), self-hosted via
  `@fontsource-variable` and imported in `src/main.jsx` — no call to Google Fonts
- `.mono` carries a metrics-matched fallback (`size-adjust`) so the right-anchored navbar
  does not shift while the webfont loads
- Custom animations: `animate-spin-slow`, `animate-ping-slow`, `rotating-border`
- Reveal effects: `.ed-reveal` (opacity + translateY), `.ed-fade` (opacity only, for
  fixed elements), `.ed-line-draw`

## Code Style

- No semicolons, single quotes (Prettier)
- Tailwind classes auto-sorted via prettier-plugin-tailwindcss
- Named exports for section components, default exports elsewhere
- Code comments in French
