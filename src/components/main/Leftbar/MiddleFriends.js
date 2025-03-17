import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRightToLine } from "@fortawesome/free-solid-svg-icons";
import UserInfoPopupPortal from './../../portals/UserInfoPopupPortal';



const MiddleFriends = ({ handleFriendsOpen, handleCloseFriends, friendsOpen }) => {
    const avatarRef = useRef(null);
    // Hover durumunu yönetmek için state
    const [hover, setHover] = useState(false);

    const toggleFriends = () => {
        handleFriendsOpen();
    };

    return (
        <div className='left-bar-middle'>
            <div className='left-bar-item-middle'>
                <div className='user-avatar-container' ref={avatarRef}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    <div className='user-avatar'>
                        <p className='notification-count'>3</p>
                        <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                            alt="AppLogo"
                            className='server-avatar-img' />
                    </div>
                    {hover && (
                    <UserInfoPopupPortal anchorRef={avatarRef}>
                        {/* user-info-popup CSS stillerinizin 
                            absolute konumlandırma vb. kısımlarını 
                            gerekirse kaldırabilirsiniz. 
                            Sadece görünüm (renk, arkaplan vs.) kalsın. 
                        */}
                        <div className='user-info-popup'>
                            <div className='user-info-content'>
                                <div className='user-info-name'>Tolga</div>
                                <div className='user-info-tag'>@tlg123</div>
                                <div className='user-info-status'>
                                    <span className='status-dot'></span>
                                    <span>Online</span>
                                </div>
                            </div>
                        </div>
                    </UserInfoPopupPortal>
                )}
                </div>
            </div>

            <div className='left-bar-item-middle'>
                <div className='user-avatar online'>
                    <p className='notification-count'>5</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar online'>
                    <p className='notification-count'>5</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar online'>
                    <p className='notification-count'>5</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar'>
                    <p className='notification-count'>3</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
                </div>
            </div>
            <div className='left-bar-item-middle'>
                <div className='user-avatar online'>
                    <p className='notification-count'>5</p>
                    <img src={process.env.PUBLIC_URL + '/asset/images/server.png'}
                        alt="AppLogo"
                        className='server-avatar-img' />
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