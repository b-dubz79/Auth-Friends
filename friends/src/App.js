import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Components/Login'
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
   
     
     <Router>
      <div className="App">
      <ul>
        <li>
          <Link to = '/login'>Login</Link>
        </li>
        <li>
          <Link to = '/FriendsList'>Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path = '/FriendsList' component = {FriendsList} />
        <Route path = '/login' component = {Login} />
        <Route component = {Login} />
      </Switch>
    </div>
    </Router>

    
  )
    
}

export default App;
