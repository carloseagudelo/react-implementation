import $ from 'jquery'
import Reflux from 'reflux'

import FileUpload from '../actions/FileUpload'

import SecretConstant from '../utils/SecretsConstant'
import Authentication from '../utils/Authentication'
import Constant from '../utils/Constants.js'

let FileUpload = Reflux.createStore({

  init: function(){

  }

  FectchDocuments: function(){
  	$$.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/documents/'+localStorage.user_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){ 
      	alert('xxx')       
      },  
      error: function(xhr, textStatus){
      	alert('yyy')
      }
    });
  }

})

