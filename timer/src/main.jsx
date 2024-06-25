import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // only for development purpose , StrictMode causes the app the paint two times
  // <React.StrictMode>
  <App />
  // </React.StrictMode> // remove while production
);
