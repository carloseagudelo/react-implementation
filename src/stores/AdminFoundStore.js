/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax que relacionan las funcionalidades del
                  del administrador del admin al servidor backend del aplicativo
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 23 de Junio 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'
// Importa los componentes propios necesarios
import AdminFoundAction from '../actions/AdminFoundAction'
// Importa las clases necesarias donde se almacenas las contantes del aplicativo
import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

// Define la clase
let AdminFoundStore = Reflux.createStore({
  listenables: [AdminFoundAction],

  // Realiza la peticion para obtener las lista de usuarios preseleccionados
  LoadData: function(){
  	$.ajax({
      crossDomain: true,
      cache: false,      
      context: this,
      url: SecretConstant.HOST_API+'/load_preselected_users_data', // Parametriza la url a donde ira la peticion
      headers: {authorization: localStorage.jwtToken.split(',')[1]}, // Parametriza la autentificación de la petición
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