import * as types from "./types";

const registerCompleted = (data) => ({
  type: types.REGISTER_COMPLETED,
  payload: data,
});
const registerFailed = () => ({
  type: types.REGISTER_FAILED,
});

export { registerCompleted,registerFailed };
