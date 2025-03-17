import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsDownToPeople, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import MiddleServers from './MiddleServers';
import MiddleFriends from './MiddleFriends';

const LeftBar = ({ handleServersOpen, handleCloseServers, serversOpen, selectedServerId, handleFriendsOpen, handleCloseFriends, friendsOpen }) => {
  const [activeButton, setactiveButton] = useState('friends');
  
  const handleActiveButton = (buttontype) => {
    setactiveButton(buttontype);
    if (buttontype === 'friends') {
      handleCloseServers();
      handleFriendsOpen();
    } else if (buttontype === 'servers') {
      handleCloseFriends();
    }
  }

  return (<div className='left-bar-container '>
    {/* Üst Kısım */}
    <div className='left-bar-top'>
      <div className='left-bar-item'>
        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'}
          alt="AppLogo"
          className='left-bar-logo mt-3 ml-3 mr-3' />
      </div>
      <hr className='left-bar-hr w-50' />
    </div>

    {/* Orta Kısım */}
    {activeButton === 'servers' ? 
      <MiddleServers 
        handleServersOpen={handleServersOpen} 
        serversOpen={serversOpen} 
        selectedServerId={selectedServerId} 
      /> 
      :
      <MiddleFriends 
        handleFriendsOpen={handleFriendsOpen}
        handleCloseFriends={handleCloseFriends}
        friendsOpen={friendsOpen}
      />
    }


    {/* Alt Kısım */}
    <div className='left-bar-bottom'>
      <div className='left-bar-item-bottom'>
        {activeButton === 'servers' ? (
          <div className='change-button' onClick={() => handleActiveButton('friends') } title="Arkadaşlar ve Serverlar arasında geçiş yap">
            <FontAwesomeIcon icon={faArrowsDownToPeople} />
          </div>
        ) : (
          <div className='change-button' onClick={() => handleActiveButton('servers')}>
            <FontAwesomeIcon icon={faPeopleArrows} />
          </div>
        )}
      </div>
      <hr className='left-bar-hr-bottom w-50' />
      <div className='left-bar-item-bottom '>
        <div className='user-avatar'>
          <img src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
            alt="AppLogo"
            className='user-avatar-img' />
        </div>
      </div>
    </div>
  </div>
  );
};

export default LeftBar;