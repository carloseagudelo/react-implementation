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
  }

})

export default FileUpload

