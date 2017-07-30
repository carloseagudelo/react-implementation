/*  Descripcion: Componente que renderiza el footer de todas las vistas del login
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta la clase que contiene el componente
export default class Footerlogin extends React.Component {

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
    return (
	  <div>
	    <h1>SAPIENCIA MEDELLIN</h1>
	    <p>Agencia de Educación Superior</p>
	  </div>
    )
  }
}