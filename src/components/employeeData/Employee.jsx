import React from "./node_modules/react";
import "./style.css";
import sortAmountUp from './node_modules/@iconify/icons-uil/sort-amount-up';
import sortAmountDown from './node_modules/@iconify/icons-uil/sort-amount-down';
import API from "../../utils/API";
import EmployeeData from "./EmployeeData";
import SearchForm from "../searchform";

class Employee extends React.Component {
  state = {
    search: "",
    className: sortAmountUp,
    originalUsers: [],
    filteredUsers: [],
  };

  componentDidMount() {
    this.usersArr();
  }

  usersArr = () => {
    API.getUsers()
      .then(res => this.setState({ originalUsers: res.data.results, filteredUsers: res.data.results }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    if (value === "") {
      this.setState({ filteredUsers: this.state.originalUsers })

    } else if (value !== "") {
      const filteredUsers = this.state.originalUsers.filter(data =>
        data.name.first.toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase())
      );
      this.setState({ filteredUsers });
    }
  };

  className = (className) => {
    if(className === sortAmountDown ){
      this.setState({ sortAmountDown })
    } else if(className === sortAmountDown ){
      this.setState({ className: sortAmountUp })
    }
  }

  handleSort = e => {
    let {className, id} = e.target
    
    if(className === sortAmountUp && id === "name"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === sortAmountDown && id === "name"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });

    } else if(className === sortAmountUp && id === "phone"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === sortAmountDown && id === "phone"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.phone < b.phone) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });

    } else if(className === sortAmountUp && id === "email"){
      const sortedUsersUp = this.state.filteredUsers.sort((a, b) => (a.email > b.email) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersUp });
    } else if(className === sortAmountDown && id === "email"){
      const sortedUsersDown = this.state.filteredUsers.sort((a, b) => (a.email < b.email) ? 1 : -1)
      this.className(className)
      this.setState({ filteredUsers: sortedUsersDown });
    }
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <EmployeeData
          users={this.state.filteredUsers}
          handleSort={this.handleSort}
          class={this.state.className}
        />
      </div>
    )
  }
}

export default Employee;