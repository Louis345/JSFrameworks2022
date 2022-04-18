import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
// Import something here

const root = createRoot(document.getElementById("root"));
root.render(
  // Add something here
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
