import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRightToLine } from "@fortawesome/free-solid-svg-icons";
const MiddleFriends = ({ handleFriendsOpen, handleCloseFriends, friendsOpen }) => {
    const toggleFriends = () => {
        handleFriendsOpen();
    };

    return (
        <div className='left-bar-middle'>
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