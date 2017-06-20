import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'

import AdminFoundAction from '../actions/AdminFoundAction'

import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'


let AdminFoundStore = Reflux.createStore({
  listenables: [AdminFoundAction],

  // Realiza la peticion de login al api del aplicativo
  LoadData: function(){
  	$.ajax({
      crossDomain: true,
      cache: false,      
      context: this,
      url: SecretConstant.HOST_API+'/load_preselected_users_data',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){ 
        this.state = {
          message: Constant.LOAD_USERS_SUCESS,
          type: Constant.TYPE_FLASH_MESSAGE_SUCESS
        }
        this.trigger(this.state)
      },  
      error: function(textStatus, xhr){
        this.state = {
          message: Constant.LOAD_USERS_ERROR,
          ype: Constant.TYPE_FLASH_MESSAGE_ERROR
        }
        this.trigger(this.state)
      }
    });
  }

})

export default AdminFoundStore