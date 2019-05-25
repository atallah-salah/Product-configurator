import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark  bg-dark flex-md-nowrap p-2">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        product
      </a>

      <div class="btn-toolbar mb-2 mb-md-2">
        <div class="btn-group  mr-2">
          <button type="button" class="btn btn-sm btn-outline-primary">
            Save
          </button>
          <button type="button" class="btn btn-sm btn-outline-success">
            {/* <Spinner animation="border" variant="warning" /> */}
            loding icon
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
