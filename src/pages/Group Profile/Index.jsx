import React from 'react'
import Sidebar from '../../components/Reusable Components/Sidebar'
import Header from '../../components/Reusable Components/Header'
import styles from './index.module.css'
import FormComponent from '../../components/Non-reusable Components/Group Profile/Index'
const Profile = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
      <Sidebar/>
      <div className={styles.mainContent}>
      <Header/>
      <FormComponent/>
      </div>
      </div>
    </div>
  )
}
export default Profile;
