import "./style/index.css";

import React from "react";
import ReactDOM from "react-dom";

const FooterComponent = () => {
  return <footer>Copyright 2020</footer>;
};

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
    <main>
      <p>Dummy text</p>
    </main>
    <FooterComponent />
  </div>
);

ReactDOM.render(app, document.getElementById("appContainer"));
