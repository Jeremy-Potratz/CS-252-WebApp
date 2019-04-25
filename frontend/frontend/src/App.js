import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ROUTES from './routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';
import SignInPage from './signin/signin';
import SignUpPage from './signup/signup';
import { compose } from 'recompose';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <div className="App">

        <SignInPage />
        <SignUpPage />

      </div>
    );
  }
}

export default App;
