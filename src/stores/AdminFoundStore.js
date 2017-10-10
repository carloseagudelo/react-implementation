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
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
  	$.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/load_preselected_users_data', // Parametriza la url a donde ira la peticion
      headers: {authorization: localStorage.jwtToken.split(',')[1]}, // Parametriza la autentificación de la petición
      method: 'GET',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        this.state = {
          message: Constant.LOAD_USERS_SUCESS,
          type: Constant.TYPE_FLASH_MESSAGE_SUCESS
        }
        this.trigger(this.state)
      },
      error: function(textStatus, xhr){
        $(".loader").hide();
        this.state = {
          message: Constant.LOAD_USERS_ERROR,
          ype: Constant.TYPE_FLASH_MESSAGE_ERROR
        }
        this.trigger(this.state)
      }
    });
  },

  // Realiza la peticion para obtener la información de personas registradas en determinado fondo y convocatoria
  GetFundInformation: function(fund_name, convocatory){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/get_values_convocatory',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      data: {"fund_name": fund_name, "role":localStorage.getItem("role"), "convocatory": convocatory},
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
          console.log(response.payload.data[0])
          console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
          this.trigger(response.payload.data[0])
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  DonwnloadExcel2018_1: function(ev){
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
    $.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_admin_plataform',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
        }else {
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  DonwnloadExcel2017_2: function(ev){
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
    $.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_admin_plataform_2017_2',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
        }else {
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  DonwnloadExcel: function(convocatory){
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
    $.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/validate_download_excel',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          $.post(SecretConstant.TECHNOLOGY_API+response.payload.message, {"convocatory": String(convocatory), 'role': localStorage.role}, function(d){
            var new_window = window.open();
            $(new_window.document.body).append(d);
          });
        }else {
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

})

export default AdminFoundStore