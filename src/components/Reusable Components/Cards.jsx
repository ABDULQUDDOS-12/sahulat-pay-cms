import React from 'react';
import upArrowImage from '../../assets/images/up arrow image.png';
import downArrowImage from '../../assets/images/down arrow.png';
import styles from '../../pages/Group Dashboard/index.module.css'; // Adjust the import path as necessary

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.firstCard}>
        <div className={styles.imageContainer}>
          <img src={upArrowImage} alt="Up Arrow" />
        </div>
        <div className={styles.valuesContainer}>
          <p>Total Income</p>
          <h4>RS 632.000</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <p>+1.29</p>
        </div>
      </div>
      <div className={styles.firstCard}>
        <div className={styles.imageContainer}>
          <img src={downArrowImage} alt="Down Arrow" />
        </div>
        <div className={styles.valuesContainer}>
          <p>Total Outcome</p>
          <h4>RS 632.000</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <p>+1.29</p>
        </div>
      </div>
      <div className={styles.firstCard}>
        <div className={styles.imageContainer}>
          <img src={upArrowImage} alt="Up Arrow" />
        </div>
        <div className={styles.valuesContainer}>
          <p>Current Balance</p>
          <h4>RS 632.000</h4>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
