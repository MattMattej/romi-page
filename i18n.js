const i18next = require('i18next');
const { initReactI18next } = require('react-i18next');

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Unique Sound and Musical Signature": "Unique Sound and Musical Signature",
        // Añadir todas las traducciones necesarias aquí
      },
    },
    es: {
      translation: {
        "Unique Sound and Musical Signature": "Firma Sonora Única y Distintiva",
        // Añadir todas las traducciones necesarias aquí
      },
    },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};