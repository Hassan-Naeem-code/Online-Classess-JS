import React from "react";
import Header from "./components/header";
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

  setName("Hello World");
  return (
    <div>
      <Header />
      <Login name={name} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
