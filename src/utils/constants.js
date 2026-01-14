import {
  SiGithub,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
} from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'


export const PERSONAL_INFO = {
  name: 'Christophe THEVENET',
  title: 'Développeur Web Full-Stack',
  email: 'digitob@yahoo.com',
  location: 'Puy-de-Dôme ou distanciel',
  tagline: 'Your Tagline',
  bio: [
    "Développeur Full-Stack avec 5 ans d'expérience, je conçois des applications web robustes en Symfony et React pour équipes techniques, et accompagne artisans, commerçants et associations dans leur digitalisation via WordPress et WooCommerce.",
    "De l'architecture à la mise en production, je maîtrise l'ensemble de la chaîne : API REST sécurisées, interfaces réactives, back-offices sur mesure et déploiement Docker. Assisté par l'intelligence artificielle pour optimiser ma productivité, je livre des solutions de qualité professionnelle avec une vélocité accrue.",
    "Projets livrés et maintenus : réservations asynchrones, paniers dynamiques, validation temps réel, calendrier d'évènements, bibliothèque de documents, gestion stocks/commandes, espaces membres avec chat.",
    "Issu d'une famille d'artisans, j'applique cette philosophie au code : fabrication minutieuse, solutions durables, attention aux détails. Prêt à relever des défis techniques ambitieux.",
  ],
}

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: SiGithub,
    url: 'https://github.com/Christophe-THEVENET',
    color: '#ffffff',
  },
 /*  {
    name: 'LinkedIn',
    icon: SiLinkedin,
    url: 'https://linkedin.com/',
    color: '#0A66C2',
  }, */
  {
    name: 'Facebook',
    icon: SiFacebook,
    url: 'https://www.facebook.com/people/Digi-Tob/pfbid0ZQsqKBP3Cu3Q4KWRfD9FBgopg1MPxX7T6Hw1PY7WMmCYBwuFA8JwsKFve3YRFJ4cl/?locale=fr_FR',
    color: '#1877F2',
  },
  {
    name: 'X',
    icon: RiTwitterXFill,
    url: 'https://x.com/D_I_G_I_T_O_B',
    color: '#ffffff',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    url: 'https://www.instagram.com/digi_tob/',
    color: '#E4405F',
  },
]

export const STATS = [
  { label: "Ans d'expérience", value: '5+' },
  { label: 'Projets réalisés', value: '30+' },
  { label: 'Diplômes obtenus', value: '3+' },
  { label: 'Clients satisfaits', value: '98%' },
]

export const ABOUT_STATS = [
  { label: 'De la conception à la livraison', value: 'App Full-Stack' },
  { label: 'Donnez de la visibilité à votre activité', value: 'Site vitrine' },
  { label: 'Vendez vos produits sur internet', value: 'E-commerce' },
]

export const NAV_LINKS = [
  { id: 'about', label: 'A propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'services', label: 'Prestations' },
  { id: 'projects', label: 'Réalisations' },
  /* { id: 'contact', label: 'Contact'}, */
]
