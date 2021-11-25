import React, { useState } from "react";

import Card from './Card';
import Button from './Button';
import ErrorModal from "./ErrorModal";

import './User.css';

const User = props => {
  const [enteredUsername , setEnteredUsername] = useState('');
  const [enteredAge , setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => { 
    setEnteredUsername(event.target.value);
  };
  
  const ageChangeHandler = (event) => { 
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age - grater than 0.'
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

const dismissErrorHandler = () => {
  setError(null);
}

  return <div>
      {error && <ErrorModal title={error.title} message={error.message} dismissError={dismissErrorHandler}/>}
      <Card className="card-input">
          <form className='userForm' onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
}

export default User;