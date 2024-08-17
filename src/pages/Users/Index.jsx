import React from 'react'
import styles from './index.module.css'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import UserTable from '../../components/Non-reusable Components/User Table/Index'
const  Users = () => {
  return (
    <div>
     <div className={styles.mainContainer}>
     <Sidebar/>
     <div className={styles.mainContent}>
     <Header/>
     <UserTable/>
     </div>
     </div>
    </div>
  )
}

export default Users;