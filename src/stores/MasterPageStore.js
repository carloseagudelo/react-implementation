import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'

import MasterPageAction from '../actions/MasterPageAction.js'

import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants.js'


let MasterPageStore = Reflux.createStore({
  listenables: [MasterPageAction],

  // Realiza la peticion de login al api del aplicativo
  FetchInformation: function(){
  	$.ajax({
      crossDomain: true,
      cache: false,
      data: {email: localStorage.current_user},
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      context: this,
      url: SecretConstant.HOST_API+'/personal/show',
      method: 'GET',
      success: function(response, textStatus, xhr){ 
        if(xhr.status == 200){
          this.trigger(response[0])
        }else {
          this.state = {
	         message: Constant.AUTHENTICATION_REQUIRED,
	         type: Constant.TYPE_FLASH_MESSAGE_ERROR
	        }
          alert('pepa')
          browserHistory.push('/login');
          this.trigger(this.state)
        }
      },  
      error: function(textStatus, xhr){
        this.state = {
          message: Constant.AUTHENTICATION_REQUIRED,
          type: Constant.TYPE_FLASH_MESSAGE_ERROR
        }
        alert('popo')
        browserHistory.push('/initial_password');
        this.trigger(this.state)
      }
    });
  }

})

export default MasterPageStore