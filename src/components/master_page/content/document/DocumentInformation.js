import React from 'react';
import { Link } from 'react-router'

import DocumentAction from '../../../../actions/DocumentAction'

export default class DocumentInformation extends React.Component {

  constructor(){
  	super()
  }

  getFile(ev){
    ev.preventDefault()
    DocumentAction.GetFile(this.props.data.id, this.props.data.file_file_name)
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
        <th>{this.props.data.document_name.slice(0, 35)}</th>
        <th>{this.props.data.get_finished_upload_hour}</th>
        <th>{validate}</th>
        <th>{this.props.data.get_finished_validation_hour}</th>
        <th><a onClick={this.getFile.bind(this)}><i class="fa fa-eye" aria-hidden="true" alt="VISUALIZAR EL FORMULARIO"></i></a></th>
      </tr>
    )
  }
}