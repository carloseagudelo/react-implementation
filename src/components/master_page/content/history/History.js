import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { browserHistory } from 'react-router'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import User from './User'
import Loading from '../../../Loading'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'registers'))
export default class History extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    DocumentAction.ListUsersFinished()
  }

  render() {
    if(this.state.registers){
      let regs = this.state.registers.data.map((reg) => {
        return(
          <Register data={reg} />
        )
      })

      return (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>TIPO DE DOCUMENTO</th>              
              <th>DOCUMENTO</th>
              <th>FONDO</th>
              <th>CONVOCATORIA</th>
              <th>FINALIZADO</th>
              <th>PRESELECCIONADO</th>
              <th>VISUALIZAR INSCRIPCIÓN</th>
              <th>PDF</th>
              <th>ELIMINAR INSCRIPCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {regs}
          </tbody>
        </table>
      )
    }else {
      return(
        <Loading />
      )
    }
  }
}