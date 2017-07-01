import $ from 'jquery'
import React from 'react'

import UploadInput from './UploadInput'

import DocumentAction from '../../../../actions/DocumentAction'

import Constant from '../../../../utils/Constants'

export default class ValidateComponent extends React.Component {

  constructor(){
  	super()
  }

  componentDidMount(){
    this.setValuesToInputs()
  }

  onSubmitValidate(ev){
    ev.preventDefault()
    let form_data = $(ev.target).serializeArray()
    let data = this.getParams(form_data[0].value)
    DocumentAction.SendValidate(data)
  }

  getParams(idForm){
    var obj ={};
    obj['id_form'] = idForm;
    obj['pre_validation'] = $('#'+idForm+' input[name=pre_validation]').prop('checked')
    obj['final_validation'] = $('#'+idForm+' input[name=final_validation]').prop('checked')
    obj['observation'] = $('#'+idForm+' input[name=observation]').val()
    obj['second_observation'] = $('#'+idForm+' input[name=second_observation]').val()
    return obj
  }
  
  setValuesToInputs(){
    $('#'+this.props.data.id+' input[name=pre_validation]').attr('checked', this.props.data.pre_validation)
    $('#'+this.props.data.id+' input[name=final_validation]').attr('checked', this.props.data.final_validation)
    $('#'+this.props.data.id+' input[name=observation]').val(this.props.data.observation)
    $('#'+this.props.data.id+' input[name=second_observation]').val(this.props.data.second_observation)
  }

  render() {
    let component;
    if(localStorage.user_id == this.props.data.pre_validator_id){
      component =
        <div>
          <div class="row">
            <div class="col col-md-2">
              <label>VALIDACIÓN UNO:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="pre_validation" name="pre_validation" />
            </div>
            <div class="col col-md-2">
              <label>VALIDACIÓN DOS:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="final_validation" disabled/>
            </div>            
          </div>
          <div class="row">
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES: </label>
              <input type="text" name="observation" />
            </div>
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES: </label>
              <input type="text" name="second_observation" disabled/>
            </div>
          </div>
        </div>      
    }else if(localStorage.user_id == this.props.data.final_validator_id){
      component =
        <div>
          <div class="row">
            <div class="col col-md-2">
              <label>VALIDACIÓN UNO:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="pre_validation" name="pre_validation" disabled/>
            </div>
            <div class="col col-md-2">
              <label>VALIDACIÓN DOS:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="final_validation" />
            </div>            
          </div>
          <div class="row">
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES: </label>
              <input type="text" name="observation" disabled/>
            </div>
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES: </label>
              <input type="text" name="second_observation" />
            </div>
          </div>
        </div>
      }else{
        component =
        <div>
          <div class="row">
            <div class="col col-md-2">
              <label>VALIDACIÓN UNO:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="pre_validation" name="pre_validation" disabled/>
            </div>
            <div class="col col-md-2">
              <label>VALIDACIÓN DOS:</label>
            </div>
            <div class="col col-md-4">
              <input type="checkbox" name="final_validation" disabled/>
            </div>            
          </div>
          <div class="row">
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES: </label>
              <input type="text" name="observation" disabled/>
            </div>
            <div class="col col-md-6">
              <label class="control-label">OBSERVACIONES: </label>
              <input type="text" name="second_observation" disabled/>
            </div>
          </div>
        </div>
      }

    return(
      <div class="component well">
        <form onSubmit={this.onSubmitValidate.bind(this)} id={this.props.data.id} enctype="multipart/form-data">
          <input type="hidden" name="id_form" value={this.props.data.id} />
          <div class="row">
            <div class="col col-md-12">
              <h4><strong>{this.props.data.document_name}</strong></h4>
              <h6><strong>{this.props.data.document_description}</strong></h6>
            </div>
          </div> 
          <div class="row">
            <div class="col col-md-2">
              <label>DOCUMENTO:</label>
            </div>
            <div class="col col-md-6">
              <a href={'ftp://181.143.72.66:5010/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a>
            </div>
          </div>
          {component}
          <div class="row">
            <div class="col col-md-12">
              <input type="submit" value="ENVIAR" class="btn btn-primary btn-sm pull-right" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}