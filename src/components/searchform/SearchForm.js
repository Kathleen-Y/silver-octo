import React from "react";

function SearchForm(props) {
  return (
    <div className="form-group">
      <form>
        <label htmlForm="search">Search:</label>
        <input
          type="search"
          className="form-control"
          aria-label="search"
          placeholder="Search for an Employee"
          onChange={props.handleInputChange}
        />
        {/* <table className="table">
          <thead>
            <tr>
              <th>Firstname:</th>
              <th>Lastname:</th>
              <th>Email:</th>
              <th>Phone:</th>
              <th>Age:</th>
            </tr>
          </thead>
        </table> */}
      </form>
    </div>
  );
}

export default SearchForm;