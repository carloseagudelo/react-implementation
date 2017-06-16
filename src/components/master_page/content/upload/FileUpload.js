import React from 'react';
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import FileUploadAction from '../../../../actions/FileUploadAction'
import FileUploadStore from '../../../../stores/FileUploadStore'

import Fields from './Fields'

@ReactMixin.decorate(Reflux.connect(FileUploadStore, 'fields'))
export default class FileUpload extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){        
    FileUploadAction.FetchDocuments()     
  }

  render() {
    if(this.state.fields){
      return (
        <div class="">
          <div class="page-title">
            <div class="title_left">
              <h3>CARGA DE DOCUMENTOS</h3>
              <Fields data={this.state.fields} />
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div>LOADING .....</div>
      )
    }
  }
}