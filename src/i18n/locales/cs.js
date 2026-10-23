export default {
  meta: { title: "Nabil Ettihadi · Full-stack vývojář a konzultant pro e-fakturaci", description: "Vývojář Java/Spring Boot, Angular, React a Laravel, technicko-funkční konzultant pro elektronickou fakturaci. K dispozici jako freelancer i na plný úvazek." },
  nav: { about: "Profil", experience: "Kariéra", projects: "Projekty", skills: "Dovednosti", contact: "Kontakt", hire: "Najměte mě", language: "Jazyk", menu: "Menu", close: "Zavřít" },
  hero: {
    available: "K dispozici · jako freelancer ihned, na plný úvazek s měsíční výpovědní lhůtou",
    hello: "Dobrý den, jsem",
    roles: ["Full-stack vývojář", "Konzultant pro e-fakturaci", "EDI integrátor", "Vývojář Java a Spring"],
    pitch: "Vyvíjím spolehlivé webové aplikace od začátku do konce a automatizuji toky elektronické fakturace pro velké klienty. Kód vývojáře, pečlivost konzultanta.",
    ctaContact: "Pojďme probrat váš projekt",
    ctaCv: "Stáhnout životopis",
    location: "Rabat, Maroko · otevřený práci na dálku i přestěhování",
    stats: { projects: "zveřejněných projektů", languages: "jazyky, kterými mluvím", tests: "automatických testů v HireMe" },
    scroll: "Posunout"
  },
  profile: {
    kicker: "Profil",
    title: "Tři odbornosti, jeden kontakt",
    intro: "Full-stack vývoj jsem se naučil na YouCode (UM6P) a ve společnosti Cegedim ho využívám pro francouzskou reformu elektronické fakturace. Proto rozumím technickým i byznysovým týmům.",
    cards: [
      { title: "Full-stack vývojář", text: "REST API v Javě/Spring Boot, rozhraní v Angularu a Reactu, aplikace v Laravelu. Otestovaný, zdokumentovaný kód nasazený pomocí Dockeru." },
      { title: "Technicko-funkční konzultant", text: "Analyzuji potřeby, konfiguruji a propojuji klienty, projektové manažery a vývojáře až do nasazení." },
      { title: "EDI a e-fakturace", text: "Transformační řetězce XSLT, formáty UBL 2.1, Factur-X a CII, soulad s francouzskou reformou, skripty AIX/KornShell." }
    ]
  },
  experience: {
    kicker: "Kariéra",
    title: "Praxe a vzdělání",
    now: "Současnost",
    items: {
      cegedim: { role: "Technicko-funkční konzultant", place: "Cegedim · Rabat", period: "Duben 2025 – současnost", text: "Přizpůsobení toků elektronické fakturace francouzské reformě CTC na platformě GIS pro velké klienty: řetězce XSLT, UBL, Factur-X, CII, konfigurace a řešení incidentů." },
      aix: { role: "Bakalář informatiky a matematiky", place: "Univerzita Aix-Marseille", period: "2025 – 2027", text: "DEUG (druhý ročník) v letech 2025–2026, poté bakalářské studium při zaměstnání." },
      youcode: { role: "Full-stack webový vývojář", place: "YouCode Safi · UM6P", period: "2023 – 2025", text: "Intenzivní projektové studium: Java, Spring Boot, Angular, PHP, Laravel, agilní metody." },
      geerd: { role: "Full-stack vývojář · stáž", place: "GEERD · Casablanca", period: "Květen – červenec 2024", text: "Návrh a vývoj platformy pro sdílení odkazů s Laravelem a Vue.js." },
      fac: { role: "Matematika a informatika", place: "Multidisciplinární fakulta v Safi", period: "2020 – 2023", text: "Pevné základy matematiky, algoritmů a programování. Certifikát Úvod do umělé inteligence (MoroccoAI, 2022)." },
      bac: { role: "Maturita z matematických věd B", place: "Technické lyceum Alkhawarizmi · Safi", period: "2020", text: "Francouzská varianta." }
    }
  },
  projects: {
    kicker: "Projekty",
    title: "Kompletní projekty, online a otestované",
    filters: { all: "Vše", web: "Web", java: "Java", featured: "Vybrané" },
    featured: "Vybraný",
    demo: "Zobrazit online",
    code: "Zdrojový kód",
    items: {
      hireme: "Náborová platforma: mzdy vždy viditelné, vysvětlené skóre shody kandidáta s nabídkou, Kanban pro náboráře, pohovory se souborem do kalendáře, rozhraní v 9 jazycích včetně arabštiny.",
      arkade: "Herní obchod: filtrovatelný katalog, konfigurátor PC s kontrolou kompatibility dílů, košík, objednávka ve třech krocích, sledování a tisknutelné nabídky.",
      syndicnow: "SaaS pro správce bytových domů: příspěvky, výdaje a rozpočet, shromáždění vlastníků, dokumenty, předplatné přes Stripe.",
      recyclehub: "Aplikace pro recyklaci propojující domácnosti s autorizovanými sběrači: požadavky, sledování v reálném čase a věrnostní body.",
      citronix: "Správa citronové farmy: farmy, pole, stromy, sklizně a prodej s výpočtem produktivity.",
      cch: "REST API pro cyklistické závody: týmy, jezdci, etapy a pořadí.",
      itlens: "Správa hierarchických průzkumů s analýzou výsledků v reálném čase.",
      wrm: "Správa čekáren s několika algoritmy front (FIFO, priorita, SJF) a statistikami.",
      ecomove: "Rezervace multimodálních jízdenek: vyhledávání spojů, zákazníci a rezervace.",
      baticuisine: "Odhad nákladů na rekonstrukci kuchyní: materiál, práce a nabídky."
    }
  },
  skills: {
    kicker: "Dovednosti",
    title: "Moje nástroje",
    groups: { backend: "Backend", frontend: "Frontend", data: "Data", einvoicing: "EDI a e-fakturace", tools: "Nástroje a metody" },
    spoken: "Jazyky",
    langs: { ar: "Arabština", fr: "Francouzština", en: "Angličtina", de: "Němčina" },
    levels: { native: "Rodný jazyk", fluent: "Plynně", learning: "Učím se" }
  },
  contact: {
    kicker: "Kontakt",
    title: "Projekt, pozice, zakázka?",
    text: "Odpovídám do 24 hodin. Jako freelancer ihned k dispozici, na plný úvazek s měsíční výpovědní lhůtou, na dálku, hybridně nebo na místě.",
    email: "Napsat e-mail",
    copy: "Kopírovat adresu",
    copied: "Adresa zkopírována!",
    call: "Zavolat",
    cv: "Životopis",
  },
  palette: { hint: "Ctrl K", placeholder: "Přejít na sekci, změnit jazyk…", empty: "Žádné výsledky", goto: "Přejít na", lang: "Jazyk:" },
  footer: { built: "Navrhl a vytvořil Nabil Ettihadi v Reactu a Vite.", top: "Nahoru" }
};
