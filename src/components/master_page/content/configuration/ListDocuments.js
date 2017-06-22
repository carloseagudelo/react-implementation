import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { Link } from 'react-router'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import Document from './Document'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'documents'))
export default class ListDocuments extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){    
    DocumentAction.ListDocuments()     
  }

  render() {
    if(this.state.documents){
      let documents = this.state.documents.map((document) => {
        return(
          <Document data={document} />
        )
      })

      return (
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>LISTA DE DOCUMENTOS</h3>
            </div>
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>DESCRIPCIÓN</th>
                    <th>REQUERIDO</th>
                    <th>TIPO</th>
                    <th>FECHA DE CREACIÓN</th>                    
                  </tr>
                </thead>
                <tbody>      
                  {documents}   
                </tbody>
              </table>
              <Link to='/create_document' class="btn btn-primary btn-sm pull-right">CREAR DOCUMENTO</Link>
            </div>
          </div>
        </div>        
      )
    }else {
      return(
        <div>LOADING ......</div>
      )
    }
  }
}
