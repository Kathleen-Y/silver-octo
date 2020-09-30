import React from "react";
import employeeBody from "./employeeBody";

function employeeTable({ headings, employees, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="stripe row-border order-column"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="cursor"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <employeeBody employees={employees} />
      </table>
    </div>
  );
}

export default employeeTable;
