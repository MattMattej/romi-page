const { i18n } = require('./i18n.js');

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignora los errores de ESLint durante el build
  },
};

module.exports = nextConfig;