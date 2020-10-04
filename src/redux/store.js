import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const midlwares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...midlwares));
export const persistor = persistStore(store);
