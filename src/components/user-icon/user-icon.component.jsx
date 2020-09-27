import React from "react";
import "./user.icon.styles.scss";

const UserIcon = ({ userRef, currentUser, toggleHiddenMenu }) => (
  <div ref={userRef} className="user" onClick={toggleHiddenMenu}>
    <img
      className="userPhoto"
      src={
        currentUser.photoURL
          ? currentUser.photoURL
          : "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
      }
      alt=""
      aria-hidden="true"
      data-noaft=""
    ></img>
  </div>
);
export default UserIcon;
