import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import * as actions from '../redux/actions/MainActions';

const Main = () => {
  const dispatch = useDispatch();

  // Redux state'inden durumları al
  const {
    serversOpen,
    selectedServerId,
    friendsOpen,
    notificationsOpen,
    addPeopleOpen,
    usersOpen,
    textChannelOpen,
    voiceChannelOpen,
    githubChannelOpen,
    todoChannelOpen,
    activeChannelId
  } = useSelector((state) => state);

  // Handler fonksiyonlarını Redux action'larıyla güncelle
  const handleServersOpen = useCallback((serverId) => {
    dispatch(actions.openServers(serverId));
  }, [dispatch]);

  const handleCloseServers = useCallback(() => {
    dispatch(actions.closeServers());
  }, [dispatch]);

  const handleFriendsOpen = useCallback(() => {
    dispatch(actions.openFriends());
  }, [dispatch]);

  const handleCloseFriends = useCallback(() => {
    dispatch(actions.closeFriends());
  }, [dispatch]);

  const handleNotificationsOpen = useCallback(() => {
    dispatch(actions.openNotifications());
  }, [dispatch]);

  const handleCloseNotifications = useCallback(() => {
    dispatch(actions.closeNotifications());
  }, [dispatch]);

  const handleAddPeopleOpen = useCallback(() => {
    dispatch(actions.openAddPeople());
  }, [dispatch]);

  const handleCloseAddPeople = useCallback(() => {
    dispatch(actions.closeAddPeople());
  }, [dispatch]);

  const handleUsersOpen = useCallback(() => {
    dispatch(actions.openUsers());
  }, [dispatch]);

  const handleCloseUsers = useCallback(() => {
    dispatch(actions.closeUsers());
  }, [dispatch]);

  const handleChannelClick = useCallback((channelId, channelType) => {
    dispatch(actions.setActiveChannel(channelId, channelType));
  }, [dispatch]);

  const handleCloseTextChannel = useCallback(() => {
    dispatch(actions.closeTextChannel());
  }, [dispatch]);

  const handleCloseVoiceChannel = useCallback(() => {
    dispatch(actions.closeVoiceChannel());
  }, [dispatch]);

  const handleCloseGithubChannel = useCallback(() => {
    dispatch(actions.closeGithubChannel());
  }, [dispatch]);

  const handleCloseTodoChannel = useCallback(() => {
    dispatch(actions.closeTodoChannel());
  }, [dispatch]);

  const toggleServersVisibility = useCallback(() => {
    dispatch(serversOpen ? actions.closeServers() : actions.openServers(selectedServerId));
  }, [dispatch, serversOpen, selectedServerId]);

  // Global erişim için (Redux ile bu gerekli olmayabilir, ama şimdilik bırakıyorum)
  window.toggleServersVisibility = toggleServersVisibility;

  // Ana içeriğin görünürlüğü
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
        
        {/* Karşılama ekranı */}
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