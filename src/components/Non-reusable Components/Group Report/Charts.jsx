import React from 'react'
import styles from '../../../pages/Group Report/index.module.css'
const Charts = () => {
  return (
    <div className={styles.mainChartContainer}>
      <div className={styles.barGraphContainer}>
        <div className={styles.header}>
          <p>Analytics</p>
          <select name="" id="" className={styles.yearDropDown}>
            <option value="">2020</option>
            <option value="">2021</option>
            <option value="">2022</option>
            <option value="">2023</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Charts