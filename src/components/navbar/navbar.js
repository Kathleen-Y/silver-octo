import React from "react";
import SearchForm from "./SearchForm.js";

function Navbar({ handleInputChange }) {
  return (
    <navbar className="navbar navbar-expand navbar-light md-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchForm handleInputChange={handleInputChange} />
      </div>
    </navbar>
  );
}

export default Navbar;
