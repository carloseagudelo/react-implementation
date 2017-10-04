import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { browserHistory } from 'react-router'

import UserAction from '../../../../actions/UserAction'
import UserStore from '../../../../stores/UserStore'


import Register from './Register'
import Loading from '../../../Loading'

@ReactMixin.decorate(Reflux.connect(UserStore, 'registers'))
export default class History extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    UserAction.list_registers()
  }

  render() {
    if(this.state.registers){
      let regs = this.state.registers.data.map((reg) => {
        return(
          <Register data={reg} />
        )
      })

      return (
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>REGISTROS</h3>
            </div>
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th><b>TIPO DE DOCUMENTO</b></th>
                    <th><b>DOCUMENTO</b></th>
                    <th><b>FONDO</b></th>
                    <th><b>CONVOCATORIA</b></th>
                    <th><b>FINALIZADO</b></th>
                    <th><b>PRESELECCIONADO</b></th>
                    <th><b>VISUALIZAR INSCRIPCIÓN</b></th>
                    <th><b>PDF</b></th>
                    <th><b>ELIMINAR INSCRIPCIÓN</b></th>
                  </tr>
                </thead>
                <tbody>
                  {regs}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }else {
      return(
        <Loading />
      )
    }
  }
}