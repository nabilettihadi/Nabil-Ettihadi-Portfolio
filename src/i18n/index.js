import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      hero: {
        title: "Bonjour, je suis Nabil Ettihadi",
        description: "Développeur Full Stack passionné, avec une solide expérience en Java/Spring Boot et Angular. Je développe des applications web modernes en mettant l'accent sur la qualité et les bonnes pratiques de développement.",
        contactBtn: "Me contacter",
        downloadCV: "Télécharger CV"
      },
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact"
      },
      about: {
        title: "À propos",
        description: "Passionné par le développement web et les nouvelles technologies, je suis un développeur Full Stack avec une solide formation en informatique. Mon parcours académique et mes projets pratiques m'ont permis de développer une expertise particulière en Java et Spring Boot, ainsi qu'en développement web moderne.",
        frontend: {
          title: "Développeur Frontend",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Développeur Backend",
          description: "Java (Spring Boot, Spring Security, Spring MVC, Spring Data, JEE, Hibernate JPA), PHP (Laravel), RESTful APIs"
        },
        ui: {
          title: "Conception",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Expérience",
        education: "Formation",
        positions: {
          geerd: {
            title: "Développeur Web Full Stack - Stage",
            company: "GEERD",
            period: "05/2024 - 07/2024"
          },
          youcode: {
            title: "Développement Web Full Stack",
            company: "Youcode Safi - UM6P",
            period: "2023 - en cours"
          }
        },
        education: {
          bac: {
            title: "Baccalauréat Sciences Mathématiques",
            option: "B BIOF",
            school: "Lycée technique Alkhawarizmi - Safi",
            period: "2020"
          },
          university: {
            title: "Sciences Mathématique et Informatique",
            school: "Faculté Polydisciplinaire de SAFI",
            period: "2020 - 2023"
          },
          certificate: {
            title: "Certificat de l'intelligence artificielle",
            organization: "MoroccoAI",
            school: "Faculté Polydisciplinaire de SAFI",
            period: "2022"
          }
        }
      },
      projects: {
        title: "Projets",
        viewDemo: "Démo",
        viewCode: "Code",
        baticuisine: {
          title: "Bati-Cuisine",
          description: "Application Java pour l'estimation des coûts de construction et rénovation de cuisines. Gestion complète des projets avec calcul des coûts des matériaux, main-d'œuvre, et génération de devis personnalisés."
        },
        wrm: {
          title: "WRM - Gestion des Salles d'Attente",
          description: "API REST moderne pour la gestion intelligente des salles d'attente. Implémente plusieurs algorithmes de planification (FIFO, Priority, SJF), avec suivi en temps réel des visiteurs et génération de statistiques détaillées."
        },
        ecomove: {
          title: "EcoMove",
          description: "Plateforme de gestion de billets de transport permettant aux clients de rechercher et réserver des billets pour différents moyens de transport. Gestion complète des clients, des réservations et des trajets."
        },
        citronix: {
          title: "Citronix",
          description: "Application de gestion pour une ferme de citrons, permettant de suivre la production, la récolte, et la vente, avec une gestion optimisée de la productivité des arbres."
        },
        cch: {
          title: "CCH API",
          description: "API REST pour la gestion des compétitions cyclistes, incluant la gestion des équipes, des coureurs, des courses et des résultats."
        },
        itlens: {
          title: "ITLens",
          description: "Système de gestion avancée des enquêtes avec création d'enquêtes hiérarchiques et analyse en temps réel."
        },
        recyclehub: {
          title: "RecycleHub",
          description: "Une application de gestion de recyclage innovante qui connecte les particuliers aux collecteurs agréés. Système complet avec gestion des demandes, suivi en temps réel et programme de récompenses par points."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "N'hésitez pas à me contacter !",
        email: "Email",
        phone: "Téléphone"
      },
      languages: {
        title: "Langues",
        switchTo: "Changer en {{lang}}",
        ar: "Arabe - Langue maternelle",
        fr: "Français - Courant",
        en: "Anglais - Intermédiaire",
        de: "Allemand - Notions de base"
      },
      skills: {
        i18n: "Internationalisation"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Hi, I'm Nabil Ettihadi",
        description: "Passionate Full Stack Developer with strong experience in Java/Spring Boot and Angular. I develop modern web applications with a focus on quality and development best practices.",
        contactBtn: "Contact Me",
        downloadCV: "Download Resume"
      },
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      about: {
        title: "About",
        description: "Passionate about web development and new technologies, I am a Full Stack developer with a solid background in computer science. My academic journey and practical projects have allowed me to develop particular expertise in Java and Spring Boot, as well as modern web development.",
        frontend: {
          title: "Frontend Developer",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Backend Developer",
          description: "Java (Spring Boot, Spring Security, Spring MVC, Spring Data, JEE, Hibernate JPA), PHP (Laravel), RESTful APIs"
        },
        ui: {
          title: "Design",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Experience",
        education: "Education",
        positions: {
          geerd: {
            title: "Full Stack Web Developer - Internship",
            company: "GEERD",
            period: "05/2024 - 07/2024"
          },
          youcode: {
            title: "Full Stack Web Development",
            company: "Youcode Safi - UM6P",
            period: "2023 - ongoing"
          }
        },
        education: {
          bac: {
            title: "Mathematics Science Baccalaureate",
            option: "B BIOF",
            school: "Alkhawarizmi Technical High School - Safi",
            period: "2020"
          },
          university: {
            title: "Mathematics and Computer Science",
            school: "Polydisciplinary Faculty of SAFI",
            period: "2020 - 2023"
          },
          certificate: {
            title: "Artificial Intelligence Certificate",
            organization: "MoroccoAI",
            school: "Polydisciplinary Faculty of SAFI",
            period: "2022"
          }
        }
      },
      projects: {
        title: "Projects",
        viewDemo: "Demo",
        viewCode: "Code",
        baticuisine: {
          title: "Bati-Cuisine",
          description: "Java application for estimating kitchen construction and renovation costs. Complete project management with calculation of material costs, labor, and generation of customized quotes."
        },
        wrm: {
          title: "WRM - Waiting Room Management",
          description: "Modern REST API for intelligent waiting room management. Implements multiple scheduling algorithms (FIFO, Priority, SJF), with real-time visitor tracking and detailed statistics generation."
        },
        ecomove: {
          title: "EcoMove",
          description: "Transport ticket management platform allowing customers to search and book tickets for different modes of transport. Complete management of customers, reservations, and journeys."
        },
        citronix: {
          title: "Citronix",
          description: "Management application for a lemon farm, enabling tracking of production, harvesting, and sales, with optimized tree productivity management."
        },
        cch: {
          title: "CCH API",
          description: "REST API for cycling competition management, including team, rider, race and results management."
        },
        itlens: {
          title: "ITLens",
          description: "Advanced survey management system with hierarchical survey creation and real-time analysis."
        },
        recyclehub: {
          title: "RecycleHub",
          description: "An innovative recycling management application that connects individuals with certified collectors. Complete system with request management, real-time tracking, and points-based rewards program."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Feel free to reach out!",
        email: "Email",
        phone: "Phone"
      },
      languages: {
        title: "Languages",
        switchTo: "Switch to {{lang}}",
        ar: "Arabic - Native",
        fr: "French - Fluent",
        en: "English - Intermediate",
        de: "German - Basic"
      },
      skills: {
        i18n: "Internationalization"
      }
    }
  },
  de: {
    translation: {
      hero: {
        title: "Hallo, ich bin Nabil Ettihadi",
        description: "Leidenschaftlicher Full-Stack-Entwickler mit fundierter Erfahrung in Java/Spring Boot und Angular. Ich entwickle moderne Webanwendungen mit Fokus auf Qualität und Best Practices.",
        contactBtn: "Kontaktieren Sie mich",
        downloadCV: "Lebenslauf herunterladen"
      },
      nav: {
        about: "Über mich",
        experience: "Erfahrung",
        projects: "Projekte",
        contact: "Kontakt"
      },
      about: {
        title: "Über mich",
        description: "Als leidenschaftlicher Webentwickler und Technologie-Enthusiast bin ich ein Full-Stack-Entwickler mit fundiertem Informatik-Hintergrund. Mein akademischer Werdegang und praktische Projekte haben es mir ermöglicht, besondere Expertise in Java und Spring Boot sowie in moderner Webentwicklung zu entwickeln.",
        frontend: {
          title: "Frontend-Entwickler",
          description: "HTML5, CSS3, Sass, JavaScript, React, Angular, TailwindCSS, Bootstrap, i18n"
        },
        backend: {
          title: "Backend-Entwickler",
          description: "Java (Spring Boot, Spring Security, Spring MVC, Spring Data, JEE, Hibernate JPA), PHP (Laravel), RESTful APIs"
        },
        ui: {
          title: "Design",
          description: "UML, Merise, Agile (Scrum, Kanban), Jira, Trello"
        }
      },
      experience: {
        title: "Erfahrung",
        education: "Ausbildung",
        positions: {
          geerd: {
            title: "Full-Stack Webentwickler - Praktikum",
            company: "GEERD",
            period: "05/2024 - 07/2024"
          },
          youcode: {
            title: "Full-Stack Webentwicklung",
            company: "Youcode Safi - UM6P",
            period: "2023 - laufend"
          }
        },
        education: {
          bac: {
            title: "Abitur in Mathematik",
            option: "B BIOF",
            school: "Technisches Gymnasium Alkhawarizmi - Safi",
            period: "2020"
          },
          university: {
            title: "Mathematik und Informatik",
            school: "Fakultät für Interdisziplinäre Studien SAFI",
            period: "2020 - 2023"
          },
          certificate: {
            title: "Zertifikat für Künstliche Intelligenz",
            organization: "MoroccoAI",
            school: "Fakultät für Interdisziplinäre Studien SAFI",
            period: "2022"
          }
        }
      },
      projects: {
        title: "Projekte",
        viewDemo: "Demo",
        viewCode: "Code",
        baticuisine: {
          title: "Bati-Cuisine",
          description: "Java-Anwendung zur Kostenkalkulation für Küchenbau und -renovierung. Komplette Projektverwaltung mit Berechnung von Materialkosten, Arbeitskosten und Erstellung individueller Angebote."
        },
        wrm: {
          title: "WRM - Wartezimmerverwaltung",
          description: "Moderne REST-API für intelligente Wartezimmerverwaltung. Implementiert mehrere Planungsalgorithmen (FIFO, Priorität, SJF), mit Echtzeit-Besucherverfolgung und detaillierter Statistikgenerierung."
        },
        ecomove: {
          title: "EcoMove",
          description: "Transportticket-Verwaltungsplattform, die es Kunden ermöglicht, Tickets für verschiedene Verkehrsmittel zu suchen und zu buchen. Vollständige Verwaltung von Kunden, Reservierungen und Reisen."
        },
        citronix: {
          title: "Citronix",
          description: "Verwaltungsanwendung für eine Zitronenfarm zur Verfolgung von Produktion, Ernte und Verkauf mit optimierter Baumproduktivitätsverwaltung."
        },
        cch: {
          title: "CCH API",
          description: "REST-API für die Verwaltung von Radrennen, einschließlich Team-, Fahrer-, Rennen- und Ergebnisverwaltung."
        },
        itlens: {
          title: "ITLens",
          description: "Fortgeschrittenes Umfrageverwaltungssystem mit hierarchischer Umfrageerstellung und Echtzeitanalyse."
        },
        recyclehub: {
          title: "RecycleHub",
          description: "Eine innovative Recycling-Verwaltungsanwendung, die Einzelpersonen mit zertifizierten Sammlern verbindet. Komplettes System mit Anfrageverwaltung, Echtzeit-Verfolgung und Punkte-basiertem Belohnungsprogramm."
        }
      },
      contact: {
        title: "Kontakt",
        subtitle: "Kontaktieren Sie mich gerne!",
        email: "E-Mail",
        phone: "Telefon"
      },
      languages: {
        title: "Sprachen",
        switchTo: "Zu {{lang}} wechseln",
        ar: "Arabisch - Muttersprache",
        fr: "Französisch - Fließend",
        en: "Englisch - Mittelstufe",
        de: "Deutsch - Grundkenntnisse"
      },
      skills: {
        i18n: "Internationalisierung"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;