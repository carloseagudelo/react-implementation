import React from 'react';
import { Link } from 'react-router'

export default class Register extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return(
      <tr scope="row">
        <th>{this.props.data.document_type}</th>
        <th>{this.props.data.document_number}</th>
        <th>{this.props.data.fund}</th>
        <th>{this.props.data.convocatory}</th>
        <th>{this.props.data.etape}</th>
        <th>{this.props.data.preselected}</th>
        <th>VISUALIZAR</th>
        <th>PDF</th>
        <th>ELIMINAR</th>
      </tr>
    )
  }
}