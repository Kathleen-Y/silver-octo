import React, { Component } from "react";
import API from "../../utils/API";
import "./Table.css";
import Table from "./Table"
import SearchForm from "../searchform/SearchForm"

class Employee extends Component {
    state = {
        search: "",
        original: [],
        filtered: [],
        filteredEmployee: [],
        className: "fa fa-fw fa-sort up"
    };

    componentDidMount() {
        this.searchEmployee();
    };

    searchEmployee = () => {
        API.search()
            .then(res => this.setState({ original: res.data.results, filtered: res.data.results }))
            .catch(err => console.log(err));
    }

    filteredEmployee = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        if (value === "") {
            this.setState({ filtered: this.state.original })
        } else if (value !== "") {
            const filtered = this.state.original.filter(data =>
                data.name.first.toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase())
            )
            this.setState({ filtered })
        }
    }

    className = (className) => {
        if (className === "fa fa-fw fa-sort up") {
            this.setState({ className: "fa fa-fw fa-sort down" })
        } else if (className === "fa fa-fw fa-sort down") {
            this.setState({ className: "fa fa-fw fa-sort up" })
        }
    }

    sortedEmployee = (e) => {
        const { className, id } = e.target;

        if (className === "fa fa-fw fa-sort up" && id === "name") {
            const sortEmployeeup = this.state.filtered.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeup });

        } else if (className === "fa fa-fw fa-sort down" && id === "name") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });

        } else if (className === "fa fa-fw fa-sort up" && id === "phone") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });

        } else if (className === "fa fa-fw fa-sort down" && id === "phone") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.phone < b.phone) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });

        } else if (className === "fa fa-fw fa-sort up" && id === "email") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });

        } else if (className === "fa fa-fw fa-sort down" && id === "email") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.email.toLowerCase() < b.email.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });

        } else if (className === "fa fa-fw fa-sort up" && id === "country") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.location.country.toLowerCase() > b.location.country.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });

        } else if (className === "fa fa-fw fa-sort down" && id === "country") {
            const sortEmployeeDwn = this.state.filtered.sort((a, b) => (a.location.country.toLowerCase() < b.location.country.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortEmployeeDwn });
        }
    };

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    filteredEmployee={this.filteredEmployee}
                />
                <Table
                    users={this.state.filtered}
                    sortedEmployee={this.sortedEmployee}
                    className={this.state.className}
                />
            </div>
        )
    }
}

export default Employee;