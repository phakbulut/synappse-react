import React from 'react';

const Middle = () => {
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
        </div>
    );
};

export default Middle;