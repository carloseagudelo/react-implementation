import React from 'react';
import { Link } from 'react-router'

import LoginAction from '../../actions/LoginAction'

export default class TopMenu extends React.Component {

  constructor(){
  	super()
  }

  onClickLogin(ev){
  	ev.preventDefault()
  	LoginAction.Logout()
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