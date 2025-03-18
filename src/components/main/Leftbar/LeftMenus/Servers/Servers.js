import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSitemap, faUserPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ChannelGroup from './ChannelGroup';

const Servers = ({ className, isOpen, selectedServerId, handleCloseServers, handleAddPeopleOpen, addPeopleOpen, handleChannelClick }) => {
    // Grup ekleme formu için state
    const [showAddGroupForm, setShowAddGroupForm] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    
    const [channelGroups, setChannelGroups] = useState([
        { id: 'netEkibi1', name: '.Net Ekibi 1' },
        { id: 'netEkibi2', name: '.Net Ekibi 2' },
        { id: 'netEkibi3', name: 'React Ekibi' },
        { id: 'netEkibi4', name: 'DevOps Ekibi' },
        { id: 'netEkibi5', name: 'UI/UX Ekibi' }
    ]);

    const [expandedGroups, setExpandedGroups] = useState({
        netEkibi1: false,
        netEkibi2: false,
        netEkibi3: false,
        netEkibi4: false,
        netEkibi5: false
    });

    // Ref for the servers menu container
    const serversRef = useRef(null);

    const toggleChannelGroup = (groupId) => {
        setExpandedGroups(prevState => ({
            ...prevState,
            [groupId]: !prevState[groupId]
        }));
    };
    
    const toggleAddGroupForm = () => {
        setShowAddGroupForm(!showAddGroupForm);
        setNewGroupName('selected');
    };
    
    // Yeni grup ekle
    const addGroup = () => {
        if (newGroupName.trim() === '') return;
        
        const groupId = `group_${Date.now()}`; 
        const newGroup = {
            id: groupId,
            name: newGroupName
        };
        
        setChannelGroups([...channelGroups, newGroup]);
        
        setExpandedGroups(prevState => ({
            ...prevState,
            [groupId]: false
        }));
        
        setShowAddGroupForm(false);
        setNewGroupName('');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && serversRef.current && !serversRef.current.contains(event.target)) {
                handleCloseServers();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleCloseServers]);

    return (
        <div ref={serversRef} className={`left-menu-servers container-fluid ${className}`}>
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
                        onClick={handleAddPeopleOpen}

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
                        groupName={group.name}
                        isExpanded={expandedGroups[group.id]}
                        toggleChannelGroup={toggleChannelGroup}
                        handleChannelClick={handleChannelClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Servers;