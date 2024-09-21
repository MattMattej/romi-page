// components/Navbar.js
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector(`.${styles.navbar}`).offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <span className={styles.brandName} onClick={() => scrollToSection('home')}>Ro Casciotti</span>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.ul} ${isMenuOpen ? styles.show : ''}`}>
       
        <li className={styles.li} onClick={() => scrollToSection('demos')}>{t('planes')}</li>
        <li className={styles.li} onClick={() => scrollToSection('projects')}>{t('desafios')}</li>
        <li className={styles.li} onClick={() => scrollToSection('bio')}>{t('bio')}</li>
        <li className={styles.li} onClick={() => scrollToSection('contact')}>{t('Contact')}</li>
        <li className={`${styles.li} ${styles.languageSwitch}`} onClick={toggleLanguage}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </li>
      </ul>
    </nav>
  );
}