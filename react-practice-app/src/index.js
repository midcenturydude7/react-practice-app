import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import ReactList from "./Components/ReactList";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <ReactList />
    <Footer />
  </React.StrictMode>
);
