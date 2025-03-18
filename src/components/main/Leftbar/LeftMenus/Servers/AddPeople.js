import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCheck, faTimes, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../../../../../asset/css/Add_People.css';

const AddPeople = ({ className, isOpen, handleCloseAddPeople }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    // Örnek kullanıcı listesi
    const [users, setUsers] = useState([
        { id: 1, name: 'İbrahim Akbulut', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 2, name: 'Mehmet Demir', avatar: '/asset/images/avatar.jpeg', online: false },
        { id: 3, name: 'Ayşe Kara', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 4, name: 'Fatma Şahin', avatar: '/asset/images/avatar.jpeg', online: false },
        { id: 5, name: 'Ali Öztürk', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 6, name: 'Kemal Şen', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 7, name: 'Furkan Akbulut', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 8, name: 'İhsan Akbulut', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 9, name: 'Veli Akbulut', avatar: '/asset/images/avatar.jpeg', online: true },
        { id: 10, name: 'Alparslan Akbulut', avatar: '/asset/images/avatar.jpeg', online: true },


    ]);

    // Ref for the component container
    const addPeopleRef = useRef(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && addPeopleRef.current && !addPeopleRef.current.contains(event.target)) {
                handleCloseAddPeople();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleCloseAddPeople]);

    // Kullanıcı seçme/kaldırma işlevi
    const toggleUserSelection = (userId) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    // Filtrelenmiş kullanıcılar
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Kullanıcıları ekle
    const addSelectedUsers = () => {
        console.log('Seçilen kullanıcılar:', selectedUsers);
        // Burada API çağrısı yapılabilir
        handleCloseAddPeople();
    };

    return (
        <>
            {/* Arka plan overlay'ı */}
            <div className={`add-people-overlay ${isOpen ? 'active' : ''}`} onClick={handleCloseAddPeople}></div>

            {/* AddPeople içeriği */}
            <div ref={addPeopleRef} className={`left-menu-servers-addpeople ${className}`}>
                <div className="left-menu-servers-addpeople-title container row py-2 my-1 d-flex justify-content-center align-items-center" >
                    <div className='col-8  '>
                        <h4 className='server-name'>Kullanıcı Ekle</h4>
                    </div>
                    <div className='left-menu-servers-title-icons hint col-4 d-flex justify-content-end'>
                        <FontAwesomeIcon
                            icon={faTimes}
                            title="Kapat"
                            className="server-icon"
                            onClick={handleCloseAddPeople}
                        />
                    </div>
                </div>
                <div className="left-menu-servers-content gap-2  py-2">
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
                                    onClick={() => toggleUserSelection(user.id)}
                                >
                                    <div className={`user-avatar ${user.online ? 'online' : ''} me-2`}>
                                        <img
                                            src={process.env.PUBLIC_URL + user.avatar}
                                            alt={user.name}
                                            className="avatar-img"
                                        />
                                    </div>
                                    <div className="servers-addpeople-user-info flex-grow-1">
                                        <div className="servers-addpeople-user-name">{user.name}</div>
                                        <div className={` ${user.online ? 'servers-addpeople-user-status-online' : 'servers-addpeople-user-status-offline'}`}>{user.online ? 'Çevrimiçi' : 'Çevrimdışı'}</div>
                                    </div>
                                    <div className="selection-indicator">
                                        {selectedUsers.includes(user.id) && (
                                            <FontAwesomeIcon icon={faCheck} className="text-success" />
                                        )}
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
                                <button
                                    className="btn btn-danger"
                                    onClick={() => setSelectedUsers([])}
                                >
                                    Temizle
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={addSelectedUsers}
                                >
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