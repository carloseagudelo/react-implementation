import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import DocumentInformation from './DocumentInformation'
import Loading from '../../../Loading'
import SelectTag from '../../../SelectTag'
import Paginator from '../../../Paginator'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'documents'))
export default class HistoryDocuments extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    DocumentAction.ListDocumentsByFund(0)
  }

  // Metodo que lista los documentos adecuados
  onChangeSelect(event){
    event.preventDefault()
    DocumentAction.ListDocumentsByFund($("#element option:selected").val())
  }

  render() {
    if(this.state.documents){
      let documentsI = this.state.documents.data.map((document) => {
        return(
          <DocumentInformation data={document} />
        )
      })

      return (
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>HISTORIAL DE DOCUMENTOS CARGADOS</h3>
            </div>
            <div class="x_content">
              <label for="sel1">SELECCIONE CONVOCATORIA</label>
              <SelectTag endPoint="list_convocatories" onChange={ this.onChangeSelect.bind(this) } />
              <br/>  
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>DOCUMENTO</th>
                    <th>FECHA DE CARGUE</th>
                    <th>VALIDADO</th>
                    <th>FECHA DE VALIDACION</th>
                  </tr>
                </thead>
                <tbody>
                  {documentsI}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }else {
      return(
        <Loading />
      )
    }
  }
}