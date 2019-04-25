import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../routes/routes';
import { Notification, Heading, Columns, Button } from 'react-bulma-components';

const Home = () => (
	<div>
  <p>
You don't have any workout or diet plans yet!
  </p>
  </div>
);

export default Home;
