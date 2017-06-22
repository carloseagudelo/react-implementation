import React from 'react';
import { Link } from 'react-router'

import SelectInputFund from './SelectInputFund'

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
          </div>
        </div>
      </div>
    )
  }
}