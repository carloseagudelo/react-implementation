import $ from 'jquery'
import React from 'react';
import { Link } from 'react-router'

import SelectInputFund from './SelectInputFund'
import DocumentList from './DocumentList'

export default class SetDocumentFund extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return(      
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>SELECCIONAR DOCUMENTOS POR FONDO</h3>
          </div>
          <div class="x_content">
            <SelectInputFund />
            <br />
            <DocumentList data={$('#fund option:selected').val()}/>
            <button class="btn btn-primary pull-right">GUARDAR</button>
          </div>
        </div>
      </div>
    )
  }
}