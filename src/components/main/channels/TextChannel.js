import React, { useRef, useEffect } from 'react'
import './../../../asset/css/TextChannel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faEllipsis, faTimes, faMessage, faServer } from '@fortawesome/free-solid-svg-icons'
import { handleChannelContentClick } from '../../../handlers/ChannelHandlers'

const TextChannel = ({className, isOpen, handleCloseTextChannel, channelId, toggleServersVisibility}) => {
    const textChannelRef = useRef(null);

    // Server iconu tıklaması için
    const handleServerIconClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (toggleServersVisibility) {
            toggleServersVisibility(e);
        }
    };

    // İçerik tıklamasını durdur
    const stopPropagation = (e) => {
        e.stopPropagation();
        e.preventDefault();
        return false;
    };

    useEffect(() => {
        // İçerik DOM oluşturulduğunda
        if (textChannelRef.current) {
            // Her tıklama olayını durdurmak için
            const elements = textChannelRef.current.querySelectorAll('*');
            elements.forEach(element => {
                element.addEventListener('click', stopPropagation);
            });

            // Temizleme fonksiyonu
            return () => {
                elements.forEach(element => {
                    element.removeEventListener('click', stopPropagation);
                });
            };
        }
    }, [isOpen]);

    // Tıklama olayı yakalayıcı wrapper
    const captureClickEvent = (handler) => (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (handler) handler(e);
        return false;
    };

    // Kapatma düğmesi için özel işleyici
    const handleClose = (e) => {
        e.stopPropagation();
        e.preventDefault();
        handleCloseTextChannel(e);
        return false;
    };

    return (
        <div 
            ref={textChannelRef} 
            className={`text-channel-container text-channel ${className}`}
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
                        <h1>Text Channel {channelId && `#${channelId}`}</h1>
                    </div>
                </div>
                
                <div className='text-channel-header-options d-flex' onClick={stopPropagation}>
                    <FontAwesomeIcon 
                        icon={faThumbtack} 
                        title="Sabitlenmiş Mesajlar"
                        onClick={stopPropagation}
                    />
                    <FontAwesomeIcon 
                        icon={faEllipsis} 
                        title="Diğer Seçenekler"
                        onClick={stopPropagation}
                    />
                    <FontAwesomeIcon 
                        icon={faTimes}
                        title="Kapat"
                        onClick={handleClose}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
            
            <div className="text-channel-content" onClick={stopPropagation}>
                <p style={{ color: 'var(--white)' }}>Text kanalına hoş geldiniz! Buradan metin mesajlarınızı gönderebilirsiniz.</p>
                {/* Mesaj gönderme alanı ve diğer içerikler burada olacak */}
            </div>
        </div>
    );
}

export default TextChannel;