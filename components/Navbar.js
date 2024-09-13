import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <span className={styles.brandName} onClick={() => scrollToSection('home')}>Paolo Grosso</span>
      <ul className={styles.ul}>
        <li className={styles.li} onClick={() => scrollToSection('bio')}>Bio</li>
        <li className={styles.li} onClick={() => scrollToSection('demos')}>Demos</li>
        <li className={styles.li} onClick={() => scrollToSection('listen')}>Listen</li>
        <li className={styles.li} onClick={() => scrollToSection('albums')}>Albums</li>
        <li className={styles.li} onClick={() => scrollToSection('projects')}>Projects</li>
        <li className={styles.li} onClick={() => scrollToSection('news')}>News & Events</li>
        <li className={styles.li} onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}