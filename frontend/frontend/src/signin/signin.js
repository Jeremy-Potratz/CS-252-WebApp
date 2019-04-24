import React, { Component } from 'react';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

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
      <div className="SignIn">

        <header className="SignIn-header">

        <form>
          Check<br></br>
          <input type="submit" name="Submit">
          </input>
        </form>


        <form onSubmit={this.onSubmit} style={{padding: 16}}>

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

export default SignIn;
