import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

const SignInPage = () => (
	<div>
<li><Link to='/home'>Home</Link></li>
<li><Link to='/realSignIn'>Sign In</Link></li>
<li><Link to='/signup'>Sign Up</Link></li>
	</div>
);

export default SignInPage;
