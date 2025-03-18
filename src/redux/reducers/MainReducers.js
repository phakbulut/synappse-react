// redux/reducers/mainReducer.js
import * as actionTypes from '../actions/Actiontypes'; // Senin dosya ismin
import initialState from './InitialStates'; // Senin dosya ismin

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_LEFTBAR_MIDDLE_FRIENDS:
            return { ...state, leftBarMiddle: "friends" };
        case actionTypes.OPEN_LEFTBAR_MIDDLE_SERVERS:
            return { ...state, leftBarMiddle: "servers" };

        case actionTypes.OPEN_SERVERS:
            return {
                ...state,
                serversOpen: true,
                selectedServerId: action.payload,
                usersOpen: true,
                friendsOpen: false,
                notificationsOpen: false,
                addPeopleOpen: false,
                textChannelOpen: false,
                voiceChannelOpen: false,
                githubChannelOpen: false,
                todoChannelOpen: false,
                activeChannelType: null,
                activeChannelId: null,
            };
        case actionTypes.CLOSE_SERVERS:
            return {
                ...state,
                serversOpen: false,
                selectedServerId: null,
                usersOpen: false,
                textChannelOpen: false,
                voiceChannelOpen: false,
                githubChannelOpen: false,
                todoChannelOpen: false,
                activeChannelType: null,
                activeChannelId: null,
            };
        case actionTypes.SET_SELECTED_SERVER_ID:
            return { ...state, selectedServerId: action.payload };

        case actionTypes.OPEN_FRIENDS:
            return {
                ...state,
                friendsOpen: true,
                serversOpen: false,
                selectedServerId: null,
                usersOpen: false,
                textChannelOpen: false,
                voiceChannelOpen: false,
                githubChannelOpen: false,
                todoChannelOpen: false,
                activeChannelType: null,
                activeChannelId: null,
            };
        case actionTypes.CLOSE_FRIENDS:
            return { ...state, friendsOpen: false };

        case actionTypes.OPEN_NOTIFICATIONS:
            return {
                ...state,
                notificationsOpen: true,
                serversOpen: false,
                selectedServerId: null,
                friendsOpen: false,
                usersOpen: false,
                textChannelOpen: false,
                voiceChannelOpen: false,
                githubChannelOpen: false,
                todoChannelOpen: false,
                activeChannelType: null,
                activeChannelId: null,
            };
        case actionTypes.CLOSE_NOTIFICATIONS:
            return { ...state, notificationsOpen: false };

        case actionTypes.OPEN_ADD_PEOPLE:
            return { ...state, addPeopleOpen: true, usersOpen: false };
        case actionTypes.CLOSE_ADD_PEOPLE:
            return { ...state, addPeopleOpen: false };

        case actionTypes.OPEN_USERS:
            return { ...state, usersOpen: true, addPeopleOpen: false };
        case actionTypes.CLOSE_USERS:
            return { ...state, usersOpen: false };

        case actionTypes.OPEN_TEXT_CHANNEL:
            return { ...state, textChannelOpen: true };
        case actionTypes.CLOSE_TEXT_CHANNEL:
            return { ...state, textChannelOpen: false };

        case actionTypes.OPEN_VOICE_CHANNEL:
            return { ...state, voiceChannelOpen: true };
        case actionTypes.CLOSE_VOICE_CHANNEL:
            return { ...state, voiceChannelOpen: false };

        case actionTypes.OPEN_GITHUB_CHANNEL:
            return { ...state, githubChannelOpen: true };
        case actionTypes.CLOSE_GITHUB_CHANNEL:
            return { ...state, githubChannelOpen: false };

        case actionTypes.OPEN_TODO_CHANNEL:
            return { ...state, todoChannelOpen: true };
        case actionTypes.CLOSE_TODO_CHANNEL:
            return { ...state, todoChannelOpen: false };

        case actionTypes.SET_ACTIVE_CHANNEL:
            return {
                ...state,
                activeChannelId: action.payload.channelId,
                activeChannelType: action.payload.channelType,
                textChannelOpen: action.payload.channelType === "text",
                voiceChannelOpen: action.payload.channelType === "voice",
                githubChannelOpen: action.payload.channelType === "github",
                todoChannelOpen: action.payload.channelType === "todo",
                serversOpen: false,
                usersOpen: false,
            };

        case actionTypes.CLOSE_ALL_CHANNELS:
            return {
                ...state,
                textChannelOpen: false,
                voiceChannelOpen: false,
                githubChannelOpen: false,
                todoChannelOpen: false,
                activeChannelType: null,
                activeChannelId: null,
            };

        case actionTypes.ADD_CHANNEL_GROUP:
            const groupId = `group_${Date.now()}`;
            const newGroup = { id: groupId, name: action.payload, channels: [] };
            return {
                ...state,
                channelGroups: [...state.channelGroups, newGroup],
                expandedGroups: { ...state.expandedGroups, [groupId]: false },
            };

        case actionTypes.TOGGLE_CHANNEL_GROUP:
            return {
                ...state,
                expandedGroups: {
                    ...state.expandedGroups,
                    [action.payload]: !state.expandedGroups[action.payload],
                },
            };

        case actionTypes.TOGGLE_ADD_CHANNEL_FORM:
            const toggleGroupId = action.payload;
            const currentForm = state.addChannelForms[toggleGroupId] || {
                showForm: false,
                newChannelName: '',
                newChannelType: 'text',
            };
            return {
                ...state,
                addChannelForms: {
                    ...state.addChannelForms,
                    [toggleGroupId]: { ...currentForm, showForm: !currentForm.showForm },
                },
            };

        case actionTypes.SET_NEW_CHANNEL_NAME:
            const { groupId: nameGroupId, name } = action.payload;
            const formForName = state.addChannelForms[nameGroupId] || {
                showForm: false,
                newChannelName: '',
                newChannelType: 'text',
            };
            return {
                ...state,
                addChannelForms: {
                    ...state.addChannelForms,
                    [nameGroupId]: { ...formForName, newChannelName: name },
                },
            };

        case actionTypes.SET_NEW_CHANNEL_TYPE:
            const { groupId: typeGroupId, type } = action.payload;
            const formForType = state.addChannelForms[typeGroupId] || {
                showForm: false,
                newChannelName: '',
                newChannelType: 'text',
            };
            return {
                ...state,
                addChannelForms: {
                    ...state.addChannelForms,
                    [typeGroupId]: { ...formForType, newChannelType: type },
                },
            };

        case actionTypes.ADD_CHANNEL:
            const addChannelGroupId = action.payload;
            const addForm = state.addChannelForms[addChannelGroupId];
            if (!addForm || !addForm.newChannelName.trim()) return state;

            const newChannel = {
                id: `channel_${Date.now()}`,
                name: addForm.newChannelName,
                type: addForm.newChannelType || "text",
            };

            return {
                ...state,
                channelGroups: state.channelGroups.map(group =>
                    group.id === addChannelGroupId
                        ? { ...group, channels: [...(group.channels || []), newChannel] }
                        : group
                ),
                addChannelForms: {
                    ...state.addChannelForms,
                    [addChannelGroupId]: { ...addForm, showForm: false, newChannelName: '', newChannelType: 'text' },
                },
            };

        case actionTypes.TOGGLE_USER_SELECTION:
            const userId = action.payload;
            return {
                ...state,
                selectedUsers: state.selectedUsers.includes(userId)
                    ? state.selectedUsers.filter(id => id !== userId)
                    : [...state.selectedUsers, userId],
            };

        case actionTypes.CLEAR_SELECTED_USERS:
            return { ...state, selectedUsers: [] };

        case actionTypes.ADD_SELECTED_USERS:
            return { ...state, addPeopleOpen: false };
        case actionTypes.OPEN_SERVERS: {
            const isSameServer = state.selectedServerId === action.payload;
            return {
                ...state,
                serversOpen: true,
                selectedServerId: action.payload,
                usersOpen: isSameServer ? state.usersOpen : false, // Aynı server ise usersOpen değişmez
            };
        }
        default:
            return state;
    }
};

export default mainReducer;