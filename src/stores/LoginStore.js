import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'

import LoginAction from '../actions/LoginAction'

import SecretConstant from '../utils/SecretsConstant'
import Authentication from '../utils/Authentication'
import Constant from '../utils/Constants'
import Logout from '../utils/Logout'

let LoginStore = Reflux.createStore({
  listenables: [LoginAction],

  init: function(){
    this.status = {
      message: '',
      type: ''
    }
    this.trigger(this.status)
  },

  // Realiza la peticion de login al api del aplicativo
  Login: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/login',
      method: 'POST',
      success: function(response, textStatus, xhr){ 
        if(response.status == 'authorized'){
          if(Authentication(response.payload.message.auth_token)){ // Valida el token y guarda la información en el localStores
            browserHistory.push('/');
          }else {
            this.state = {
              message: Constant.USER_NO_VALID,
              type: Constant.TYPE_FLASH_MESSAGE_ERROR
            }
            browserHistory.push('/login');
            this.trigger(this.state)
          }         
        }else {
          this.state = {
            message: response.payload.message,
            type: Constant.TYPE_FLASH_MESSAGE_ERROR
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }
      },  
      error: function(xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: Constant.TYPE_FLASH_MESSAGE_ERROR
        }
        browserHistory.push('/login');
        this.trigger(this.state)
      }
    });
  },

  ResetPassword: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/reset_passwors',
      method: 'POST',
      success: function(response, textStatus, xhr){ 
        if(response.status == 200){
          this.state = {
            message: response.payload.message,
            type: Constant.TYPE_FLASH_MESSAGE_SUCESS
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }else {
          this.state = {
            message: response.payload.message,
            type: Constant.TYPE_FLASH_MESSAGE_ERROR
          }
          browserHistory.push('/reset');
          this.trigger(this.state)
        }
      },  
      error: function(xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: Constant.TYPE_FLASH_MESSAGE_ERROR
        }
        browserHistory.push('/reset');
        this.trigger(this.state)
      }
    });
  },

  InitialPassword: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/initial_password',
      method: 'POST',
      success: function(response, textStatus, xhr){
      console.log('XXXXXXXXXXXXXXXXXXXx') 
      console.log(response)
        if(response.status == 200){
          this.state = {
            message: Constant.PASSWORD_CHANGE,
            type: Constant.TYPE_FLASH_MESSAGE_SUCESS
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }else {
          this.state = {
            message: response.payload.message,
            type: Constant.TYPE_FLASH_MESSAGE_ERROR
          }
          browserHistory.push('/initial_password');
          this.trigger(this.state)
        }
      },  
      error: function(xhr, textStatus){
        this.state = {
          message: Constant.CHANGIN_PASSWORD_ERROR,
          type: Constant.TYPE_FLASH_MESSAGE_ERROR
        }
        browserHistory.push('/initial_password');
        this.trigger(this.state)
      }
    });
  },

  Logout: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      data: {email: localStorage.current_user},
      context: this,
      url: SecretConstant.HOST_API+'/logout',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          if(Logout()){
            this.state = {
              message: response.payload.message,
              type: Constant.TYPE_FLASH_MESSAGE_SUCESS
            }
            browserHistory.push('/login');
            this.trigger(this.state)
          }else{
            browserHistory.push('/');
          }         
        }else {
          browserHistory.push('/');
        }
      },  
      error: function(xhr, textStatus){
        browserHistory.push('/')
      }
    });
  }

})

export default LoginStore