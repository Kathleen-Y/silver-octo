import React, { Component } from "react";
import employeeTable from "./employeeTable";
import Navbar from "./navbar";
import API from "../utils/API";


export default class employeeData extends Component {
  state = {
    employees: [{}],
    order: "descend",
    filteredEmployees: [{}]
  }

  headings = [
    { name: "Name", width: "25%" },
    { name: "Phone", width: "25%" },
    { name: "Email", width: "25%" },
    { name: "DOB", width: "25%" }
  ]

  handleSort = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }

        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }

        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedEmployees = this.state.filteredEmployees.sort(compareFnc);
    this.setState({ filteredEmployees: sortedEmployees });
  }

  handleInputChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item => {
     
      
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredList });
  }

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Navbar handleInputChange={this.handleInputChange} />
        <div className="data-area">
          <employeeTable
            headings={this.headings}
            employees={this.state.filteredEmployees}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
