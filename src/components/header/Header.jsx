import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee List</h1>
        <p className="lead">View the list of the Employees</p>
      </div>
    </div>
  )
}
export default Header;