export default {
  meta: { title: "Nabil Ettihadi · Full-stack arendaja ja e-arvelduse konsultant", description: "Java/Spring Booti, Angulari, Reacti ja Laraveli arendaja, e-arvelduse tehnilis-funktsionaalne konsultant. Saadaval vabakutselisena ja püsitööks." },
  nav: { about: "Profiil", experience: "Teekond", projects: "Projektid", skills: "Oskused", contact: "Kontakt", hire: "Võta ühendust", language: "Keel", menu: "Menüü", close: "Sulge" },
  hero: {
    available: "Saadaval · vabakutselisena kohe, püsitööle ühekuise etteteatamisega",
    hello: "Tere, mina olen",
    roles: ["Full-stack arendaja", "E-arvelduse konsultant", "EDI integraator", "Java ja Springi arendaja"],
    pitch: "Loon töökindlaid veebirakendusi algusest lõpuni ja automatiseerin suurklientide e-arvete vooge. Arendaja kood, konsultandi täpsus.",
    ctaContact: "Räägime teie projektist",
    ctaCv: "Laadi alla CV",
    location: "Rabat, Maroko · avatud kaugtööle ja kolimisele",
    stats: { projects: "avaldatud projekti", languages: "räägitavat keelt", tests: "automaattesti HireMe’is" },
    scroll: "Keri"
  },
  profile: {
    kicker: "Profiil",
    title: "Kolm oskust, üks kontaktisik",
    intro: "Õppisin full-stack arendust YouCode’is (UM6P) ja kasutan seda Cegedimis Prantsuse e-arvelduse reformi heaks. Seepärast räägin nii tehniliste kui ka äritiimide keelt.",
    cards: [
      { title: "Full-stack arendaja", text: "REST API-d Java/Spring Bootiga, kasutajaliidesed Angulari ja Reactiga, Laraveli rakendused. Testitud ja dokumenteeritud kood, mis paigaldatakse Dockeriga." },
      { title: "Tehnilis-funktsionaalne konsultant", text: "Analüüsin vajadusi, seadistan ja ühendan kliente, projektijuhte ja arendajaid kuni tootmisse viimiseni." },
      { title: "EDI ja e-arveldus", text: "XSLT teisendusahelad, UBL 2.1, Factur-X ja CII vormingud, vastavus Prantsuse reformile, AIX/KornShelli skriptid." }
    ]
  },
  experience: {
    kicker: "Teekond",
    title: "Kogemus ja haridus",
    now: "Praegu",
    items: {
      cegedim: { role: "Tehnilis-funktsionaalne konsultant", place: "Cegedim · Rabat", period: "Aprill 2025 – praegu", text: "Suurklientide e-arvete voogude viimine vastavusse Prantsuse CTC reformiga GIS platvormil: XSLT ahelad, UBL, Factur-X, CII, seadistamine ja intsidentide jälgimine." },
      aix: { role: "Informaatika ja matemaatika bakalaureus", place: "Aix-Marseille’ ülikool", period: "2025 – 2027", text: "DEUG (teine aasta) 2025–2026, seejärel bakalaureuseõpe töö kõrvalt." },
      youcode: { role: "Full-stack veebiarendaja", place: "YouCode Safi · UM6P", period: "2023 – 2025", text: "Intensiivne projektipõhine õpe: Java, Spring Boot, Angular, PHP, Laravel, agiilsed meetodid." },
      geerd: { role: "Full-stack arendaja · praktika", place: "GEERD · Casablanca", period: "Mai – juuli 2024", text: "Linkide jagamise platvormi kavandamine ja arendamine Laraveli ja Vue.js-iga." },
      fac: { role: "Matemaatika ja informaatika", place: "Safi multidistsiplinaarne teaduskond", period: "2020 – 2023", text: "Tugev alus matemaatikas, algoritmides ja programmeerimises. Tehisintellekti sissejuhatuse sertifikaat (MoroccoAI, 2022)." },
      bac: { role: "Keskhariduse lõpueksam, matemaatika B", place: "Alkhawarizmi tehnikalütseum · Safi", period: "2020", text: "Prantsuse keele valik." }
    }
  },
  projects: {
    kicker: "Projektid",
    title: "Terviklikud projektid, veebis ja testitud",
    filters: { all: "Kõik", web: "Veeb", java: "Java", featured: "Esiletõstetud" },
    featured: "Esiletõstetud",
    demo: "Vaata veebis",
    code: "Lähtekood",
    items: {
      hireme: "Värbamisplatvorm: palgad alati nähtaval, selgitatud kandidaadi ja ametikoha sobivusskoor, Kanbani töövoog värbajatele, intervjuud kalendrifailiga, liides 9 keeles, sh araabia keeles.",
      arkade: "Mängupood: filtreeritav kataloog, osade ühilduvust kontrolliv arvutikonfiguraator, ostukorv, kolmesammuline tellimus, jälgimine ja prinditavad hinnapakkumised.",
      syndicnow: "SaaS korteriühistute haldajatele: maksed, kulud ja eelarve, üldkoosolekud, dokumendid, Stripe’i tellimused.",
      recyclehub: "Taaskasutusrakendus, mis ühendab kodumajapidamised volitatud kogujatega: taotlused, reaalajas jälgimine ja boonuspunktid.",
      citronix: "Sidrunifarmi haldus: farmid, põllud, puud, saagid ja müük koos tootlikkuse arvutamisega.",
      cch: "REST API jalgrattavõistlustele: meeskonnad, sõitjad, etapid ja paremusjärjestused.",
      itlens: "Hierarhiliste küsitluste haldus koos tulemuste reaalajas analüüsiga.",
      wrm: "Ootesaalide haldus mitme järjekorraalgoritmiga (FIFO, prioriteet, SJF) ja statistikaga.",
      ecomove: "Mitmeliigiliste piletite broneerimine: reiside otsing, kliendid ja broneeringud.",
      baticuisine: "Köögirenoveerimise kulude hindamine: materjalid, töö ja hinnapakkumised."
    }
  },
  skills: {
    kicker: "Oskused",
    title: "Minu tööriistakast",
    groups: { backend: "Backend", frontend: "Frontend", data: "Andmed", einvoicing: "EDI ja e-arveldus", tools: "Tööriistad ja meetodid" },
    spoken: "Keeled",
    langs: { ar: "Araabia", fr: "Prantsuse", en: "Inglise", de: "Saksa" },
    levels: { native: "Emakeel", fluent: "Vabalt", learning: "Õpin" }
  },
  contact: {
    kicker: "Kontakt",
    title: "Projekt, ametikoht, ülesanne?",
    text: "Vastan 24 tunni jooksul. Vabakutselisena kohe saadaval, püsitööle ühekuise etteteatamisega, kaugtööna, hübriidselt või kohapeal.",
    email: "Kirjuta e-kiri",
    copy: "Kopeeri aadress",
    copied: "Aadress kopeeritud!",
    call: "Helista",
    cv: "CV",
    cvLangs: { fr: "Français", en: "English", de: "Deutsch" }
  },
  palette: { hint: "Ctrl K", placeholder: "Mine jaotisesse, vaheta keelt…", empty: "Tulemusi pole", goto: "Mine:", lang: "Keel:" },
  footer: { built: "Kujundanud ja arendanud Nabil Ettihadi Reacti ja Vite’iga.", top: "Üles" }
};
