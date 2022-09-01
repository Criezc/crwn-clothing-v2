import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

import thunk from "redux-thunk";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("\n\n\nLogger of " + action.type + " start here\n\n\n");
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("next state: ", store.getState());

//   console.log("\n\n\nLogger of " + action.type + " end here\n\n\n");
// };

const persisConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
