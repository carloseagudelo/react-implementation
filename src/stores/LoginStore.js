/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax que relacionan las funcionalidades de registro
                 autentificacion y manejo de sesion al servidor backend del aplicativo
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 23 de Junio 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'
// Importa los componentes propios necesarios
import LoginAction from '../actions/LoginAction'
// Importa las clases necesarias donde se almacenas las contantes del aplicativo
import SecretConstant from '../utils/SecretsConstant'
import Authentication from '../utils/Authentication'
import Constant from '../utils/Constants'
import Logout from '../utils/Logout'

// Define la clase
let LoginStore = Reflux.createStore({
  listenables: [LoginAction],

  // Inicializa el status del componente
  init: function(){
    this.status = {
      message: '',
      type: ''
    }
    this.trigger(this.status)
  },

  // Realiza la peticion de autentificación
  Login: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/login',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
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
            type: response.payload.type
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }
      },
      error: function(response, xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: response.payload.type
        }
        browserHistory.push('/login');
        this.trigger(this.state)
      }
    });
  },

  // Realiza la petición de cambiar la contraseña
  ResetPassword: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/reset_passwors',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }else {
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          browserHistory.push('/reset');
          this.trigger(this.state)
        }
      },
      error: function(response, xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: response.payload.type
        }
        browserHistory.push('/reset');
        this.trigger(this.state)
      }
    });
  },

  // Realiza la petición de cambiar la contraseña la primera vez
  InitialPassword: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/initial_password',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }else {
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          browserHistory.push('/initial_password');
          this.trigger(this.state)
        }
      },
      error: function(response, xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: response.payload.type
        }
        browserHistory.push('/initial_password');
        this.trigger(this.state)
      }
    });
  },

  // Realiza la petición de cierre de sesion
  Logout: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      data: {email: localStorage.current_user},
      context: this,
      url: SecretConstant.HOST_API+'/logout',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          if(Logout()){
            this.state = {
              message: response.payload.message,
              type: response.payload.type
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
  },

  Register: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/canditate_registration',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }else {
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          this.trigger(this.state)
        }
      },
      error: function(response, xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: response.payload.type
        }
        browserHistory.push('/login');
        this.trigger(this.state)
      }
    });
  },

  GetSecureCode: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/get_security_code',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          browserHistory.push('/login');
          this.trigger(this.state)
        }else {
          this.state = {
            message: response.payload.message,
            type: response.payload.type
          }
          this.trigger(this.state)
        }
      },
      error: function(response, xhr, textStatus){
        this.state = {
          message: response.payload.message,
          type: response.payload.type
        }
        browserHistory.push('/login');
        this.trigger(this.state)
      }
    });
  }

})

// Exporta la clase
export default LoginStore