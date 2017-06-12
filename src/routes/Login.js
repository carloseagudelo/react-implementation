import $ from 'jquery'
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'
import { Link } from 'react-router'

import LoginAction from '../actions/LoginAction.js'
import LoginStore from '../stores/LoginStore.js'

import MessageFlash from '../components/MessageFlash'

@ReactMixin.decorate(Reflux.connect(LoginStore, 'login'))
export default class Login extends React.Component {

  constructor(){
  	super()
  }

  onSubmitLogin(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'email': form_data[0].value,
  	  'password': form_data[1].value
  	}
  	LoginAction.Login(data)
  }

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