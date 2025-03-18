// redux/actions/mainActions.js
import * as actionTypes from './Actiontypes'; // Düzeltildi

export const openLeftBarMiddleFriends = () => ({
  type: actionTypes.OPEN_LEFTBAR_MIDDLE_FRIENDS,
});

export const openLeftBarMiddleServers = () => ({
  type: actionTypes.OPEN_LEFTBAR_MIDDLE_SERVERS,
});

export const openServers = (serverId) => ({
  type: actionTypes.OPEN_SERVERS,
  payload: serverId,
});

export const closeServers = () => ({
  type: actionTypes.CLOSE_SERVERS,
});

export const setSelectedServerId = (serverId) => ({
  type: actionTypes.SET_SELECTED_SERVER_ID,
  payload: serverId,
});

export const openFriends = () => ({
  type: actionTypes.OPEN_FRIENDS,
});

export const closeFriends = () => ({
  type: actionTypes.CLOSE_FRIENDS,
});

export const openNotifications = () => ({
  type: actionTypes.OPEN_NOTIFICATIONS,
});

export const closeNotifications = () => ({
  type: actionTypes.CLOSE_NOTIFICATIONS,
});

export const openAddPeople = () => ({
  type: actionTypes.OPEN_ADD_PEOPLE,
});

export const closeAddPeople = () => ({
  type: actionTypes.CLOSE_ADD_PEOPLE,
});

export const openUsers = () => ({
  type: actionTypes.OPEN_USERS,
});

export const closeUsers = () => ({
  type: actionTypes.CLOSE_USERS,
});

export const openTextChannel = () => ({
  type: actionTypes.OPEN_TEXT_CHANNEL,
});

export const closeTextChannel = () => ({
  type: actionTypes.CLOSE_TEXT_CHANNEL,
});

export const openVoiceChannel = () => ({
  type: actionTypes.OPEN_VOICE_CHANNEL,
});

export const closeVoiceChannel = () => ({
  type: actionTypes.CLOSE_VOICE_CHANNEL,
});

export const openGithubChannel = () => ({
  type: actionTypes.OPEN_GITHUB_CHANNEL,
});

export const closeGithubChannel = () => ({
  type: actionTypes.CLOSE_GITHUB_CHANNEL,
});

export const openTodoChannel = () => ({
  type: actionTypes.OPEN_TODO_CHANNEL,
});

export const closeTodoChannel = () => ({
  type: actionTypes.CLOSE_TODO_CHANNEL,
});

export const setActiveChannel = (channelId, channelType) => ({
  type: actionTypes.SET_ACTIVE_CHANNEL,
  payload: { channelId, channelType },
});

export const closeAllChannels = () => ({
  type: actionTypes.CLOSE_ALL_CHANNELS,
});

export const addChannelGroup = (groupName) => ({
  type: actionTypes.ADD_CHANNEL_GROUP,
  payload: groupName,
});

export const toggleChannelGroup = (groupId) => ({
  type: actionTypes.TOGGLE_CHANNEL_GROUP,
  payload: groupId,
});

export const toggleAddChannelForm = (groupId) => ({
  type: actionTypes.TOGGLE_ADD_CHANNEL_FORM,
  payload: groupId,
});

export const setNewChannelName = (groupId, name) => ({
  type: actionTypes.SET_NEW_CHANNEL_NAME,
  payload: { groupId, name },
});

export const setNewChannelType = (groupId, type) => ({
  type: actionTypes.SET_NEW_CHANNEL_TYPE,
  payload: { groupId, type },
});

export const addChannel = (groupId) => ({
  type: actionTypes.ADD_CHANNEL,
  payload: groupId,
});

export const toggleUserSelection = (userId) => ({
  type: actionTypes.TOGGLE_USER_SELECTION,
  payload: userId,
});

export const clearSelectedUsers = () => ({
  type: actionTypes.CLEAR_SELECTED_USERS,
});

export const addSelectedUsers = () => ({
  type: actionTypes.ADD_SELECTED_USERS,
});