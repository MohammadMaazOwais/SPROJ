import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

  function HomePage() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {

      console.log('Button clicked');
      setButtonClicked(true);
      if(buttonClicked)
      {
        navigate('/GamePage');
      }
    }

  return (
    <div className='outer-container'>
       <div className = "homepage-container">
        <div class="center">
          <img src="https://www.getbadnews.com/wp-content/uploads/2021/09/LFq72phE.png" /> 
          <div class="opening-text">
            <p>From fake news to chaos! How bad are you? Get as many followers as you can.</p>
          </div> 
          <div>
          <button className='button-start' onClick={handleButtonClick}>
            <span>START</span>
          </button>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default HomePage