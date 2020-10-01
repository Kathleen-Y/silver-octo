import React from "react";

const EmployeeData = (props) => {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">Phone<span onClick={props.handleSort}><i id="phone" className={props.class}></i></span></th>
            <th scope="col">Email<span onClick={props.handleSort}><i id="email" className={props.class}></i></span></th>
          </tr>
        </thead>
        <tbody>
        {props.users.map(user => (
          <tr key={user.email}>
            <td><img src={user.picture.small} alt="employeePhoto" /></td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
}

export default EmployeeData;