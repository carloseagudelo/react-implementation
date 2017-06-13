import React from 'react';

export default class TopMenu extends React.Component {

  constructor(){
  	super()
  }

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
	                <img src={this.props.data[0].photo} alt=""/>{this.props.data[0].personal_name} <span class=" fa fa-angle-down"></span>
	              </a>
	              <ul class="dropdown-menu dropdown-usermenu pull-right">
	              <li><a href="#">PERFIL</a></li>
	              <li><a href="#">CONFIGURACIÓN</a></li>
	              <li><a href="#">PQRS</a></li>
	              <li><a href="#"><i class="fa fa-power-off pull-right"></i>CERRAR SESIÓN</a></li>
	              </ul>
	            </li>
	          </ul>
	        </nav>
	      </div>
	    </div>
      )
  }
}