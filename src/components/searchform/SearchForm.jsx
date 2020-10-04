import React from "react";
import "./style.css";

const SearchForm = (props) => {
  return (
    <nav className="navbar navbar-collapse">
        <form className="form-inline my-2 my-lg-0 ml-auto">
            <input
                onChange={props.filteredEmployee}
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search Employees"
                aria-label="Search"
                name="search"
                value={props.search}
                />
        </form>
    </nav>
)
}
export default SearchForm;