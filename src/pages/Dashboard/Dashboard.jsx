import React from 'react'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import CardsContainer from '../../components/Reusable Components/Cards'
const Dashboard = () => {
  return (
    <div>
      <div className="mainContainer">
      <Sidebar/>
      <div className="mainContent">
      <Header/>
      <CardsContainer/>
      </div>
      </div>
    </div>
  )
}
export default Dashboard
