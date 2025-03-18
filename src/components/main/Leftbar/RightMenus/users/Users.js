import React, { useRef, useEffect, useState } from 'react';
import "./../../../../../asset/css/Users.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSearch, faChevronDown, faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";

const Users = ({ className, isOpen, handleCloseUsers }) => {
    const usersRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [collapsedRoles, setCollapsedRoles] = useState({}); // Hangi rollerin daraltılacağını izlemek için

    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([
        { id: 1, name: 'İbrahim Akbulut', tagName: '@ibrahima', role: 'Yönetici', avatar: '/asset/images/avatar.jpeg', online: false, hierarchy: 10 },
        { id: 2, name: 'Mehmet Demir', tagName: '@mehmetd', role: 'Moderatör', avatar: '/asset/images/avatar.jpeg', online: false, hierarchy: 8 },
        { id: 5, name: 'Ali Öztürk', tagName: '@alio', role: 'Moderatör', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 8 },
        { id: 3, name: 'Ayşe Kara', tagName: '@aysek', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
        { id: 4, name: 'Fatma Şahin', tagName: '@fatmas', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: false, hierarchy: 1 },
        { id: 6, name: 'Kemal Şen', tagName: '@kemals', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
        { id: 7, name: 'Furkan Akbulut', tagName: '@furkana', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
        { id: 8, name: 'İhsan Akbulut', tagName: '@ihsana', role: 'Üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },
        { id: 10, name: 'İbrahim Akbulut', tagName: '@ibrahima', role: 'üye', avatar: '/asset/images/avatar.jpeg', online: true, hierarchy: 1 },

    ]);

    // Tüm tıklama olaylarını durdur
    const stopPropagation = (e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        return false;
    };

    useEffect(() => {
        // useRef değerinin kopyasını effect içinde oluşturalım
        const currentUsersRef = usersRef.current;
        
        const handleClickOutside = (event) => {
            // Users bileşeninin dışında bir yere tıklandığında kapanma mantığı
            // Burayı iyileştiriyoruz
            if (isOpen && currentUsersRef) {
                // Tıklanan öğe Users bileşeninin içinde mi kontrol edelim
                const usersMenu = document.querySelector('.users-Menu');
                const usersBody = document.querySelector('.users-Menu-body');
                const usersHeader = document.querySelector('.users-Menu-header');
                const usersSearch = document.querySelector('.users-search-container');
                const usersList = document.querySelectorAll('.users-list-item');
                const roleGroups = document.querySelectorAll('.role-group');
                const roleTitles = document.querySelectorAll('.role-title');
                
                // Tıklanan öğe bu seçicilerden herhangi birine uyuyor mu kontrol edelim
                const isInsideUsers = 
                    currentUsersRef.contains(event.target) ||
                    (usersMenu && usersMenu.contains(event.target)) ||
                    (usersBody && usersBody.contains(event.target)) ||
                    (usersHeader && usersHeader.contains(event.target)) ||
                    (usersSearch && usersSearch.contains(event.target));
                
                // Rol gruplarını ve kullanıcı öğelerini kontrol edelim
                let isInsideRoleOrUser = false;
                roleGroups.forEach(group => {
                    if (group.contains(event.target)) isInsideRoleOrUser = true;
                });
                roleTitles.forEach(title => {
                    if (title.contains(event.target)) isInsideRoleOrUser = true;
                });
                usersList.forEach(item => {
                    if (item.contains(event.target)) isInsideRoleOrUser = true;
                });
                
                // Eğer tıklama Users bileşeninin dışında ise kapat
                if (!isInsideUsers && !isInsideRoleOrUser) {
                    handleCloseUsers();
                }
            }
        };

        // Tıklama olayını ekle
        document.addEventListener('mousedown', handleClickOutside);
        
        // Users bileşeni içindeki tüm öğelere tıklama olayı dinleyicileri ekle
        if (currentUsersRef) {
            const allElements = currentUsersRef.querySelectorAll('*');
            allElements.forEach(element => {
                element.addEventListener('click', stopPropagation);
            });
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            
            // Temizleme - şimdi güvenli bir şekilde currentUsersRef kullanıyoruz
            if (currentUsersRef) {
                const allElements = currentUsersRef.querySelectorAll('*');
                allElements.forEach(element => {
                    element.removeEventListener('click', stopPropagation);
                });
            }
        };
    }, [isOpen, handleCloseUsers]);

    // Filtrelenmiş kullanıcılar
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.tagName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Rütbelere göre gruplandırma
    const groupByRole = (users) => {
        const groupedUsers = {};
        const roles = [];

        // Tüm rolleri topla ve hiyerarşilerine göre sırala
        users.forEach(user => {
            if (!groupedUsers[user.role]) {
                groupedUsers[user.role] = {
                    users: [],
                    hierarchy: user.hierarchy,
                    onlineCount: 0
                };
                roles.push(user.role);
            }
            groupedUsers[user.role].users.push(user);
            
            // Çevrimiçi kullanıcı sayısını güncelle
            if (user.online) {
                groupedUsers[user.role].onlineCount += 1;
            }
        });

        // Hiyerarşiye göre rolleri sırala (büyükten küçüğe)
        const sortedRoles = roles.sort((a, b) => 
            groupedUsers[b].hierarchy - groupedUsers[a].hierarchy
        );

        return { groupedUsers, sortedRoles };
    };

    const { groupedUsers, sortedRoles } = groupByRole(filteredUsers);

    // Rütbelere göre renk atamaları
    const roleColors = {
        'Yönetici': 'red', // Ana turuncu
        'Moderatör': 'blue', // Açık turuncu
        'Üye': 'green' // Çok açık turuncu
    };

    // Rol grubunu genişlet/daralt - Olay yönetimi düzeltildi
    const toggleRoleCollapse = (role, e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        
        setCollapsedRoles(prev => ({
            ...prev,
            [role]: !prev[role]
        }));
        
        return false;
    };

    return (
        <div 
            ref={usersRef} 
            className={`users-Menu container-fluid px-2 py-2 ${className}`}
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
                onClick={stopPropagation}
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
                        onChange={(e) => {
                            e.stopPropagation();
                            setSearchTerm(e.target.value);
                        }}
                        onClick={stopPropagation}
                    />
                </div>
            </div>
            
            <div 
                className='users-Menu-body gap-2 mt-2'
                onClick={stopPropagation}
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
                                    borderLeftColor: roleColors[role] || '#FF7043'
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
                                        backgroundColor: `${roleColors[user.role]}10` // 10% opacity for background
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
