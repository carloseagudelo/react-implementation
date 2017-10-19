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
    let data = $(ev.target).serializeArray()
    var formData = new FormData();
    var input = $('input[name=s' + data[0].value + ']')
    formData.append( 'file', input[0].files[0])
    formData.append( 'id', data[0].value)
    DocumentAction.SendFile(formData)
  }

  render() {
    let link
    let observation
    let button
    let obligatory

    if(this.props.data.file_file_name != ''){
      link = <p><b><i class="fa fa-file-text-o" aria-hidden="true"></i> DOCUMENTO CARGADO: </b> <a href={'ftp://192.168.1.2/'+this.props.data.file_url} target="_blank" >{this.props.data.file_file_name}</a></p>
    }
    if(this.props.data.observation){
      observation = <div>
                      <br />
                      <div class="alert alert-warning">
                        <center><strong><i class="fa fa-eye" aria-hidden="true"></i> OBSERVACIÓN: {this.props.data.observation}</strong></center>
                      </div>
                    </div>
    }
    if(!this.props.data.pre_validation){
      button = <input type="submit" value="GUARDAR DOCUMENTO" class="btn btn-primary pull-right" />
    }

    if(this.props.data.obligatory){
      obligatory = <h4 class="important"><strong>OBLIGATORIO</strong></h4>
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
                    <h3><strong>{this.props.data.document_name}</strong></h3>
                    <h6><strong>{this.props.data.document_description}</strong></h6>
                  </td>
                  <td>
                    {obligatory}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <hr/>

          <div class="row">
            <div class="col-sm-12">
              <table class="table table-docs">

                <tr>
                  <td>
                    <div class="col-md-4">
                      <UploadInput data={this.props.data} />
                    </div>
                    <div class="col-md-4">
                      {link}
                    </div>
                    <div class="col.md-4">
                      {button}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div class="col-md-12">
                      {observation}
                    </div>
                  </td>
                </tr>                                             

              </table>
            </div>
          </div>

        </form>
      </div>
    )
  }
}
