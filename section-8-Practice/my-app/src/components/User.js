import React from "react";

import Card from './Card';
import Button from './Button';

import './User.css';

const User = () => {

    return  <Card>
    <form className='userForm'>
      <label>Username</label>
      <input type="text"/>
      <label>Age (Years)</label>
      <input type="number" min="0" max="150"/>
      <Button>Add User</Button>
    </form>
  </Card>
}

export default User;