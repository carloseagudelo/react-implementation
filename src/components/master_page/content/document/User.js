import React from 'react';
import { Link } from 'react-router'

export default class User extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return(
      <tr scope="row">
        <th>{this.props.data.name}</th>
        <th>{this.props.data.state}</th>
        <th>{this.props.data.finished_upload_hour}</th>
        <th>{this.props.data.finished_validation_hour}</th>
        <Link to={'/documents/'+this.props.data.id}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
      </tr>
    )
  }
}