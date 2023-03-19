import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogedOut } from "../../../store/actions/authAction";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLoginUser = useSelector(
    ({ user_authenticate }) => user_authenticate?.userLogin
  );
  return (
    <div>
      <h1>Home</h1>
      {currentLoginUser ? (
        <button
          type="button"
          onClick={() => dispatch(userLogedOut(navigate))}
          className="btn btn-danger mx-2"
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="btn btn-primary"
        >
          Login
        </button>
      )}
    </div>
  );
}
