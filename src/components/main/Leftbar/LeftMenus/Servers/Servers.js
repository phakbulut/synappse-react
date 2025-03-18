import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSitemap, faUserPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ChannelGroup from './ChannelGroup';
import * as actions from './../../../../../redux/actions/MainActions'; 

const Servers = () => {
  const dispatch = useDispatch();
  const { serversOpen, selectedServerId, channelGroups, expandedGroups, addPeopleOpen } = useSelector((state) => state);

  // Yerel state'ler (yalnızca UI için)
  const [showAddGroupForm, setShowAddGroupForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');

  const serversRef = useRef(null);

  const toggleChannelGroup = (groupId) => {
    dispatch(actions.toggleChannelGroup(groupId));
  };

  const toggleAddGroupForm = () => {
    setShowAddGroupForm(!showAddGroupForm);
    setNewGroupName('');
  };

  const addGroup = () => {
    if (newGroupName.trim() === '') return;
    dispatch(actions.addChannelGroup(newGroupName));
    setShowAddGroupForm(false);
    setNewGroupName('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serversOpen && serversRef.current && !serversRef.current.contains(event.target)) {
        dispatch(actions.closeServers());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [serversOpen, dispatch]);

  return (
    <div ref={serversRef} className={`left-menu-servers container-fluid ${serversOpen ? 'open' : 'closed'}`}>
      <div className="left-menu-servers-title container row">
        <div className='col-8 pt-2 pb-2'>
          <h4 className='server-name'>Server Adı</h4>
        </div>
        <div className='left-menu-servers-title-icons hint col-4'>
          <FontAwesomeIcon
            icon={faGear}
            title="Sunucu Ayarları"
            className="server-icon"
          />
          <FontAwesomeIcon
            icon={faSitemap}
            onClick={toggleAddGroupForm}
            title="Kanal Grubu Ekle"
            className="server-icon"
          />
          <FontAwesomeIcon
            icon={faUserPlus}
            title="Kullanıcı Ekle"
            className="user-add-icon"
            onClick={() => dispatch(actions.openAddPeople())}
          />
        </div>
      </div>
      <div className="left-menu-servers-content gap-2 px-2 py-2">
        {/* Grup ekleme formu */}
        {showAddGroupForm && (
          <div className="add-group-form d-flex align-items-center gap-2 py-2 px-2 mb-3">
            <div className="d-flex align-items-center gap-2 col-8">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Grup adı"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center gap-2 col-4 justify-content-end">
              <button className="btn btn-sm btn-success hint" onClick={addGroup} title="Grup Ekle">
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button className="btn btn-sm btn-danger" onClick={toggleAddGroupForm} title="İptal">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        )}

        {/* Kanal grupları */}
        {channelGroups.map(group => (
          <ChannelGroup
            key={group.id}
            groupId={group.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Servers;