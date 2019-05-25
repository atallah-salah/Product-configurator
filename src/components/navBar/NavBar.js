import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark  bg-dark flex-md-nowrap p-2   shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        Company name
      </a>
      <ul className="navbar-nav px-4">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
