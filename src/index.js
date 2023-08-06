import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <p>&lt;&lt;&lt; &copy; 2022 Quyen Nguyen &gt;&gt;&gt;</p>
    </footer>
  </React.StrictMode>
);
