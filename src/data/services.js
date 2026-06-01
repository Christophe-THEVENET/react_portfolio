export const offers = [
  {
    label: 'Freelance',
    lead: 'Renforcez vos équipes',
    tiers: [
      { name: 'Taux journalier', price: '400€' },
      { name: 'Maintenance', price: '50€/h' },
    ],
    desc: 'Je rejoins vos sprints en renfort : architecture, nouvelles fonctionnalités, refactoring, debug complexe, mise en production. Habitué aux workflows agiles, je suis opérationnel rapidement avec un setup assisté par IA.',
    included: [
      'Symfony avancé',
      'React confirmé',
      'API REST',
      'SQL',
      'Docker',
    ],
    also: [
      'conception bdd',
      'déploiement continu',
      'TypeScript',
      'Maquettage',
    ],
  },
  {
    label: 'Site vitrine',
    lead: 'Affirmez votre présence',
    tiers: [
      { name: 'One-page', price: '450€' },
      { name: 'Site complet (5 pages)', price: '950€' },
    ],
    desc: 'One-page : une page unique pour présenter votre activité. Site complet : plusieurs pages structurées (services, réalisations, équipe, contact). Dans les deux cas : design moderne, mobile-first, référencement local, formation back-office inclus.',
    included: [
      'Clé en main',
      'Design premium',
      'référencement',
      'sécurité',
      'Responsive',
    ],
    also: [
      'Livraison 2-3 sem.',
      'formulaire de contact',
      'Blog, calendrier',
      'options',
    ],
  },
  {
    label: 'E-commerce',
    lead: 'Développez vos ventes',
    tiers: [
      { name: 'Boutique essentielle', price: '1600€' },
      { name: 'Boutique pro', price: '2500€' },
    ],
    desc: "Essentielle : catalogue jusqu'a 50 produits, panier, paiement sécurisé et gestion de commandes: tout pour démarrer la vente en ligne. Pro : jusqu'a 300 produits, gestion avancée des stocks, variations de produits, coupons, analytics.",
    included: [
      'Fiches produits',
      'référencement',
      'Gestion commandes/stocks/clients',
    ],
    also: [
      'Suivi commandes',
      'Responsive',
      'options disponibles',
      'Design premium',
    ],
  },
  {
    label: 'Application full-stack',
    lead: 'Automatisez vos processus',
    tiers: [
      { name: 'Application web', price: 'sur devis' },
      { name: 'Application mobile', price: 'sur devis', placeholder: true },
    ],
    desc: 'Un besoin métier qui ne rentre dans aucune case ? Je pilote le projet de bout en bout : analyse, conception, développement et livraison. Architecture découplée, pensée pour évoluer sur le long terme avec agilité et robustesse.',
    included: [
      'Authentification',
      'Back-office perso',
      'Espace Membre',
      'temps réel',
    ],
    also: [
      'Modélisation BDD',
      'exploitation de données',
      'algorithmes',
      'sécurité',
    ],
  },
]
