// ChannelHandlers.js - Kanal işleme fonksiyonları

/**
 * Tüm kanalları kapatmak için yardımcı fonksiyon
 * @param {Object} setters - Kanal state setter fonksiyonları
 */
export const closeAllChannels = (setters) => {
    const {
      setTextChannelOpen,
      setVoiceChannelOpen,
      setGithubChannelOpen,
      setTodoChannelOpen,
      setActiveChannelType,
      setActiveChannelId
    } = setters;
    
    setTextChannelOpen(false);
    setVoiceChannelOpen(false);
    setGithubChannelOpen(false);
    setTodoChannelOpen(false);
    setActiveChannelType(null);
    setActiveChannelId(null);
  };
  
  /**
   * Text kanalını kapatma işleyicisi
   * @param {Event} e - Olay nesnesi (isteğe bağlı)
   * @param {Object} setters - Kanal state setter fonksiyonları
   */
  export const handleCloseTextChannel = (e, setters) => {
    if (e) {
      e.stopPropagation(); // Tıklama olayının yayılmasını engelle
      e.preventDefault(); // Varsayılan davranışı engelle
    }
    setters.setTextChannelOpen(false);
    setters.setActiveChannelType(null);
    setters.setActiveChannelId(null);
  };
  
  /**
   * Voice kanalını kapatma işleyicisi
   * @param {Event} e - Olay nesnesi (isteğe bağlı)
   * @param {Object} setters - Kanal state setter fonksiyonları
   */
  export const handleCloseVoiceChannel = (e, setters) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setters.setVoiceChannelOpen(false);
    setters.setActiveChannelType(null);
    setters.setActiveChannelId(null);
  };
  
  /**
   * Github kanalını kapatma işleyicisi
   * @param {Event} e - Olay nesnesi (isteğe bağlı)
   * @param {Object} setters - Kanal state setter fonksiyonları
   */
  export const handleCloseGithubChannel = (e, setters) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setters.setGithubChannelOpen(false);
    setters.setActiveChannelType(null);
    setters.setActiveChannelId(null);
  };
  
  /**
   * Todo kanalını kapatma işleyicisi
   * @param {Event} e - Olay nesnesi (isteğe bağlı)
   * @param {Object} setters - Kanal state setter fonksiyonları
   */
  export const handleCloseTodoChannel = (e, setters) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setters.setTodoChannelOpen(false);
    setters.setActiveChannelType(null);
    setters.setActiveChannelId(null);
  };
  
  /**
   * Kanal tıklama işleyicisi - Doğru kanalı açar
   * @param {number} channelId - Kanal ID'si
   * @param {string} channelType - Kanal tipi ('text', 'voice', 'github', 'todo')
   * @param {Object} setters - Kanal state setter fonksiyonları
   * @param {Event} e - Olay nesnesi (isteğe bağlı)
   */
  export const handleChannelClick = (channelId, channelType, setters, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // Önce tüm kanalları kapat
    closeAllChannels(setters);
    
    // Seçilen kanal türüne göre ilgili kanalı aç
    switch(channelType) {
      case 'text':
        setters.setTextChannelOpen(true);
        break;
      case 'voice':
        setters.setVoiceChannelOpen(true);
        break;
      case 'github':
        setters.setGithubChannelOpen(true);
        break;
      case 'todo':
        setters.setTodoChannelOpen(true);
        break;
      default:
        setters.setTextChannelOpen(true);
    }
    
    // Aktif kanal bilgilerini güncelle
    setters.setActiveChannelType(channelType);
    setters.setActiveChannelId(channelId);
  };
  
  /**
   * Server görünürlüğünü değiştirme işleyicisi
   * @param {Event} e - Olay nesnesi (isteğe bağlı)
   * @param {Function} setServersOpen - Server açıklık durumunu güncelleyen setter
   */
  export const toggleServersVisibility = (e, setServersOpen) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setServersOpen(prev => !prev);
  };