import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRightToLine, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import UserInfoPopupPortal from './../../portals/UserInfoPopupPortal';
import * as actions from '../../../redux/actions/MainActions'; // Dosya yolunu projene göre ayarla

const MiddleFriends = () => {
  const dispatch = useDispatch();
  const { friendsOpen } = useSelector((state) => state);

  // Yerel state ve ref’ler
  const avatarRef1 = useRef(null);
  const avatarRef2 = useRef(null);
  const avatarRef3 = useRef(null);
  const avatarRef4 = useRef(null);
  const [activePopup, setActivePopup] = useState(null);
  const [hover, setHover] = useState(false);

  const refs = {
    user1: avatarRef1,
    user2: avatarRef2,
    user3: avatarRef3,
    user4: avatarRef4
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupElement = document.querySelector('.user-info-popup');
      if (popupElement && popupElement.contains(event.target)) {
        return;
      }
      if (
        (avatarRef1.current && avatarRef1.current.contains(event.target)) ||
        (avatarRef2.current && avatarRef2.current.contains(event.target)) ||
        (avatarRef3.current && avatarRef3.current.contains(event.target)) ||
        (avatarRef4.current && avatarRef4.current.contains(event.target))
      ) {
        return;
      }
      setActivePopup(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAvatarClick = (userId) => {
    if (activePopup === userId) {
      setActivePopup(null);
    } else {
      setActivePopup(userId);
    }
  };

  const toggleFriends = () => {
    dispatch(friendsOpen ? actions.closeFriends() : actions.openFriends());
  };

  return (
    <div className='left-bar-middle'>
      <div className='left-bar-item-middle'>
        <div
          className='user-avatar-container'
          ref={avatarRef1}
          onClick={() => handleAvatarClick('user1')}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className='user-avatar'>
            <p className='notification-count'>3</p>
            <img
              src={process.env.PUBLIC_URL + '/asset/images/server.png'}
              alt="Kullanıcı Avatarı"
              className='server-avatar-img'
            />
          </div>
          {activePopup === 'user1' && (
            <UserInfoPopupPortal anchorRef={avatarRef1}>
              <div className='user-info-popup'>
                <div className='user-info-content'>
                  <div className='user-info-header d-flex justify-content-between align-items-center w-100'>
                    <div className='user-info-name'>İbrahim</div>
                    <div className='user-info-status d-flex align-items-center gap-2'>
                      <span className='status-dot offline'></span>
                      <span>Çevrimiçi</span>
                    </div>
                  </div>
                  <hr className='w-100 my-2' />
                  <div className='d-flex align-items-center gap-3'>
                    <div className='d-flex align-items-center px-2 gap-3 w-100'>
                      <div className='user-info-avatar'>
                        <img
                          src={process.env.PUBLIC_URL + '/asset/images/avatar.jpeg'}
                          alt="Kullanıcı Avatarı"
                          className='user-info-avatar-img'
                        />
                      </div>
                      <div className='d-flex flex-column gap-1'>
                        <div className='user-info-tag'>#ibo123</div>
                        <div className='user-info-role'>Yönetici</div>
                      </div>
                    </div>
                  </div>
                  <div className='user-info-footer d-flex align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3 w-100'>
                      <form className='d-flex gap-3' onClick={(e) => e.stopPropagation()}>
                        <input
                          type="text"
                          placeholder='Mesaj'
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

      {/* Diğer kullanıcılar için benzer yapı (kısalık için tek örneği bıraktım) */}
      {/* user2, user3, user4 için aynı mantığı tekrar edebilirsin */}

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