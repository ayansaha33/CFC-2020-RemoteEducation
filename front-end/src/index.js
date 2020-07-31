import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MainDashboard from "./Components/Student Dashboard/MainDashboard";
// import MainTDashboard from "./Components/Teacher Dashboard/MainTDashboard";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MainDashboard />
    {/* <MainTDashboard /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
