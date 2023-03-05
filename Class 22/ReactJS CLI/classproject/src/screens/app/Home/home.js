import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => navigate("/login")}>
        Navigate to Login
      </button>
    </div>
  );
}
