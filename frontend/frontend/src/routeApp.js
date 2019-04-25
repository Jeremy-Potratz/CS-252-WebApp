import React from 'react';
import SignUpPage from './signup/signup';
import SignInPage from './signin/signin';
import RealSignInPage from './signin/realSignIn'
import Home from './home/home';

import * as ROUTES from './routes/routes';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
    <SignInPage/>
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.REAL_SIGN_IN} component={RealSignInPage} />


    </div>
  </Router>
);

export default App;
