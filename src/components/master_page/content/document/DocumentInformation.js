import React from 'react';
import { Link } from 'react-router'

export default class DocumentInformation extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let validate
    if(this.props.data.get_validated){
      validate = <i class="fa fa-check" aria-hidden="true"></i>
    }else{
      validate = <i class="fa fa-times" aria-hidden="true"></i>
    }

    return(
      <tr scope="row">
        <th>{this.props.data.document_name}</th>
        <th>{this.props.data.get_finished_upload_hour}</th>
        <th>{validate}</th>
        <th>{this.props.data.get_finished_validation_hour}</th>
        <th><a href={'ftp://192.168.1.2/'+this.props.data.file_url} target="_blank"><i class="fa fa-eye" aria-hidden="true" alt="VISUALIZAR EL FORMULARIO"></i></a></th>
      </tr>
    )
  }
}