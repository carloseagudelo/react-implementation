/*  Descripcion: Clase que registta todas las rutas del aplicativo
         la primera ves de ingreso a la plataforma
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import SelectRole from '../utils/SelectRole'

// importa los componentes necesarios
import MasterPage from './MasterPage';
import Registration from './Registration';
import Login from './Login';
import ResetPassword from './ResetPassword';
import GetSecureCode from './GetSecureCode';
import RestorePassword from './RestorePassword';
import ErrorPage from './ErrorPage'
import Document from '../components/master_page/content/document/Document'
import LoadUser from '../components/master_page/content/adminFound/LoadUser'
import ListDocumets from '../components/master_page/content/configuration/ListDocuments'
import CreateDocument from '../components/master_page/content/configuration/CreateDocument'
import SetDocumentFund from '../components/master_page/content/configuration/SetDocumentFund'
import ChangeValidator from '../components/master_page/content/adminFound/changeValidator/ChangeValidator'
import SetRestriction from '../components/master_page/content/configuration/SetRestriction'
import CreateConvocatory from '../components/master_page/content/configuration/CreateConvocatory'
import ListAviableFunds from '../components/master_page/content/funds/ListAviableFunds'

export default class Root extends React.Component {

  constructor(){
  	super()
  }

  // Valida si la ruta a la que accede el usuario esta autentificado
  requireAuth() {
    if(typeof(localStorage.jwtToken) !== 'undefined'){
      var data = localStorage.jwtToken.split(',');
      if (data[0] != 'Autorized') {
        browserHistory.push('/error_page/403')
      }if(localStorage.role == ''){
        SelectRole();
      }
    }else{
      browserHistory.push('/error_page/403')
    }
  }

  // Retorna la lista
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
          <Route path='/set_restriction' component={SetRestriction} />
          <Route path='/create_convocatory' component={CreateConvocatory} />
          <Route path='/list_funds_aviables' component={ListAviableFunds} />
        </Route>
        <Route path='registration' component={Registration} />
        <Route path='login' component={Login} />
        <Route path='reset' component={ResetPassword} /> 
        <Route path='get_code' component={GetSecureCode} />
        <Route path='restore_password' component={RestorePassword} />
        <Route path='/error_page/:er' component={ErrorPage} />
	    </Router>
    );
  }
}