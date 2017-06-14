import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MasterPage from './MasterPage';
import Login from './Login';
import ResetPassword from './ResetPassword';
import InitialPassword from './InitialPassword';
import FileUpload from '../components/master_page/FileUpload'
import ShowFiles from '../components/master_page/ShowFiles'

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
        <Route path="/" component={MasterPage} onEnter={this.requireAuth}>
          <Route path="file_upload" component={FileUpload} />
          <Route path="show_files" component={ShowFiles} />
        </ Route>
        <Route path="login" component={Login} />
        <Route path="reset" component={ResetPassword} />
        <Route path="initial_password" component={InitialPassword} />
	    </Router>
    );
  }
}

