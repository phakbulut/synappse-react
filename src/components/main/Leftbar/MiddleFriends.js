import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRightToLine, faUserPlus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import UserInfoPopupPortal from './../../portals/UserInfoPopupPortal';



const MiddleFriends = ({ handleFriendsOpen, handleCloseFriends, friendsOpen }) => {
    // Her kullanıcı için ayrı ref tanımlayalım
    const avatarRef1 = useRef(null);
    const avatarRef2 = useRef(null);
    const avatarRef3 = useRef(null);
    const avatarRef4 = useRef(null);
    
    // Aktif popup'ı takip etmek için state
    const [activePopup, setActivePopup] = useState(null);

    const [hover, setHover] = useState(false);

    // Tıklama handler'ı için referansları bir haritada tutalım
    const refs = {
        user1: avatarRef1,
        user2: avatarRef2,
        user3: avatarRef3,
        user4: avatarRef4
    };

    // Dışarı tıklamayı dinlemek için useEffect
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Popup içeriğine tıklama kontrolü
            const popupElement = document.querySelector('.user-info-popup');
            if (popupElement && popupElement.contains(event.target)) {
                // Popup içeriğine tıklandıysa, kapatma işlemini atla
                return;
            }

            // Avatarlardan birine tıklanmışsa da kapatma
            if (
                (avatarRef1.current && avatarRef1.current.contains(event.target)) ||
                (avatarRef2.current && avatarRef2.current.contains(event.target)) ||
                (avatarRef3.current && avatarRef3.current.contains(event.target)) ||
                (avatarRef4.current && avatarRef4.current.contains(event.target))
            ) {
                return;
            }

            // Yukarıdaki koşullar sağlanmadıysa, popup'ı kapat
            setActivePopup(null);
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Avatar'a tıklama handler'ı
    const handleAvatarClick = (userId) => {
        if (activePopup === userId) {
            setActivePopup(null);
        } else {
            setActivePopup(userId);
        }
    };

    const toggleFriends = () => {
        handleFriendsOpen();
    };

    return (
        <div className='left-bar-middle'>
            <div className='left-bar-item-middle'>
                <div className='user-avatar-container' ref={avatarRef1}
                    onClick={() => handleAvatarClick('user1')}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    <div className='user-avatar'>
                        <p className='notification-count'>3</p>
                        <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                            alt="AppLogo"
                            className='server-avatar-img' />
                    </div>
                    {activePopup === 'user1' && (
                        <UserInfoPopupPortal anchorRef={avatarRef1}>
                            <div className='user-info-popup'>
                                <div className='user-info-content'>
                                    <div className='user-info-header d-flex justify-content-between align-items-center w-100'>
                                        <div className='user-info-name'>İbrahim</div>
                                        <div className='user-info-status d-flex align-items-center gap-2'>
                                            <span className='status-dot offline'></span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <hr className='w-100 my-2' />
                                    <div className='d-flex  align-items-center gap-3'>
                                        <div className='d-flex align-items-center px-2 gap-3 w-100'>
                                            <div className='user-info-avatar'>
                                                <img src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
                                                    alt="AppLogo"
                                                    className='user-info-avatar-img' />
                                            </div>
                                            <div className='d-flex flex-column gap-1'>
                                                <div className='user-info-tag'>#ibo123</div>

                                                <div className='user-info-role'>Admin</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-info-footer d-flex align-items-center w-100  '>
                                        <div className='d-flex align-items-center gap-3 w-100'>

                                            <form className='d-flex gap-3' onClick={(e) => e.stopPropagation()}>
                                                <input 
                                                    type="text" 
                                                    placeholder='Message' 
                                                    className='' 
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                                <FontAwesomeIcon 
                                                    icon={faPaperPlane} 
                                                    className='cursor-pointer'
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </UserInfoPopupPortal>
                    )}
                </div>
            </div>

            <div className='left-bar-item-middle'>
                <div className='user-avatar-container' ref={avatarRef2}
                    onClick={() => handleAvatarClick('user2')}
                >
                    <div className='user-avatar online'>
                        <p className='notification-count'>5</p>
                        <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                            alt="AppLogo"
                            className='server-avatar-img' />
                    </div>
                    {activePopup === 'user2' && (
                        <UserInfoPopupPortal anchorRef={avatarRef2}>
                            <div className='user-info-popup'>
                                <div className='user-info-content'>
                                    <div className='user-info-header d-flex justify-content-between align-items-center w-100'>
                                        <div className='user-info-name'>İbrahim</div>
                                        <div className='user-info-status d-flex align-items-center gap-2'>
                                            <span className='status-dot offline'></span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <hr className='w-100 my-2' />
                                    <div className='d-flex  align-items-center gap-3'>
                                        <div className='d-flex align-items-center px-2 gap-3 w-100'>
                                            <div className='user-info-avatar'>
                                                <img src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
                                                    alt="AppLogo"
                                                    className='user-info-avatar-img' />
                                            </div>
                                            <div className='d-flex flex-column gap-1'>
                                                <div className='user-info-tag'>#ibo123</div>

                                                <div className='user-info-role'>Admin</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-info-footer d-flex align-items-center w-100  '>
                                        <div className='d-flex align-items-center gap-3 w-100'>

                                            <form className='d-flex gap-3' onClick={(e) => e.stopPropagation()}>
                                                <input 
                                                    type="text" 
                                                    placeholder='Message' 
                                                    className='' 
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                                <FontAwesomeIcon 
                                                    icon={faPaperPlane} 
                                                    className='cursor-pointer'
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </UserInfoPopupPortal>
                    )}
                </div>
            </div>
           
            <div className='left-bar-item-middle'>
                <div className='user-avatar-container' ref={avatarRef3}
                    onClick={() => handleAvatarClick('user3')}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    <div className='user-avatar'>
                        <p className='notification-count'>3</p>
                        <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                            alt="AppLogo"
                            className='server-avatar-img' />
                    </div>
                    {activePopup === 'user3' && (
                        <UserInfoPopupPortal anchorRef={avatarRef3}>
                            <div className='user-info-popup'>
                                <div className='user-info-content'>
                                    <div className='user-info-header d-flex justify-content-between align-items-center w-100'>
                                        <div className='user-info-name'>İbrahim</div>
                                        <div className='user-info-status d-flex align-items-center gap-2'>
                                            <span className='status-dot offline'></span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <hr className='w-100 my-2' />
                                    <div className='d-flex  align-items-center gap-3'>
                                        <div className='d-flex align-items-center px-2 gap-3 w-100'>
                                            <div className='user-info-avatar'>
                                                <img src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
                                                    alt="AppLogo"
                                                    className='user-info-avatar-img' />
                                            </div>
                                            <div className='d-flex flex-column gap-1'>
                                                <div className='user-info-tag'>#ibo123</div>

                                                <div className='user-info-role'>Admin</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-info-footer d-flex align-items-center w-100  '>
                                        <div className='d-flex align-items-center gap-3 w-100'>

                                            <form className='d-flex gap-3' onClick={(e) => e.stopPropagation()}>
                                                <input 
                                                    type="text" 
                                                    placeholder='Message' 
                                                    className='' 
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                                <FontAwesomeIcon 
                                                    icon={faPaperPlane} 
                                                    className='cursor-pointer'
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </UserInfoPopupPortal>
                    )}
                </div>
            </div>

            <div className='left-bar-item-middle'>
                <div className='user-avatar-container' ref={avatarRef4}
                    onClick={() => handleAvatarClick('user4')}
                >
                    <div className='user-avatar online'>
                        <p className='notification-count'>5</p>
                        <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                            alt="AppLogo"
                            className='server-avatar-img' />
                    </div>
                    {activePopup === 'user4' && (
                        <UserInfoPopupPortal anchorRef={avatarRef4}>
                            <div className='user-info-popup'>
                                <div className='user-info-content'>
                                    <div className='user-info-header d-flex justify-content-between align-items-center w-100'>
                                        <div className='user-info-name'>İbrahim</div>
                                        <div className='user-info-status d-flex align-items-center gap-2'>
                                            <span className='status-dot offline'></span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                    <hr className='w-100 my-2' />
                                    <div className='d-flex  align-items-center gap-3'>
                                        <div className='d-flex align-items-center px-2 gap-3 w-100'>
                                            <div className='user-info-avatar'>
                                                <img src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
                                                    alt="AppLogo"
                                                    className='user-info-avatar-img' />
                                            </div>
                                            <div className='d-flex flex-column gap-1'>
                                                <div className='user-info-tag'>#ibo123</div>

                                                <div className='user-info-role'>Admin</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='user-info-footer d-flex align-items-center w-100  '>
                                        <div className='d-flex align-items-center gap-3 w-100'>

                                            <form className='d-flex gap-3' onClick={(e) => e.stopPropagation()}>
                                                <input 
                                                    type="text" 
                                                    placeholder='Message' 
                                                    className='' 
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                                <FontAwesomeIcon 
                                                    icon={faPaperPlane} 
                                                    className='cursor-pointer'
                                                    onClick={(e) => e.stopPropagation()} 
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </UserInfoPopupPortal>
                    )}
                </div>
            </div>
          
            <div className='left-bar-item-middle'>
                <div
                    className={`extend-friends ${friendsOpen ? 'active' : ''}`}
                    onClick={toggleFriends}
                >
                    <FontAwesomeIcon
                        icon={faArrowsLeftRightToLine}
                        className={friendsOpen ? 'active' : ''}
                    />
                </div>
            </div>


        </div>
    );
};

export default MiddleFriends;