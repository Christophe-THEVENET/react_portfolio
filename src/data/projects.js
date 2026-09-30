import imgQuoiplanter from '@/assets/img/projects/quoiplanter.webp'
import imgBoulio from '@/assets/img/projects/boulio.webp'
import imgGreengoodies from '@/assets/img/projects/greengoodies.webp'
import imgAletti from '@/assets/img/projects/aletti.webp'
import imgCbd from '@/assets/img/projects/cbd.webp'
import imgSaveurdesavoie from '@/assets/img/projects/saveurdesavoie.webp'
import imgDicefighter from '@/assets/img/projects/DiceFighter.webp'
import imgAlblse from '@/assets/img/projects/alblse.webp'
import imgDesidome from '@/assets/img/projects/desidome.webp'
import imgSablons from '@/assets/img/projects/sablons.webp'
import imgLabougie from '@/assets/img/projects/img_labougie.webp'
import imgMemory from '@/assets/img/projects/memory.webp'


export const featured = [
  {
    n: '01',
    name: 'Quoi Planter',
    kind: 'Application web potager',
    desc: "Assistant de jardinage qui analyse le climat, la date, la lune et la météo en direct pour proposer les cultures à planter et à semer selon la région. L'espace « Mon potager » veille ensuite sur les cultures : conseil du jour, arrosage, alertes météo et recommandations par IA.",
    stack: ['Symfony', 'Asset Mapper', 'Stimulus', 'Symfony UX', 'PostgreSQL'],
    url: 'https://quoiplanter.fr',
    github: 'https://github.com/Christophe-THEVENET/quoi-planter-showcase',
    linkLabel: "Voir l'application",
    year: '2026',
    img: imgQuoiplanter,
  },
  {
    n: '02',
    name: 'Boulio',
    kind: 'Plateforme full-stack',
    desc: 'Plateforme communautaire dédiée à la pétanque : réseau social, blog contributeurs, forum thématique, chat live, messagerie privée et intégration lives YouTube.',
    stack: ['React', 'Symfony', 'TanStack', 'Mercure', 'PostgreSQL'],
    url: 'https://boulio.com',
    github: 'https://github.com/Christophe-THEVENET/boulio-showcase',
    linkLabel: "Voir l'application",
    year: '2026',
    img: imgBoulio,
  },
  {
    n: '03',
    name: 'Greengoodies',
    kind: 'E-commerce Symfony',
    desc: 'Site e-commerce en Symfony : base de données, API sécurisée, intégration Twig, panier asynchrone, commandes, authentification, validations temps réel, notifications et expérience utilisateur optimisée.',
    stack: ['Symfony', 'Sass', 'MySQL', 'Asset Mapper', 'Stimulus'],
    url: 'https://greengoodies.eu/',
    github: 'https://github.com/Christophe-THEVENET/symfony_greengoodies',
    linkLabel: 'Voir la boutique',
    year: '2025',
    img: imgGreengoodies,
  },
  {
    n: '04',
    name: 'Aletti Palace',
    kind: 'Site vitrine premium',
    desc: 'Site vitrine WordPress réalisé en distanciel. Dix pages illustrées, design premium, carte du restaurant intégrée, traduction anglaise. Atout majeur : une esthétique raffinée ambiance belle époque.',
    stack: ['WordPress', 'Elementor', 'Thème premium'],
    url: 'https://hotel-aletti.fr/',
    linkLabel: 'Voir le site',
    year: '2025',
    img: imgAletti,
  },
]

export const index = [
  { name: 'CBD-63', kind: 'Vitrine', stack: ['WordPress', 'Elementor', 'Calendar'], year: '2025', img: imgCbd, desc: "Site vitrine complet de 9 pages. Calendrier d'événements, géolocalisation d'une trentaine d'adresses, bibliothèque de documents, intégration de graphiques de résultats Google Sheet.", url: 'https://cbd-63.fr/', github: '', extra: null },
  { name: 'Saveurs de Savoie', kind: 'App full-stack', stack: ['React', 'Symfony', 'MySQL'], year: '2023', img: imgSaveurdesavoie, desc: "Application web pour un restaurant présenté au jury pour le titre pro. Le restaurateur peut gérer ses tarifs, plats, menus, etc, avec un back-office. Le front est en React, le back en Symfony, la réservation est asynchrone.", url: 'https://lessaveursdesavoie.fr.nf/', github: 'https://github.com/Christophe-THEVENET/lessaveursdesavoie.fr.nf', extra: { title: 'Soutenance', url: 'https://drive.google.com/file/d/1s4RAbAv_TTM4cB7CSWnBWciVAvxjxdN2/view' } },
  { name: 'DiceFighter', kind: 'Mini-jeu POO', stack: ['Vite', 'JavaScript', 'Sass'], year: '2022', img: imgDicefighter, desc: "J'ai développé ce mini-jeu dans le cadre d'une évaluation JavaScript POO. J'ai récemment effectué un refactoring pour intégrer Vite, Docker, Sass, et, les modules js.", url: 'https://dicefighter.netlify.app/', github: 'https://github.com/Christophe-THEVENET/eval_javascript_studi', extra: null },
   { name: 'Avengers Memory', kind: 'Jeu front', stack: ['JavaScript', 'Sass'], year: '2021', img: imgMemory, desc: "Jeu Memory développé en autodidacte pour la maîtrise de JavaScript. Animations avec Animate.css.", url: 'https://avengers-memory.netlify.app/', github: 'https://github.com/Christophe-THEVENET/avengers-memory', extra: null },
  { name: 'ALBLSE', kind: 'Vitrine', stack: ['WordPress', 'Elementor'], year: '2024', img: imgAlblse, desc: "Site vitrine complet avec inscription sécurisée, blog, formulaire de contact. Espace réservé aux licenciés du club proposant un chat, de la publication depuis le front en fonction des rôles.", url: 'https://alblse.fr/', github: '', extra: null },
  { name: 'Désidôme', kind: 'E-commerce', stack: ['WordPress', 'WooCommerce', 'Elementor'], year: '2023', img: imgDesidome, desc: "Site e-commerce complet avec option login popup, 2 sliders animés, personnalisation de l'espace membre, mégamenu, suivi de stocks amélioré, paiement sécurisé, variation de produits.", url: 'https://desidome.fr/', github: '', extra: null },
  { name: 'Auto école des Sablons', kind: 'Vitrine', stack: ['WordPress', 'Elementor'], year: '2023', img: imgSablons, desc: "Site vitrine de 4 pages avec thème moderne, sécurisation complète et formulaires.", url: 'https://www.autoecole-demo.fr.nf/', github: '', extra: null },
  { name: 'La Bougie', kind: 'E-commerce', stack: ['WooCommerce', 'Elementor'], year: '2022', img: imgLabougie, desc: "E-commerce WooCommerce avec page de connexion personnalisée, blog avec commentaires et avatar custom.", url: 'https://www.labougie.top/', github: '', extra: null },
 ]
