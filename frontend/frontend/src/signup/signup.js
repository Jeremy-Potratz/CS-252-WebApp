import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Button, Heading, Columns, Field, Label, Control, Input } from 'react-bulma-components';

const SignUpPage = () => (
	<div>
  <p>
  Sign Up!
  </p>
    <form action="http://localhost:3000/auth" method="post">
            Username:<br></br>
            <input type="text" name="username">
            </input>
            <br></br>
            Password:<br></br>
            <input type="text" name="username">
            </input>
            <br></br>
            <input type="submit" name="Submit" value="Sign Up">
            </input>
          </form>
	</div>
);

export default SignUpPage;
