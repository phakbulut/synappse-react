import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Channel = ({ id, name, type, icon }) => {
    return (
        <div className="channel-item d-flex align-items-center gap-2 py-1">
            <div className="d-flex align-items-center gap-2 col-10 justify-content-start">
                <FontAwesomeIcon icon={icon} />
                <span className="text-white">{name}</span>
            </div>
            <div className="channel-item-extra">
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    );
};

export default Channel;
