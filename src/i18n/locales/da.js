export default {
  meta: { title: "Nabil Ettihadi · Full-stack-udvikler og e-fakturakonsulent", description: "Udvikler i Java/Spring Boot, Angular, React og Laravel, teknisk-funktionel konsulent inden for elektronisk fakturering. Tilgængelig som freelancer og i fast stilling." },
  nav: { about: "Profil", experience: "Forløb", projects: "Projekter", skills: "Kompetencer", contact: "Kontakt", hire: "Ansæt mig", language: "Sprog", menu: "Menu", close: "Luk" },
  hero: {
    available: "Ledig · som freelancer med det samme, fast stilling med en måneds opsigelse",
    hello: "Hej, jeg hedder",
    roles: ["Full-stack-udvikler", "E-fakturakonsulent", "EDI-integrator", "Java- og Spring-udvikler"],
    pitch: "Jeg bygger solide webapplikationer fra start til slut og automatiserer e-fakturaflows for store kunder. En udviklers kode med en konsulents grundighed.",
    ctaContact: "Lad os tale om dit projekt",
    ctaCv: "Download mit CV",
    location: "Rabat, Marokko · åben for fjernarbejde og flytning",
    stats: { projects: "offentliggjorte projekter", languages: "talte sprog", tests: "automatiske tests i HireMe" },
    scroll: "Rul"
  },
  profile: {
    kicker: "Profil",
    title: "Tre kompetencer, én kontaktperson",
    intro: "Jeg lærte full-stack-udvikling på YouCode (UM6P) og bruger det nu i den franske reform af elektronisk fakturering hos Cegedim. Derfor taler jeg både de tekniske teams og forretningens sprog.",
    cards: [
      { title: "Full-stack-udvikler", text: "REST-API’er i Java/Spring Boot, brugerflader i Angular og React, Laravel-applikationer. Testet, dokumenteret kode udrullet med Docker." },
      { title: "Teknisk-funktionel konsulent", text: "Jeg analyserer behov, konfigurerer og forbinder kunder, projektledere og udviklere helt frem til produktion." },
      { title: "EDI og e-fakturering", text: "XSLT-transformationskæder, UBL 2.1, Factur-X og CII, overholdelse af den franske reform, AIX/KornShell-scripts." }
    ]
  },
  experience: {
    kicker: "Forløb",
    title: "Erfaring og uddannelse",
    now: "Nu",
    items: {
      cegedim: { role: "Teknisk-funktionel konsulent", place: "Cegedim · Rabat", period: "April 2025 – nu", text: "Tilpasning af e-fakturaflows til den franske CTC-reform på GIS-platformen for store kunder: XSLT-kæder, UBL, Factur-X, CII, konfiguration og opfølgning på hændelser." },
      aix: { role: "Bachelor i datalogi og matematik", place: "Aix-Marseille Universitet", period: "2025 – 2027", text: "DEUG (andet år) i 2025-2026 og derefter bacheloren, sideløbende med mit job." },
      youcode: { role: "Full-stack-webudvikler", place: "YouCode Safi · UM6P", period: "2023 – 2025", text: "Intensiv projektbaseret uddannelse: Java, Spring Boot, Angular, PHP, Laravel, agile metoder." },
      geerd: { role: "Full-stack-udvikler · praktik", place: "GEERD · Casablanca", period: "Maj – juli 2024", text: "Design og udvikling af en platform til deling af links med Laravel og Vue.js." },
      fac: { role: "Matematik og datalogi", place: "Det tværfaglige fakultet i Safi", period: "2020 – 2023", text: "Solidt fundament i matematik, algoritmer og programmering. Certifikat i introduktion til kunstig intelligens (MoroccoAI, 2022)." },
      bac: { role: "Studentereksamen i matematik B", place: "Det tekniske gymnasium Alkhawarizmi · Safi", period: "2020", text: "Med fransk." }
    }
  },
  projects: {
    kicker: "Projekter",
    title: "Komplette projekter, online og testet",
    filters: { all: "Alle", web: "Web", java: "Java", featured: "Udvalgte" },
    featured: "Udvalgt",
    demo: "Se online",
    code: "Kildekode",
    items: {
      hireme: "Rekrutteringsplatform: løn altid synlig, en forklaret matchscore mellem kandidat og stilling, Kanban-pipeline til rekrutterere, samtaler med kalenderfil og en brugerflade på 9 sprog, herunder arabisk.",
      arkade: "Gamingbutik: filtrerbart katalog, pc-konfigurator der tjekker kompatibilitet, kurv, bestilling i tre trin, ordresporing og tilbud, der kan udskrives.",
      syndicnow: "SaaS til ejendomsadministratorer: fællesudgifter, budget, generalforsamlinger, dokumenter og Stripe-abonnementer.",
      recyclehub: "Genbrugsapp, der forbinder husstande med godkendte indsamlere: anmodninger, sporing i realtid og bonuspoint.",
      citronix: "Styring af en citronplantage: gårde, marker, træer, høst og salg med beregning af produktivitet.",
      cch: "REST-API til cykelløb: hold, ryttere, etaper og stillinger.",
      itlens: "Hierarkiske spørgeskemaer med analyse af resultaterne i realtid.",
      wrm: "Styring af venteværelser med flere køalgoritmer (FIFO, prioritet, SJF) og statistik.",
      ecomove: "Multimodal billetbestilling: søgning af rejser, kunder og bookinger.",
      baticuisine: "Prisoverslag for køkkenrenovering: materialer, arbejdstid og tilbud."
    }
  },
  skills: {
    kicker: "Kompetencer",
    title: "Min værktøjskasse",
    groups: { backend: "Backend", frontend: "Frontend", data: "Data", einvoicing: "EDI og e-fakturering", tools: "Værktøjer og metoder" },
    spoken: "Sprog",
    langs: { ar: "Arabisk", fr: "Fransk", en: "Engelsk", de: "Tysk" },
    levels: { native: "Modersmål", fluent: "Flydende", learning: "Lærer det" }
  },
  contact: {
    kicker: "Kontakt",
    title: "Et projekt, et job, en opgave?",
    text: "Jeg svarer inden for 24 timer. Ledig med det samme som freelancer og med en måneds opsigelse til en fast stilling, remote, hybrid eller på stedet.",
    email: "Skriv en e-mail",
    copy: "Kopiér adressen",
    copied: "Adressen er kopieret!",
    call: "Ring",
    cv: "CV",
  },
  palette: { hint: "Ctrl K", placeholder: "Gå til en sektion, skift sprog…", empty: "Ingen resultater", goto: "Gå til", lang: "Sprog:" },
  footer: { built: "Designet og udviklet af Nabil Ettihadi med React og Vite.", top: "Til toppen" }
};
