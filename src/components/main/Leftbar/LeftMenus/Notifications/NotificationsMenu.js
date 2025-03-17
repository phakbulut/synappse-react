import React, { useRef, useEffect } from 'react';
import "./../../../../../asset/css/Notifications_Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const NotificationsMenu = ({ className, isOpen, handleCloseNotifications }) => {
    const notificationsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                handleCloseNotifications();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleCloseNotifications]);

    return (
        <div ref={notificationsRef} className={`NotificationsMenu container-fluid px-2 py-2  ${className}`}>
            <div className='NotificationsMenu-header d-flex justify-content-between align-items-center px-4 py-2'>
                <h4>Bildirimler</h4>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div className='NotificationsMenu-body gap-2 mt-2'>
                <div className='Notification-card'>
                    <div className='Notification-card-avatar'>
                        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt='avatar' />
                    </div>
                    <div className='Notification-card-content'>
                        <div className='Notification-card-content-header d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-2'>
                            <span className='notification-title'>Bildirim</span>
                            <span className='notification-time'>12:00</span>
                           </div>
                        </div>
                        <div className='Notification-card-content-body ps-3 px-2 py-2'>
                            <p>Bildirim içeriği buraya gelecek</p>
                        </div>
                    </div>
                </div>
                <div className='Notification-card'>
                    <div className='Notification-card-avatar'>
                        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt='avatar' />
                    </div>
                    <div className='Notification-card-content'>
                        <div className='Notification-card-content-header d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-2'>
                            <span className='notification-title'>Bildirim</span>
                            <span className='notification-time'>12:00</span>
                           </div>
                        </div>
                        <div className='Notification-card-content-body ps-3 px-2 py-2'>
                            <p>Bildirim içeriği buraya gelecek</p>
                        </div>
                    </div>
                </div>
                <div className='Notification-card'>
                    <div className='Notification-card-avatar'>
                        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt='avatar' />
                    </div>
                    <div className='Notification-card-content'>
                        <div className='Notification-card-content-header d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-2'>
                            <span className='notification-title'>Bildirim</span>
                            <span className='notification-time'>12:00</span>
                           </div>
                        </div>
                        <div className='Notification-card-content-body ps-3 px-2 py-2'>
                            <p>Bildirim içeriği buraya gelecek</p>
                        </div>
                    </div>
                </div>
                <div className='Notification-card'>
                    <div className='Notification-card-avatar'>
                        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt='avatar' />
                    </div>
                    <div className='Notification-card-content'>
                        <div className='Notification-card-content-header d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-2'>
                            <span className='notification-title'>Bildirim</span>
                            <span className='notification-time'>12:00</span>
                           </div>
                        </div>
                        <div className='Notification-card-content-body ps-3 px-2 py-2'>
                            <p>Bildirim içeriği buraya gelecek</p>
                        </div>
                    </div>
                </div>
                <div className='Notification-card'>
                    <div className='Notification-card-avatar'>
                        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt='avatar' />
                    </div>
                    <div className='Notification-card-content'>
                        <div className='Notification-card-content-header d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-2'>
                            <span className='notification-title'>Bildirim</span>
                            <span className='notification-time'>12:00</span>
                           </div>
                        </div>
                        <div className='Notification-card-content-body ps-3 px-2 py-2'>
                            <p>Bildirim içeriği buraya gelecek</p>
                        </div>
                    </div>
                </div>
                <div className='Notification-card'>
                    <div className='Notification-card-avatar'>
                        <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt='avatar' />
                    </div>
                    <div className='Notification-card-content'>
                        <div className='Notification-card-content-header d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-2'>
                            <span className='notification-title'>Bildirim</span>
                            <span className='notification-time'>12:00</span>
                           </div>
                        </div>
                        <div className='Notification-card-content-body ps-3 px-2 py-2'>
                            <p>Bildirim içeriği buraya gelecek</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default NotificationsMenu;
