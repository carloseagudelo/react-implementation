import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

import UserWithValidator from './UserWithValidator'

@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'userValidators'))
export default class ChangeValidator extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
  	ConfigurationAction.UsersWithValidators()
  }

  render() {
    if(this.state.users){
      let users = this.state.userValidators.map((user) => {
        return(
          <UserWithValidator data={user} />
        )
      })

      return (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>ESTADO</th>
              <th>VALIDADOR 1</th>
              <th>VALIDADOR 2</th>
            </tr>
          </thead>
          <tbody>      
            {users}   
          </tbody>
        </table>
      )
    }else {
      return(
        <div>LOADING ......</div>
      )
    }
  }
}