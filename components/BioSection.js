import React from 'react';
import styles from '../styles/BioSection.module.css';

const BioSection = () => {
  return (
    <section id="bio" className={`${styles.bioSection} section`}>
      <div className="container">
        <h2 className={styles.title}>
          <span className="gradient-text">About Paolo</span>
        </h2>
        <div className={styles.bioContent}>
          <div className={styles.bioText}>
            <p>
              Paolo Grosso is a versatile composer and musician known for his unique sound and musical signature. With a passion for creating captivating melodies and innovative harmonies, Paolo has made a name for himself in the music industry.
            </p>
            <p>
              His compositions span various genres, from classical to contemporary, always pushing the boundaries of musical expression. Paolo&apos;s work has been featured in numerous films, television shows, and live performances around the world.
            </p>
          </div>
          <div className={styles.bioImage}>
            <img src="/paolo-grosso.jpg" alt="Paolo Grosso" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;