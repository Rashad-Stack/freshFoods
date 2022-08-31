import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { InitialState } from "./app/Context/InitialState";
import Reducer from "./app/Context/Reducer";
import { StateProvider } from "./app/Context/StateProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={InitialState} reducer={Reducer}>
    <Router>
      <App />
    </Router>
  </StateProvider>
);
