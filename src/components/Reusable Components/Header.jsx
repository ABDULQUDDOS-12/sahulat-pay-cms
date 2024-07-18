import React from 'react';
import handGesture from '../../assets/images/hand gesture.png';
import styles from '../../pages/Group Dashboard/index.module.css'; // Adjust the import path as necessary

const Header = () => (
  <div className={styles.mainContent}>
    <div className={styles.headerContainer}>
      <div className={styles.textContainer}>
        <h2>
          Welcome Back, Ali <img src={handGesture} alt="hand gesture" />
        </h2>
        <p>Send and Receive funds with pleasure</p>
      </div>
      <div className={styles.searchbarContainer}>
        <input className={styles.searchinput} type="text" placeholder="Search for anything" />
      </div>
    </div>
  </div>
);

export default Header;
