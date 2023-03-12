import { combineReducers } from "redux";
import Authenticate from "./authReducer";

export default combineReducers({
  user_authenticate: Authenticate,
});
