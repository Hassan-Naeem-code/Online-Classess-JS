import { USER_AUTH, USER_SIGNED_OUT } from "../constants";

export function userAuth(user_data,navigate) {
  return async (dispatch) => {
    dispatch({
      type: USER_AUTH,
      payload: user_data,
    });
    alert("Login Successfully");
    navigate("/");
  };
}
export function userLogedOut(navigate) {
  return async (dispatch) => {
    dispatch({
      type: USER_SIGNED_OUT,
    });
    alert("Logout Successfully");
    navigate("/login");
  };
}
