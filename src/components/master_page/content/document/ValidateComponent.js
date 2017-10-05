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
      <div class="row">
        <div class="col-sm-12">
          <table class="table table-docs">

            <tr>
              <td>
                <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN UNO: </label>
                <input type="checkbox" name="pre_validation" name="pre_validation" />
              </td>

              <td>
                <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN DOS: </label>
                <input type="checkbox" name="final_validation" disabled />
              </td>
            </tr>
            <br/>
            <br/>

            <tr>
              <td>
                <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                <input type="text" name="observation" />
              </td>

              <td>
                <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                <input type="text" name="second_observation" disabled/>
              </td>
            </tr>

          </table>
          <br/>
          <br/>
        </div>
      </div>

    }else if(localStorage.user_id == this.props.data.final_validator_id){
      component =
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-docs">

              <tr>
                <td>
                  <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN UNO: </label>
                  <input type="checkbox" name="pre_validation" name="pre_validation" disabled/>
                </td>

                <td>
                  <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN DOS: </label>
                  <input type="checkbox" name="final_validation" />
                </td>
              </tr>
              <br/>
              <br/>

              <tr>
                <td>
                  <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                  <input type="text" name="observation" disabled/>
                </td>

                <td>
                  <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                  <input type="text" name="second_observation" />
                </td>
              </tr>

            </table>
            <br/>
            <br/>
          </div>
        </div>
      }else{
        component =
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-docs">

              <tr>
                <td>
                  <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN UNO: </label>
                  <input type="checkbox" name="pre_validation" name="pre_validation" disabled/>
                </td>

                <td>
                  <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN DOS: </label>
                  <input type="checkbox" name="final_validation" disabled/>
                </td>
              </tr>
              <br/>
              <br/>

              <tr>
                <td>
                  <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                  <input type="text" name="observation" disabled/>
                </td>

                <td>
                  <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                  <input type="text" name="second_observation" disabled />
                </td>
              </tr>

            </table>
            <br/>
            <br/>
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
          <hr/>
          <br/>
          <br/>
          <div class="row">
              <div class="col-sm-12">
                <p><b><i class="fa fa-file-text-o" aria-hidden="true"></i> DOCUMENTO:</b> <a href={'ftp://181.143.72.66:5010/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a></p>
              </div>
              <br/>
              <br/>
              <br/>
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