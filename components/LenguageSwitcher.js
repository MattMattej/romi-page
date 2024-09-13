import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <button onClick={toggleLanguage} style={{ position: 'fixed', top: 20, right: 20 }}>
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
