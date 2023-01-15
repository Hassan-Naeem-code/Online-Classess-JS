import React from "react";
import Header from "./components/header";
import Login from "./screens/authentication/login/login";
import Home from "./screens/app/Home/home";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
