import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';
import UsersBoard from '../Usersboard';
import Login from '../Login';
import Register from '../Register';
import User from '../User';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/users'>
        <UsersBoard />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/user/:id'>
        <User />
      </Route>
    </Switch>
  );
}

export default App;
