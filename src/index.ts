import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const appRoot = document.getElementById("root");

if (appRoot) {
    ReactDOM.render(React.createElement(App), appRoot);
}
