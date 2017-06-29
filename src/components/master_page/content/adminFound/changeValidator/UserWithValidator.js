import React from 'react';

import SelectValidator from './SelectValidator'

export default class UserWithValidator extends React.Component {

  constructor(){
  	super()
  }

  render() {
	return(
	  <tr scope="row" id={this.props.data.id}>
	    <th>{this.props.data.name}</th>
	    <th>{this.props.data.state}</th>
	    <th><SelectValidator data={this.props.data.pre_validator_id} name={'pre_validator'}/></th>
	    <th><SelectValidator data={this.props.data.final_validator_id} name={'final_validator'}/></th>
	    <button id={this.props.data.id} onClick={this.props.onClick}>CAMBIAR</button>
	  </tr>
	)
  }
}