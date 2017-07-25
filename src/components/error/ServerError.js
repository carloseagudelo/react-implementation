import React from 'react';

export default class ServerError extends React.Component {

  constructor(){
  	super()
  }

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