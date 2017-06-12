import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MasterPage from './MasterPage';
import Login from './Login';
import ResetPassword from './ResetPassword';
import InitialPassword from './InitialPassword';

export default class Root extends React.Component {

  constructor(){
  	super()
  }

  requireAuth() {
    var data = localStorage.jwtToken.split(',');
    if (data[0] != 'Autorized') {
      browserHistory.push('/login')
    }
  }

 render() {
    return (
      <Router history={browserHistory}>
	  	  <Route path="/" component={MasterPage} onEnter={this.requireAuth} />
	  	  <Route path="reset" component={ResetPassword} />
        <Route path="login" component={Login} />
	  	  <Route path="initial_password" component={InitialPassword} />
	    </Router>
    );
  }
}

