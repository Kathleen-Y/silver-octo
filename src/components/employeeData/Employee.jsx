import {React, Component} from 'react';
import "./style.css";
import { addIcon } from '@iconify/react';
import sortAmountUp from '@iconify/icons-uil/sort-amount-up';
import sortAmountDown from '@iconify/icons-uil/sort-amount-down';
import API from "../../utils/API";
import EmployeeData from "./EmployeeData";
import SearchForm from "../searchform/SearchForm";
 
addIcon('sortAmountUp', sortAmountUp);
addIcon('sortAmountDown', sortAmountDown);

  class Employee extends Component {

    state = {
        search: "",
        original: [],
        filtered: [],
        filteredUsers: [],
        className: "sort-amount-up"
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
        if (className === "sort-amount-up") {
            this.setState({ className: "sort-amount-down" })
        } else if (className === "sort-amount-down") {
            this.setState({ className: "sort-amount-up" })
        }
    }

    sortedEmployee = (e) => {
        const { className, id } = e.target;
        if (className === "sort-amount-up" && id === "name") {
            const sortAmountUp = this.state.filtered.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountUp });

        } else if (className === "sort-amount-down" && id === "name") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });

        } else if (className === "sort-amount-down" && id === "phone") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });

        } else if (className === "sort-amount-down" && id === "phone") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.phone < b.phone) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });

        } else if (className === "sort-amount-down" && id === "email") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });

        } else if (className === "sort-amount-down" && id === "email") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.email.toLowerCase() < b.email.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });

        } else if (className === "sort-amount-up" && id === "country") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.location.country.toLowerCase() > b.location.country.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });

        } else if (className === "sort-amount-down" && id === "country") {
            const sortAmountDown = this.state.filtered.sort((a, b) => (a.location.country.toLowerCase() < b.location.country.toLowerCase()) ? 1 : -1)
            this.className(className)
            this.setState({ filteredEmployee: sortAmountDown });
        }
    };

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    filteredEmployee={this.filteredEmployee}
                />
                <EmployeeData
                    employee={this.state.filtered}
                    sortedEmployee={this.sortedEmployee}
                    className={this.state.className}
                />
            </div>
        )
    }
}

export default Employee;