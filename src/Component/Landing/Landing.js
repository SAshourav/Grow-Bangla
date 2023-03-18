import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function LandingPage() {
  const navigate = useNavigate();
  const cosumerHandler = () => {
    navigate('/login');
  }
  const farmerHandler = () => {
    navigate('/loginF');
  }
  const [consumerCount, setConsumerCount] = useState(0);
  const [farmerCount, setFarmerCount] = useState(0);

  useEffect(() => {
    const consumerInterval = setInterval(() => {
      if (consumerCount < 3000) {
        setConsumerCount(consumerCount + 1);
      }
    }, 0.5);

    const farmerInterval = setInterval(() => {
      if (farmerCount < 300) {
        setFarmerCount(farmerCount + 1);
      }
    }, 1);

    // Clear intervals on unmount
    return () => {
      clearInterval(consumerInterval);
      clearInterval(farmerInterval);
    };
  }, [consumerCount, farmerCount]);

  return (
    <div>
      <div className="leading-login">
        <h2>Welcome To Grow Bangla !</h2>
        <h2>Which Role You Want To Play?</h2>
        <button onClick={cosumerHandler}>Consumer</button>
        <button onClick={farmerHandler}>Farmer</button>
      </div>
      <div className="counters">
        <div className="consumer">
          <h1>{consumerCount}<small>++</small></h1>
          <p>We have a large amount of satisfied consumers</p>
        </div>
        <div className="farmer">
          <h1>{farmerCount}<small>++</small></h1>
          <p>We have a large amount of reliable farmers</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
