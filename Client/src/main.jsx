import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesheet/index.css";
import "./stylesheet/external.css";
import { ContextProvider } from "./context/Context.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
