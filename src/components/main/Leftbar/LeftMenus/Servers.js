import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSitemap, faUserPlus, faChevronDown, faChevronUp, faVolumeHigh, faMessage, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Servers = ({ className, isOpen }) => {
    // Track expanded state for each channel group separately
    const [expandedGroups, setExpandedGroups] = useState({
        netEkibi1: false,
        netEkibi2: false
    });

    // Toggle specific channel group by its id
    const toggleChannelGroup = (groupId) => {
        setExpandedGroups(prevState => ({
            ...prevState,
            [groupId]: !prevState[groupId]
        }));
    };

    return (
        <div className={`left-menu-servers container-fluid ${className}`}>
            <div className="left-menu-servers-title container row">
                <div className='col-8 pt-2 pb-2'>
                    <h4 className='server-name'>Server Adı</h4>
                </div>
                <div className='left-menu-servers-title-icons col-4'>
                    <FontAwesomeIcon icon={faGear} />
                    <FontAwesomeIcon icon={faSitemap} />
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
            </div>
            <div className="left-menu-servers-content row gap-2 px-2 py-2">
                <div className={`left-menu-servers-content-channelgroup ${expandedGroups.netEkibi1 ? 'expanded' : ''}`}>
                    <div className='channel-group-header d-flex justify-content-between align-items-center w-100 px-2'>
                        <div className='channel-group-name text-truncate' onClick={() => toggleChannelGroup('netEkibi1')}>
                            <h4 className="text-truncate">.Net Ekibi</h4>
                        </div>
                        <div className='channel-expand'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className='channel-expand' onClick={() => toggleChannelGroup('netEkibi1')}>
                            <FontAwesomeIcon icon={expandedGroups.netEkibi1 ? faChevronUp : faChevronDown} />
                        </div>
                    </div>
                    
                    {expandedGroups.netEkibi1 && (
                        <div className="channel-group-content px-3 py-2">
                            <div className="channel-item d-flex align-items-center py-1 ">
                                <span className="text-white"><FontAwesomeIcon icon={faVolumeHigh} /> Ses Kanalı</span>
                            </div>
                            <div className="channel-item d-flex align-items-center py-1">
                                <span className="text-white"><FontAwesomeIcon icon={faMessage} /> Text Kanalı</span>
                            </div>
                            <div className="channel-item d-flex align-items-center py-1">
                                <span className="text-white"><FontAwesomeIcon icon={faGithub} /> Github kanalı</span>
                            </div>
                            <div className="channel-item d-flex align-items-center py-1">
                                <span className="text-white"><FontAwesomeIcon icon={faList} /> To Do Kanalı</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={`left-menu-servers-content-channelgroup ${expandedGroups.netEkibi2 ? 'expanded' : ''}`}>
                    <div className='channel-group-header d-flex justify-content-between align-items-center w-100 px-2'>
                        <div className='channel-group-name text-truncate' onClick={() => toggleChannelGroup('netEkibi2')}>
                            <h4 className="text-truncate">Flutter ekibi</h4>
                        </div>
                        <div className='channel-expand'>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className='channel-expand' onClick={() => toggleChannelGroup('netEkibi2')}>
                            <FontAwesomeIcon icon={expandedGroups.netEkibi2 ? faChevronUp : faChevronDown} />
                        </div>
                    </div>
                    
                    {expandedGroups.netEkibi2 && (
                        <div className="channel-group-content px-3 py-2">
                            <div className="channel-item d-flex align-items-center py-1 ">
                                <span className="text-white"><FontAwesomeIcon icon={faVolumeHigh} /> Ses Kanalı</span>
                            </div>
                            <div className="channel-item d-flex align-items-center py-1">
                                <span className="text-white"><FontAwesomeIcon icon={faMessage} /> Text Kanalı</span>
                            </div>
                            <div className="channel-item d-flex align-items-center py-1">
                                <span className="text-white"><FontAwesomeIcon icon={faGithub} /> Github kanalı</span>
                            </div>
                            <div className="channel-item d-flex align-items-center py-1">
                                <span className="text-white"><FontAwesomeIcon icon={faList} /> To Do Kanalı</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Servers;