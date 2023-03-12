import React from "react";
import MainLayout from "./layout/mainLayout";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}

export default App;
