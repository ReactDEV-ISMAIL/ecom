import React from "react";
import "./cart-button.styles.scss";

const CartButton = ({ children, ...otherProps }) => (
  <button className="signOutBtn" {...otherProps}>
    {children}
  </button>
);
export default CartButton;
