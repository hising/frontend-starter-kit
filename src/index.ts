import * as React from "react";
import * as ReactDOM from "react-dom";

const elementType = "div";
const appRoot = document.getElementById("root");

if (appRoot) {
    ReactDOM.render(React.createElement(elementType), appRoot);
}
