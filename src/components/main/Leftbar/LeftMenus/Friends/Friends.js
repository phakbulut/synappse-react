import React, { useState, useRef, useEffect } from "react";
import "./../../../../../asset/css/Friends_Menu.css";
import "./../../../../../asset/css/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FriendCard from "./FriendCard";

const Friends = ({ className, isOpen, handleCloseFriends }) => {
    const [showFriends, setShowFriends] = useState(true);
    const [showOthers, setShowOthers] = useState(false);
    const friendsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && friendsRef.current && !friendsRef.current.contains(event.target)) {
                handleCloseFriends();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleCloseFriends]);

    const toggleFriends = () => {
        setShowFriends(!showFriends);
    };

    const toggleOthers = () => {
        setShowOthers(!showOthers);
    };

    return (
        <div ref={friendsRef} className={`container-fluid friends-menu px-2 py-2 ${className}`}>
            <div className="friends-menu-header container-fluid text-center">
                <div className="friends-menu-header-title py-2">
                    <div className="header-text mb-2">
                        <h4>Arkadaşlar</h4>
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Search" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    </div>
                </div>
            </div>

            {/* Arkadaşlar */}
            <div className="friends-menu-body container-fluid text-center align-items-center">
                <div className="Friends-header d-flex justify-content-between align-items-center ">
                    <h4>Arkadaşlarınız</h4>
                    <button className=" hint" title="Arkadaşları Göster/Gizle" onClick={toggleFriends}>
                        <FontAwesomeIcon icon={showFriends ? faChevronDown : faChevronUp} />
                    </button>
                </div>

                {showFriends && (
                    <>
                        <FriendCard name="İbrahim" status="online" />
                        <FriendCard name="İbrahim" status="offline" />
                    </>
                )}
            </div>

            {/* Diğer Kullanıcılar */}
            <div className="friends-menu-others container-fluid text-center align-items-center">
                <div className="Friends-header d-flex justify-content-between align-items-center">
                    <h4>Diğer Kullanıcılar</h4>
                    <button className=" hint" title="Arkadaşları Göster/Gizle" onClick={toggleOthers}>
                        <FontAwesomeIcon icon={showOthers ? faChevronDown : faChevronUp} />
                    </button>
                </div>

                {showOthers && (
                    <>
                        <FriendCard name="Ahmet" status="online" />
                        <FriendCard name="Mehmet" status="offline" />
                        <FriendCard name="Ayşe" status="offline" />
                        <FriendCard name="Ali" status="offline" />
                        <FriendCard name="Ayşe" status="offline" />
                        <FriendCard name="Ali" status="offline" />
                        <FriendCard name="Ayşe" status="offline" />
                        <FriendCard name="Ali" status="offline" />
                        <FriendCard name="Ayşe" status="offline" />
                        <FriendCard name="Ali" status="offline" />
                    </>
                )}
            </div>
        </div>
    );
};

export default Friends;