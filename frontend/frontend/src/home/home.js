import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

const INITIAL_STATE = {
  user: null,
	acts: [],
  loggedIn: null,
  error: null
};

class Home extends Component{

  constructor(props) {
		super(props);

    this.state = {
      user: '',
      acts: [],
      loggedIn: true,
      error: null,
    };

		fetch("http://localhost:3000/getActs", {
  			body: JSON.stringify({
  				user: "3",
  				token: "hi"
  			}),
  			cache: 'no-cache',
  			credentials: 'same-origin',
  			headers: {
  				'content-type': 'application/json'
  			},
  			mode: 'cors',
  			method: 'POST'
  		})
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				if (res.err) {
					this.setState({ error: res.err });
				} else {
					console.log(res)
					this.setState({user: res.user, acts: res.acts, loggedIn: res.loggedIn });
				}

			})
			.catch(error => {
				this.setState({ error });
			});
	}


render() {
  const {user, acts, loggedIn, error} = this.state;
  return(
	<div>

  <form action="http://localhost:3000/addAct" method="post">
          Activity:<br></br>
          <input type="text" name="username">
          </input>
          <br></br>
          <input type="submit" name="Submit" value="Add your activity">
          </input>
  </form>
  {(() => {

    if (this.state.acts) {
      return this.state.acts.map((act) => {
       return (
  <div>
{act}
  </div>
)
})};

}
)()}

  </div>
)
}
};

export default Home;
