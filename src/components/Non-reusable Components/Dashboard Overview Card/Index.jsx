import React from 'react';
import styles from './index.module.css';
import threeDotImage from '../../../assets/images/three dot image.svg';
const DashboardOverviewCard = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className={styles.valuesContainer}>
          <p>Today's Transactions</p>
          <h4>1,500</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="Three Dots" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.valuesContainer}>
          <p>Total Users</p>
          <h4>20,587</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="Three Dots" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.valuesContainer}>
          <p>Requests</p>
          <h4>120</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="Three Dots" />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.valuesContainer}>
          <p>Pending Requests</p>
          <h4>54</h4>
        </div>
        <div className={styles.valuesUpdate}>
          <img src={threeDotImage} alt="Three Dots" />
        </div>
      </div>
    </div>
  );
};
export default DashboardOverviewCard;
