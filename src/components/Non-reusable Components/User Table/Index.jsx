import React from 'react';
import adobeIcon from '../../../assets/images/adobe icon.png';
import mcdonaldIcon from '../../../assets/images/mcdonald icon.png';
import levisIcon from '../../../assets/images/levis icon.png';
import styles from '../../../pages/Users/index.module.css'
const UserTable = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.headings}>
        <h3>Users</h3>
        <div className={styles.searchbarContainer}>
          <input className={styles.searchinput} type="text" name="q" placeholder="Search" />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Row data */}
          <tr>
            <td className={styles.imageWithText}>
              <img src={adobeIcon} alt="Adobe Icon" /> Adobe After Effect
            </td>
            <td>Sat, 20 April 2020</td>
            <td>$80.09</td>
            <td><p>Deposited</p></td>
          </tr>
          <tr>
            <td className={styles.imageWithText}>
              <img src={mcdonaldIcon} alt="McDonald's Icon" /> McDonald's
            </td>
            <td>Fri, 19 April 2020</td>
            <td>$7.03</td>
            <td><p>Deposited</p></td>
          </tr>
          <tr>
            <td className={styles.imageWithText}>
              <img src={levisIcon} alt="Levis Icon" /> Levis
            </td>
            <td>Tue, 19 Apr 2020</td>
            <td>$30.09</td>
            <td><p>Deposited</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;