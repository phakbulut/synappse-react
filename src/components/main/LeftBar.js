import React from 'react';


const LeftBar = () => {
  return (
    <div>
      <div className='left-bar-container'>
        {/* Üst Kısım */}
        <div className='left-bar-top'>
          <div className='left-bar-item'>
            <img src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} 
                 alt="AppLogo" 
                 className='left-bar-logo mt-3 ml-3 mr-3'/>
          </div>
          <hr className='left-bar-hr w-50'/>
        </div>

        {/* Orta Kısım */}
        <div className='left-bar-middle'>
          <div className='left-bar-item-middle'>
            <div className='server-avatar'>
                <p className='notification-count'>5</p>
              <img src={process.env.PUBLIC_URL + '/asset/images/server.png'} 
                   alt="AppLogo" 
                   className='server-avatar-img'/>
            </div>
          </div>

          <div className='left-bar-item-middle'>
            <div className='server-avatar'>
                <p className='notification-count'>5</p>
              <img src={process.env.PUBLIC_URL + '/asset/images/server.png'} 
                   alt="AppLogo" 
                   className='server-avatar-img'/>
            </div>
          </div>
          <div className='left-bar-item-middle'>
            <div className='server-avatar'>
                <p className='notification-count'>5</p>
              <img src={process.env.PUBLIC_URL + '/asset/images/server.png'} 
                   alt="AppLogo" 
                   className='server-avatar-img'/>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className='left-bar-bottom'>
          <hr className='left-bar-hr-bottom w-50'/>
          <div className='left-bar-item-bottom '>
            <div className='user-avatar'>
              <img src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'} 
                   alt="AppLogo" 
                   className='user-avatar-img'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;