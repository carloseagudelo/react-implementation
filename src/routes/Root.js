import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MasterPage from './MasterPage';
import Login from './Login';
import ResetPassword from './ResetPassword';
import InitialPassword from './InitialPassword';
import FileUpload from '../components/master_page/content/upload/FileUpload'
import LoadUser from '../components/master_page/content/adminFound/LoadUser'

export default class Root extends React.Component {

  constructor(){
  	super()
  }

  requireAuth() {
    if(typeof(localStorage.jwtToken) !== 'undefined'){
      var data = localStorage.jwtToken.split(',');
      if (data[0] != 'Autorized') {
        browserHistory.push('/login')
      }
    }else{
      browserHistory.push('/login')
    }
  }

 render() {
    return (
      <Router history={browserHistory}>	  	  
        <Route path='/' component={MasterPage} onEnter={this.requireAuth}>
          <Route path='/file_upload' component={FileUpload} />
          <Route path='/load_user' component={LoadUser} />
        </Route>
        <Route path='login' component={Login} />
        <Route path='reset' component={ResetPassword} />
        <Route path='initial_password' component={InitialPassword} />
	    </Router>
    );
  }
}

