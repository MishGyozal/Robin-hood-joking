import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chuckSlice from "../features/chuck-noris";
import { preloadState } from "./preloadState";
import ReduxThunk from "redux-thunk";
const reducers = () => {
  return combineReducers({
    chuck: chuckSlice.reducer,
  });
};

let store;
export const getStore = () => store;
export const Store = () => {
  const middleware = [ReduxThunk];

  store = configureStore({
    reducer: reducers(),
    middleware,
    preloadState,
  });

  return store;
};
