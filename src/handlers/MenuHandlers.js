/**
 * Menü işleyici fonksiyonları
 */

/**
 * Servers menüsünü açma işleyicisi
 * @param {number} serverId - Açılacak server ID'si
 * @param {Object} states - State durumları
 * @param {Object} setters - State setter fonksiyonları
 * @param {Object} channelSetters - Kanal state setter fonksiyonları
 * @param {Function} closeAllChannels - Tüm kanalları kapatan fonksiyon
 */
export const handleServersOpen = (serverId, states, setters, channelSetters, closeAllChannels) => {
    const { friendsOpen, notificationsOpen, addPeopleOpen } = states;
    const { setServersOpen, setSelectedServerId, setUsersOpen, 
            setFriendsOpen, setNotificationsOpen, setAddPeopleOpen } = setters;
    
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
  
  /**
   * Servers menüsünü kapatma işleyicisi
   * @param {Object} setters - State setter fonksiyonları
   * @param {Object} channelSetters - Kanal state setter fonksiyonları 
   * @param {Function} closeAllChannels - Tüm kanalları kapatan fonksiyon
   */
  export const handleCloseServers = (setters, channelSetters, closeAllChannels) => {
    const { setServersOpen, setSelectedServerId, setUsersOpen } = setters;
    
    setServersOpen(false);
    setSelectedServerId(null);
    
    // Servers kapanınca Users panelini de kapatalım
    setUsersOpen(false);
    
    // Tüm kanalları kapatalım
    closeAllChannels(channelSetters);
  };
  
  /**
   * Friends menüsünü açma/kapama işleyicisi
   * @param {Object} states - State durumları
   * @param {Object} setters - State setter fonksiyonları
   * @param {Object} channelSetters - Kanal state setter fonksiyonları 
   * @param {Function} closeAllChannels - Tüm kanalları kapatan fonksiyon
   */
  export const handleFriendsOpen = (states, setters, channelSetters, closeAllChannels) => {
    const { serversOpen } = states;
    const { setFriendsOpen, setServersOpen, setSelectedServerId, setUsersOpen } = setters;
    
    setFriendsOpen(prev => !prev);
    
    if (serversOpen) {
      setServersOpen(false);
      setSelectedServerId(null);
      setUsersOpen(false);
    }
    
    // Tüm kanalları kapatalım
    closeAllChannels(channelSetters);
  };
  
  // ... Diğer menü işleme fonksiyonları da buraya taşınabilir