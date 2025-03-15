import React from 'react';
import './../asset/css/main.css';
import LeftBar from '../components/main/LeftBar';
const Main = () => {
  return (
    <div className='main'>
      <div className='background-overlay'></div>
      <div className='main-content'>
        <LeftBar />
        <div className='logo-container'>
          <img 
            className="AppMainLogo" 
            src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} 
            alt="AppLogo" 
          />
        </div>
        <div className='main-title-text'>
           <h1>Welcome to Synappse</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
