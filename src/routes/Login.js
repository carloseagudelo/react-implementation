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
import MessageFlash from '../components/MessageFlash'
import Loading from '../components/Loading'


// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(LoginStore, 'login'))
export default class Login extends React.Component {

  constructor(){
  	super()
  }

  // Metodo que envia captura la solicitud de autentificacion en plataforma
  onSubmitLogin(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'email': form_data[0].value,
  	  'password': form_data[1].value
  	}
  	LoginAction.Login(data)
  }

  // Retorna el componente
  render() {
		return(

			<div class="login">
				<div>
					<div class="login_wrapper">
						<div class="animate form login_form">
							<section class="login_content">
								<form onSubmit={this.onSubmitLogin.bind(this)} >
									<h1>Iniciar Sesion</h1>
									<MessageFlash data={this.state.login} />
									<div>
										<input type="text" name="email" class="form-control" placeholder="CORREO ELECTRONICO" required="" />
									</div>
									<div>
										<input type="password" name="pass" class="form-control" placeholder="CONTRASEÑA" required="" />
									</div>
									<div>
										<input type="submit" class="submit" value="INICIAR SESIÓN" />
										<Link to='reset'>Reestablecer Contraseña</Link>
									</div>
									<div class="clearfix"></div>
									<div class="separator">
										<div class="clearfix"></div>
											<br />
											<div>
												<h1>SAPIENCIA MEDELLIN</h1>
												<p>Agencia de Educación Superior</p>
											</div>
										</div>
								</form>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
  }
}