import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { initGA, logPageView } from './utils/analytics';

import "@fontsource/outfit";
import "@fontsource/roboto";

initGA();
logPageView();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
