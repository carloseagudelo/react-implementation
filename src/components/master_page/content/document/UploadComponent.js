import $ from 'jquery'
import React from 'react'

import UploadInput from './UploadInput'

import DocumentAction from '../../../../actions/DocumentAction'

import Constant from '../../../../utils/Constants'

export default class UploadComponent extends React.Component {

  constructor(){
  	super()
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
          <input type="hidden" name="idForm" value={this.props.data.id} />

          <div class="row">
            <div class="col col-md-6">
              <h4><strong>{this.props.data.document_name}</strong></h4>
             </div>
             <div class="col col-md-6">
              <h4>PESO DEL DOCUMENTO: <strong>{this.props.data.document_weight} MB</strong></h4>
             </div>
             <div class="col col-md-12">
              <h6><strong>{this.props.data.document_description}</strong></h6>
            </div>
          </div> 
          <div class="row">
            <UploadInput data={this.props.data} />
            <div class="col col-md-2">
              <label>DOCUMENTO:</label>
            </div>
            <div class="col col-md-4">
              {link}
            </div>
          </div>
          <div class="row">
            <div class="col col-md-2">
              <label>VALIDACIÓN UNO:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="pre_validation" checked={this.props.data.pre_validation} />
            </div>
            <div class="col col-md-2">
              <label>VALIDACIÓN DOS:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="final_validation" checked={this.props.data.final_validation} />
            </div>       
          </div>
          <div class="row">
            <div class="col col-md-6">
              <label class="control-label">OBSERVACION: </label>
              <input type="text" name="observation" value={this.props.data.observation} disabled/>
            </div> 
            <div class="col col-md-6">
              <label class="control-label">OBSERVACION: </label>
              <input type="text" name="second_observation" value={this.props.data.second_observation} disabled/>
            </div>
          </div>
          <div>
            <div class="col col-md-12">
              <input type="submit" value="ENVIAR" class="btn btn-primary btn-xs pull-right" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
