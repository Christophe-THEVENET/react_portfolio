# Portfolio - Christophe THEVENET

Portfolio personnel de developpeur web full-stack freelance.

**Demo:** [christophethevenet.fr](https://christophethevenet.fr)

## Tech Stack

- **React 19** - UI library
- **Vite** (Rolldown) - Build tool
- **TailwindCSS v4** - Styling
- **Three.js** - Particle background animation
- **Lucide React / React Icons** - Icons

## Installation

```bash
npm install
```

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## Structure

```
src/
├── components/
│   ├── sections/      # Hero, About, Skills, Services, Projects, Contact
│   ├── layout/        # Navbar, Footer
│   ├── animations/    # FadeIn
│   └── backgrounds/   # ParticleField (Three.js)
├── data/              # projects.js, services.js, skills.js
├── hooks/             # useScrollSpy
└── utils/             # constants.js
```

## Deploiement

Le site est deploye sur **Netlify** avec build automatique sur push.

```
Build command: npm run build
Publish directory: dist
```

## Auteur

**Christophe THEVENET** - Developpeur Web Full-Stack Freelance
Puy-de-Dome (63) | Distanciel France entiere

- GitHub: [@Christophe-THEVENET](https://github.com/Christophe-THEVENET)
- Twitter: [@D_I_G_I_T_O_B](https://twitter.com/D_I_G_I_T_O_B)
