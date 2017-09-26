import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { browserHistory } from 'react-router'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import User from './User'
import Loading from '../../../Loading'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'users'))
export default class ListUser extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    if(this.props.data == 'admin'){
      DocumentAction.ListUsersFinished()
    }else if(this.props.data == 'validator'){
      DocumentAction.ListUsersPending()
    }
  }

  render() {
    if(this.state.users){
      let users = this.state.users.data.map((user) => {
        return(
          <User data={user} role={this.props.data} />
        )
      })

      return (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>ESTADO</th>
              <th>FECHA  DE CARGA DE DOCUMENTOS</th>
              <th>FECHA Y HORA FINALIZACIÓN</th>
              <th>VALIDAR</th>
            </tr>
          </thead>
          <tbody>
            {users}
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