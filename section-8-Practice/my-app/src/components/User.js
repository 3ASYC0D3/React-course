import React, { useState } from "react";

import Card from './Card';
import Button from './Button';

import './User.css';

const User = props => {
  const [ enteredUsername , setEnteredUsername] = useState('');
  const [ enteredAge , setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => { 
    setEnteredUsername(event.target.value);
  };
  
  const ageChangeHandler = (event) => { 
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: +enteredAge
    }

    props.onAddUser(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return  <Card>
    <form className='userForm' onSubmit={submitHandler}>
      <label>Username</label>
      <input type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
      <label>Age (Years)</label>
      <input type="number" min="0" onChange={ageChangeHandler} value={enteredAge}/>
      <Button>Add User</Button>
    </form>
  </Card>
}

export default User;