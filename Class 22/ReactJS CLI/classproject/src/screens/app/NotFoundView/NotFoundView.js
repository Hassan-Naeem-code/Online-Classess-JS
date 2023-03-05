import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundView() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not Found View</h1>
      <button type="button" onClick={() => navigate("/")}>
        Navigate to Home
      </button>
    </div>
  );
}
