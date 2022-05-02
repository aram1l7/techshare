import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "./middlewares";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./modules";
import saveAuthToken from "./utils/saveAuthToken";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middlewares = [thunkMiddleware, createLogger(true)];

function configureStore(initialState) {
  return createStore(
    combineReducers({ ...reducers }),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

let store = configureStore();
let currentState = store.getState();
store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    saveAuthToken(token);
  }
});

export default configureStore();
