import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube,  faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { t } = useTranslation(); // Importamos i18n hook

  return (
    <section id='contact' className={`${styles.bioSection} section`}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>{t('contact_title')}</h3>
            <p>{t('contact_email')} contacto@example.com</p>
            <p>{t('contact_phone')} +123 456 789</p>
          </div>
          <div className={styles.socialIcons}>
            <a href='https://www.youtube.com/user/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
            <a href='https://www.instagram.com/romina.casciotti/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
