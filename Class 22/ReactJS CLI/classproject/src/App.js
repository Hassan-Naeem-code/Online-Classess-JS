import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NotFoundView from "./screens/app/NotFoundView/NotFoundView";
import Login from "./screens/authentication/login/login";
import Home from "./screens/app/Home/home";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [name, setName] = React.useState("Hanzala");

  React.useEffect(() => {
    console.log("hello");
  });

  React.useEffect(() => {
    console.log("hello with empty array");
  }, []);

  React.useEffect(() => {
    console.log("hello with array and having a state in it");
  }, [name]);

  // setName("Hello World");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login name={name} />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Login name={name} />
    //   <Home />
    //   <Footer />
    // </div>
  );
}

export default App;
