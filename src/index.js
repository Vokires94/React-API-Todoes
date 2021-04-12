import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './screens/App';
import Main from './screens/Main';
import Login from './screens/Login';
import Register from './screens/Register';

const history = createBrowserHistory();

ReactDOM.render(
        <Router history={history}>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/users'>
              <App />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>      
          </Switch>                
        </Router>,
  document.getElementById('root')
);
