/*  Descripcion: Componente que renderiza permite realizar la busqueda de información segun lo parametrizado
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react'

// Inicializa y exporta la clase que contiene el componente
export default class Search extends React.Component {  

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
  	return(
      <div>
        <div class="input-group">
          <input type="text" class="form-control" placeholder={this.props.placeholder} onChange={this.props.onChange} id="search"></input>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" onClick={this.props.onChange}>BUSCAR</button>
          </span>
        </div>
      </div>
    )
  }
}