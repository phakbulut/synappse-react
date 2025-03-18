import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsDownToPeople, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import MiddleServers from './MiddleServers';
import MiddleFriends from './MiddleFriends';
import * as actions from '../../../redux/actions/MainActions'; // Adjust the path to your actions file

const LeftBar = () => {
  const [activeButton, setactiveButton] = useState('friends');
  const dispatch = useDispatch();

  // Fetch state from Redux store
  const { serversOpen, selectedServerId, friendsOpen, usersOpen } = useSelector((state) => state);

  // Update handler to dispatch Redux actions
  const handleActiveButton = (buttontype) => {
    setactiveButton(buttontype);
    if (buttontype === 'friends') {
      dispatch(actions.closeServers());
      dispatch(actions.openFriends());
    } else if (buttontype === 'servers') {
      dispatch(actions.closeFriends());
    }
  };

  return (
    <div className='left-bar-container'>
      {/* Upper Section */}
      <div className='left-bar-top'>
        <div className='left-bar-item'>
          <img
            src={process.env.PUBLIC_URL + '/asset/images/applogo.png'}
            alt='AppLogo'
            className='left-bar-logo mt-3 ml-3 mr-3'
          />
        </div>
        <hr className='left-bar-hr w-50' />
      </div>

      {/* Middle Section */}
      {activeButton === 'servers' ? (
        <MiddleServers
          handleServersOpen={(serverId) => dispatch(actions.openServers(serverId))}
          serversOpen={serversOpen}
          selectedServerId={selectedServerId}
          handleUsersOpen={() => dispatch(actions.openUsers())}
          handleCloseUsers={() => dispatch(actions.closeUsers())}
          usersOpen={usersOpen}
        />
      ) : (
        <MiddleFriends
          handleFriendsOpen={() => dispatch(actions.openFriends())}
          handleCloseFriends={() => dispatch(actions.closeFriends())}
          friendsOpen={friendsOpen}
        />
      )}

      {/* Bottom Section */}
      <div className='left-bar-bottom'>
        <div className='left-bar-item-bottom'>
          {activeButton === 'servers' ? (
            <div
              className='change-button'
              onClick={() => handleActiveButton('friends')}
              title='Switch between Friends and Servers'
            >
              <FontAwesomeIcon icon={faArrowsDownToPeople} />
            </div>
          ) : (
            <div className='change-button' onClick={() => handleActiveButton('servers')}>
              <FontAwesomeIcon icon={faPeopleArrows} />
            </div>
          )}
        </div>
        <hr className='left-bar-hr-bottom w-50' />
        <div className='left-bar-item-bottom'>
          <div className='user-avatar'>
            <img
              src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
              alt='User Avatar'
              className='user-avatar-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;