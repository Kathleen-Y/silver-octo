import React from "react";

function Table(props) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name<span onClick={props.sortedUsers}><i className={props.className} id="name"></i></span></th>
                    <th scope="col">Phone<span onClick={props.sortedUsers}><i className={props.className} id="phone"></i></span></th>
                    <th scope="col">Email<span onClick={props.sortedUsers}><i className={props.className} id="email"></i></span></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                    <tr key={user.phone}>
                        <td><img src={user.picture.medium} alt="user profile" /></td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
};

export default Table;