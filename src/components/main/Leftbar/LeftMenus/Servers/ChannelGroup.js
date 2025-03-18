import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus, faVolumeHigh, faMessage, faList, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Channel from './Channel';
import * as actions from '../../../../../redux/actions/MainActions';

const ChannelGroup = ({ groupId }) => {
  const dispatch = useDispatch();
  const { channelGroups, expandedGroups, addChannelForms } = useSelector((state) => ({
    channelGroups: state.channelGroups,
    expandedGroups: state.expandedGroups,
    addChannelForms: state.addChannelForms,
  }));
  const group = channelGroups.find(g => g.id === groupId) || { name: 'Bilinmeyen Grup', channels: [] };
  const isExpanded = expandedGroups[groupId] || false;
  const form = addChannelForms[groupId] || { showForm: false, newChannelName: '', newChannelType: 'text' };

  const getIconForType = (type) => {
    switch (type) {
      case 'voice': return faVolumeHigh;
      case 'text': return faMessage;
      case 'github': return faGithub;
      case 'todo': return faList;
      default: return faMessage;
    }
  };

  const handleChannelItemClick = (e, channelId, channelType) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.setActiveChannel(channelId, channelType));
    return false;
  };

  const handleAddChannel = () => {
    dispatch(actions.addChannel(groupId));
  };

  // Debug için loglar
  console.log('ChannelGroup render:', {
    groupId,
    group,
    isExpanded,
    channels: group.channels
  });

  return (
    <div className={`left-menu-servers-content-channelgroup ${isExpanded ? 'expanded' : ''}`}>
      <div className='channel-group-header d-flex justify-content-between align-items-center w-100 px-2'>
        <div className='channel-group-name text-truncate' onClick={() => dispatch(actions.toggleChannelGroup(groupId))}>
          <h4 className="text-truncate">{group.name}</h4>
        </div>
        <div className='channel-expand' onClick={() => dispatch(actions.toggleAddChannelForm(groupId))}>
          <FontAwesomeIcon icon={faPlus} title="Kanal Ekle" />
        </div>
        <div className='channel-expand' onClick={() => dispatch(actions.toggleChannelGroup(groupId))}>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} title="Genişlet"/>
        </div>
      </div>
      
      {isExpanded && (
        <div className="channel-group-content px-3 py-2">
          {form.showForm && (
            <div className="channel-item add-channel-form d-flex align-items-center gap-2 py-1">
              <div className="d-flex align-items-center gap-2 col-8">
                <div className="channel-type-selector d-flex gap-1">
                  <div
                    className={`channel-type-icon ${form.newChannelType === 'text' ? 'active' : ''}`}
                    onClick={() => dispatch(actions.setNewChannelType(groupId, 'text'))}
                  >
                    <FontAwesomeIcon icon={faMessage} />
                  </div>
                  <div
                    className={`channel-type-icon ${form.newChannelType === 'voice' ? 'active' : ''}`}
                    onClick={() => dispatch(actions.setNewChannelType(groupId, 'voice'))}
                  >
                    <FontAwesomeIcon icon={faVolumeHigh} />
                  </div>
                  <div
                    className={`channel-type-icon ${form.newChannelType === 'github' ? 'active' : ''}`}
                    onClick={() => dispatch(actions.setNewChannelType(groupId, 'github'))}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div
                    className={`channel-type-icon ${form.newChannelType === 'todo' ? 'active' : ''}`}
                    onClick={() => dispatch(actions.setNewChannelType(groupId, 'todo'))}
                  >
                    <FontAwesomeIcon icon={faList} />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Kanal adı"
                  value={form.newChannelName}
                  onChange={(e) => dispatch(actions.setNewChannelName(groupId, e.target.value))}
                />
              </div>
              <div className="d-flex align-items-center gap-2 col-4 justify-content-end">
                <button className="btn btn-sm btn-success" onClick={handleAddChannel}>
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => dispatch(actions.toggleAddChannelForm(groupId))}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          )}
          {(Array.isArray(group.channels) ? group.channels : []).map(channel => (
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