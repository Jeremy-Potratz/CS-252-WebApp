import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

const INITIAL_STATE = {
  user: null,
	acts: {},
  loggedIn: null,
  error: null
};

class Home extends Component{

  constructor(props) {
		super(props);

    this.state = { ...INITIAL_STATE };

		fetch("http://localhost:3000/getActs", {
			body: JSON.stringify({
				user: "j",
			}),
			method: 'POST',
      cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'content-type': 'application/json'
			},
			mode: 'cors'
  		})
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				if (res.err) {
					this.setState({ error: res.err });
				} else {
					console.log(res)
					this.setState({user: res.username, acts: res.acts, loggedIn: res.loggedIn });
				}

			})
			.catch(error => {
				console.log(error);
				this.setState({ error });
			});
	}


render() {
  const {user, acts, loggedIn, error} = this.state;

  return(
	<div>
  <p>
{user}
  </p>

  <form action="http://localhost:3000/addAct" method="post">
          Activity:<br></br>
          <input type="text" name="username">
          </input>
          <br></br>
          <input type="submit" name="Submit" value="Add your activity">
          </input>
  </form>
  {(() => {

       return (

  <div>
<p>Plans</p>
<p>Hello</p>

</div>
)
}
)()}

  </div>
)
}
};

export default Home;
