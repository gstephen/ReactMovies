import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import App from "./components/App";
import TMDB from "./TMDB";

ReactDOM.render(<App TMDB={TMDB} />, document.getElementById("root"));
