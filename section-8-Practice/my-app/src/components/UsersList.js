import React from "react";

import Card from "./Card";

import './UsersList.css';

const UsersList = props => {

    return <Card>
    <ul className='users-list'>
            {props.users.map((user) => (
                <li>
                <p>{`${user.username} (${user.age} years old)`}</p>
                </li>
            ))}
        </ul>
    </Card> 
};

export default UsersList;