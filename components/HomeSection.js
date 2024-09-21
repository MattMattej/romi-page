import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';
import ExpandableSection from './ExpandableSection';

const HomeSection = () => {
  const { t } = useTranslation(); // Importamos i18n hook
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
              src='/paolo2.png'
              alt='Paolo Grosso'
              width={200}
              height={200}
              layout='responsive'
            />
          </div>
        </div>
        <div className={styles.expandableSections}>
          <ExpandableSection
            title={t('expandable_title_1')}
            content={t('expandable_content_1')}
            isExpanded={isExpanded}
            onToggle={toggleExpand}
          />
          <ExpandableSection
            title={t('expandable_title_2')}
            content={t('expandable_content_2')}
            isExpanded={isExpanded}
            onToggle={toggleExpand}
          />
          <ExpandableSection
            title={t('expandable_title_3')}
            content={t('expandable_content_3')}
            isExpanded={isExpanded}
            onToggle={toggleExpand}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
