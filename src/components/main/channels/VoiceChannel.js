import React, { useRef, useEffect } from 'react'
import './../../../asset/css/TextChannel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faEllipsis, faTimes } from '@fortawesome/free-solid-svg-icons'

const VoiceChannel = ({className, isOpen, handleCloseVoiceChannel}) => {
    const VoiceChannelRef = useRef(null);

    useEffect(() => {
        // Arka plan tıklaması için olay dinleyici (isteğe bağlı)
        const handleClickOutside = (event) => {
            // Bu kapatma mantığını kullanmak istiyorsanız yorum satırını kaldırın
            // if (isOpen && VoiceChannelRef.current && !VoiceChannelRef.current.contains(event.target)) {
            //   handleCloseVoiceChannel();
            // }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleCloseVoiceChannel]);

    return (
        <div ref={VoiceChannelRef} className={`text-channel-container ${className}`}>
            <div className='text-channel-header'>
                <div className='text-channel-header-pinned-message-icon'>
                    <FontAwesomeIcon icon={faThumbtack} />
                </div>
                <div className='text-channel-header-title'>
                    <h1>Voice Channel</h1>
                </div>
                <div className='text-channel-header-options d-flex gap-3'>
                    <FontAwesomeIcon icon={faEllipsis} />
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        onClick={handleCloseVoiceChannel}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
            
            <div className="text-channel-content">
                {/* Burada kanal içeriği yer alacak */}
                <p style={{ color: 'var(--grey)' }}>Kanal içeriği burada görüntülenecek...</p>
            </div>
        </div>
    );
}

export default VoiceChannel;