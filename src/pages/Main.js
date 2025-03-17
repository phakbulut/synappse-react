import React, { useState } from 'react';
import './../asset/css/main.css';
import LeftBar from '../components/main/Leftbar/LeftBar';
import Servers from '../components/main/Leftbar/LeftMenus/Servers/Servers';
import Friends from '../components/main/Leftbar/LeftMenus/Friends/Friends';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NotificationsMenu from '../components/main/Leftbar/LeftMenus/Notifications/NotificationsMenu';
const Main = () => {
  const [serversOpen, setServersOpen] = useState(false);
  const [selectedServerId, setSelectedServerId] = useState(null);
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const handleServersOpen = (serverId) => {
    setServersOpen(true);
    setSelectedServerId(serverId);
  };

  const handleCloseServers = () => {
    setServersOpen(false);
    setSelectedServerId(null);
  };
  const handleFriendsOpen = () => {
    setFriendsOpen(prev => !prev);
    if (serversOpen) {
      setServersOpen(false);
      setSelectedServerId(null);
    }
  };

  const handleCloseFriends = () => {
    setFriendsOpen(false);
  };
  const handleNotificationsOpen = () => {
    setNotificationsOpen(prev => !prev);
    if (serversOpen) {
      setServersOpen(false);
      setSelectedServerId(null);
    }
    if (friendsOpen) {
      setFriendsOpen(false);
    }
  };
  const handleCloseNotifications = () => {
    setNotificationsOpen(false);
  };

  return (
    <div className='main'>
      <div className='background-overlay'></div>
      <div className='main-content'>
        <LeftBar
          handleServersOpen={handleServersOpen}
          handleCloseServers={handleCloseServers}
          serversOpen={serversOpen}
          selectedServerId={selectedServerId}
          handleFriendsOpen={handleFriendsOpen}
          handleCloseFriends={handleCloseFriends}
        />
        <Servers
          className={serversOpen ? "open" : "closed"}
          isOpen={serversOpen}
          selectedServerId={selectedServerId}
          handleCloseServers={handleCloseServers}
        />
        <Friends
          className={friendsOpen ? "open" : "closed"}
          isOpen={friendsOpen}
          handleCloseFriends={handleCloseFriends}
        />
        <NotificationsMenu
          className={notificationsOpen ? "open" : "closed"}
          isOpen={notificationsOpen}
          handleCloseNotifications={handleCloseNotifications}
        />
        <div className='notification-icon' onClick={handleNotificationsOpen}>
          <FontAwesomeIcon 
            icon={faBell} 
            className={notificationsOpen ? 'active' : ''} 
          />
        </div>
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
