import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./i18n";
import { CONTACT, CVS, MARQUEE, PROJECTS, SKILLS, SPOKEN, TIMELINE } from "./data";
import portrait from "./assets/img/nabil.webp";
import { logEvent } from "./analytics";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"];

const ICONS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" /></>,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  pin: <><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>,
  flow: <><rect x="3" y="4" width="6" height="6" rx="1" /><rect x="15" y="14" width="6" height="6" rx="1" /><path d="M9 7h4a2 2 0 0 1 2 2v5" /></>,
  cap: <path d="m12 4 10 5-10 5L2 9l10-5Zm-6 7v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />,
  github: <path d="M9 19c-4 1.3-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
};
const Icon = ({ name, className = "" }) => (
  <svg className={`ico ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name]}</svg>
);

/** Ajoute la classe « visible » aux éléments .reveal quand ils entrent à l'écran. */
function useReveal(deps) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.visible)");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}

function cvFor(lang) {
  return CVS[lang] || CVS.en;
}

function Background() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    const progress = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--progress", max > 0 ? scrollY / max : 0);
    };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("scroll", progress, { passive: true });
    progress();
    return () => { removeEventListener("pointermove", move); removeEventListener("scroll", progress); };
  }, []);
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__aurora"><span /><span /><span /></div>
      <div className="bg__grid" />
      <div className="bg__spot" />
      <div className="progress" />
    </div>
  );
}

function LanguageMenu({ compact = false }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", esc); };
  }, []);
  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || LANGUAGES[0];
  return (
    <div className={`lang ${compact ? "lang--compact" : ""}`} ref={ref}>
      <button className="lang__btn" type="button" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(!open)} aria-label={`${t("nav.language")} : ${current.name}`}>
        <Icon name="globe" /><span>{current.code.toUpperCase()}</span>
      </button>
      {open && (
        <ul className="lang__menu" role="menu">
          {LANGUAGES.map((l) => (
            <li key={l.code} role="none">
              <button type="button" role="menuitemradio" aria-checked={l.code === current.code} lang={l.code} dir={l.rtl ? "rtl" : "ltr"}
                onClick={() => { i18n.changeLanguage(l.code); setOpen(false); logEvent("Langue", l.code); }}>
                <span className="lang__code">{l.code.toUpperCase()}</span>{l.name}
                {l.code === current.code && <Icon name="check" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Nav({ onPalette }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 20);
    addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__bar">
        <a className="nav__logo" href="#top" aria-label="Nabil Ettihadi"><span>NE</span><b>Nabil Ettihadi</b></a>
        <nav className={`nav__links ${open ? "open" : ""}`} aria-label="Navigation">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>{t(`nav.${id}`)}</a>
          ))}
        </nav>
        <div className="nav__tools">
          <button className="kbd-btn" type="button" onClick={onPalette} aria-label={t("palette.placeholder")}><Icon name="search" /><kbd>{t("palette.hint")}</kbd></button>
          <LanguageMenu />
          <a className="btn btn--primary btn--sm nav__hire" href="#contact">{t("nav.hire")}</a>
          <button className="nav__burger" type="button" aria-expanded={open} aria-label={open ? t("nav.close") : t("nav.menu")} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        </div>
      </div>
    </header>
  );
}

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => { setIndex(0); setText(""); setDeleting(false); }, [words]);
  useEffect(() => {
    if (!words?.length) return undefined;
    const word = words[index % words.length];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setText(word); return undefined; }
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1800 : empty ? 250 : deleting ? 35 : 70;
    const id = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) { setDeleting(false); setIndex((i) => i + 1); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words]);
  return <span className="typer" aria-live="off"><span className="grad">{text}</span><i aria-hidden="true" /></span>;
}

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / 1400);
        setValue(Math.round(to * (1 - (1 - p) ** 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <strong ref={ref}>{value}{suffix}</strong>;
}

function Hero() {
  const { t, i18n } = useTranslation();
  const roles = t("hero.roles");
  return (
    <section className="hero wrap" id="top">
      <div className="hero__text">
        <p className="pill reveal"><span className="dot" />{t("hero.available")}</p>
        <h1 className="reveal">
          <span className="hero__hello">{t("hero.hello")}</span>
          <span className="hero__name">Nabil Ettihadi</span>
          <Typewriter words={Array.isArray(roles) ? roles : []} />
        </h1>
        <p className="hero__pitch reveal">{t("hero.pitch")}</p>
        <div className="hero__cta reveal">
          <a className="btn btn--primary" href="#contact" onClick={() => logEvent("CTA", "contact")}>{t("hero.ctaContact")}<Icon name="arrow" className="flip" /></a>
          <a className="btn btn--ghost" href={cvFor(i18n.resolvedLanguage)} target="_blank" rel="noopener" onClick={() => logEvent("CV", i18n.resolvedLanguage)}><Icon name="download" />{t("hero.ctaCv")}</a>
        </div>
        <p className="hero__loc reveal"><Icon name="pin" />{t("hero.location")}</p>
      </div>
      <div className="hero__visual reveal">
        <div className="portrait">
          <img src={portrait} alt="Nabil Ettihadi" width="809" height="900" fetchpriority="high" />
        </div>
        <span className="chip chip--1"><Icon name="code" />Java · Spring Boot</span>
        <span className="chip chip--2"><Icon name="layers" />Angular · React</span>
        <span className="chip chip--3"><Icon name="flow" />XSLT · UBL · Factur-X</span>
        <span className="chip chip--4"><Icon name="briefcase" />Laravel</span>
      </div>
      <div className="hero__stats reveal">
        <div><Counter to={10} suffix="+" /><span>{t("hero.stats.projects")}</span></div>
        <div><Counter to={4} /><span>{t("hero.stats.languages")}</span></div>
        <div><Counter to={104} /><span>{t("hero.stats.tests")}</span></div>
      </div>
      <a className="hero__scroll" href="#about" aria-label={t("hero.scroll")}><span /></a>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">{items.map((m, i) => <span key={i}>{m}</span>)}</div>
    </div>
  );
}

function SectionHead({ kicker, title }) {
  return (
    <div className="head reveal">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Profile() {
  const { t } = useTranslation();
  const cards = t("profile.cards");
  const icons = ["code", "briefcase", "flow"];
  return (
    <section className="section wrap" id="about">
      <SectionHead kicker={t("profile.kicker")} title={t("profile.title")} />
      <p className="lead reveal">{t("profile.intro")}</p>
      <div className="trio">
        {(Array.isArray(cards) ? cards : []).map((c, i) => (
          <article className="card glow reveal" key={i} style={{ "--d": `${i * 90}ms` }}>
            <span className="card__icon"><Icon name={icons[i]} /></span>
            <span className="card__num">0{i + 1}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const { t } = useTranslation();
  return (
    <section className="section wrap" id="experience">
      <SectionHead kicker={t("experience.kicker")} title={t("experience.title")} />
      <ol className="timeline">
        {TIMELINE.map((item) => (
          <li className={`timeline__item reveal ${item.current ? "is-current" : ""}`} key={item.id}>
            <span className="timeline__dot"><Icon name={item.type === "work" ? "briefcase" : "cap"} /></span>
            <div className="card timeline__card">
              <div className="timeline__top">
                <span className="timeline__period">{t(`experience.items.${item.id}.period`)}</span>
                {item.current && <span className="badge">{t("experience.now")}</span>}
              </div>
              <h3>{t(`experience.items.${item.id}.role`)}</h3>
              <p className="timeline__place">{t(`experience.items.${item.id}.place`)}</p>
              <p>{t(`experience.items.${item.id}.text`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectCard({ p, big }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -6}deg`);
    ref.current.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 6}deg`);
    ref.current.style.setProperty("--px", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--py", `${e.clientY - r.top}px`);
  };
  const reset = () => { ref.current.style.setProperty("--rx", "0deg"); ref.current.style.setProperty("--ry", "0deg"); };
  return (
    <article ref={ref} className={`project reveal ${big ? "project--big" : ""}`} onPointerMove={onMove} onPointerLeave={reset}>
      <div className="project__media">
        <img src={p.image} alt={`${p.title}`} loading="lazy" />
        {p.featured && <span className="badge badge--glow">{t("projects.featured")}</span>}
      </div>
      <div className="project__body">
        <h3>{p.title}</h3>
        <p>{t(`projects.items.${p.id}`)}</p>
        <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        <div className="project__links">
          {p.demo && <a className="btn btn--primary btn--sm" href={p.demo} target="_blank" rel="noopener" onClick={() => logEvent("Démo", p.id)}><Icon name="external" />{t("projects.demo")}</a>}
          <a className="btn btn--ghost btn--sm" href={p.code} target="_blank" rel="noopener" onClick={() => logEvent("Code", p.id)}><Icon name="github" />{t("projects.code")}</a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const list = useMemo(() => PROJECTS.filter((p) => filter === "all" || (filter === "featured" ? p.featured : p.tags.includes(filter))), [filter]);
  useReveal([filter]);
  return (
    <section className="section wrap" id="projects">
      <SectionHead kicker={t("projects.kicker")} title={t("projects.title")} />
      <div className="filters reveal" role="tablist">
        {["all", "featured", "web", "java"].map((f) => (
          <button key={f} type="button" role="tab" aria-selected={filter === f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
            {t(`projects.filters.${f}`)}<small>{f === "all" ? PROJECTS.length : PROJECTS.filter((p) => (f === "featured" ? p.featured : p.tags.includes(f))).length}</small>
          </button>
        ))}
      </div>
      <div className="bento">
        {list.map((p, i) => <ProjectCard key={p.id} p={p} big={filter !== "java" && p.featured && i === 0} />)}
      </div>
    </section>
  );
}

function Skills() {
  const { t } = useTranslation();
  return (
    <section className="section wrap" id="skills">
      <SectionHead kicker={t("skills.kicker")} title={t("skills.title")} />
      <div className="skills">
        {Object.entries(SKILLS).map(([group, items], i) => (
          <div className={`card skills__group reveal ${group === "einvoicing" ? "skills__group--accent" : ""}`} key={group} style={{ "--d": `${i * 70}ms` }}>
            <h3>{t(`skills.groups.${group}`)}</h3>
            <ul className="tags tags--lg">{items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
        <div className="card skills__group reveal" style={{ "--d": "350ms" }}>
          <h3>{t("skills.spoken")}</h3>
          <ul className="spoken">
            {SPOKEN.map((l) => (
              <li key={l.id}>
                <div><strong>{t(`skills.langs.${l.id}`)}</strong><span>{t(`skills.levels.${l.level}`)}</span></div>
                <div className="bar"><span style={{ "--w": `${l.value}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(CONTACT.email); setCopied(true); setTimeout(() => setCopied(false), 2200); logEvent("Contact", "copie e-mail"); } catch { location.href = `mailto:${CONTACT.email}`; }
  };
  return (
    <section className="section wrap" id="contact">
      <div className="contact reveal">
        <div className="contact__glow" aria-hidden="true" />
        <span className="kicker">{t("contact.kicker")}</span>
        <h2>{t("contact.title")}</h2>
        <p className="lead">{t("contact.text")}</p>
        <div className="contact__mail">
          <a className="contact__address" href={`mailto:${CONTACT.email}`} onClick={() => logEvent("Contact", "e-mail")}>{CONTACT.email}</a>
          <button className="btn btn--ghost btn--sm" type="button" onClick={copy} aria-live="polite"><Icon name={copied ? "check" : "copy"} />{copied ? t("contact.copied") : t("contact.copy")}</button>
        </div>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${CONTACT.email}`}><Icon name="mail" />{t("contact.email")}</a>
          <a className="btn btn--ghost" href={`tel:${CONTACT.phone}`}><Icon name="phone" /><span dir="ltr">{CONTACT.phoneLabel}</span></a>
          <a className="btn btn--ghost" href={CONTACT.linkedin} target="_blank" rel="noopener"><Icon name="linkedin" />LinkedIn</a>
          <a className="btn btn--ghost" href={CONTACT.github} target="_blank" rel="noopener"><Icon name="github" />GitHub</a>
        </div>
        <div className="contact__cv">
          <span>{t("contact.cv")}</span>
          {Object.keys(CVS).map((code) => (
            <a key={code} href={CVS[code]} target="_blank" rel="noopener" onClick={() => logEvent("CV", code)}><Icon name="download" />{t(`contact.cvLangs.${code}`)}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Palette({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const input = useRef(null);
  const items = useMemo(() => [
    ...SECTIONS.map((id) => ({ id, label: `${t("palette.goto")} ${t(`nav.${id}`)}`, run: () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }) })),
    ...LANGUAGES.map((l) => ({ id: l.code, label: `${t("palette.lang")} ${l.name}`, run: () => i18n.changeLanguage(l.code) })),
  ], [t, i18n]);
  const list = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { if (open) { setQuery(""); setCursor(0); setTimeout(() => input.current?.focus(), 10); } }, [open]);
  if (!open) return null;
  const run = (item) => { item.run(); onClose(); };
  return (
    <div className="palette" role="dialog" aria-modal="true" aria-label={t("palette.placeholder")} onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="palette__box">
        <div className="palette__input"><Icon name="search" />
          <input ref={input} value={query} placeholder={t("palette.placeholder")} onChange={(e) => { setQuery(e.target.value); setCursor(0); }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setCursor((c) => Math.min(c + 1, list.length - 1)); }
              if (e.key === "ArrowUp") { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
              if (e.key === "Enter" && list[cursor]) run(list[cursor]);
              if (e.key === "Escape") onClose();
            }} />
          <kbd>Esc</kbd>
        </div>
        <ul>
          {list.length ? list.map((item, i) => (
            <li key={item.id}><button type="button" className={i === cursor ? "active" : ""} onMouseEnter={() => setCursor(i)} onClick={() => run(item)}>{item.label}</button></li>
          )) : <li className="palette__empty">{t("palette.empty")}</li>}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [palette, setPalette] = useState(false);
  useReveal([i18n.resolvedLanguage]);
  useEffect(() => {
    const key = (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalette((p) => !p); } };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, []);
  return (
    <>
      <Background />
      <Nav onPalette={() => setPalette(true)} />
      <main>
        <Hero />
        <Marquee />
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer wrap">
        <p>© {new Date().getFullYear()} Nabil Ettihadi · {t("footer.built")}</p>
        <a href="#top">{t("footer.top")} ↑</a>
      </footer>
      <Palette open={palette} onClose={() => setPalette(false)} />
    </>
  );
}
