import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const modules = import.meta.glob("./locales/*.js", { eager: true });
const resources = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.match(/(\w+)\.js$/)[1], { translation: mod.default }]),
);

export const LANGUAGES = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
  { code: "nl", name: "Nederlands" },
  { code: "da", name: "Dansk" },
  { code: "cs", name: "Čeština" },
  { code: "et", name: "Eesti" },
  { code: "el", name: "Ελληνικά" },
  { code: "ru", name: "Русский" },
  { code: "uk", name: "Українська" },
  { code: "ar", name: "العربية", rtl: true },
];

const codes = LANGUAGES.map((l) => l.code);

function initialLanguage() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (codes.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (codes.includes(saved)) return saved;
  } catch { /* stockage indisponible */ }
  for (const lang of navigator.languages || []) {
    const code = lang.slice(0, 2).toLowerCase();
    if (codes.includes(code)) return code;
  }
  return "fr";
}

function applyDocument(lang) {
  const info = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  document.documentElement.lang = lang;
  document.documentElement.dir = info.rtl ? "rtl" : "ltr";
  const t = i18n.getFixedT(lang);
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage(),
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

applyDocument(i18n.language);
i18n.on("languageChanged", (lang) => {
  applyDocument(lang);
  try { localStorage.setItem("lang", lang); } catch { /* ignoré */ }
});

export default i18n;
