import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';


const HomeSection = () => {
  const { t } = useTranslation(); // Importamos i18n hook


  return (
    <section id='home' className={`${styles.homeSection} section`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              {t('home_description')}
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src='/image3.webp' 
              alt='Ro Casciotti'
              width={100}
              height={100}
              layout='responsive'
            />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default HomeSection;
