import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import menuReducer from "./user-menu/menu.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
});
