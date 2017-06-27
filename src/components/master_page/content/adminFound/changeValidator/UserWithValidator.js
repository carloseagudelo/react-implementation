import React from 'react';

import SelectValidator from './SelectValidator'

export default class UserWithValidator extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return(
      if(this.props.data){
      	<tr scope="row">
      	  <th>{this.props.data.name}</th>
      	  <th>{this.props.data.state}</th>
          <th><SelectValidator data={this.props.data.finished_upload_hour} /></th>
          <th><SelectValidator data={this.props.data.finished_validation_hour} /></th>
          <button>CAMBIAR</button>
      	</tr>
      }else {
      	<div>LOADING ...........</div>
      }
    )
  }
}