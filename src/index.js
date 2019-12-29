import React from "react";
import ReactDOM from "react-dom";

const HTMLElementToInclude = React.createElement("div", null, "Hello you");

ReactDOM.render(HTMLElementToInclude, document.getElementById("appContainer"));
