/*  Descripcion: Componente que renderiza una vista con el error 403
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta la clase que contiene el componente
export default class AccessDenied extends React.Component {

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
    return(
      <div class="text-center text-center">
        <h1 class="error-number">403</h1>
        <h2>ACCESO NO PERMITIDO</h2>
        <p>PARA INGRESAR A ESTA RUTA DEBE ESTAR AUTENTIFICADO</p>
        <div class="mid_center">
          <h3>BUSCADOR</h3>
          <form>
            <div class="col-xs-12 form-group pull-right top_search">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="BUSCAR..." />
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">IR</button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}