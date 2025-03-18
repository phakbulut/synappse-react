import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * anchorRef: Popup'ın konumunu hesaplayacağımız referans (avatarın DOM elemanı)
 * children:  Portal içinde göstereceğimiz içerik
 */
const UserInfoPopupPortal = ({ anchorRef, children }) => {
  const [style, setStyle] = useState({});
  
  useEffect(() => {
    if (!anchorRef.current) return;

    const updatePosition = () => {
      const rect = anchorRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Popup'ın tahmini boyutları
      const estimatedPopupWidth = 300;
      const estimatedPopupHeight = 350;
      
      // Avatar konumuna göre sol ve üst konumunu belirle
      // Avatar'ın sağ tarafında, üst kısmından başlayarak
      let leftPosition = rect.right + 30; // Avatar'ın sağından 15px uzakta
      let topPosition = rect.top -65; // Avatar'ın üst kısmından 10px yukarıda
      
      // Ekran sağ kenarına taşarsa, avatar'ın soluna yerleştir
      if (leftPosition + estimatedPopupWidth > viewportWidth - 15) {
        leftPosition = rect.left - estimatedPopupWidth - 15;
      }
      
      // Ekranın üst kısmına taşarsa, avatar'ın alt kısmına hizala
      if (topPosition < 10) {
        topPosition = 10;
      }
      
      // Ekranın alt kısmına taşarsa, yeterince yukarıya taşı
      if (topPosition + estimatedPopupHeight > viewportHeight - 10) {
        topPosition = viewportHeight - estimatedPopupHeight - 10;
      }
      
      setStyle({
        position: 'fixed',
        top: topPosition,
        left: leftPosition,
        zIndex: 10000,
        opacity: 1,
        visibility: 'visible'
      });
    };
    
    // İlk yüklemede konumu hesapla
    updatePosition();
    
    // Sayfa boyutu değiştiğinde konumu güncelle
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [anchorRef]);

  return createPortal(
    <div style={style}>
      {children}
    </div>,
    document.body
  );
};

export default UserInfoPopupPortal;
