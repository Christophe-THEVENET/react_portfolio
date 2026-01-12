import { sub } from 'three/tsl'

export const services = [
  {
    id: 1,
    icon: 'MessageCircleCode',
    title1: 'Freelance',
    subtitle1: 'Renforcez vos équipes',
    price1: { 'taux journalier': '400€' },
    description1:
      "De la conception à la mise en production, j'interviens sur toutes les étapes du développement : architecture robuste, front-end React, back-end Symfony, déploiement et monitoring. Refactoring, optimisation de code, debug complexe, évolution d'applications : ma polyvalence me permet de gérer l'intégralité des enjeux techniques..",

    title2: 'Maintenance',
    subtitle2: 'Garantissez la continuité',
    price2: { 'taux horaire': '50€' },
    description2:
      'Votre site ou application nécessite une maintenance régulière ? Je gère la stabilité, la sécurité et la performance de vos applications : corrections de bugs, mises à jour, etc...',

    popup: {
      title: 'Freelance',
      subtitle: "Je m'intègre à vos sprints",
      skills: [
        'Symfony niveau sénior',
        'React niveau intermédiaire',
        'Workflow ia: Copilot + Claude',
        'Architecture Mvc, Poo',
        'Bdd Sql conçue avec Merise ou Uml',
        'Cms Wordpress et Woocommerce',
        'Maquettage, Ui/Ux (Figma, Adobexd)',
        'Déploiement continu en production',
        'Maintenance, administration de sites',
        'Refactoring, debug, mise a jour',
      ],
    },
  },
  {
    id: 2,
    icon: 'PanelsTopLeft',
    title1: 'événementiel',
    subtitle1: 'Affirmez votre présence web',
    price1: { tarif: '250€' },
    description1:
      "Vous organisez un événement? Je conçois une page d'accueil optimisée pour captiver votre audience et collecter les inscriptions.",

    title2: 'vitrine base',
    subtitle2: '',
    price2: { tarif: '350€' },
    description2:
      'Une page unique pour présenter votre activité. Idéal pour artisans, freelances ou petits commerces qui veulent une présence web simple et efficace.',

    title3: 'vitrine complet',
    subtitle3: '',
    price3: { tarif: '850€' },
    description3:
      'Un véritable site de présentation avec plusieurs pages. Pour les petites/moyennes entreprises qui veulent montrer leurs services, leurs réalisations et inspirer confiance. Au-delà de 5 pages : supplément à la page',

    popup: {
      title: 'Site vitrine',
      subtitle: 'Formule packagée',
      skills: [
        'Livré clé en main',
        'Charte graphique + logo',
        'Design avec thème premium',
        'Optimisation du référencement',
        'Adapté à tous les écrans',
        'Site sécurisé + certificat ssl',
        'Formation administration site',
        'Formulaire de contact',
        'blog, chat, calendrier (v2)',
        'Nombreuses options disponibles',
      ],
    },
  },
  {
    id: 3,
    icon: 'ShoppingCart',
    title1: 'Boutique minimaliste',
    subtitle1: 'Développez vos ventes 24/24',
    price1: { tarif: '1300€' },
    description1:
      'Commencez à vendre en ligne sans complexité. Une boutique fonctionnelle avec les essentiels : catalogue produits, panier, paiement sécurisé et gestion de commandes. Parfait pour un petit commerce ou artisan qui souhaite démarrer rapidement avec un investissement maîtrisé.',

    title2: 'Boutique en ligne pro',
    subtitle2: '',
    price2: { tarif: '2100€' },
    description2:
      "Une véritable solution de vente. Catalogue plus large, gestion avancée de l'inventaire, options clients personnalisées, analytics et outils pour booster vos ventes. Conçue pour les commerces ayant une vraie ambition de croissance en ligne avec un potentiel d'évolution.",

    popup: {
      title: 'Site e-commerce',
      subtitle: 'Formule packagée',
      skills: [
        'Livré clé en main',
        'Charte graphique + logo',
        'Design avec thème premium',
        'Optimisation du référencement',
        'Adapté à tous les écrans',
        'Pages boutique avec fiches produits',
        'Gestion commandes/stock/clients',
        'Paiements sécurisé + certificat ssl',
        'Formation administration site',
        'Nombreuses options disponibles',
      ],
    },
  },
  {
    id: 4,
    icon: 'LayoutPanelLeft',
    title1: 'Appli simple',
    subtitle1: 'Automatisez vos processus',
    price1: { tarif: 'sur devis' },
    description1:
      "Vous avez un besoin métier spécifique ? Une appli de base c'est une solution épurée qui répond à ce besoin sans surcharge: authentification, 2 modules fonctionnels, bdd. ex: forum, gestionnaire de livres. planning d'événements.",

    title2: 'Appli complexe',
    subtitle2: '',
    price2: { tarif: 'sur devis' },
    description2:
      "Une vraie solution métier. Plusieurs modules interconnectés, back-office d'administration, APIs potentielles, et architecture pensée pour l'évolution. ex: plateforme communautaire avec posts, commentaires. gestionnaire de bibliothèque collaborative avec emprunts, retours. Plateforme de critique de films avec discussions et système de notation.",

    popup: {
      title: 'Application Web',
      subtitle: 'Réactive, intuitive, sécurisée.',
      skills: [
        'Architecture découplée avec api',
        'Front-end en React',
        'Back-end en Symfony',
        'Intégration de maquettes',
        'Exploitation de données',
        'Algorithmes de programmation',
        "Système d'administration adapté",
        'Optimisation du référencement',
        'Adapté à tous les écrans',
        'Site sécurisé + certificat ssl',
      ],
    },
  },
]
