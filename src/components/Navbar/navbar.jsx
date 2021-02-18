import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navWrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
