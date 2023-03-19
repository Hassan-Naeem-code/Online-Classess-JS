import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAuth } from "../../../store/actions/authAction";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitLoginForm = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(userAuth(payload, navigate));
  };
  return (
    <div>
      <h1>Login</h1>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={(event) => submitLoginForm(event)}
      >
        Login
      </button>
    </div>
  );
}
