import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSitemap, faUserPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ChannelGroup from './ChannelGroup';

const Servers = ({ className, isOpen, handleCloseServers }) => {
    // Grup ekleme formu için state
    const [showAddGroupForm, setShowAddGroupForm] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    
    // Örnek kanal grupları
    const [channelGroups, setChannelGroups] = useState([
        { id: 'netEkibi1', name: '.Net Ekibi 1' },
        { id: 'netEkibi2', name: '.Net Ekibi 2' },
        { id: 'netEkibi3', name: 'React Ekibi' },
        { id: 'netEkibi4', name: 'DevOps Ekibi' },
        { id: 'netEkibi5', name: 'UI/UX Ekibi' }
    ]);

    // Track expanded state for each channel group separately
    const [expandedGroups, setExpandedGroups] = useState({
        netEkibi1: false,
        netEkibi2: false,
        netEkibi3: false,
        netEkibi4: false,
        netEkibi5: false
    });

    // Ref for the servers menu container
    const serversRef = useRef(null);

    // Toggle specific channel group by its id
    const toggleChannelGroup = (groupId) => {
        setExpandedGroups(prevState => ({
            ...prevState,
            [groupId]: !prevState[groupId]
        }));
    };
    
    // Grup ekleme formunu göster/gizle
    const toggleAddGroupForm = () => {
        setShowAddGroupForm(!showAddGroupForm);
        setNewGroupName('');
    };
    
    // Yeni grup ekle
    const addGroup = () => {
        if (newGroupName.trim() === '') return;
        
        const groupId = `group_${Date.now()}`; // Basit bir unique ID
        const newGroup = {
            id: groupId,
            name: newGroupName
        };
        
        setChannelGroups([...channelGroups, newGroup]);
        
        // Yeni grup için expanded state ekle
        setExpandedGroups(prevState => ({
            ...prevState,
            [groupId]: false
        }));
        
        setShowAddGroupForm(false);
        setNewGroupName('');
    };

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Eğer menü açıksa ve tıklanan yer menünün dışındaysa kapat
            if (isOpen && serversRef.current && !serversRef.current.contains(event.target)) {
                handleCloseServers();
            }
        };

        // Event listener'ı ekle
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup function
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
                        className="server-icon"
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
                    />
                ))}
            </div>
        </div>
    );
};

export default Servers;