import React from 'react'
import styles from './index.module.css'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import SearchForm from '../../components/Non-reusable Components/Group Unique Transaction Link/SearchForm'
const  UniqueTransactions = () => {
  return (
    <div>
     <div className={styles.mainContainer}>
     <Sidebar/>
     <div className={styles.mainContent}>
     <Header/>
     <SearchForm/>
     </div>
     </div>
    </div>
  )
}

export default UniqueTransactions