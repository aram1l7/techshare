import * as types from "./types";
import createReducer from "../../utils/createReducer";

import initialState from "./initialState";

const reducersMap = {
  [types.SET_INPUT]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      data: {
        ...state.data,
        payload,
      },
    };
  },
};

export default createReducer(initialState)(reducersMap);
