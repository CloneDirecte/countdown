import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="footer">
      <h1>
        Découvrez{" "}
        <a href="https://notes.clonedirecte.cf">notes.clonedirecte.cf</a>
      </h1>
    </div>
  </React.StrictMode>
);

reportWebVitals();