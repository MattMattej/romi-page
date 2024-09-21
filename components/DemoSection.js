import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from '../styles/DemoSection.module.css';

const DemosSection = () => {
  const { t } = useTranslation();

  const demos = [
    { id: 1, image: '/paolo2.png', title: t('Demo Teatro') },
    { id: 2, image: '/paolo3.png', title: t('Demo Audiovisual') },
    { id: 3, image: '/paolo4.png', title: t('Demo Otro') },
  ];

  return (
    <section id='demos' className={styles.demosSection}>
      <div className='container'>
        <h2 className={styles.title}>{t('Demos')}</h2>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} className={styles.carousel}>
          {demos.map((demo) => (
            <div key={demo.id} className={styles.demoSlide}>
              <Image 
                src={demo.image} 
                alt={demo.title} 
                width={300} 
                height={300} 
                objectFit='cover'
              />
              <p className={styles.legend}>{demo.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default DemosSection;
