/*  Descripcion: Componente que carga la información la información en cada iteración
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import { Link } from 'react-router'

// Inicializa y exporta la clase que contiene el componente
export default class User extends React.Component {

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
    return(
      <tr scope="row" id={this.props.data.name} >
        <th>{this.props.data.name}</th>
        <th>{this.props.data.description}</th>
        <th>{this.props.data.obligatory}</th>
        <th>{this.props.data.type}</th>
        <th>{this.props.data.created_at}</th>
      </tr>
    )
  }
}