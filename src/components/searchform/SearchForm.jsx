import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <nav className="navbar navbar-collapse md-dark">

        <input
        onChange={props.handleChange}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search employee"
        aria-label="Search"
        name="search"
        value={props.search}
        />
        
    </nav>
  )
}
export default SearchForm;