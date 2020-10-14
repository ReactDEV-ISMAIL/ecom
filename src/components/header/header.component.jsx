import React, { Fragment, useRef, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import UserMenu from "../user-menu/user-menu.component";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import UserIcon from "../user-icon/user-icon.component";
import { toggleHiddenCart } from "../../redux/cart/cart.action";
import { toggleHiddenMenu } from "../../redux/user-menu/menu.action";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectMenuHidden } from "../../redux/user-menu/menu.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, ...otherProps }) => {
  const menuRef = useRef(null);
  const userRef = useRef(null);
  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !userRef.current.contains(event.target)
      ) {
        otherProps.toggleHiddenMenu();
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        !cartIconRef.current.contains(event.target)
      ) {
        otherProps.toggleHiddenCart();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [otherProps]);

  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {!currentUser && <OptionLink to="/signin">SIGN IN</OptionLink>}
          {currentUser && (
            <Fragment>
              <CartIcon
                cartIconRef={cartIconRef}
                toggleHiddenCart={otherProps.toggleHiddenCart}
              />
              <UserIcon
                userRef={userRef}
                currentUser={currentUser}
                toggleHiddenMenu={otherProps.toggleHiddenMenu}
              />
            </Fragment>
          )}
        </OptionsContainer>
      </HeaderContainer>
      {otherProps.menuHidden && currentUser && (
        <UserMenu
          currentUser={currentUser}
          menuRef={menuRef}
          toggleHiddenMenu={otherProps.toggleHiddenMenu}
        />
      )}
      {otherProps.cartHidden && currentUser && (
        <CartDropdown cartRef={cartRef} />
      )}
    </Fragment>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  menuHidden: selectMenuHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart()),
  toggleHiddenMenu: () => dispatch(toggleHiddenMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
