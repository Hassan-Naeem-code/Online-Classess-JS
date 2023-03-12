import { USER_AUTH, USER_SIGNED_OUT } from "../constants";

export function userAuth(user_data) {
  return async (dispatch) => {
    dispatch({
      type: USER_AUTH,
      payload: user_data,
    });
  };
}
export function userLogedOut(navigate) {
  return async (dispatch) => {
    dispatch({
      type: USER_SIGNED_OUT,
    });
    navigate("/");
  };
}