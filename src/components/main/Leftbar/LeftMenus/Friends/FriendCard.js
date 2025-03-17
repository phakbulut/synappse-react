import React from "react";
const FriendCard = ({ name, status }) => {
    return (
        <div className="Friend-card container-fluid row align-items-center justify-content-center ">
            <div className="col-2">
                <div className={`user-card-avatar user-card-avatar-${status}`}>
                    <img src={process.env.PUBLIC_URL + "/asset/images/avatar.jpeg"} alt="User Avatar" />
                </div>
            </div>
            <div className="col-10 d-flex align-items-center">
                <div className="Friend-card-name">
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;