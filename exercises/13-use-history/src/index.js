import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
// Import something here

const root = createRoot(document.getElementById("root"));
root.render(
  // Add something here
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
