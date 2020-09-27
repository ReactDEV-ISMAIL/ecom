import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { selectNbrOfItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ cartIconRef, toggleHiddenCart, nbrOfItems }) => (
  <div className="cart-icon" ref={cartIconRef} onClick={toggleHiddenCart}>
    {console.log("called")}
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{nbrOfItems}</span>
  </div>
);
const mapStateToProps = createStructuredSelector({
  nbrOfItems: selectNbrOfItems,
});

export default connect(mapStateToProps)(CartIcon);
