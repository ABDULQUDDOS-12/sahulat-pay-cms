import React from 'react';
import handGesture from '../../assets/images/hand gesture.png';

const Header = () => (
  <div className="mainContent">
  <div className="headerContainer">
    <div className="textContainer">
      <h2>
        Welcome Back, Ali <img src={handGesture} alt="hand gesture" />
      </h2>
      <p>Send and Receive funds with pleasure</p>
    </div>
    <div className="searchbarContainer">
      <input className="searchinput" type="text" placeholder="Search for anything" />
    </div>
  </div>
  </div>
);
export default Header;