import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus, faVolumeHigh, faMessage, faList, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Channel from './Channel';

const ChannelGroup = ({ groupId, groupName, isExpanded, toggleChannelGroup, handleChannelClick }) => {
    const [channels, setChannels] = useState([
        { id: 1, name: 'Ses Kanalı', type: 'voice' },
        { id: 2, name: 'Text Kanalı', type: 'text' },
        { id: 3, name: 'Github kanalı', type: 'github' },
        { id: 4, name: 'To Do Kanalı', type: 'todo' }
    ]);
    
    const [showAddForm, setShowAddForm] = useState(false);
    const [newChannelName, setNewChannelName] = useState('');
    const [newChannelType, setNewChannelType] = useState('text');
    
    // Kanal ekleme formunu göster/gizle
    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
        setNewChannelName('');
        setNewChannelType('text');
    };
    
    // Yeni kanal ekle
    const addChannel = () => {
        if (newChannelName.trim() === '') return;
        
        const newChannel = {
            id: Date.now(), // Basit bir unique ID
            name: newChannelName,
            type: newChannelType
        };
        
        setChannels([...channels, newChannel]);
        setShowAddForm(false);
        setNewChannelName('');
        setNewChannelType('text');
    };
    
    // Kanal tipine göre icon döndür
    const getIconForType = (type) => {
        switch (type) {
            case 'voice':
                return faVolumeHigh;
            case 'text':
                return faMessage;
            case 'github':
                return faGithub;
            case 'todo':
                return faList;
            default:
                return faMessage;
        }
    };
    
    // Kanal tıklama olayını güçlendirilmiş event handling ile güncelleyelim
    const handleChannelItemClick = (e, channelId, channelType) => {
        // Olay yayılımını ve varsayılan davranışı engelle
        e.stopPropagation();
        e.preventDefault();
        
        // Uygun handleChannelClick çağrısını yap
        handleChannelClick(channelId, channelType);
        
        // Olayı tamamen durdur
        return false;
    };
    
    return (
        <div className={`left-menu-servers-content-channelgroup ${isExpanded ? 'expanded' : ''}`}>
            <div className='channel-group-header d-flex justify-content-between align-items-center w-100 px-2'>
                <div className='channel-group-name text-truncate' onClick={() => toggleChannelGroup(groupId)}>
                    <h4 className="text-truncate">{groupName}</h4>
                </div>
                <div className='channel-expand' onClick={toggleAddForm}>
                    <FontAwesomeIcon icon={faPlus} title="Kanal Ekle" />
                </div>
                <div className='channel-expand' onClick={() => toggleChannelGroup(groupId)}>
                    <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} title="Genişlet"/>
                </div>
            </div>
            
            {isExpanded && (
                <div className="channel-group-content px-3 py-2">
                    {/* Kanal ekleme formu */}
                    {showAddForm && (
                        <div className="channel-item add-channel-form d-flex align-items-center gap-2 py-1">
                            <div className="d-flex align-items-center gap-2 col-8">
                                <div className="channel-type-selector d-flex gap-1">
                                    <div 
                                        className={`channel-type-icon ${newChannelType === 'text' ? 'active' : ''}`} 
                                        onClick={(e) => { e.stopPropagation(); setNewChannelType('text'); }}
                                    >
                                        <FontAwesomeIcon icon={faMessage} />
                                    </div>
                                    <div 
                                        className={`channel-type-icon ${newChannelType === 'voice' ? 'active' : ''}`} 
                                        onClick={(e) => { e.stopPropagation(); setNewChannelType('voice'); }}
                                    >
                                        <FontAwesomeIcon icon={faVolumeHigh} />
                                    </div>
                                    <div 
                                        className={`channel-type-icon ${newChannelType === 'github' ? 'active' : ''}`} 
                                        onClick={(e) => { e.stopPropagation(); setNewChannelType('github'); }}
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </div>
                                    <div 
                                        className={`channel-type-icon ${newChannelType === 'todo' ? 'active' : ''}`} 
                                        onClick={(e) => { e.stopPropagation(); setNewChannelType('todo'); }}
                                    >
                                        <FontAwesomeIcon icon={faList} />
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control form-control-sm" 
                                    placeholder="Kanal adı" 
                                    value={newChannelName}
                                    onChange={(e) => { e.stopPropagation(); setNewChannelName(e.target.value); }}
                                />
                            </div>
                            <div className="d-flex align-items-center gap-2 col-4 justify-content-end">
                                <button className="btn btn-sm btn-success" onClick={addChannel}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={toggleAddForm}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {/* Kanallar */}
                    {channels.map(channel => (
                        <div 
                            className="channel-item d-flex align-items-center py-1 px-2" 
                            key={channel.id}
                            onClick={(e) => handleChannelItemClick(e, channel.id, channel.type)}
                        >
                            <Channel 
                                id={channel.id}
                                name={channel.name}
                                type={channel.type}
                                icon={getIconForType(channel.type)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChannelGroup;
