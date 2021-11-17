import './App.css';
import User from './components/User';

const App = () => {

  const Users = [
    {
      username: 'Darek',
      age: 25
    },
    {
      username: 'Darek',
      age: 25
    }
  ]

  return <div>
    <div className='user'>
      <form className='userForm'>
        <label>Username</label>
        <input type="text"/>
        <label>Age (Years)</label>
        <input type="number" min="0" max="150"/>
        <button>Add User</button>
      </form>
    </div>
    <div className='usersList'>
      <ul className='users-list'>
              {Users.map((user) => (
                  <li>
                  <p>{`${user.username} (${user.age} years old)`}</p>
                  </li>
              ))}
          </ul>
    </div>
  </div>
}

export default App;
