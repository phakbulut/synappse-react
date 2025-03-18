import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './../../../asset/css/TextChannel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faEllipsis, faTimes, faMessage, faServer } from '@fortawesome/free-solid-svg-icons';
import * as actions from './../../../redux/actions/MainActions';

const TextChannel = () => {
  const dispatch = useDispatch();
  const { textChannelOpen, activeChannelId } = useSelector((state) => state);
  const textChannelRef = useRef(null);

  const handleServerIconClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.openServers ? actions.closeServers() : actions.openServers(null));
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  useEffect(() => {
    if (textChannelRef.current) {
      const elements = textChannelRef.current.querySelectorAll('*');
      elements.forEach(element => element.addEventListener('click', stopPropagation));
      return () => elements.forEach(element => element.removeEventListener('click', stopPropagation));
    }
  }, [textChannelOpen]);

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.closeTextChannel());
    return false;
  };

  return (
    <div
      ref={textChannelRef}
      className={`text-channel-container text-channel ${textChannelOpen ? 'open' : 'closed'}`}
      onClick={stopPropagation}
      onMouseDown={stopPropagation}
    >
      <div className='text-channel-header' onClick={stopPropagation}>
        <div className='text-channel-header-left'>
          <FontAwesomeIcon
            icon={faServer}
            className="text-channel-header-icon"
            title="Server Menüsünü Göster"
            onClick={handleServerIconClick}
          />
          <FontAwesomeIcon
            icon={faMessage}
            className="text-channel-header-icon"
            title="Kanal Bilgisi"
            onClick={stopPropagation}
          />
          <div className='text-channel-header-title' onClick={stopPropagation}>
            <h1>Text Channel {activeChannelId && `#${activeChannelId}`}</h1>
          </div>
        </div>
        <div className='text-channel-header-options d-flex' onClick={stopPropagation}>
          <FontAwesomeIcon icon={faThumbtack} title="Sabitlenmiş Mesajlar" onClick={stopPropagation} />
          <FontAwesomeIcon icon={faEllipsis} title="Diğer Seçenekler" onClick={stopPropagation} />
          <FontAwesomeIcon icon={faTimes} title="Kapat" onClick={handleClose} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="text-channel-content" onClick={stopPropagation}>
        <p style={{ color: 'var(--white)' }}>Text kanalına hoş geldiniz! Buradan metin mesajlarınızı gönderebilirsiniz.</p>
      </div>
    </div>
  );
};

export default TextChannel;