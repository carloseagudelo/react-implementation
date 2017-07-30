/*  Descripcion: Componente que renderiza una lista con las paginas que componen toda la información
                 a mostar, este siempre mostrará una lista con 10 paginas en case de se mas de 10 mostrara las 
                 las siguientes 10 a la actual y la ultima pagina
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta la clase que contiene el componente
export default class ServerError extends React.Component {

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
    return(
      <div class="text-center text-center">
        <h1 class="error-number">500</h1>
        <h2>ERROR INTERNO</h2>
        <p>SEGUIMOS ESTOS ERRORES AUTOMÁTICAMENTE, 
        PERO SI EL PROBLEMA PERSISTE NO DUDE EN CONTACTAR CON NOSOTROS</p>
      </div>
    )
  }
}