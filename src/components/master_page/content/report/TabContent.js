import React from 'react';

import Search from '../../../Search'
import Paginator from '../../../Paginator'
import AdminFoundAction from '../../../../actions/AdminFoundAction'


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
          <thead>
            <tr>
              <th><b>TIPO DE DOCUMENTO</b></th>
              <th><b>NÚMERO DE DOCUMENTO</b></th>
              <th><b>NOMBRE</b></th>
              <th><b>COMUNA</b></th>
              <th><b>PDF</b></th>
              <th><b>VISUALIZAR INSCRIPCIÓN</b></th>
            </tr>
          </thead>
          <tbody>
            {this.props.registers}
          </tbody>
        </table>
        <br />
        <br />

        <Paginator pages={this.props.pages} current={this.props.current_page} onClick={this.props.onChange_paginator.bind(this)}/>
      </div>
    )
  }
}