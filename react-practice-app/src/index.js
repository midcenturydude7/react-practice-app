import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Components/Card";
import Header from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>
);
