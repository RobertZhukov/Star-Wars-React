import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h1>Star DB</h1>
      <ul id="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
