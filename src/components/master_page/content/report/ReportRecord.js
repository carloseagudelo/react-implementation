import React from 'react';
import { Link } from 'react-router'

import GetPDF from '../history/GetPDF'
import VisitConvocatory from '../history/VisitConvocatory'

export default class ReportRecord extends React.Component {

  constructor(){
  	super()
  }

  render() {

    return(

      <tr scope="row">
        <th>{this.props.data.document_type}</th>
        <th>{this.props.data.document_number}</th>
        <th>{this.props.data.name}</th>
        <th>{this.props.data.commune}</th>
        <GetPDF convocatory={$("#element option:selected").text()} etape={this.props.data.etape} app={this.props.data.app} user_id={this.props.data.user_id}/>
        <VisitConvocatory convocatory={$("#element option:selected").text()} app={this.props.data.app} />
      </tr>
    )
  }
}