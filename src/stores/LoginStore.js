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
    $.ajax({
      crossDomain: true,
      cache: false,
      data: data,
      context: this,
      url: SecretConstant.HOST_API+'/users?email=' + data.email + '&password=' + data.password,      
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response[0].id){
          localStorage.setItem('id', response[0].id);
          localStorage.setItem('session', 'authorized');
          browserHistory.push('/home');
        }else{
          swal("ERROR", 'USUARIO O CONTRASEÑA INVALIDOS EN PLATAFORMA', "error")
        }
      },
      error: function(response, xhr, textStatus){
        alert('aca')
        swal("ERROR", 'USUARIO O CONTRASEÑA INVALIDOS EN PLATAFORMA', "error")
      }
    });
  },

  // Realiza la petición de cierre de sesion
  Logout: function(data){
    localStorage.clear();
    browserHistory.push('/login');
  }


})

// Exporta la clase
export default LoginStore