import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);  // Cierra el menú después de hacer clic en un elemento
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <span className={styles.brandName} onClick={() => scrollToSection('home')}>Paolo Grosso</span>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.ul} ${isMenuOpen ? styles.show : ''}`}>
        <li className={styles.li} onClick={() => scrollToSection('bio')}>Bio</li>
        <li className={styles.li} onClick={() => scrollToSection('demos')}>Demos</li>
        <li className={styles.li} onClick={() => scrollToSection('listen')}>Listen</li>
        <li className={styles.li} onClick={() => scrollToSection('projects')}>Projects</li>
        <li className={styles.li} onClick={() => scrollToSection('news')}>News & Events</li>
        <li className={styles.li} onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}