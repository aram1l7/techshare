const requestState = (state) => state.request;

export const requestsInProgress = (state) =>
  requestState(state).requests.filter((request) => request.inProgress).length >
  0;

export const namedRequestsInProgress = (
  state,
  requestName // RequestsEnum | RequestsEnum[]
) => {
  const singleNamedRequestInProgress = (singleRequestName) =>
    requestState(state).requests.find(
      (request) => request.name === singleRequestName && request.inProgress
    ) !== undefined;
  if (Array.isArray(requestName)) {
    return requestName.some(singleNamedRequestInProgress);
  }
  return singleNamedRequestInProgress(requestName);
};
export const namedRequestError = (state, requestName) =>
  requestState(state).requests.find(
    request =>
      request.name === requestName && request.errors !== null
  )?.errors