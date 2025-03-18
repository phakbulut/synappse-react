import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCheck, faTimes, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../../../../../asset/css/Add_People.css';
import * as actions from './../../../../../redux/actions/MainActions';

const AddPeople = () => {
  const dispatch = useDispatch();
  const { addPeopleOpen, users, selectedUsers } = useSelector((state) => state);
  const addPeopleRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addPeopleOpen && addPeopleRef.current && !addPeopleRef.current.contains(event.target)) {
        dispatch(actions.closeAddPeople());
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [addPeopleOpen, dispatch]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className={`add-people-overlay ${addPeopleOpen ? 'active' : ''}`} onClick={() => dispatch(actions.closeAddPeople())}></div>
      <div ref={addPeopleRef} className={`left-menu-servers-addpeople ${addPeopleOpen ? 'open' : 'closed'}`}>
        <div className="left-menu-servers-addpeople-title container row py-2 my-1 d-flex justify-content-center align-items-center">
          <div className='col-8'>
            <h4 className='server-name'>Kullanıcı Ekle</h4>
          </div>
          <div className='left-menu-servers-title-icons hint col-4 d-flex justify-content-end'>
            <FontAwesomeIcon
              icon={faTimes}
              title="Kapat"
              className="server-icon"
              onClick={() => dispatch(actions.closeAddPeople())}
            />
          </div>
        </div>
        <div className="left-menu-servers-content gap-2 py-2">
          <div className="servers-addpeople-search-container mb-3">
            <div className="servers-addpeople-input-group">
              <span className="servers-addpeople-input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Kullanıcı ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="server-addpeople-users-list gap-2 px-2 py-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <div
                  key={user.id}
                  className={`server-addpeople-users-list-item d-flex align-items-center p-3 mb-2 ${selectedUsers.includes(user.id) ? 'selected' : ''}`}
                  onClick={() => dispatch(actions.toggleUserSelection(user.id))}
                >
                  <div className={`user-avatar ${user.online ? 'online' : ''} me-2`}>
                    <img src={process.env.PUBLIC_URL + user.avatar} alt={user.name} className="avatar-img" />
                  </div>
                  <div className="servers-addpeople-user-info flex-grow-1">
                    <div className="servers-addpeople-user-name">{user.name}</div>
                    <div className={` ${user.online ? 'servers-addpeople-user-status-online' : 'servers-addpeople-user-status-offline'}`}>
                      {user.online ? 'Çevrimiçi' : 'Çevrimdışı'}
                    </div>
                  </div>
                  <div className="selection-indicator">
                    {selectedUsers.includes(user.id) && <FontAwesomeIcon icon={faCheck} className="text-success" />}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results text-center p-3">
                <FontAwesomeIcon icon={faUsers} className="fs-1 mb-2" />
                <p>Kullanıcı bulunamadı</p>
              </div>
            )}
            {selectedUsers.length > 0 && (
              <div className="servers-addpeople-action-buttons d-flex justify-content-center gap-2 py-2 px-2">
                <button className="btn btn-danger" onClick={() => dispatch(actions.clearSelectedUsers())}>
                  Temizle
                </button>
                <button className="btn btn-primary" onClick={() => dispatch(actions.addSelectedUsers())}>
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  {selectedUsers.length} Kullanıcı Ekle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPeople;