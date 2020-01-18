import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReduer from "../reducers";

const middleWare = [thunk];

const initialState = {};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReduer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
