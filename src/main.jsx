import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MobileFooterNav from "./components/MobileFooterNav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <MobileFooterNav />
    </BrowserRouter>
  </React.StrictMode>,
);
