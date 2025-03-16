import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faSitemap, faUserPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Servers = ({ className, isOpen }) => {


    return (
        <div className={`left-menu-servers container-fluid ${className}`}>
            {console.log("Servers component rendered inside return with className:", className)}

            <div className="left-menu-servers-title container row">
                <div className='col-8 pt-2 pb-2'>
                    <h4>Server Adı</h4>
                </div>
                <div className='left-menu-servers-title-icons col-4'>
                    <FontAwesomeIcon icon={faGear} />
                    <FontAwesomeIcon icon={faSitemap} />
                    <FontAwesomeIcon icon={faUserPlus} />
                </div>
            </div>
            <div className="left-menu-servers-content row gap-2 px-2 py-2">
                <div className="left-menu-servers-content-channelgroup  ">
                    <div className='d-flex justify-content-between align-items-center px-2 py-2'>
                        <div className='channel-group-name text-truncate'>
                            <h4 className="text-truncate">Channel GroupName</h4>
                        </div>
                        <div className='channel-expand ms-2'>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                </div>
                <div className="left-menu-servers-content-channelgroup">
                </div>
            </div>
        </div>
    )
}

export default Servers;
