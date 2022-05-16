import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /**
   * Strict mode with React Router v5 and React v18 is buggy, so I am removing strict mode
   * @see https://github.com/facebook/react/issues/21674
   */
  <App />
);
