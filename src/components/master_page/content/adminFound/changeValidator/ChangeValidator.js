import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import ConfigurationAction from '../../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../../stores/ConfigurationStore'

import UserWithValidator from './UserWithValidator'

@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'userValidators'))
export default class ChangeValidator extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
  	ConfigurationAction.UsersWithValidators()
  }

  updateValidators(ev){
    ev.preventDefault()
    ConfigurationAction.SendUpdateValidators(this.getParams(ev.target.id))
  }

  getParams(user_id){
    var obj = {}
    obj['user_id'] = user_id
    obj['pre_validator_id'] = $('#'+user_id+' select[name=pre_validator]').val()
    obj['final_validator_id'] = $('#'+user_id+' select[name=final_validator]').val()
    return obj
  }

  render() {
    if(this.state.userValidators){
      let users = this.state.userValidators.map((user) => {
        return(
          <UserWithValidator data={user} onClick={this.updateValidators.bind(this)}/>
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