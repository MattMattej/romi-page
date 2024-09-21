import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from '../styles/ProjectSection.module.css';

const DesafiosSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = [
    { id: 'ALL', label: t('All') },
    { id: 'ABDOMINALES', label: t('Abdominales') },
    { id: 'GLUTEOS', label: t('Gluteos') },
    { id: 'PECHO', label: t('Pecho') },
  ];

  const projects = [
    { id: 1, title: t('Rutina Gluteos'), category: 'GLUTEOS', image: '/image3.webp' },
    { id: 2, title: t('Rutina Pecho'), category: 'PECHO', image: '/image1.webp' },
    { id: 3, title: t('Rutina Abdominales'), category: 'ABDOMINALES', image: '/image2.webp'},
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id='projects' className={styles.projectsSection}>
      <div className='container'>
        <h2 className={styles.title}>{t('Projects')}</h2>
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Cambié el nombre de la clase del grid */}
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <Image 
                src={project.image} 
                alt={project.title} 
                width={250} 
                height={250} 
                objectFit='cover' 
              />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesafiosSection;
