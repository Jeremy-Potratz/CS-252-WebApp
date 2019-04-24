import React, { Component } from 'react';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';

class SignIn extends Component {

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
      <form action="http://localhost:3000/auth" method="post">
        Username:<br></br>
        <input type="text" name="username">
        </input>
        <br></br>
        Password:<br></br>
        <input type="text" name="username">
        </input>
        <br></br>
        <input type="submit" name="Submit">
        </input>

      </form>
    );
  }
}

export default SignIn;
