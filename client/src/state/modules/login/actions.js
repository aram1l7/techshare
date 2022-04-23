import * as types from "./types";

const setInput = (data) => ({
  type: types.SET_INPUT,
  payload: data,
});

export { setInput };
