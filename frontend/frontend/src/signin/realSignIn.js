import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

const RealSignInPage = () => (
	<div>
<p>
Sign In!
</p>
  <form action="http://localhost:3000/login" method="post">
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
);

export default RealSignInPage;
