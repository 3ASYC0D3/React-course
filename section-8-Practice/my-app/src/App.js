import React, { useState } from 'react';
import './App.css';
import User from './components/User';
import UsersList from './components/UsersList';

const App = () => {

  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [{ username: uName, age: uAge, id: Math.random().toString() }, ...prevUsersList]
    });
    console.log(usersList);
  }

  return <div>
    <User onAddUser={addUserHandler}/>
    { usersList.length !== 0 && <UsersList users={usersList}/> }
  </div>
}

export default App;
