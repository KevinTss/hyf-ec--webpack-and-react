import React from "react";
import ReactDOM from "react-dom";

const FooterComponent = function() {
  return <footer>Copyright 2020</footer>;
};

const app = (
  <div>
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Profile</a>
        </li>
      </ul>
    </nav>
    <main>
      <p>Dummy text</p>
    </main>
    <FooterComponent />
  </div>
);

ReactDOM.render(app, document.getElementById("appContainer"));
