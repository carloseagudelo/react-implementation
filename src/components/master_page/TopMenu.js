/*  Descripcion: Componente que el menú del header, donde se renderiza información personal y linkś
                 a otras funcionalidades
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import { Link } from 'react-router'

// Importa componente necesarios para el manejo de la arquitectura
import LoginAction from '../../actions/LoginAction'

// Inicializa y exporta la clase que contiene el componente
export default class TopMenu extends React.Component {

  constructor(){
  	super()
  }

  // Evneto del boton cerrar sesion, el cual ejecuta la acccion Logout del store Login
  onClickLogin(ev){
  	ev.preventDefault()
  	LoginAction.Logout()
  }

  // Retorna el compnente
  render() {
      return (
        <div class="top_nav">
	      <div class="nav_menu">
	        <nav>
	          <div class="nav toggle">
	            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
	          </div>
	          <ul class="nav navbar-nav navbar-right">
	            <li class="">
	              <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                <img src={this.props.data.image_url} alt=""/>{this.props.data.first_name} {this.props.data.last_name} <span class=" fa fa-angle-down"></span>
	              </a>
	              <ul class="dropdown-menu dropdown-usermenu pull-right">
	              <li><Link>PERFIL</Link></li>
	              <li><Link>PQRS</Link></li>
	              <li><Link onClick={this.onClickLogin.bind(this)}><i class="fa fa-power-off pull-right"></i>CERRAR SESIÓN</Link></li>
	              </ul>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </div>
      )
  }
}