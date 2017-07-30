/*  Descripcion: Componente que renderiza una lista los subitems del menu vertical derecho
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import {Link} from 'react-router'

// Inicializa y exporta la clase que contiene el componente
export default class SubItem extends React.Component {

  constructor(){
  	super()
  }

  // Retorna el componente
  render() {
    let sub_items = this.props.dataItem.map((subItem) => {
      return(
        <li><Link to={subItem.url}>{subItem.name}</Link></li>
      )
    })
    return ( 
      <ul class="nav child_menu">
        { sub_items }
      </ul>
    )
  }
}