import React from 'react';
import styles from '../../../pages/Group Dashboard/index.module.css';
import adobeIcon from '../../../assets/images/adobe icon.png';
import mcdonaldIcon from '../../../assets/images/mcdonald icon.png';
import levisIcon from '../../../assets/images/levis icon.png';

const TableComponent = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.headings}>
        <h3>Latest Transaction</h3>
        <div className={styles.searchbarContainer}>
          <input
            className={styles.searchinput}
            type="text"
            name="q"
            placeholder="Search for anything"
          />
        </div>
        <div className={styles.dropdownContainers}>
          <select id="dateRange" className={styles.dropDowns}>
            <option value="10-20-may">10 May - 20 May</option>
            <option value="21-31-may">21 May - 31 May</option>
            <option value="1-10-june">1 June - 10 June</option>
            <option value="11-20-june">11 June - 20 June</option>
            <option value="21-30-june">21 June - 30 June</option>
          </select>
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
          <tr>
            <td className={styles.imageWithText}>
              <img src={adobeIcon} alt="Adobe After Effect" /> Adobe After Effect
            </td>
            <td>Sat, 20 April 2020</td>
            <td>$80.09</td>
            <td><p>Deposited</p></td>
          </tr>
          <tr>
            <td className={styles.imageWithText}>
              <img src={mcdonaldIcon} alt="McDonald's" /> McDonald's
            </td>
            <td>Fri, 19 April 2020</td>
            <td>$7.03</td>
            <td><p>Deposited</p></td>
          </tr>
          <tr>
            <td className={styles.imageWithText}>
              <img src={levisIcon} alt="Levis" /> Levis
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

export default TableComponent;
