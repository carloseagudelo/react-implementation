import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import User from './User'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'users'))
export default class ListUser extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){        
    DocumentAction.ListUsers()     
  }

  render() {
    if(this.state.users){
      let users = this.state.users.map((user) => {
        return(
          <User data={user} />
        )
      })

      return (
        <div>       
          {users}   
        </div>
      )
    }else {
      return(
        <div>LOADING ......</div>
      )
    }
  }
}