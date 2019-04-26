import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Button, Heading, Columns, Field, Label, Control, Input } from 'react-bulma-components';

const SignOut = () => (
	<div>
  <p>
  Sign Out
  </p>
    <form action="http://localhost:3000/signOut" method="post">
            <input type="submit" name="Submit" value="Sign out of your account">
            </input>
          </form>
	</div>
);

export default SignOut;
