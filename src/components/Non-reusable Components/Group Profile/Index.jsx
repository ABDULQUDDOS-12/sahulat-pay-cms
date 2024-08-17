import React from 'react';
import ProfilePicture from '../../../assets/images/dummy profile image.png';
import styles from '../../../pages/Group Profile/index.module.css';

const FormComponent = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.searchForm} action="#" method="GET">
        <div className={styles.searchField}>
          <label htmlFor="search1">Name</label>
          <input
            type="search"
            id="search1"
            name="search1"
            placeholder="Enter Name"
          />
        </div>
        <div className={styles.searchField}>
          <label htmlFor="search2">Bank Account Number</label>
          <input
            type="search"
            id="search2"
            name="search2"
            placeholder="Enter Bank Account Number"
          />
        </div>
        <div className={styles.searchField}>
          <label htmlFor="search3">Bank</label>
          <input
            type="search"
            id="search3"
            name="search3"
            placeholder="Enter Bank Name"
          />
        </div>
        <div className={styles.searchField}>
          <label htmlFor="search4">ID</label>
          <input
            type="search"
            id="search4"
            name="search4"
            placeholder="ID"
          />
        </div>
        <button type="submit" className={styles.searchButton}>
          Edit Details
        </button>
      </form>
      <div className={styles.profilePicture}>
        <img src={ProfilePicture} alt="Profile" />
        <p>Edit Picture</p>
      </div>
    </div>
  );
};

export default FormComponent;
