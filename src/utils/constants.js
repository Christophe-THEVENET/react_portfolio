import {
  SiGithub,
  SiFacebook,
  SiInstagram,
} from 'react-icons/si'
import { RiTwitterXFill } from 'react-icons/ri'

export const PERSONAL_INFO = {
  name: 'Christophe THEVENET',
  title: 'Développeur Web Full-Stack',
  email: 'digitob@yahoo.com',
  location: 'Puy-de-Dôme ou distanciel',
  telephone: '06 02 87 32 51',
  address: '9 Rue des Colonnes 75002 PARIS',
  insurance: 'RC Pro HISCOX n° HSXIN320041368',
  siret: '97992656500016',
}

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: SiGithub,
    url: 'https://github.com/Christophe-THEVENET',
    color: '#ffffff',
  },
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

export const HERO_STATS = [
  { n: 5, l: "Ans d'expérience", suffix: '+' },
  { n: 30, l: 'Projets réalisés', suffix: '+' },
  { n: 3, l: 'Diplômes obtenus', suffix: '+' },
  { n: 98, l: 'Clients satisfaits', suffix: '%' },
]

export const NAV_LINKS = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'prestations', label: 'Prestations' },
  { id: 'contact', label: 'Contact' },
]
