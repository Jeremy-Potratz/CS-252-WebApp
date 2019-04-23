import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ROUTES from './routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

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

        <form action="http://localhost:3000/auth" method="post">
          Username:<br></br>
          <input type="text" name="username">
          </input>
          <br></br>
          Password:<br></br>
          <input type="text" name="pass">
          </input>
          <br></br>
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

export default App;
