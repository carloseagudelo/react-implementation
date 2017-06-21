import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'

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
          this.trigger(response)
        },
        error: function(xhr, textStatus){

        }
      });
    }
  },

  SendFile: function(data){
    var formData = new FormData();
    var input = $('input[name=s' + data.idForm + ']')
    formData.append( 'file', input[0].files[0]);
    formData.append( 'id', data.idForm);
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
      url: SecretConstant.HOST_API+'/validate_document',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  ListDocuments: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: data,
      url: SecretConstant.HOST_API+'/list_documents',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  SaveDocument: function(data){
    if(data.name != '' || data.description != ''){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        data: data,
        url: SecretConstant.HOST_API+'/save_document',
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'POST',
        success: function(response, textStatus, xhr){
          if(response.status == 200){
            
            browserHistory.push('/list_documents');
            
          }else{

          }          
        },
        error: function(xhr, textStatus){

        }
      });
    }else{
      this.state = {
        type: Constant.TYPE_FLASH_MESSAGE_ERROR,
        message: Constant.VALIDATION_FIELDS_ERROR
      }
      this.trigger(this.state)
    }
  }

})

export default FileUpload

