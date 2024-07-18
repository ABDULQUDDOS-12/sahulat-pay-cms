import React from 'react'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import CardsContainer from '../../components/Reusable Components/Cards'
import SecondCardContainer from '../../components/Non-reusable Components/Dashboard Overview Card/DashboardCardOverview'
import styles from './index.module.css'
const Dashboard = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
      <Sidebar/>
      <div className={styles.mainContent}>
      <Header/>
      <CardsContainer/>
      <SecondCardContainer/>
      </div>
      </div>
    </div>
  )
}
export default Dashboard
