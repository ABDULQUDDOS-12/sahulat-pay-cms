import React from 'react';
import Logo from '../../assets/images/svg image.svg'
import Dicon from '../../assets/images/dashboard.svg' 
import RBicon from '../../assets/images/reports button icon.svg'
import TBicon from '../../assets/images/transaction button icon.svg'
import UBicon from '../../assets/images/user button icon.svg'
import UTicon from '../../assets/images/unique transaction icon.svg'
import PBicon from '../../assets/images/profile button image.svg'
import SBicon from '../../assets/images/settings button image.svg'
import DPicon from '../../assets/images/dummy profile image.png'
const Sidebar = () => {
    return (
            <div className="sideBar">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h2>SahulatPay</h2>
                </div>
                <div className="buttonsContainer">
                    <button><img src={Dicon} alt="" /><p>Dashboard</p></button>
                    <button><img src={RBicon} alt="" /><p>Reports</p></button>
                    <button><img src={TBicon} alt="" /><p>Transactions</p></button>
                    <button><img src={UBicon} alt="" /><p>Users</p></button>
                    <button><img src={UTicon} alt="" /><p>Unique Transaction Links</p></button>
                    <hr />
                    <button><img src={PBicon} alt="" /><p>Profile</p></button>
                    <button><img src={SBicon} alt="" /><p>Settings</p></button>
                    <div className="signin-container">
                        <img src={DPicon} alt="" />
                        <div className="dropdown">
                            <select id="cars" name="cars">
                                <option value="volvo" className="options" selected>Ali Riaz - Admin</option>
                                <option value="saab" className="options">Logout</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Sidebar;
