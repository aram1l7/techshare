import * as actions from "./actions";

export const requestHelper = async (dispatch, requestName, request) => {
  dispatch(actions.requestStarted(requestName));
  if (requestName === "register") {
    const result = await request();
    dispatch(actions.requestFinished(requestName));
    return result;
  }
  try {
    const result = await request();
    dispatch(actions.requestFinished(requestName));
    return result;
  } catch (error) {
    const errors = error.response.data.errors;
    dispatch(actions.requestFailed({ requestName, errors }));
  }
};
