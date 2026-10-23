export default {
  meta: { title: "Nabil Ettihadi · Full-Stack Developer & E-invoicing Consultant", description: "Java/Spring Boot, Angular, React and Laravel developer, techno-functional consultant in electronic invoicing. Available for freelance and permanent roles." },
  nav: { about: "Profile", experience: "Journey", projects: "Projects", skills: "Skills", contact: "Contact", hire: "Hire me", language: "Language", menu: "Menu", close: "Close" },
  hero: {
    available: "Available · freelance right away, permanent role with one month’s notice",
    hello: "Hi, I’m",
    roles: ["Full-Stack Developer", "E-invoicing Consultant", "EDI Integrator", "Java & Spring Developer"],
    pitch: "I build solid web applications end to end, and I automate electronic invoicing flows for large enterprise clients. A developer’s code with a consultant’s rigour.",
    ctaContact: "Let’s talk about your project",
    ctaCv: "Download my CV",
    location: "Rabat, Morocco · open to remote work and relocation",
    stats: { projects: "published projects", languages: "languages spoken", tests: "automated tests on HireMe" },
    scroll: "Scroll"
  },
  profile: {
    kicker: "Profile",
    title: "Three skill sets, one single contact",
    intro: "I learned full-stack development at YouCode (UM6P), then put it to work on the French electronic invoicing reform at Cegedim. The result: I speak the language of technical teams and business teams alike.",
    cards: [
      { title: "Full-Stack Developer", text: "REST APIs in Java/Spring Boot, Angular and React interfaces, Laravel applications. Tested, documented code deployed with Docker." },
      { title: "Techno-functional Consultant", text: "I analyse needs, configure, and connect clients, project managers and developers all the way to production." },
      { title: "EDI & e-invoicing", text: "XSLT transformation chains, UBL 2.1, Factur-X and CII formats, compliance with the French reform, AIX/KornShell scripts." }
    ]
  },
  experience: {
    kicker: "Journey",
    title: "Experience and education",
    now: "Now",
    items: {
      cegedim: { role: "Techno-functional Consultant", place: "Cegedim · Rabat", period: "April 2025 – present", text: "Bringing electronic invoicing flows into compliance with the French CTC reform on the GIS platform for enterprise clients: XSLT chains, UBL, Factur-X, CII, configuration and incident follow-up." },
      aix: { role: "Bachelor in Computer Science and Mathematics", place: "Aix-Marseille University", period: "2025 – 2027", text: "DEUG (second year) in 2025-2026, then the bachelor’s degree, alongside my job." },
      youcode: { role: "Full-Stack Web Developer", place: "YouCode Safi · UM6P", period: "2023 – 2025", text: "Intensive project-based programme: Java, Spring Boot, Angular, PHP, Laravel, agile methods." },
      geerd: { role: "Full-Stack Developer · internship", place: "GEERD · Casablanca", period: "May – July 2024", text: "Designed and built a link-sharing platform with Laravel and Vue.js." },
      fac: { role: "Mathematical Sciences and Computer Science", place: "Polydisciplinary Faculty of Safi", period: "2020 – 2023", text: "Strong foundations in mathematics, algorithms and programming. Introduction to Artificial Intelligence certificate (MoroccoAI, 2022)." },
      bac: { role: "Baccalaureate in Mathematical Sciences B", place: "Alkhawarizmi Technical High School · Safi", period: "2020", text: "French option." }
    }
  },
  projects: {
    kicker: "Projects",
    title: "Complete projects, online and tested",
    filters: { all: "All", web: "Web", java: "Java", featured: "Featured" },
    featured: "Featured",
    demo: "View live",
    code: "Source code",
    items: {
      hireme: "Recruitment platform: salaries always shown, an explained candidate-job match score, a Kanban pipeline for recruiters, interviews with calendar files, an interface in 9 languages including Arabic.",
      arkade: "Gaming store: filterable catalogue, a PC builder that checks parts compatibility, cart, three-step checkout, order tracking and printable quotes.",
      syndicnow: "Property management SaaS for building managers: owner contributions, expenses and budget, general meetings, documents, Stripe subscriptions.",
      recyclehub: "Recycling app connecting households with certified collectors: requests, real-time tracking and loyalty points.",
      citronix: "Management of a lemon farm: farms, fields, trees, harvests and sales, with productivity calculation.",
      cch: "REST API for cycling competitions: teams, riders, stages and rankings.",
      itlens: "Hierarchical survey management with real-time results analysis.",
      wrm: "Waiting room management with several queueing algorithms (FIFO, priority, SJF) and statistics.",
      ecomove: "Multimodal ticket booking: journey search, customers and bookings.",
      baticuisine: "Cost estimation for kitchen renovations: materials, labour and quotes."
    }
  },
  skills: {
    kicker: "Skills",
    title: "My toolbox",
    groups: { backend: "Backend", frontend: "Frontend", data: "Data", einvoicing: "EDI & e-invoicing", tools: "Tools & methods" },
    spoken: "Languages spoken",
    langs: { ar: "Arabic", fr: "French", en: "English", de: "German" },
    levels: { native: "Native", fluent: "Fluent", learning: "Learning" }
  },
  contact: {
    kicker: "Contact",
    title: "A project, a job, a mission?",
    text: "I reply within 24 hours. Available right away as a freelancer, with one month’s notice for a permanent role, remote, hybrid or on site.",
    email: "Send an email",
    copy: "Copy address",
    copied: "Address copied!",
    call: "Call",
    cv: "CV",
    cvLangs: { fr: "Français", en: "English", de: "Deutsch" }
  },
  palette: { hint: "Ctrl K", placeholder: "Jump to a section, change language…", empty: "No results", goto: "Go to", lang: "Language:" },
  footer: { built: "Designed and built by Nabil Ettihadi with React and Vite.", top: "Back to top" }
};
