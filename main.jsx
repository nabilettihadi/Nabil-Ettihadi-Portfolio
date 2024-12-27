import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./src/index.css";
import "./src/i18n";

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
