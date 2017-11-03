import React from 'react';


export default class TabContent extends React.Component {

  constructor(){
  	super()
  }

  render() {

    return(
      <div id = "1" class="x_content info-table">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Buscar por nombre o documento"></input>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">BUSCAR</button>
          </span>
        </div>
        <br />
        <table class="table">
          <tr>
            <th><b>TIPO DE DOCUMENTO</b></th>
            <th><b>NÚMERO DE DOCUMENTO</b></th>
            <th><b>NOMBRE</b></th>
            <th><b>COMUNA</b></th>
            <th><b>PDF</b></th>
            <th><b>VISUALIZAR INSCRIPCIÓN</b></th>
          </tr>
          {this.props.registers}
        </table>
      </div>
    )
  }
}