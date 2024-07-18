import React from 'react';
import threeDotImage from '../../../assets/images/three dot image.svg';
import styles from '../../../pages/Group Dashboard/index.module.css'; 
const SecondCardContainer = () => {
  return (
    <div className={styles.SecondCardContainer}>
      <div className={styles.firstCard}>
        <div className={styles.valuesContainer}>
          <p>Todays</p>
          <p>Transactions</p>
          <h4>1,500</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="" />
        </div>
      </div>

      <div className={styles.firstCard}>
        <div className={styles.valuesContainer}>
          <p>Total Users</p>
          <h4>20,587</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="" />
        </div>
      </div>

      <div className={styles.firstCard}>
        <div className={styles.valuesContainer}>
          <p>Requests</p>
          <h4>120</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="" />
        </div>
      </div>

      <div className={styles.firstCard}>
        <div className={styles.valuesContainer}>
          <p>Pending</p>
          <h4>54</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondCardContainer;
