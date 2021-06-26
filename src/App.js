import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './Components/FormCreate/LoginForm';
import RegisterForm from './Components/FormCreate/RegisterForm';
import SingleBlog from './Components/SingleBlog/SingleBlog';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckPost from './Components/CheckPost/CheckPost';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider className='App' value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/single-blog/:id'>
            <SingleBlog />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <PrivateRoute path='/dashboard'>
            <CheckPost />
          </PrivateRoute>
          <Route path='/register-form'>
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
