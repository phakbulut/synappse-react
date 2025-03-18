import React, { useState, useCallback, useMemo } from 'react';
import './../asset/css/main.css';
import LeftBar from '../components/main/Leftbar/LeftBar';
import Servers from '../components/main/Leftbar/LeftMenus/Servers/Servers';
import Friends from '../components/main/Leftbar/LeftMenus/Friends/Friends';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NotificationsMenu from '../components/main/Leftbar/RightMenus/Notifications/NotificationsMenu';
import AddPeople from '../components/main/Leftbar/LeftMenus/Servers/AddPeople';
import Users from '../components/main/Leftbar/RightMenus/users/Users';
import TextChannel from '../components/main/channels/TextChannel';
import VoiceChannel from '../components/main/channels/VoiceChannel';
import GithubChannel from '../components/main/channels/GithubChannel';
import TodoChannel from '../components/main/channels/TodoChannel';

// Kanal işleyici fonksiyonlarını içe aktar
import {
  closeAllChannels,
  handleChannelClick as channelClickHandler,
  handleCloseTextChannel as closeTextChannel,
  handleCloseVoiceChannel as closeVoiceChannel,
  handleCloseGithubChannel as closeGithubChannel,
  handleCloseTodoChannel as closeTodoChannel,
  toggleServersVisibility as toggleServers
} from '../handlers/ChannelHandlers';

const Main = () => {
  const [serversOpen, setServersOpen] = useState(false);
  const [selectedServerId, setSelectedServerId] = useState(null);
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [addPeopleOpen, setAddPeopleOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  
  // Kanal durum state'leri
  const [textChannelOpen, setTextChannelOpen] = useState(false);
  const [voiceChannelOpen, setVoiceChannelOpen] = useState(false);
  const [githubChannelOpen, setGithubChannelOpen] = useState(false);
  const [todoChannelOpen, setTodoChannelOpen] = useState(false);
  
  // Aktif kanal state'i
  const [activeChannelType, setActiveChannelType] = useState(null);
  const [activeChannelId, setActiveChannelId] = useState(null);

  // channelSetters'ı useMemo ile optimize et
  const channelSetters = useMemo(() => ({
    setTextChannelOpen,
    setVoiceChannelOpen,
    setGithubChannelOpen,
    setTodoChannelOpen,
    setActiveChannelType,
    setActiveChannelId
  }), [
    setTextChannelOpen,
    setVoiceChannelOpen,
    setGithubChannelOpen,
    setTodoChannelOpen,
    setActiveChannelType,
    setActiveChannelId
  ]);
  
  // useCallback ile fonksiyonları memoize et
  const handleCloseTextChannel = useCallback((e) => closeTextChannel(e, channelSetters), [channelSetters]);
  const handleCloseVoiceChannel = useCallback((e) => closeVoiceChannel(e, channelSetters), [channelSetters]);
  const handleCloseGithubChannel = useCallback((e) => closeGithubChannel(e, channelSetters), [channelSetters]);
  const handleCloseTodoChannel = useCallback((e) => closeTodoChannel(e, channelSetters), [channelSetters]);
  const handleChannelClick = useCallback((channelId, channelType) => 
    channelClickHandler(channelId, channelType, channelSetters), [channelSetters]);
  const toggleServersVisibility = useCallback((e) => toggleServers(e, setServersOpen), []);

  // Global erişim için
  window.toggleServersVisibility = toggleServersVisibility;

  const handleServersOpen = (serverId) => {
    setServersOpen(true);
    setSelectedServerId(serverId);
    
    // Servers açıldığında Users panelini açalım, kanal açmayalım
    setUsersOpen(true);
    
    // Diğer panelleri kapatalım
    if (friendsOpen) {
      setFriendsOpen(false);
    }
    if (notificationsOpen) {
      setNotificationsOpen(false);
    }
    if (addPeopleOpen) {
      setAddPeopleOpen(false);
    }
    
    // Herhangi bir kanal açık değil
    closeAllChannels(channelSetters);
  };

  const handleCloseServers = () => {
    setServersOpen(false);
    setSelectedServerId(null);
    
    // Servers kapanınca Users panelini de kapatalım
    setUsersOpen(false);
    
    // Tüm kanalları kapatalım
    closeAllChannels(channelSetters);
  };
  
  const handleFriendsOpen = () => {
    setFriendsOpen(prev => !prev);
    if (serversOpen) {
      setServersOpen(false);
      setSelectedServerId(null);
      setUsersOpen(false);
    }
    
    // Tüm kanalları kapatalım
    closeAllChannels(channelSetters);
  };

  const handleCloseFriends = () => {
    setFriendsOpen(false);
  };
  
  const handleNotificationsOpen = () => {
    setNotificationsOpen(prev => !prev);
    if (serversOpen) {
      setServersOpen(false);
      setSelectedServerId(null);
      setUsersOpen(false);
    }
    if (friendsOpen) {
      setFriendsOpen(false);
    }
    
    // Tüm kanalları kapatalım
    closeAllChannels(channelSetters);
  };
  
  const handleCloseNotifications = () => {
    setNotificationsOpen(false);
  };
  
  const handleCloseAddPeople = () => {
    setAddPeopleOpen(false);
  };
  
  const handleAddPeopleOpen = () => {
    setAddPeopleOpen(true);
    if (usersOpen) {
      setUsersOpen(false);
    }
  };
  
  const handleUsersOpen = () => {
    setUsersOpen(true);
    if (addPeopleOpen) {
      setAddPeopleOpen(false);
    }
  };
  
  const handleCloseUsers = () => {
    setUsersOpen(false);
  };
  
  // Ana içeriğin görünürlüğü (herhangi bir kanal açıkken gizlenecek)
  const isAnyChannelOpen = textChannelOpen || voiceChannelOpen || githubChannelOpen || todoChannelOpen;

  return (
    <div className='main'>
      <div className='background-overlay'></div>
      <div className='main-content'>
        {/* Kanal Bileşenleri */}
        <TextChannel
          className={textChannelOpen ? "open" : "closed"}
          isOpen={textChannelOpen}
          handleCloseTextChannel={handleCloseTextChannel}
          channelId={activeChannelId}
          toggleServersVisibility={toggleServersVisibility}
        />
        <VoiceChannel
          className={voiceChannelOpen ? "open" : "closed"}
          isOpen={voiceChannelOpen}
          handleCloseVoiceChannel={handleCloseVoiceChannel}
          channelId={activeChannelId}
          toggleServersVisibility={toggleServersVisibility}
        />
        <GithubChannel
          className={githubChannelOpen ? "open" : "closed"}
          isOpen={githubChannelOpen}
          handleCloseGithubChannel={handleCloseGithubChannel}
          channelId={activeChannelId}
          toggleServersVisibility={toggleServersVisibility}
        />
        <TodoChannel
          className={todoChannelOpen ? "open" : "closed"}
          isOpen={todoChannelOpen}
          handleCloseTodoChannel={handleCloseTodoChannel}
          channelId={activeChannelId}
          toggleServersVisibility={toggleServersVisibility}
        />
        
        <AddPeople
          className={addPeopleOpen ? "open" : "closed"}
          isOpen={addPeopleOpen}
          handleCloseAddPeople={handleCloseAddPeople}
        />
        
        <LeftBar
          handleServersOpen={handleServersOpen}
          handleCloseServers={handleCloseServers}
          serversOpen={serversOpen}
          selectedServerId={selectedServerId}
          handleFriendsOpen={handleFriendsOpen}
          handleCloseFriends={handleCloseFriends}
          handleUsersOpen={handleUsersOpen}
          handleCloseUsers={handleCloseUsers}
        />
        
        <Servers
          className={serversOpen ? "open" : "closed"}
          isOpen={serversOpen}
          selectedServerId={selectedServerId}
          handleCloseServers={handleCloseServers}
          handleAddPeopleOpen={handleAddPeopleOpen}
          addPeopleOpen={addPeopleOpen}
          handleChannelClick={handleChannelClick}
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
        
        <Users
          className={usersOpen ? "open" : "closed"}
          isOpen={usersOpen}
          handleCloseUsers={handleCloseUsers}
        />
        
        <div className='notification-icon' onClick={handleNotificationsOpen}>
          <FontAwesomeIcon 
            icon={faBell} 
            className={notificationsOpen ? 'active' : ''} 
          />
        </div>
        
        {/* Karşılama ekranı - Kanal açık değilken gösterilir */}
        {!isAnyChannelOpen && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
