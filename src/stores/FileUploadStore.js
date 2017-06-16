import $ from 'jquery'
import Reflux from 'reflux'

import FileUploadAction from '../actions/FileUploadAction'

import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants.js'

let FileUpload = Reflux.createStore({
  listenables: [FileUploadAction],

  init: function(){

  },

  FetchDocuments: function(){
  	$.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/documents/'+localStorage.user_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        console.log('succes ajax')
        this.trigger(response)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  SendFile: function(data){
    var formData = new FormData();

    var input = $('input[name=s' + data.document_id + ']')
    formData.append( 'file', input[0].files[0]);
    formData.append( 'document_id', data.document_id);
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      enctype: 'multipart/form-data',
      url: SecretConstant.HOST_API+'/documents_by_people',
      data: formData,
      processData: false,
      contentType: false,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){

      },
      error: function(xhr, textStatus){

      }
    });
  }

})

export default FileUpload

