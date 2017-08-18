/*  Descripcion: Componente que renderiza las burbujas en las visatas de autenticación
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 15 de Agosto 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta la clase que contiene el componente
export default class Bubbles extends React.Component {

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
    return (
	    <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }
}