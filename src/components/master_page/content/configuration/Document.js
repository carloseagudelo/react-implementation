import React from 'react';
import { Link } from 'react-router'

export default class User extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return(
      <tr scope="row" id={this.props.data.name} >
        <th>{this.props.data.name}</th>
        <th>{this.props.data.description}</th>
        <th>{this.props.data.obligatory}</th>
        <th>{this.props.data.type}</th>
        <th>{this.props.data.created_at}</th>
      </tr>
    )
  }
}