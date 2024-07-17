import React from 'react'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import CardsContainer from '../../components/Reusable Components/Cards'
import DashboardOverviewCard from '../../components/Non-reusable Components/Dashboard Overview Card/Index'
const Dashboard = () => {
  return (
    <div>
      <div className="mainContainer">
      <Sidebar/>
      <div className="mainContent">
      <Header/>
      <CardsContainer/>
      <DashboardOverviewCard/>
      </div>
      </div>
    </div>
  )
}
export default Dashboard
