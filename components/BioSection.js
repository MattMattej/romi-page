import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/BioSection.module.css';

const BioSection = () => {
  const { t } = useTranslation();

  return (
    <section id='bio' className={`${styles.bioSection} section`}>
      <div className='container'>
        <h2 className={styles.title}>
          <span>{t('About Paolo')}</span>
        </h2>
        <div className={styles.bioContent}>
          <div className={styles.bioImages}>
            <Image 
              src='/image3.webp' 
              alt='Ro Casciotti' 
              width={300} 
              height={300} 
              objectFit='cover' 
              className={styles.image}
            />
            <div className={styles.socialIcons}>
              <a href='https://www.youtube.com/user/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
              </a>
              <a href='https://www.instagram.com/romina.casciotti/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.bioText}>
            <div className={styles.bioBlock}>
              <p><strong>Romina Casciotti Delfino</strong></p>
              <p>{t('bio_text_1')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
