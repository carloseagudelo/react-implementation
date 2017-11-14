/*  Descripcion: Clase que registta todas las rutas del aplicativo
         la primera ves de ingreso a la plataforma
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// importa los componentes necesarios
import Registration from './Registration';
import Login from './Login';
import ErrorPage from './ErrorPage'
import ResetPassword from './ResetPassword';
import RestorePassword from './RestorePassword';
import MasterPage from './MasterPage';
import Course from '../components/master_page/Course'
import ListCourses from '../components/master_page/ListCourses'

export default class Root extends React.Component {

  constructor(){
  	super()
  }

  // Valida si la ruta a la que accede el usuario esta autentificado
  requireAuth() {
    if(localStorage.session !== 'authorized'){
      browserHistory.push('/error_page/403')
    }
  }

  // Retorna la lista
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MasterPage} onEnter={this.requireAuth} >
          <Route path='/home' component={ListCourses} />
          <Route path='/course/:id' component={Course} />
        </Route>
        <Route path='registration' component={Registration} />
        <Route path='login' component={Login} />
        <Route path='reset' component={ResetPassword} />
        <Route path='restore_password' component={RestorePassword} />
        <Route path='/error_page/:er' component={ErrorPage} />
	    </Router>
    );
  }
}