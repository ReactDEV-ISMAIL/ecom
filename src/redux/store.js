import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import rootReducer from "./root-reducer";

const midlwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...midlwares));

export default store;
