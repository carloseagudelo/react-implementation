import React from 'react';
import { Link } from 'react-router'

export default class User extends React.Component {

  constructor(){
  	super()
  }

  render() {

    let component
    if(localStorage.role != 'admin' && localStorage.role.indexOf('admin') !== -1 ){
      component =  <th>{this.props.data.validator}</th>
    }

    return(
      <tr scope="row">
        <th>{this.props.data.document_number}</th>
        <th>{this.props.data.name}</th>
        <th>{this.props.data.state}</th>
        <th>{this.props.data.finished_upload_hour}</th>
        <th>{this.props.data.finished_validation_hour}</th>
        {component}
        <th><Link to={'/documents/'+this.props.data.id+'/name/'+this.props.data.name+'/document_num/'+this.props.data.document_number}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link></th>
      </tr>
    )
  }
}