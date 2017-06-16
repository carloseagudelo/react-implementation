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
      enctype: 'multipart/form-data',
      processData: false,
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
    let formdata = {file: data.file, document_id: data.document_id}
    console.log('pp')
    console.log(formdata)
    console.log(formdata.file)
    console.log(formdata.document_id)
    console.log('pp')
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      contentType: false,
      url: SecretConstant.HOST_API+'/documents_by_people',
      data: formdata,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZzz')
        console.log(xhr.status)
        console.log(response)
        console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZ')        
      },  
      error: function(xhr, textStatus){
        
      }
    });
  }

})

export default FileUpload

