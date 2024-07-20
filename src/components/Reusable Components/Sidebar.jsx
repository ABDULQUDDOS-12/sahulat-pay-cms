import React from 'react';
import Logo from '../../assets/images/svg image.svg';
import Dicon from '../../assets/images/dashboard.svg';
import RBicon from '../../assets/images/reports button icon.svg';
import TBicon from '../../assets/images/transaction button icon.svg';
import UBicon from '../../assets/images/user button icon.svg';
import UTicon from '../../assets/images/unique transaction icon.svg';
import PBicon from '../../assets/images/profile button image.svg';
import SBicon from '../../assets/images/settings button image.svg';
import DPicon from '../../assets/images/dummy profile image.png';
import styles from '../../pages/Group Dashboard/index.module.css';
import {Link} from'react-router-dom';
const Sidebar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.logo}>
                <img src={Logo} alt="" />
                <h2>SahulatPay</h2>
            </div>
            <div className={styles.buttonsContainer}>
                <Link to="/" className={styles.link}><button><img src={Dicon} alt="" /><p>Dashboard</p></button></Link>
                <Link to="/reports" className={styles.link}><button><img src={RBicon} alt="" /><p>Reports</p></button></Link>
                <Link to="/transaction" className={styles.link}><button><img src={TBicon} alt="" /><p>Transactions</p></button></Link>
                <Link to="/users" className={styles.link}><button><img src={UBicon} alt="" /><p>Users</p></button></Link>
                <Link to="/unique-transactions" className={styles.link}><button><img src={UTicon} alt="" /><p>Unique Transaction Links</p></button></Link>
                <hr />
                <Link to="/profile" className={styles.link}><button><img src={PBicon} alt="" /><p>Profile</p></button></Link>
                <Link to="/settings" className={styles.link}><button><img src={SBicon} alt="" /><p>Settings</p></button></Link>
                <div className={styles.signinContainer}>
                    <img src={DPicon} alt="" />
                    <div className={styles.dropdown}>
                        <select id="cars" name="cars">
                            <option value="volvo" className={styles.options} selected>Ali Riaz - Admin</option>
                            <option value="saab" className={styles.options}>Logout</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
