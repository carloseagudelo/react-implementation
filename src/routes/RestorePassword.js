/*  Descripcion: Componente que renderiza la funcionalidad de cambiar la contraseña
				 la primera ves de ingreso a la plataforma
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

// importa los componentes necesarios
import LoginAction from '../actions/LoginAction.js'
import LoginStore from '../stores/LoginStore.js'

// importa los componentes necesarios
import MessageFlash from '../components/MessageFlash'
import Bubbles from '../components/login/Bubbles'
import Logo from '../components/login/Logo'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(LoginStore, 'login'))
export default class RestorePassword extends React.Component {

  constructor(){
  	super()
  }

  // Metodo que envia captura la solicitud de cambio inicial de contraseña
  onSubmitLogin(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'email': form_data[0].value,
  	  'current_password': form_data[1].value,
  	  'password': form_data[2].value,
	  'password_confirmation': form_data[3].value
  	}
  	LoginAction.InitialPassword(data)
  }

  // Retorna el componente
  render() {
	return (
	  <div class="custom-style">
		<div class="wrapper">
	      <center>
			<MessageFlash data={this.state.login} />
			<Logo />
		  </center>
		  <div class="custom-container">
		  	<h1 class="form-title">CAMBIAR CONTRASEÑA</h1>
		  	<form class="custom-form" onSubmit={this.onSubmitLogin.bind(this)}>
		      <input type='text' name='email' class='form-control' placeholder='CORREO ELECTRÓNICO' required='' />
		      <input type='text' name='current_password' class='form-control' placeholder='CODIGO DE VERIFICACIÓN' required='' />
		      <input type='password' name='password' class='form-control' placeholder='CONTRASEÑA NUEVA' required='' />
			  <input type='password' name='password_confirmation' class='form-control' placeholder='CONFIRMAR CONTRASEÑA NUEVA' required='' />
			  <button type='submit' class='submit'> CAMBIAR CONTRASEÑA </button>
			  <br/>
			</form>
		  </div>
		<Bubbles />
	  </div>
	</div>
	);
  }
}