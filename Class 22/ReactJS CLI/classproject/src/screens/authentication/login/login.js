import React from "react";

export default function Login({ name }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitLoginForm = (event) => {
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);
  };
  console.log("name", name);
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

// const obj = new Object();
// obj.name = "Hello";
// obj.age = 40;

// const { age } = obj;
