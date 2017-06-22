import $ from 'jquery'
import React from 'react'

import UploadInput from './UploadInput'

import DocumentAction from '../../../../actions/DocumentAction'

import Constant from '../../../../utils/Constants'

export default class UploadComponent extends React.Component {

  constructor(){
  	super()
  }

  componentDidMount(){
    this.setValuesToCheckBox()
  }

  onSubmitSend(ev){
    ev.preventDefault()
    let data = $(ev.target).serializeArray()
    var formData = new FormData();
    var input = $('input[name=s' + data[0].value + ']')
    formData.append( 'file', input[0].files[0]);
    formData.append( 'id', data[0].value);
    DocumentAction.SendFile(formData)
  }

  setValuesToCheckBox(){
    if(this.props.data.pre_validation){
      $('#'+this.props.data.id+' input[name=pre_validation]').attr('checked', true)
    }
    if(this.props.data.final_validation){
      $('#'+this.props.data.id+' input[name=final_validation]').attr('checked', true)
    }
  }

  render() {
    let link;
    if(this.props.data.file_file_name != ''){
      link = 
      
      <div class="col col-md-4">
        <a href={'ftp://192.168.1.2/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a>
      </div>
    }

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
              <label>DOCUMENTO:</label>
            </div>
            {link}
          </div> 
          <div class="row">
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
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES:</label>
              <input type="text" name="observation" id={this.props.data.document_id} value={this.props.data.observation} disabled/>
            </div>            
          </div>
          <div>
            <div class="col col-md-12">
              <input type="submit" value="ENVIAR" class="btn btn-primary btn-sm pull-right" />
            </div>
          </div>
          <input type="hidden" name="idForm" value={this.props.data.id} />
        </form>
      </div>
    )
  }
}
