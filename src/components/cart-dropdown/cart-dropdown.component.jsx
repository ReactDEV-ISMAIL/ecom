import React from "react";
import CartButton from "../cart-button/cart-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleHiddenCart } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartRef, cartItems, dispatch, history }) => {
  return (
    <div ref={cartRef} className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CartButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleHiddenCart());
        }}
      >
        GO TO CHECKOUT
      </CartButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
