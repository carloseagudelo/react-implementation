import React from 'react';

export default class Menu extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return (
      <div class="col-md-3 left_col">
		<div class="left_col scroll-view">
		  <div class="navbar nav_title" >
		    <a href="#" class="site_title"><i class="fa fa-home"></i> <span>Sapiencia</span></a>
		  </div>
		  <div class="clearfix"></div>
		  <br />
		  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
		    <div class="menu_section">
		      <ul class="nav side-menu">
		        <li><a><i class="fa fa-bar-chart"></i>INFORMES<span class="fa fa-chevron-down"></span></a>
		          <ul class="nav child_menu">
		            <li><a href="#">COMUNAS</a></li>
		          </ul>
		        </li>
				<li><a><i class="fa fa-edit"></i>PARAMETRIZACIÓN<span class="fa fa-chevron-down"></span></a>
		          <ul class="nav child_menu">
		            <li><a href="#">DINERO</a></li>
		          </ul>
		        </li>
		        <li><a><i class="fa fa-users"></i>OPERATIVIDAD<span class="fa fa-chevron-down"></span></a>
		          <ul class="nav child_menu">
		            <li><a href="#">CARGA PRESELECCIONADOS</a></li>
		          </ul>
		        </li>
		      </ul>
		    </div>
		  </div>
		</div>
      </div>
    );
  }
}