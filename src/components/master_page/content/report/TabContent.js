import React from 'react';

import Search from '../../../Search'
export default class TabContent extends React.Component {

  constructor(){
  	super()
  }

  render() {

    return(
      <div id = "1" class="x_content info-table">
        <Search placeholder="BUSCAR POR COMUNA, NOMBRE O DOCUMENTO DE IDENTIDAD" onChange={this.props.onChange} />
        <br />
        <table class="table table-striped">
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