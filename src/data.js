import hireme from "./assets/img/hireme.webp";
import arkade from "./assets/img/arkade.webp";
import syndicnow from "./assets/img/syndicnow.webp";
import recyclehub from "./assets/img/recyclehub.webp";
import citronix from "./assets/img/citronix.webp";
import cch from "./assets/img/cch.webp";
import itlens from "./assets/img/itlens.webp";
import wrm from "./assets/img/wrm.webp";
import ecomove from "./assets/img/ecomove.webp";
import baticuisine from "./assets/img/baticuisine.webp";

const gh = (repo) => `https://github.com/nabilettihadi/${repo}`;

export const CONTACT = {
  email: "nettihadi@gmail.com",
  phone: "+212680666945",
  phoneLabel: "+212 6 80 66 69 45",
  linkedin: "https://www.linkedin.com/in/nabil-ettihadi/",
  github: "https://github.com/nabilettihadi",
};

// Un CV par langue du site : CV_Nabil_Ettihadi_XX.pdf (Lebenslauf_Nabil_Ettihadi.pdf en allemand).
const cvFiles = import.meta.glob("./assets/cv/*.pdf", { eager: true, import: "default" });
export const CVS = Object.fromEntries(Object.entries(cvFiles).map(([path, url]) => [
  path.includes("Lebenslauf") ? "de" : path.match(/_([A-Z]{2})\.pdf$/)[1].toLowerCase(), url,
]));

export const PROJECTS = [
  { id: "hireme", title: "HireMe", image: hireme, featured: true, tags: ["web"], stack: ["Laravel 10", "PHP 8.3", "React", "Tailwind CSS 4", "MySQL", "Docker", "PHPUnit"], code: gh("HireMe") },
  { id: "arkade", title: "Arkade", image: arkade, featured: true, tags: ["web"], stack: ["JavaScript", "HTML", "CSS", "GitHub Pages"], demo: "https://nabilettihadi.github.io/Magasin-gaming/", code: gh("Magasin-gaming") },
  { id: "syndicnow", title: "SyndicNow", image: syndicnow, featured: true, tags: ["web", "java"], stack: ["Spring Boot", "Angular", "PostgreSQL", "Stripe", "Docker"], code: gh("SyndicNow") },
  { id: "recyclehub", title: "RecycleHub", image: recyclehub, tags: ["web"], stack: ["Angular 17", "NgRx", "RxJS", "Tailwind"], code: gh("RecycleHub") },
  { id: "citronix", title: "Citronix", image: citronix, tags: ["java"], stack: ["Spring Boot", "PostgreSQL", "JUnit", "Mockito"], code: gh("Citronix") },
  { id: "wrm", title: "WRM", image: wrm, tags: ["java"], stack: ["Spring Boot", "PostgreSQL", "Docker", "OpenAPI"], code: gh("WaitingRoom") },
  { id: "cch", title: "CCH API", image: cch, tags: ["java"], stack: ["Spring MVC", "Hibernate", "PostgreSQL"], code: gh("CCH") },
  { id: "itlens", title: "ITLens", image: itlens, tags: ["java"], stack: ["Spring Boot", "PostgreSQL"], code: gh("ITLens") },
  { id: "ecomove", title: "EcoMove", image: ecomove, tags: ["java"], stack: ["Java", "JDBC", "Stream API"], code: gh("EcoMove") },
  { id: "baticuisine", title: "Bati-Cuisine", image: baticuisine, tags: ["java"], stack: ["Java", "JDBC", "Design patterns"], code: gh("BatiCuisine") },
];

export const TIMELINE = [
  { id: "cegedim", type: "work", current: true },
  { id: "aix", type: "school", current: true },
  { id: "youcode", type: "school" },
  { id: "geerd", type: "work" },
  { id: "fac", type: "school" },
  { id: "bac", type: "school" },
];

export const SKILLS = {
  backend: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "PHP", "Laravel", "REST API", "JUnit", "Mockito", "PHPUnit"],
  frontend: ["Angular", "TypeScript", "RxJS", "NgRx", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "i18n"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  einvoicing: ["XSLT", "XML", "UBL 2.1", "Factur-X", "CII", "EDI", "AIX", "KornShell"],
  tools: ["Git", "GitHub Actions", "Docker", "Maven", "Jira", "Scrum", "UML", "Figma"],
};

export const MARQUEE = ["Java", "Spring Boot", "Angular", "React", "Laravel", "TypeScript", "PostgreSQL", "Docker", "XSLT", "UBL 2.1", "Factur-X", "Tailwind CSS", "Git", "MySQL"];

export const SPOKEN = [
  { id: "ar", level: "native", value: 100 },
  { id: "fr", level: "native", value: 100 },
  { id: "en", level: "fluent", value: 80 },
  { id: "de", level: "learning", value: 35 },
];
