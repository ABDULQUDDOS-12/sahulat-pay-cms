import React from 'react';
import upArrowImage from '../../assets/images/up arrow image.png';
import downArrowImage from '../../assets/images/down arrow.png';
    const CardsContainer = () => {
  return (
    <div className="cardsContainer">
      <div className="firstCard">
        <div className="imageContainer">
          <img src={upArrowImage} alt="Up Arrow" />
        </div>
        <div className="valuesContainer">
          <p>Total Income</p>
          <h4>RS 632.000</h4>
        </div>
        <div className="valuesUpdate">
          <p>+1.29</p>
        </div>
      </div>
      <div className="firstCard">
        <div className="imageContainer">
          <img src={downArrowImage} alt="Down Arrow" />
        </div>
        <div className="valuesContainer">
          <p>Total Outcome</p>
          <h4>RS 632.000</h4>
        </div>
        <div className="valuesUpdate">
          <p>+1.29</p>
        </div>
      </div>
      <div className="firstCard">
        <div className="imageContainer">
          <img src={upArrowImage} alt="Up Arrow" />
        </div>
        <div className="valuesContainer">
          <p>Current Balance</p>
          <h4>RS 632.000</h4>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
