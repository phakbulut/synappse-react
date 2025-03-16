import React, { useState } from 'react';
import './../asset/css/main.css';
import LeftBar from '../components/main/Leftbar/LeftBar';
import Servers from '../components/main/Leftbar/LeftMenus/Servers';

const Main = () => {
  const [serversOpen, setServersOpen] = useState(true);

  const handleServersOpen = () => {
    setServersOpen(prevState => {
      const newState = !prevState;
      return newState;
    });
    
  };

  return (
    <div className='main'>
      <div className='background-overlay'></div>
      <div className='main-content'>
        <LeftBar />
        <Servers 
          className={serversOpen ? "open" : "closed"} 
          isOpen={serversOpen}
        />
        <div className='logo-container'>
          <img 
            className="AppMainLogo" 
            src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} 
            alt="AppLogo" 
          />
        </div>
        <div className='main-title-text'>
           <h1>Welcome to Synappse</h1>
           <button 
             onClick={() => {
               console.log("Button clicked directly");
               handleServersOpen();
             }}
             style={{ padding: '10px 20px', backgroundColor: 'var(--orange)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
           >
             {serversOpen ? "Close Servers" : "Open Servers"}
           </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
