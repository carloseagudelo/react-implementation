import $ from 'jquery'
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

import SelectInputFund from './SelectInputFund'
import DocumentList from './DocumentList'

@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'documents'))
export default class SetDocumentFund extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){    
    ConfigurationAction.ListDocumentsWithFund(0)
  }

  onChangeSelect(){
    ConfigurationAction.ListDocumentsWithFund($("#fund option:selected").val())
  }  

  onSaveDocumentsFund(ev){
    ev.preventDefault()
    var data = {}
    data['fund_id'] = $("#fund option:selected").val()
    ConfigurationAction.SaveDocumentsFund(this.getValues(data))
  }

  getValues(data){
    $('input').each(function( key, value ) {
      if(value.checked){
        data['document'+key] = value.id
      }
    });
    return data
  }

  render() {
    if(this.state.documents){
      return(      
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>SELECCIONAR DOCUMENTOS POR FONDO</h3>
            </div>
            <div class="x_content">
              <SelectInputFund onChange={this.onChangeSelect.bind(this)} />
              <br />
              <DocumentList data={this.state.documents.data} />
              <button class="btn btn-primary pull-right" onClick={this.onSaveDocumentsFund.bind(this)}>GUARDAR</button>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div>LOADING ........</div>
      )
    }
    
  }
}