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
export default class Registration extends React.Component {

  constructor(){
  	super()
  }

  // Metodo que envia captura la solicitud de autentificacion en plataforma
  onSubmitRegistration(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'name': form_data[0].value,
  	  'document_type': form_data[1].value,
  	  'document_number': form_data[2].value,
  	  'email': form_data[3].value
  	}
  	LoginAction.Register(data)
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
		  	<h1 class="form-title">REGISTRO</h1>
		    <form class="custom-form" onSubmit={this.onSubmitRegistration.bind(this)}>
		      <input type="text" name="name" class="form-control" placeholder="NOMBRE Y APELLIDO" required="" />
		      <select name="document_type" class="form-control" required="">
		        <option value="0">SELECCIONE EL TIPO DE DOCUMENTO</option>
		        <option value="TI">TARGETA DE IDENTIDAD</option>
		        <option value="CC">CEDULA DE CIUDADANIA</option>
		        <option value="CE">CEDULA DE EXTRANGERIA</option>
		        <option value="PS">PASAPORTE</option>
		      </select>
		      <input type="text" name="document_number" class="form-control" placeholder="NÚMERO DE DOCUMENTO" required="" />
		      <input type="text" name="email" class="form-control" placeholder="CORREO ELECTRONICO" required="" />
			  <button type="submit" id="login-button">REGISTRAR</button>
			</form>
		  </div>
		  <Bubbles />
		</div>
	  </div>
	);
  }
}