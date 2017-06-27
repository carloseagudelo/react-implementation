import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MasterPage from './MasterPage';
import Login from './Login';
import ResetPassword from './ResetPassword';
import InitialPassword from './InitialPassword';
import ErrorPage from './ErrorPage'

import Document from '../components/master_page/content/document/Document'
import LoadUser from '../components/master_page/content/adminFound/LoadUser'
import ListDocumets from '../components/master_page/content/configuration/ListDocuments'
import CreateDocument from '../components/master_page/content/configuration/CreateDocument'
import SetDocumentFund from '../components/master_page/content/configuration/SetDocumentFund'
import ChangeValidator from '../components/master_page/content/adminFound/changeValidator/ChangeValidator'

export default class Root extends React.Component {

  constructor(){
  	super()
  }

  requireAuth() {
    if(typeof(localStorage.jwtToken) !== 'undefined'){
      var data = localStorage.jwtToken.split(',');
      if (data[0] != 'Autorized') {
        browserHistory.push('/error_page/403')
      }
    }else{
      browserHistory.push('/error_page/403')
    }
  }

 render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MasterPage} onEnter={this.requireAuth} >
          <Route path='/documents' component={Document} />
          <Route path='/documents/:id' component={Document} />
          <Route path='/load_user' component={LoadUser} />
          <Route path='/list_documents' component={ListDocumets} />
          <Route path='/create_document' component={CreateDocument} />
          <Route path='/set_documents' component={SetDocumentFund} />
          <Route path='/change_validator' component={ChangeValidator} />
        </Route>
        <Route path='login' component={Login} />
        <Route path='reset' component={ResetPassword} />
        <Route path='initial_password' component={InitialPassword} />
        <Route path='/error_page/:er' component={ErrorPage} />
	    </Router>
    );
  }
}

