import "./style/index.css";

import FooterComponent from "./components/Footer";
import HomePage from "./components/HomePage";
import React from "react";
import ReactDOM from "react-dom";

const MenuItem = props => {
  console.log(props);
  return (
    <li>
      <a href={props.link}>{props.label}</a>
    </li>
  );
};

const app = (
  <div>
    <nav>
      <ul>
        <MenuItem label="Home" link="/home" />
        <MenuItem label="Profile" link="/profile" />
      </ul>
    </nav>
    <HomePage example="props" />
    <FooterComponent />
  </div>
);

ReactDOM.render(app, document.getElementById("appContainer"));
