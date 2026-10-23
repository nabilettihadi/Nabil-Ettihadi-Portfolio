export default {
  meta: { title: "Nabil Ettihadi · Développeur Full-Stack & Consultant E-invoicing", description: "Développeur Java/Spring Boot, Angular, React et Laravel, consultant technico-fonctionnel en facturation électronique. Disponible en freelance et en CDI." },
  nav: { about: "Profil", experience: "Parcours", projects: "Projets", skills: "Compétences", contact: "Contact", hire: "Me recruter", language: "Langue", menu: "Menu", close: "Fermer" },
  hero: {
    available: "Disponible · freelance immédiatement, CDI avec un mois de préavis",
    hello: "Bonjour, je suis",
    roles: ["Développeur Full-Stack", "Consultant E-invoicing", "Intégrateur EDI", "Développeur Java & Spring"],
    pitch: "Je conçois des applications web solides de bout en bout, et j’automatise des flux de facturation électronique pour de grands comptes. Le code d’un développeur, la rigueur d’un consultant.",
    ctaContact: "Discutons de votre projet",
    ctaCv: "Télécharger mon CV",
    location: "Rabat, Maroc · ouvert au télétravail et à la relocalisation",
    stats: { projects: "projets publiés", languages: "langues parlées", tests: "tests automatisés sur HireMe" },
    scroll: "Défiler"
  },
  profile: {
    kicker: "Profil",
    title: "Trois compétences, un seul interlocuteur",
    intro: "J’ai appris le développement full-stack à YouCode (UM6P), puis je l’ai mis au service de la réforme française de la facturation électronique chez Cegedim. Résultat : je parle aussi bien aux équipes techniques qu’aux équipes métier.",
    cards: [
      { title: "Développeur Full-Stack", text: "API REST en Java/Spring Boot, interfaces Angular et React, applications Laravel. Code testé, documenté et déployé avec Docker." },
      { title: "Consultant technico-fonctionnel", text: "J’analyse les besoins, je paramètre et je fais le lien entre clients, chefs de projet et développeurs, jusqu’à la mise en production." },
      { title: "EDI & facturation électronique", text: "Chaînes de transformation XSLT, formats UBL 2.1, Factur-X et CII, conformité à la réforme française, scripts AIX/KornShell." }
    ]
  },
  experience: {
    kicker: "Parcours",
    title: "Expérience et formation",
    now: "Aujourd’hui",
    items: {
      cegedim: { role: "Consultant technico-fonctionnel", place: "Cegedim · Rabat", period: "Avril 2025 – aujourd’hui", text: "Mise en conformité de flux de facturation électronique (réforme française CTC) sur la plateforme GIS pour des clients grands comptes : chaînes XSLT, UBL, Factur-X, CII, paramétrage et suivi des incidents." },
      aix: { role: "Licence Informatique et Mathématiques", place: "Aix-Marseille Université", period: "2025 – 2027", text: "DEUG (L2) en 2025-2026, puis licence, en parallèle de mon poste." },
      youcode: { role: "Développeur Web Full-Stack", place: "YouCode Safi · UM6P", period: "2023 – 2025", text: "Formation intensive par projets : Java, Spring Boot, Angular, PHP, Laravel, méthodes agiles." },
      geerd: { role: "Développeur Full-Stack · stage", place: "GEERD · Casablanca", period: "Mai – juillet 2024", text: "Conception et développement d’une plateforme de partage de liens avec Laravel et Vue.js." },
      fac: { role: "Sciences Mathématiques et Informatique", place: "Faculté Polydisciplinaire de Safi", period: "2020 – 2023", text: "Bases solides en mathématiques, algorithmique et programmation. Certificat d’introduction à l’intelligence artificielle (MoroccoAI, 2022)." },
      bac: { role: "Baccalauréat Sciences Mathématiques B", place: "Lycée technique Alkhawarizmi · Safi", period: "2020", text: "Option français." }
    }
  },
  projects: {
    kicker: "Projets",
    title: "Des projets complets, en ligne et testés",
    filters: { all: "Tous", web: "Web", java: "Java", featured: "À la une" },
    featured: "À la une",
    demo: "Voir en ligne",
    code: "Code source",
    items: {
      hireme: "Plateforme de recrutement : salaires affichés, score de compatibilité candidat-offre expliqué, pipeline Kanban pour les recruteurs, entretiens avec fichier agenda, interface en 9 langues dont l’arabe.",
      arkade: "Boutique gaming : catalogue filtrable, configurateur de PC qui vérifie la compatibilité des pièces, panier, commande en trois étapes, suivi et devis imprimables.",
      syndicnow: "SaaS de gestion de copropriété pour cabinets de syndic : cotisations, dépenses et budget, assemblées générales, documents, abonnements Stripe.",
      recyclehub: "Application de recyclage qui relie particuliers et collecteurs agréés : demandes, suivi en temps réel et points de fidélité.",
      citronix: "Gestion d’une exploitation de citrons : fermes, champs, arbres, récoltes et ventes, avec calcul de productivité.",
      cch: "API REST de gestion de compétitions cyclistes : équipes, coureurs, étapes et classements.",
      itlens: "Gestion d’enquêtes hiérarchiques avec analyse des résultats en temps réel.",
      wrm: "Gestion de salles d’attente avec plusieurs algorithmes de file (FIFO, priorité, SJF) et statistiques.",
      ecomove: "Réservation de billets multimodaux : recherche de trajets, clients et réservations.",
      baticuisine: "Estimation des coûts de rénovation de cuisines : matériaux, main-d’œuvre et devis."
    }
  },
  skills: {
    kicker: "Compétences",
    title: "Ma boîte à outils",
    groups: { backend: "Backend", frontend: "Frontend", data: "Données", einvoicing: "EDI & e-invoicing", tools: "Outils & méthodes" },
    spoken: "Langues parlées",
    langs: { ar: "Arabe", fr: "Français", en: "Anglais", de: "Allemand" },
    levels: { native: "Langue maternelle", fluent: "Courant", learning: "En apprentissage" }
  },
  contact: {
    kicker: "Contact",
    title: "Un projet, un poste, une mission ?",
    text: "Je réponds sous 24 heures. Disponible tout de suite en freelance, avec un mois de préavis pour un CDI, en télétravail, en hybride ou sur site.",
    email: "Écrire un e-mail",
    copy: "Copier l’adresse",
    copied: "Adresse copiée !",
    call: "Appeler",
    cv: "CV",
  },
  palette: { hint: "Ctrl K", placeholder: "Aller à une section, changer de langue…", empty: "Aucun résultat", goto: "Aller à", lang: "Langue :" },
  footer: { built: "Conçu et développé par Nabil Ettihadi avec React et Vite.", top: "Haut de page" }
};
