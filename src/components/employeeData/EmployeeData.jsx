import React from "react";

function EmployeeData(props) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name<span onClick={props.sortedEmployee}><i className={props.className} id="name"></i></span></th>
                    <th scope="col">Phone<span onClick={props.sortedEmployee}><i className={props.className} id="phone"></i></span></th>
                    <th scope="col">Email<span onClick={props.sortedEmployee}><i className={props.className} id="email"></i></span></th>
                </tr>
            </thead>
            <tbody>
                {props.employee.map(employee => (
                    <tr key={employee.phone}>
                        <td><img src={employee.picture.medium} alt="employee profile" /></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
};

export default EmployeeData;