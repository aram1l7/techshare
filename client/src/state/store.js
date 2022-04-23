import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "./middlewares";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./modules";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middlewares = [thunkMiddleware, createLogger(true)];

function configureStore(initialState) {
  return createStore(
    combineReducers({ ...reducers }),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

export default configureStore();
