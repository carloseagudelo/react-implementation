import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import ConfigurationAction from '../../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../../stores/ConfigurationStore'

import UserWithValidator from './UserWithValidator'

import Paginator from '../../../../Paginator'

@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'userValidators'))
export default class ChangeValidator extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
  	ConfigurationAction.UsersWithValidators(0)
  }

  nextPage(ev){
    ev.preventDefault()
    console.log(ev.target)
    if(ev.target.id == 'prev'){
      console.log('entro prev')
      if(parseInt(this.state.userValidators.payload.current_page) != 1){
        ConfigurationAction.UsersWithValidators(parseInt(this.state.userValidators.payload.current_page) - 1)
      }
    }else if(ev.target.id == 'nxt'){
      console.log('entro nxt')
      console.log('current page: '+this.state.userValidators.payload.current_page)
      console.log('array lenght: '+this.state.userValidators.payload.records_count.length)
      if(parseInt(this.state.userValidators.payload.current_page) != this.state.userValidators.payload.records_count.length - 1){
        ConfigurationAction.UsersWithValidators(parseInt(this.state.userValidators.payload.current_page) + 1)
      }
    }else{
      ConfigurationAction.UsersWithValidators(ev.target.id)
    }    
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
      let users = this.state.userValidators.payload.data.map((user) => {
        return(
          <UserWithValidator data={user} onClick={this.updateValidators.bind(this)}/>
        )
      })

      return (
        <div>
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
          <Paginator pages={this.state.userValidators.payload.records_count} current={this.state.userValidators.payload.current_page} onClick={this.nextPage.bind(this)}/>
        </div>
        
      )
    }else {
      return(
        <div>LOADING ......</div>
      )
    }
  }
}