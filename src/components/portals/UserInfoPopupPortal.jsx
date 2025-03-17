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
      // Avatarın ekrandaki konumunu al
      const rect = anchorRef.current.getBoundingClientRect();

      // Popup'ın sabit (fixed) konumunu ayarla
      setStyle({
        position: 'fixed',
        top: rect.top + rect.height / 2,
        left: rect.right + 50,
        transform: 'translateY(-50%)',
        zIndex: 10000 // En üstte görünmesi için yüksek bir değer
      });
    };

    // İlk yüklemede konumu hesapla
    updatePosition();

    // Sayfa scroll veya resize oldukça konumu güncelle
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [anchorRef]);

  // Artık children'ı body'ye render et
  return createPortal(
    <div style={style}>
      {children}
    </div>,
    document.body
  );
};

export default UserInfoPopupPortal;
