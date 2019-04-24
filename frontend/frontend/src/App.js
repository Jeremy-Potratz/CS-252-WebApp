import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ROUTES from './routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';
import SignInPage from './signin/signin';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev){
    ev.preventDefault();
    console.log("hello");
  		fetch(ROUTES.BASE_URL + "/app/auth", {
  			mode: 'cors',
  			method: 'POST'
  		});
  	};




    onChange = event => {
  		this.setState({ [event.target.name]: event.target.value });
  	};


  render() {
    return (
      <div className="App">

        <header className="App-header">

        <form action="./signin/signin" style={{padding: 16}}>
        <Router>
            <div>
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </div>
        </Router>
          <p>
            Welcome to Fitness Pal
          </p>
          <Button className="is-fullwidth" type="submit">
          			Sign In
          </Button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
