/*  Descripcion: Componente que renderiza la las vistas de cada uno de los menus
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta el contenido del componente
export default class Content extends React.Component {

  constructor(){
  	super()
  }

  // Retorna el compnente
  render() {
    return (
      <div class="right_col" role="main" >
      	{this.props.data}
      </div>
    )
  }
}
