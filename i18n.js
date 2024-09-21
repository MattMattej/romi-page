// i18n.js
const i18next = require('i18next');
const { initReactI18next } = require('react-i18next');

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          bio: "Bio",
          demos: "Demos",
          listen: "Listen",
          projects: "Projects",
          news: "News",
          contact: "Contact",
        },
      },
      es: {
        translation: {
          bio: "Biografía",
          demos: "Demos",
          listen: "Escuchar",
          projects: "Proyectos",
          news: "Noticias",
          contact: "Contacto",
        },
      },
    },
    lng: "en", // Idioma por defecto
    fallbackLng: "en", // Idioma de reserva

    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

module.exports = i18next;