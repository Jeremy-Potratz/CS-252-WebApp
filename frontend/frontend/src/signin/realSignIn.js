import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';


const RealSignInPage = () => (
	<div>
	<RealSignInPageForm />
	</div>
);


class RealSignInPageForm extends Component{

	onSubmit = event => {
    fetch(ROUTES.BASE_URL + '/auth', {
      body: JSON.stringify({
				username: "Jot",
				username: "poop"
			}),
      method: 'POST'
    })

  }


render() {
  return (
	<div>
<p>
Sign In!
</p>

<form onsubmit={this.onSubmit}>
<Button type="submit">
Send Data
</Button>
</form>

  <form id="mysignin" action="http://localhost:3000/login" method="post">
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

	</div>
)
}
};

export default RealSignInPage;
