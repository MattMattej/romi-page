import React from 'react';
import styles from '../styles/HomeSection.module.css';

const HomeSection = () => {
  return (
    <section id="home" className={`${styles.homeSection} section`}>
      <div className="container centered-content">
        <h1 className={styles.title}>
          <span className="gradient-text">Paolo Grosso</span>
        </h1>
        <p className={styles.subtitle}>Composer | Musician | Producer</p>
        <div className={styles.cta}>
          <a href="#listen" className="button">Listen to My Music</a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;