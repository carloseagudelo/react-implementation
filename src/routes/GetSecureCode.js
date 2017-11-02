/*  Descripcion: Componente que renderiza la funcionalidad de autentificación en la plataforma
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'
import { Link } from 'react-router'

// importa las librerias externas necesarias
import LoginAction from '../actions/LoginAction.js'
import LoginStore from '../stores/LoginStore.js'

// importa los componentes necesarios
import MessageFlash from '../components/MessageFlash'
import Loading from '../components/Loading'
import Bubbles from '../components/login/Bubbles'
import Logo from '../components/login/Logo'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(LoginStore, 'login'))
export default class GetSecureCode extends React.Component {

  constructor(){
  	super()
  }

  // Metodo que envia captura la solicitud de autentificacion en plataforma
  onSubmitGetSecureCode(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'email': form_data[0].value
  	}
  	LoginAction.GetSecureCode(data)
  }

  // Retorna el componente
  render() {
	return(
	  <div class="custom-style">
	    <div class="wrapper">
	      <center>
		    <MessageFlash data={this.state.login} />
		    <Logo />
		  </center>
		  <div class="custom-container">
		  	<h1 class="form-title">RECUPERAR CONTRASEÑA</h1>
		    <form class="custom-form" onSubmit={this.onSubmitGetSecureCode.bind(this)}>
		      <input type="text" name="email" class="form-control" placeholder="CORREO ELECTRONICO" required="" />
			  <button type="submit" id="login-button">ENVIAR CÓDIGO</button>
        <br/>
          <p>
            <Link class="mg-right" to='habeas_data'>Registro en plataforma </Link>
            <Link to='login'>Iniciar Sesión </Link>
          </p>
			</form>
		  </div>
		  <Bubbles />
		</div>
	  </div>
	);
  }
}