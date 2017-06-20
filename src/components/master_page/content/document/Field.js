import $ from 'jquery'
import React from 'react'

import UploadInput from './UploadInput'

import DocumentAction from '../../../../actions/DocumentAction'

import Constant from '../../../../utils/Constants'

export default class Field extends React.Component {

  constructor(){
  	super()
  }

  componentDidMount(){
    if(localStorage.role != Constant.ROLE_BENEFICIARY){
      this.setValuesToCheckBox()
    }
  }

  onSubmitSend(ev){
    ev.preventDefault()
    let form_data = $(ev.target).serializeArray()
    console.log(form_data)
    let data = getParams(form_data[0].value)
    console.log('XXXXXXXXXXXXXXXXXXXX')
    console.log(data)
    DocumentAction.SendFile(data)
  }

  onSubmitValidate(){
    ev.preventDefault()
    let form_data = $(ev.target).serializeArray()    
    let data = getParams(form_data[1].value)
    DocumentAction.SendValidate(data)
  }

  setValuesToCheckBox(){
    alert(this.props.data.pre_validation)
    if(this.props.data.pre_validation){
      $('#'+this.props.data.id+' input[name=pre_validation]').attr('checked', true)
    }
    if(this.props.data.final_validation){
      $('#'+this.props.data.id+' input[name=final_validation]').attr('checked', true)
    }
  }
  
  render() {
    if(localStorage.role == Constant.ROLE_BENEFICIARY){
      return(
        <div class="component well">
          <form onSubmit={this.onSubmitSend.bind(this)} id={this.props.data.id} enctype="multipart/form-data">
            <div class="row">
              <div class="col col-md-12">
                <h4><strong>{this.props.data.document_name}</strong></h4>
              </div>
            </div>
            <div class="row">
              <UploadInput data={this.props.data} />
              <div class="col col-md-2">
                <label>VALIDACIÓN UNO:</label>
              </div>
              <div class="col col-md-1">
                <input type="checkbox" name="pre_validation" checked={this.props.data.pre_validation} />                
              </div>
              <div class="col col-md-2">
                <label>VALIDACIÓN DOS:</label>
              </div>
              <div class="col col-md-1">
                <input type="checkbox" name="final_validation" checked={this.props.data.final_validation} />
              </div>
            </div>
            <div class="row">
              <div class="col col-md-6">
                <label class="control-label">OBSERVACIONES:</label>   
                <input type="text" name="observation" id={this.props.data.document_id} value={this.props.data.observation} disabled/>              
              </div>
              <div class="col col-md-6">
                <input type="submit" value="ENVIAR" class="btn btn-primary btn-sm pull-right" />
              </div>
            </div>
            <input type="hidden" name="idForm" value={this.props.data.id} />
          </form>
        </div>
      )
    }else{
      return(
        <div class="component well">
          <form onSubmit={this.onSubmitSend.bind(this)} id={this.props.data.id} enctype="multipart/form-data">
            <div class="row">
              <div class="col col-md-12">
                <h4><strong>{this.props.data.document_name}</strong></h4>
              </div>
            </div>
            <div class="row">
              <div class="col col-md-6">
                <a href={this.props.data.file_url}>{this.props.data.file_file_name}</a>
              </div>
              <div class="col col-md-2">
                <label>VALIDACIÓN UNO:</label>
              </div>
              <div class="col col-md-1">
                <input type="checkbox" name="pre_validation" />                
              </div>
              <div class="col col-md-2">
                <label>VALIDACIÓN DOS:</label>
              </div>
              <div class="col col-md-1">
                <input type="checkbox" name="final_validation" />
              </div>
            </div>
            <div class="row">
              <div class="col col-md-6">
                <label class="control-label">OBSERVACIONES:</label>   
                <input type="text" name="observation" id={this.props.data.document_id} value={this.props.data.observation} />              
              </div>
              <div class="col col-md-6">
                <input type="submit" value="ENVIAR" class="btn btn-primary btn-sm pull-right" />
              </div>
            </div>
            <input type="hidden" name="document_id" value={this.props.data.id} />
          </form>
        </div>
      )
    }    
  }
}

function getParams(idform) {
    var elements = document.getElementById(idform).elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
    }
    return obj
  }
