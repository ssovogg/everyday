import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/AuthService";
import { firebaseApp } from "./service/firebase";

const auth = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>
);
