import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./../../../../../asset/css/Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSearch, faChevronDown, faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import * as actions from '../../../../../redux/actions/MainActions';

const Users = () => {
  const dispatch = useDispatch();
  const { usersOpen, users } = useSelector((state) => state);
  const usersRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedRoles, setCollapsedRoles] = useState({});

  const stopPropagation = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (usersRef.current && !usersRef.current.contains(event.target)) {
        dispatch({ type: "CLOSE_USERS" });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.tagName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupByRole = (users) => {
    const groupedUsers = {};
    const roles = [];
    users.forEach(user => {
      if (!groupedUsers[user.role]) {
        groupedUsers[user.role] = { users: [], hierarchy: user.hierarchy, onlineCount: 0 };
        roles.push(user.role);
      }
      groupedUsers[user.role].users.push(user);
      if (user.online) groupedUsers[user.role].onlineCount += 1;
    });
    const sortedRoles = roles.sort((a, b) => groupedUsers[b].hierarchy - groupedUsers[a].hierarchy);
    return { groupedUsers, sortedRoles };
  };

  const { groupedUsers, sortedRoles } = groupByRole(filteredUsers);

  const roleColors = {
    'Yönetici': '#FF4500', // Turuncu
    'Moderatör': '#FFA500', // Açık turuncu
    'Üye': '#FFD700' // Sarımsı turuncu
  };

  const toggleRoleCollapse = (role, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setCollapsedRoles(prev => ({ ...prev, [role]: !prev[role] }));
    return false;
  };

  return (
    <div
      ref={usersRef}
      className={`users-Menu container-fluid px-2 py-2 ${usersOpen ? 'open' : 'closed'}`}
      onClick={stopPropagation}
      onMouseDown={stopPropagation}
    >
      <div
        className='users-Menu-header d-flex justify-content-between align-items-center px-4 py-2'
        onClick={stopPropagation}
      >
        <h4>Serverdaki Kullanıcılar</h4>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="users-icon"
          onClick={stopPropagation}
        />
      </div>
      <div
        className="users-search-container mb-3 mt-3"
      >
        <div className="users-input-group">
          <span className="users-input-group-text">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Kullanıcı ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <div
        className='users-Menu-body gap-2 mt-2'
      >
        {filteredUsers.length > 0 ? (
          sortedRoles.map(role => (
            <div
              key={role}
              className="role-group mb-3"
              onClick={stopPropagation}
            >
              <div
                className="role-title mb-2"
                onClick={(e) => toggleRoleCollapse(role, e)}
                style={{ 
                  color: roleColors[role] || '#FF7043', 
                  borderLeft: `4px solid ${roleColors[role] || '#FF7043'}`,
                  backgroundColor: `${roleColors[role]}15`
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={collapsedRoles[role] ? faChevronRight : faChevronDown}
                      className="me-2"
                    />
                    <span>{role} ({groupedUsers[role].users.length})</span>
                  </div>
                  <div className="online-counter">
                    <FontAwesomeIcon icon={faCircle} className="text-success me-1" style={{ fontSize: '0.6rem' }} />
                    <span className="online-count">{groupedUsers[role].onlineCount}</span>
                  </div>
                </div>
              </div>
              {!collapsedRoles[role] && groupedUsers[role].users.map(user => (
                <div
                  key={user.id}
                  className="users-list-item d-flex align-items-center p-3 mb-2"
                  style={{
                    borderLeft: `4px solid ${roleColors[user.role] || '#FF7043'}`,
                    backgroundColor: `${roleColors[user.role]}10`
                  }}
                  onClick={stopPropagation}
                >
                  <div className={`users-card-avatar ${user.online ? 'online' : 'offline'} me-2`}>
                    <img
                      src={process.env.PUBLIC_URL + user.avatar}
                      alt={user.name}
                      className="avatar-img"
                    />
                  </div>
                  <div className="users-info flex-grow-1">
                    <div className="users-name">{user.name}</div>
                    <div className="users-tagname">{user.tagName}</div>
                    <div className="users-role" style={{ color: roleColors[user.role] || '#FF7043' }}>
                      {user.role}
                    </div>
                    <div className={`${user.online ? 'users-status-online' : 'users-status-offline'}`}>
                      {user.online ? 'Çevrimiçi' : 'Çevrimdışı'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="no-results text-center p-3">
            <p>Kullanıcı bulunamadı</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;