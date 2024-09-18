import React, { useState } from 'react';
import styles from '../styles/ExpandableSection.module.css';

const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expandableSection}>
      <h3 
        className={styles.title} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}>
          ▼
        </span>
      </h3>
      {isExpanded && <p className={styles.content}>{content}</p>}
    </div>
  );
};

export default ExpandableSection;