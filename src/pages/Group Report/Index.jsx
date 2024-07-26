import React from 'react'
import styles from './index.module.css'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import CardsContainer from '../../components/Reusable Components/Cards'
import GroupReport from '../../components/Non-reusable Components/Group Report/Charts'
const Report = () => {
  return (
    <div>
    <div className={styles.mainContainer}>
    <Sidebar/>
    <div className={styles.mainContent}>
    <Header/>
    <CardsContainer/>
    <GroupReport/>
    </div>
    </div>
   </div>
  )
}

export default Report