import React from "react";

import Card from './Card';
import './User.css';

const User = () => {

    return  <div className='user'>
    <form className='userForm'>
      <label>Username</label>
      <input type="text"/>
      <label>Age (Years)</label>
      <input type="number" min="0" max="150"/>
      <button>Add User</button>
    </form>
  </div>
}

export default User;