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
import SelectFund from '../utils/selectFund'

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

  // Realiza la peticion para obtener el archivo en excel de la convocatoria que ingresa como parametro
  DonwnloadExcel: function(convocatory){
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
    let url
    if (SelectFund == "BECAS TECNOLOGIA"){
      url = SecretConstant.TECHNOLOGY_API
    }else {
      url = SecretConstant.PP_API
    }

    $.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1], convocatory: convocatory},
      url: url+'/validate_download_excel',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          window.open(url+response.payload.message)
        }else {
          swal("ERROR", response.payload.message, "error")
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Realiza la busqueda de datos de usuario por tab del panel de administracion
  listUserRecords: function(list_type, convocatory){
    $.ajax({
      cache: false,
      context: this,
      async: true,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: {convocatory: convocatory, query_type: list_type},
      url: SecretConstant.HOST_API+'/list_candidate_records',
      method: 'POST',
      success: function(response, textStatus, xhr){

        this.trigger(response)
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

})

export default AdminFoundStore