import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {appStore} from "./stores/AppStore";

const appRoot = document.getElementById("root");

if (appRoot) {
    ReactDOM.render(React.createElement(App, {appStore}), appRoot);
}
