import React, { useState } from 'react';
import './App.css';
import User from './components/User';
import UsersList from './components/UsersList';

const App = () => {

  const [users, setUsers] = useState([]);
  
  const addUserHandler = (userData) => {
    setUsers((prevState) => {
      return [userData, ...prevState]
    });
    console.log(users);
  }

  return <div>
    <User onAddUser={addUserHandler}/>
    { users.length !== 0 && <UsersList users={users}/> }
  </div>
}

export default App;
