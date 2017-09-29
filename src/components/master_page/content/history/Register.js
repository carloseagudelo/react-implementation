import React from 'react';
import { Link } from 'react-router'

import GetPDF from './GetPDF'
import VisitConvocatory from './VisitConvocatory'
import Delete from './Delete'

export default class Register extends React.Component {

  constructor(){
  	super()
  }

  render() {

    let etape 
    let preselected
    if(this.props.data.etape){
      etape =  <i class="fa fa-check" aria-hidden="true"></i>
    }else {
      etape = <i class="fa fa-times" aria-hidden="true"></i>
    }
    if(this.props.data.preselected){
      preselected =  <i class="fa fa-check" aria-hidden="true"></i>
    }else {
      preselected = <i class="fa fa-times" aria-hidden="true"></i>
    }

    return(
      <tr scope="row">
        <th>{this.props.data.document_type}</th>
        <th>{this.props.data.document_number}</th>
        <th>{this.props.data.fund}</th>
        <th>{this.props.data.convocatory}</th>
        <th>{etape}</th>
        <th>{preselected}</th>
        <VisitConvocatory convocatory={this.props.data.convocatory} />
        <GetPDF convocatory={this.props.data.convocatory} />
        <Delete convocatory={this.props.data.convocatory} aviable={this.props.data.aviable} />
      </tr>
    )
  }
}