import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'; // Importa el componente Image
import styles from '../styles/ProjectSection.module.css';

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = [
    { id: 'ALL', label: t('All') },
    { id: 'FILM', label: t('Film') },
    { id: 'VIDEOGAME', label: t('Videogame') },
    { id: 'THEATRE', label: t('Theatre') },
    { id: 'MUSIC', label: t('Music') },
    { id: 'VARIOUS', label: t('Various') },
    { id: 'ALBUMS', label: t('Albums') },
  ];

  const projects = [
    { id: 1, title: t('Pelicula1'), category: 'FILM', image: '/paolo2.png' },
    { id: 2, title: t('Videojuego1'), category: 'VIDEOGAME', image: '/paolo3.png' },
    { id: 3, title: t('Teatro1'), category: 'THEATRE', image: '/paolo4.png' },
    { id: 4, title: t('Musica1'), category: 'MUSIC', image: '/paolo2.png' },
    { id: 5, title: t('Album1'), category: 'ALBUMS', image: '/paolo3.png' },
    { id: 6, title: t('Varios1'), category: 'VARIOUS', image: '/paolo4.png' },
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
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
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <Image 
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                objectFit="cover"
              />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;