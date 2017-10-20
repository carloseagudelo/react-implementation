import $ from 'jquery'
import React from 'react'

import DocumentAction from '../../../../actions/DocumentAction'

import Constant from '../../../../utils/Constants'
import UploadInput from './UploadInput'

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
    obj['observation'] = $('#'+idForm+' textarea[name=observation]').val()
    return obj
  }

  setValuesToInputs(){
    $('#'+this.props.data.id+' input[name=pre_validation]').attr('checked', this.props.data.pre_validation)
    $('#'+this.props.data.id+' textarea[name=observation]').val(this.props.data.observation)
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
                            <div class="col-md-6">
                              <p><b><i class="fa fa-file-text-o" aria-hidden="true"></i> DOCUMENTO CARGADO: </b> <a href={'ftp://181.143.72.66:5010/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a></p>
                            </div>
                            <div class="col-md-6">
                              <i class="fa fa-check" aria-hidden="true"></i><label class="margin-r"> VALIDAR: </label>
                              <input type="checkbox" name="pre_validation" name="pre_validation" />                          </div>
                          </td>
                        </tr>

                        <br />

                        <tr>
                          <td colspan="2">
                            <div class="col-md-12">
                              <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label> <br />
                              <textarea class="observation" name="observation" />
                            </div>
                          </td>
                        </tr>                                             

                      </table>
                      <br/>
                    </div>

                    <div class="row">
                      <div class="col col-md-12">
                        <input type="submit" value="GUARDAR VALIDACIÓN" class="btn btn-primary btn-sm pull-right" />
                      </div>
                    </div>                    
                  </div>
    }else{
       component =
                <div class="row">
                  <div class="col-sm-12">
                    <table class="table table-docs">

                      <tr>
                        <td>
                          <div class="col-md-6">
                            <p><b><i class="fa fa-file-text-o" aria-hidden="true"></i> DOCUMENTO CARGADO: </b> <a href={'ftp://181.143.72.66:5010/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a></p>
                          </div>
                          <div class="col-md-6">
                            <i class="fa fa-check" aria-hidden="true"></i><label class="margin-r"> VALIDAR: </label>
                            <input type="checkbox" name="pre_validation" name="pre_validation" disabled/>                          </div>
                        </td>
                      </tr>

                      <br />

                      <tr>
                        <td colspan="2">
                          <div class="col-md-12">
                            <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label> <br />
                            <textarea class="observation" name="comment" name="observation" disabled/>
                          </div>
                        </td>
                      </tr>                                             

                    </table>
                  </div>
                </div>
      }

    return(
      <div class="component well">
        <form onSubmit={this.onSubmitValidate.bind(this)} id={this.props.data.id} enctype="multipart/form-data">
          <input type="hidden" name="id_form" value={this.props.data.id} />

          <div class="row">
            <div class="col-sm-12">
              <table class="table table-docs">
                <tr>
                  <td>
                    <div class="col-md-12">
                      <h3><strong>{this.props.data.document_name}</strong></h3>
                      <h6><strong>{this.props.data.document_description}</strong></h6>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <hr/>

          {component}

        </form>
      </div>
    )
  }
}