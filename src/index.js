import React from "react";
import ReactDOM from "react-dom";
import "./Helpers/GlobalStyles.css";
import App from "./App";
import reportWebVitals from "./Helpers/reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
