import * as types from "./types";
import createReducer from "../../utils/createReducer";

import initialState from "./initialState";

const reducersMap = {
  [types.REGISTER_COMPLETED]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      ...payload,
      isAuth: true,
    };
  },
  [types.REGISTER_FAILED]: (state) => {
    return {
      ...state,
      token: null,
      isAuth: false,
    };
  },
};

export default createReducer(initialState)(reducersMap);
