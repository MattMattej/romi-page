import React from 'react';
import Image from 'next/image';
import styles from '../styles/HomeSection.module.css';
import ExpandableSection from './ExpandableSection';

const HomeSection = () => {
  return (
    <section id="home" className={`${styles.homeSection} section`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Original music soundtracks that transcend boundaries, reaching global audiences and elevating the art of visual storytelling to its fullest potential.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/paolo-grosso.jpg"
              alt="Paolo Grosso"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
        <div className={styles.expandableSections}>
          <ExpandableSection
            title="Unique Sound and Musical Signature"
            content="My compositions always arise from very particular and varied places, inspired by the narrative and the world created in each project. By blending diverse elements, influences and musical genres, I manage to create a unique sound palette and musical signature for each particular project."
          />
          <ExpandableSection
            title="Versatile Composer"
            content="My musical skills and abilities span a wide range of genres and styles, from contemporary orchestral pieces, chamber ensembles and Big Bands to music from diverse world cultures and electrifying digitally developed electronic soundscapes. I have the ability to adapt my style and approach to the unique vision and tone of each artistic project, making the music fit seamlessly with the director's creative vision."
          />
          <ExpandableSection
            title="Collaborative Teamwork"
            content="Beyond the work environment, I have a deep respect for the collaborative nature and teamwork of every artistic process. I am captivated by the synergy that comes from working closely with directors and developers, producers and the entire creative team, bringing all my experience and maximum responsibility to each project."
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;