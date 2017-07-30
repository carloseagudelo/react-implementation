/*  Descripcion: Componente que lista los preseleccionados a determinado fondo, junto con sus dos 
                 validadores con el fin de poder cambiar alguno de estos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// importa los componentes necesarios
import SelectValidator from './SelectValidator'

// Inicializa y exporta la clase que contiene el componente
export default class UserWithValidator extends React.Component {

  constructor(){
  	super()
  }

  // Retorna el componentes
  render() {
	return(
	  <tr scope="row" id={this.props.data.id}>
	    <th>{this.props.data.name}</th>
	    <th>{this.props.data.state}</th>
	    <th><SelectValidator data={this.props.data.pre_validator_id} name={'pre_validator'}/></th>
	    <th><SelectValidator data={this.props.data.final_validator_id} name={'final_validator'}/></th>
	    <button id={this.props.data.id} onClick={this.props.onClick}>CAMBIAR</button>
	  </tr>
	)
  }
}