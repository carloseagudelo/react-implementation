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
        <p>SEGUIMOS ESTOS ERRORES AUTOMÁTICAMENTE, PERO SI EL PROBLEMA PERSISTE NO DUDE EN CONTACTAR CON NOSOTROS. MIENTRAS TANTO, INTENTE REFRESCAR</p>
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