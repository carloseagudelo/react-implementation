/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax al servidor backend del aplicativo para 
                 la manipulacion del master page del aplicativo (Menus, submenus, información principal)
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 23 de Junio 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'
// Importa los componentes propios necesarios
import UserAction from '../actions/UserAction'
// Importa las clases necesarias donde se almacenas las contantes del aplicativo
import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

// Define la clase
let UserStore = Reflux.createStore({
  listenables: [UserAction],

  // Realiza la peticion de login al api del aplicativo
  list_registers: function(){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
  	$.ajax({
      crossDomain: true,
      cache: false,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      context: this,
      url: SecretConstant.HOST_API+'/get_historial',
      method: 'GET',
      success: function(response, textStatus, xhr){ 
        $(".loader").hide();
        if(response.status == 200){
          this.trigger(response.payload)
        }else {
          browserHistory.push('/error_page/500')
        }
      },  
      error: function(textStatus, xhr){
        browserHistory.push('/error_page/500')
      }
    });
  }

})

// Exporta la clase
export default UserStore