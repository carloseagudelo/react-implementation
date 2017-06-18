import $ from 'jquery'
import Reflux from 'reflux'

import DocumentAction from '../actions/DocumentAction'

import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

let FileUpload = Reflux.createStore({
  listenables: [DocumentAction],

  init: function(){

  },

  FetchDocuments: function(user_id){
  	if(user_id == 0){
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
    }else{
      alert('user_id: ' +  user_id)
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        url: SecretConstant.HOST_API+'/documents/'+user_id+'.json',
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'GET',
        success: function(response, textStatus, xhr){
          console.log('succes ajax')
          this.trigger(response)
        },
        error: function(xhr, textStatus){

        }
      });
    }    
  },

  SendFile: function(data){
    var formData = new FormData();
    var input = $('input[name=s' + data.document_id + ']')
    formData.append( 'file', input[0].files[0]);
    formData.append( 'id', data.document_id);
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      enctype: 'multipart/form-data',
      url: SecretConstant.HOST_API+'/load_file',
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
  },

  ListUsers: function(){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_users',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){
        
      }
    });
  },

  SendValidate: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: data,
      url: SecretConstant.HOST_API+'/list_users',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){
        
      }
    });
  }

})

export default FileUpload

