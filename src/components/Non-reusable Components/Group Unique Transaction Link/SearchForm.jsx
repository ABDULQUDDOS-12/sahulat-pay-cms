import React from 'react';
import styles from '../../../pages/Group Unique Transaction Link/index.module.css';

const SearchForm = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.searchForm} action="#" method="GET">
        <div className={styles.searchField}>
          <input type="search" id="search1" name="search1" placeholder="Enter Name" />
        </div>
        <div className={styles.searchField}>
          <input type="search" id="search2" name="search2" placeholder="Enter Bank" />
        </div>
        <div className={styles.searchField}>
          <input type="search" id="search3" name="search3" placeholder="Enter Amount" />
        </div>
        <button type="submit" className={styles.searchButton}>
          <h1>+</h1>Generate
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
