import React from "react";
import "./user-menu.styles.scss";
import { auth } from "../../firebase/firebase.utlis";
import CartButton from "../cart-button/cart-button.component";

const UserMenu = ({ currentUser, menuRef, toggleHiddenMenu }) => {
  return (
    <div ref={menuRef} className="userMenu">
      <img
        className="userPhotoDetail"
        src={
          currentUser.photoURL
            ? currentUser.photoURL
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"
        }
        alt=""
        aria-hidden="true"
        data-noaft=""
      ></img>
      <div className="userName">{currentUser.displayName}</div>
      <div className="userEmail">{currentUser.email}</div>
      <CartButton onClick={() => auth.signOut()}>
        Manage your account
      </CartButton>
      <div className="signOutBtnContainer">
        <CartButton
          onClick={() => auth.signOut().then(() => toggleHiddenMenu())}
        >
          SIGN OUT
        </CartButton>
      </div>
      <div className="privacyTermsContainer">
        <span>Privacy policy</span>. <span>Terms of use</span>
      </div>
    </div>
  );
};

export default UserMenu;
