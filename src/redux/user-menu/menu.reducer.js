import { MenuActionTypes } from "./menu.types";

const INITIAL_STATE = {
  menuHidden: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_HIDDEN_MENU:
      return {
        ...state,
        menuHidden: !state.menuHidden,
      };
    default:
      return state;
  }
};
export default menuReducer;
