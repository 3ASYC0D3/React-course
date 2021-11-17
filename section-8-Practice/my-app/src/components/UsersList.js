import React from "react";
import './UsersList.css';

const UsersList = props => {

    return <div className='usersList'>
    <ul className='users-list'>
            {props.users.map((user) => (
                <li>
                <p>{`${user.username} (${user.age} years old)`}</p>
                </li>
            ))}
        </ul>
    </div> 
};

export default UsersList;