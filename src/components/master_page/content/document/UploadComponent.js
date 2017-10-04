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
    formData.append( 'file', input[0].files[0])
    formData.append( 'id', data[0].value)
    DocumentAction.SendFile(formData)
  }

  render() {
    let link;
    if(this.props.data.file_file_name != ''){
      link = <p><b><i class="fa fa-file-text-o" aria-hidden="true"></i> DOCUMENTO:</b> <a href={'ftp://192.168.1.2/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a></p>
    }

    return(
      <div class="component well">
        <form onSubmit={this.onSubmitSend.bind(this)} id={this.props.data.id} enctype="multipart/form-data">
          <input type="hidden" name="idForm" value={this.props.data.id} />

          <div class="row">
            <div class="col-sm-12">
              <table class="table table-docs">
                <tr>
                  <td>
                    <h4><strong>{this.props.data.document_name}</strong></h4>
                    <h6><strong>{this.props.data.document_description}</strong></h6>
                  </td>
                  <td>
                    <h4><strong>PESO MAXIMO:</strong> {this.props.data.document_weight} MB</h4>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <hr/>
          <br/>
          <br/>

          <div class="row">
            <div class="col-sm-12">
              <table class="table table-docs">
                <tr>
                  <td><UploadInput data={this.props.data} /></td>
                  <td>{link}</td>
                </tr>
                <br/>
                <br/>

                <tr>
                  <td>
                    <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN UNO: </label>
                    <input type="checkbox" name="pre_validation" checked={this.props.data.pre_validation} />
                  </td>

                  <td>
                    <i class="fa fa-check margin-r" aria-hidden="true"></i><label class="margin-r">VALIDACIÓN DOS: </label>
                    <input type="checkbox" name="final_validation" checked={this.props.data.final_validation} />
                  </td>
                </tr>
                <br/>
                <br/>

                <tr>
                  <td>
                    <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                    <input type="text" name="observation" value={this.props.data.observation} title={this.props.data.observation} disabled />
                  </td>

                  <td>
                    <i class="fa fa-eye margin-r" aria-hidden="true"></i><label class="control-label margin-r">OBSERVACIÓN: </label>
                    <input type="text" name="second_observation" value={this.props.data.second_observation} title={this.props.data.second_observation} disabled/>
                  </td>
                </tr>

              </table>
              <br/>
              <br/>
            </div>
          </div>


          <div>
            <div class="col col-md-12">
              <input type="submit" value="ENVIAR" class="btn btn-primary pull-right" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
