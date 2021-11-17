import './App.css';
import User from './components/User';
import UsersList from './components/UsersList';

const App = () => {

  const Users = [
    {
      username: 'Darek',
      age: 25
    },
    {
      username: 'Marek',
      age: 29
    }
  ]

  return <div>
    <User/>
    <UsersList users={Users}/>
  </div>
}

export default App;
