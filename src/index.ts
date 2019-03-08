import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import {RootStore} from "./stores/RootStore";

const rootStore = new RootStore();

const appRoot = document.getElementById("root");

if (appRoot) {
    ReactDOM.render(React.createElement(App, {rootStore}), appRoot);
}
