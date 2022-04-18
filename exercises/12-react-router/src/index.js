import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import App from "./components/App/App";
// Import something here

const root = createRoot(document.getElementById("root"));
root.render(
  // Add something here
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
