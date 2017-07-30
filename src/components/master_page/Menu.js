/*  Descripcion: Componente que renderiza el menú vertical derecho donde se listan todas las 
				 funcionalidades del sistema
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Importa los componentes necesarios
import Item from './menu/Item'

// Inicializa y exporta la clase que contiene el componente
export default class Menu extends React.Component {

  constructor(){
  	super()
  }

  // Retorna el compnente
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
	        <Item data={this.props.data} />
		  </div>
		</div>
      </div>
    )
  }
}

