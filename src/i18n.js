import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          title: "TheStoway",
          subtitle: "Independent developer focused on open-source projects, game development, and creative experiments.",
          description: "I build things, share what I learn, and collaborate with others who enjoy creating.",
          nav: {
            home: "Home",
            projects: "Projects",
            about: "About",
            contact: "Contact"
          },
          hero: {
            cta: "View Projects",
            secondary: "Read Blog"
          },
          about: {
            title: "About",
            intro: "TheStoway is a personal developer identity created to explore ideas freely and build without limitations.",
            work_title: "My work includes:",
            item1: "Open-source code",
            item2: "Roblox and indie game projects",
            item3: "Tools, systems, and experiments",
            footer: "This identity exists to focus on creation, not personality."
          },
          projects_page: {
            title: "Projects",
            subtitle: "A collection of my recent work and experiments.",
            no_projects: "There are no projects here yet."
          },
          footer: "© 2026 TheStoway. Built with passion."
        }
      },
      es: {
        translation: {
          title: "TheStoway",
          subtitle: "Desarrollador independiente enfocado en proyectos de código abierto, desarrollo de videojuegos y experimentos creativos.",
          description: "Construyo cosas, comparto lo que aprendo y colaboro con otros que disfrutan crear.",
          nav: {
            home: "Inicio",
            projects: "Proyectos",
            about: "Sobre mí",
            contact: "Contacto"
          },
          hero: {
            cta: "Ver Proyectos",
            secondary: "Leer Blog"
          },
          about: {
            title: "Sobre mí",
            intro: "TheStoway es una identidad de desarrollador personal creada para explorar ideas libremente y construir sin limitaciones.",
            work_title: "Mi trabajo incluye:",
            item1: "Código de fuente abierta",
            item2: "Proyectos de juegos indie y Roblox",
            item3: "Herramientas, sistemas y experimentos",
            footer: "Esta identidad existe para enfocarse en la creación, no en la personalidad."
          },
          projects_page: {
            title: "Proyectos",
            subtitle: "Una colección de mi trabajo reciente y experimentos.",
            no_projects: "Todavía no hay Proyectos."
          },
          footer: "© 2026 TheStoway. Construido con pasión."
        }
      }
    }
  });

export default i18n;
