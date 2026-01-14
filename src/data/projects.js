import imgMarcetpol from '@/assets/img/projects/marcetpol.png'
import imgSaveurdesavoie from '@/assets/img/projects/saveurdesavoie.png'
import imgMemory from '@/assets/img/projects/memory.png'
import imgLabougie from '@/assets/img/projects/img_labougie.png'
import imgSablons from '@/assets/img/projects/sablons.png'
import imgDesidome from '@/assets/img/projects/desidome.png'
import imgAlblse from '@/assets/img/projects/alblse.png'
import imgDicefighter from '@/assets/img/projects/DiceFighter.png'
import imgPortfolio from '@/assets/img/projects/portfolio_v2.jpg'
import imgCbd from '@/assets/img/projects/cbd.png'
import imgAletti from '@/assets/img/projects/aletti.jpg'
import imgGreengoodies from '@/assets/img/projects/greengoodies.jpg'
import imgCybermeteo from '@/assets/img/projects/cyber_meteo.jpg'

export const projects = [
  {
    id: 14,
    title: 'Cyber météo',
    description:
      "Application météo moderne développée avec React 19, permettant de consulter la météo en temps réel pour n'importe quelle ville dans le monde. Intégration de l'API OpenWeather pour des données précises et actualisées.",
    imageUrl: imgCybermeteo,
    category: 'Front',
    technologies: ['React.js', 'Tailwind', 'Zustand', 'Zod'],
    metrics: '',
    demoUrl: 'https://cybermeteo.netlify.app/',
    githubUrl: 'https://github.com/Christophe-THEVENET/react_meteo_live',
    ExtraUrl1: {
      title: '',
      url: '',
    },
    ExtraUrl2: '',
    demoName: "Voir l'application",
  },
  {
    id: 13,
    title: 'Greengoodies',
    description:
      'Site e-commerce en Symfony : base de données, API sécurisée, intégration Twig, panier asynchrone, commandes, authentification, validations temps réel, notifications et expérience utilisateur optimisée.',
    imageUrl: imgGreengoodies,
    category: 'Full-Stack',
    technologies: ['Javascript', 'Sass', 'Symfony', 'MySQL', 'Docker'],
    metrics: '',
    demoUrl: 'https://greengoodies.space/',
    githubUrl: 'https://github.com/Christophe-THEVENET/symfony_greengoodies',
    ExtraUrl1: {
      title: '',
      url: '',
    },
    ExtraUrl2: '',
    demoName: "Voir l'application",
  },
  {
    id: 12,
    title: 'Aletti Palace',
    description:
      'Site vitrine WordPress réalisé en distanciel. Dix pages illustrées, design premium, carte du restaurant intégrée, traduction anglaise. Atout majeur : une esthétique raffinée ambiance belle époque.',
    imageUrl: imgAletti,
    category: 'Vitrine',
    technologies: ['WordPress', 'Elementor'],
    metrics: '',
    demoUrl: 'https://hotel-aletti.fr/',
    githubUrl: '',
    ExtraUrl1: {
      title: '',
      url: '',
    },
    ExtraUrl2: '',
    demoName: 'Voir le site',
  },
  {
    id: 11,
    title: 'CBD-63',
    description:
      "Site vitrine complet de 9 pages. Blog, calendrier d'événements, géolocalisation d'une trentaine d'adresses, bibliothèque de documents, intégration de graphiques de résultats Google Sheet.",
    imageUrl: imgCbd,
    category: 'Vitrine',
    technologies: ['WordPress', 'Elementor'],
    metrics: '',
    demoUrl: 'https://cbd-63.fr/',
    githubUrl: '',
    ExtraUrl1: {
      title: '',
      url: '',
    },
    ExtraUrl2: '',
    demoName: 'Voir le site',
  },
  {
    id: 10,
    title: 'Portfolio',
    description:
      'Portfolio personnel conçu avec React 19 et Tailwind CSS v4, incarnant une approche moderne du développement front-end. Architecture componentisée, design glassmorphism, animations crée en interne et optimisations Lighthouse. ',
    imageUrl: imgPortfolio,
    category: 'Front',
    technologies: ['React.js', 'Tailwind CSS'],
    metrics: '',
    demoUrl: 'https://christophethevenet.fr/',
    githubUrl: 'https://github.com/Christophe-THEVENET/react_portfolio',
    ExtraUrl1: {
      title: '',
      url: '',
    },
    ExtraUrl2: '',
    demoName: "Voir l'application",
  },
  {
    id: 9,
    title: 'Les Saveurs De Savoie',
    description:
      'Application web pour un restaurant présenté au jury pour le titre pro. Le restaurateur peut gérer ses tarifs, plats, menus, etc, avec un back-office. Le front est en React, le back en Symfony, la réservation est asynchrone.',
    imageUrl: imgSaveurdesavoie,
    category: 'Full-Stack',
    technologies: ['React.js', 'Symfony', 'MySQL'],
    metrics: '',
    demoUrl: 'https://lessaveursdesavoie.fr.nf/',
    githubUrl:
      'https://github.com/Christophe-THEVENET/lessaveursdesavoie.fr.nf',
    ExtraUrl1: {
      title: 'Voir le Dossier projet',
      url: 'https://drive.google.com/file/d/1s4RAbAv_TTM4cB7CSWnBWciVAvxjxdN2/view',
    },
    ExtraUrl2: '',
    demoName: "Voir l'application",
  },
  {
    id: 8,
    title: 'DiceFighter',
    description:
      "J'ai développé ce mini-jeu dans le cadre d'une évaluation JavaScript POO. J'ai récemment effectué un refactoring pour intégrer Vite, Docker, Sass, et, les modules js.",
    imageUrl: imgDicefighter,
    category: 'Front',
    technologies: ['Vite', 'JavaScript', 'Sass', 'Docker'],
    metrics: '',
    demoUrl: 'https://alblse.fr/',
    githubUrl: 'https://github.com/Christophe-THEVENET/eval_javascript_studi',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir le jeu',
  },
  {
    id: 7,
    title: 'ALBLSE',
    description:
      'Site vitrine complet avec inscription sécurisée, blog, formulaire de contact. Espace réservé aux licenciés du club proposant un chat, de la publication depuis le front en fonction des rôles.',
    imageUrl: imgAlblse,
    category: 'Vitrine',
    technologies: ['WordPress'],
    metrics: '',
    demoUrl: 'https://alblse.fr/',
    githubUrl: '',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir le site',
  },
  {
    id: 6,
    title: 'Désidôme',
    description:
      "Site e-commerce complet avec option login popup, 2 sliders animés, personnalisation de l'espace membre, mégamenu, suivi de stocks amélioré, paiement sécurisé, variation de produits.",
    imageUrl: imgDesidome,
    category: 'E-Commerce',
    technologies: ['WordPress', 'WooCommerce'],
    metrics: '',
    demoUrl: 'https://desidome.fr/',
    githubUrl: '',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir la boutique',
  },
  {
    id: 5,
    title: 'Auto école des Sablons',
    description:
      'Site vitrine complet de 4 pages avec thème moderne réalisé sous Wordpress avec une sécurisation complète et 2 formulaires.',
    imageUrl: imgSablons,
    category: 'Vitrine',
    technologies: ['WordPress'],
    metrics: '',
    demoUrl: 'https://www.autoecole-demo.fr.nf/',
    githubUrl: '',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir le site',
  },
  {
    id: 4,
    title: 'La Bougie',
    description:
      "Site e-commerce de base avec woocommerce. Option page de connexion et d'enregistrement entièrement personnalisée, blog avec commentaires, ajout de son avatar à la création de compte.",
    imageUrl: imgLabougie,
    category: 'E-Commerce',
    technologies: ['WordPress', 'WooCommerce'],
    metrics: '',
    demoUrl: 'https://www.labougie.top/',
    githubUrl: '',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir la boutique',
  },
  {
    id: 3,
    title: 'Avengers Memory',
    description:
      "J'ai fait ce jeu en autodidacte car le memory est un incontournable dans la compréhension de javascript. J'ai utilisé la librairie Animate.css pour les animations",
    imageUrl: imgMemory,
    category: 'Front',
    technologies: ['Javascript', 'HTML', 'Sass'],
    metrics: '',
    demoUrl: 'https://avengers-memory.netlify.app/',
    githubUrl: 'https://github.com/Christophe-THEVENET/avengers-memory',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir le jeu',
  },
  {
    id: 2,
    title: 'Les Saveurs de Savoie',
    description:
      "Maquette version desktop d'une application web réalisée avec figma. Objectif : Créer une maquette fonctionnelle et attractive pour un site de vente en ligne de produits locaux savoyards.",
    imageUrl: imgSaveurdesavoie,
    category: 'Maquette',
    technologies: ['Figma'],
    metrics: '',
    demoUrl:
      'https://www.figma.com/proto/LX0O4tKBPXTJqNmcH7Lj1H/Les-Saveurs-De-Savoie?type=design&node-id=190-2635&t=MtkVick3Yp1Tcasw-1&scaling=scale-down&page-id=190%3A1018&starting-point-node-id=190%3A2635',
    githubUrl: '',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir la maquette',
  },
  {
    id: 1,
    title: 'Marc & Pol',
    description:
      "Cette évaluation 'entraînement a été faite dans le cadre d'une formation chez Studi. Objectif : maîtriser Figma et AdobeXd.",
    imageUrl: imgMarcetpol,
    category: 'Maquette',
    technologies: ['Figma'],
    metrics: '',
    demoUrl:
      'https://www.figma.com/proto/lZtWsTW3kZ66Gux7pa4ku7/MARK-POL?node-id=92-2695&scaling=min-zoom&page-id=92%3A2694',
    githubUrl: '',
    ExtraUrl1: '',
    ExtraUrl2: '',
    demoName: 'Voir la maquette',
  },
]

export const categories = [
  'All',
  'Front',
  'Full-Stack',
  'Vitrine',
  'E-Commerce',
  'Maquette',
]
