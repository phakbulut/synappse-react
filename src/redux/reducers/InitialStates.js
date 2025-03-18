// redux/initialState.js
export default {
  leftBarMiddle: "friends",
  serversOpen: false,
  selectedServerId: null,
  friendsOpen: false,
  notificationsOpen: false,
  addPeopleOpen: false,
  usersOpen: false,
  textChannelOpen: false,
  voiceChannelOpen: false,
  githubChannelOpen: false,
  todoChannelOpen: false,
  activeChannelType: null,
  activeChannelId: null,
  channelGroups: [
    { id: 'netEkibi1', name: '.Net Ekibi', channels: [
      { id: 'channel_1', name: '.Net Genel', type: 'text' },
      { id: 'channel_2', name: '.Net Sesli', type: 'voice' },
      { id: 'channel_3', name: '.Net Github', type: 'github' },
      { id: 'channel_4', name: '.Net Todo', type: 'todo' }
    ] },
    { id: 'netEkibi2', name: 'Flutter Ekibi', channels: [
        { id: 'channel_5', name: 'Flutter Genel', type: 'text' },
      { id: 'channel_6', name: 'Flutter Todo', type: 'todo' }
    ] },
    { id: 'netEkibi3', name: 'React Ekibi', channels: [
      { id: 'channel_7', name: 'React Genel', type: 'text' },
      { id: 'channel_8', name: 'React Todo', type: 'todo' }
    ] },
      { id: 'netEkibi4', name: 'DevOps Ekibi', channels: [] },
    { id: 'netEkibi5', name: 'UI/UX Ekibi', channels: [] },
  ],
  expandedGroups: {
    netEkibi1: false,
    netEkibi2: false,
    netEkibi3: false,
    netEkibi4: false,
    netEkibi5: false,
  },
  addChannelForms: {},
  users: [
    { id: 1, name: 'İbrahim Akbulut', tagName: '@ibrahima', role: 'Yönetici', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 10 },
    { id: 2, name: 'Mehmet Demir', tagName: '@mehmetd', role: 'Moderatör', avatar: '/asset/images/avatar.jpeg', online: false, hierarchy: 8 },
    { id: 3, name: 'Ayşe Kara', tagName: '@aysek', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
    { id: 4, name: 'Fatma Şahin', tagName: '@fatmas', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: false, hierarchy: 1 },
    { id: 5, name: 'Ali Öztürk', tagName: '@alio', role: 'Moderatör', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 8 },
    { id: 6, name: 'Kemal Şen', tagName: '@kemals', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
    { id: 7, name: 'Furkan Akbulut', tagName: '@furkana', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
    { id: 8, name: 'İhsan Akbulut', tagName: '@ihsana', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
    { id: 9, name: 'Veli Akbulut', tagName: '@velia', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
    { id: 10, name: 'Alparslan Akbulut', tagName: '@alparslana', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
  ],
  selectedUsers: [],
};