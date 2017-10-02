import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { browserHistory } from 'react-router'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import User from './User'
import Loading from '../../../Loading'
import Paginator from '../../../Paginator'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'users'))
export default class ListUser extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    if(this.props.data == 'admin'){
      DocumentAction.ListUsersFinished(1)
    }else if(this.props.data == 'validator'){
      DocumentAction.ListUsersPending(1)
    }
  }

  // Metodo que permite al paginador pasar a la siguiente pagina, o a la pagina de selección
  // Parametro: ev, evento del tag
  nextPage(ev){
    ev.preventDefault()
    if(ev.target.id == 'prev'){
      if(parseInt(this.state.users.current_page) != 1){
        if(this.props.data == 'admin'){
          DocumentAction.ListUsersFinished(parseInt(this.state.users.current_page) - 1)
        }else if(this.props.data == 'validator'){
          DocumentAction.ListUsersPending(parseInt(this.state.users.current_page) - 1)
        }
      }
    }else if(ev.target.id == 'nxt'){
      if(parseInt(this.state.users.current_page) != this.state.users.records_count.length){
        if(this.props.data == 'admin'){
          DocumentAction.ListUsersFinished(parseInt(this.state.users.current_page) + 1)
        }else if(this.props.data == 'validator'){
          DocumentAction.ListUsersPending(parseInt(this.state.users.current_page) + 1)
        }
      }
    }else{
      if(this.props.data == 'admin'){
          DocumentAction.ListUsersFinished(parseInt(ev.target.id))
        }else if(this.props.data == 'validator'){
          DocumentAction.ListUsersPending(parseInt(ev.target.id))
        }
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
        <div>
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
          <Paginator pages={this.state.users.records_count} current={this.state.users.current_page} onClick={this.nextPage.bind(this)}/>
        </div>
      )
    }else {
      return(
        <Loading />
      )
    }
  }
}