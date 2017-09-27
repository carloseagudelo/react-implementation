import React from 'react';
import { Link } from 'react-router'
import GetPDF from './GetPDF'
import VisitConvocatory from './VisitConvocatory'

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
        <VisitConvocatory convocatory={this.props.data.convocatory} />
        <GetPDF convocatory={this.props.data.convocatory}/>
        <th>ELIMINAR</th>
      </tr>
    )
  }
}