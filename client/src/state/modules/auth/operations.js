import * as actions from "./actions";
import toast from "helpers/toast";
import { requestsEnum } from "../requestsEnum";
import { requestHelper } from "../request/operations";
import { register } from "api/guest";
export const registerOperation = (data) => async (dispatch) => {
  return await requestHelper(dispatch, requestsEnum().register, async () => {
    try {
      const result = await register(data);
      dispatch(actions.registerCompleted(result.data));
      toast.success("You have successfully registered!");
    } catch (error) {
      const errors = error.response.data.errors;
      dispatch(actions.registerFailed(errors));
      errors.forEach((el) => toast.error(el.msg));
    }
  });
};
