import React from 'react'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import styles from './index.module.css'
import TableComponent from '../../components/Non-reusable Components/Dashboard Overview Card/TableComponent'
const GroupTransaction = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
      <Sidebar/>
      <div className={styles.mainContent}>
      <Header/>
      <TableComponent/>
      </div>
      </div>
    </div>
  )
}
export default GroupTransaction;
