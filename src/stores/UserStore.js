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
  },

  GetPDF: function(convocatory, app, user_id){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
    document.cookie = "user_id="+localStorage.user_id;

    $.ajax({
      cache: false,
      context: this,
      data: {jwt: localStorage.jwtToken.split(',')[1], convocatory: convocatory, user_id: user_id},
      url: this.SelectApp(app) +'/validate_download_pdf',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          $(".loader").hide();
          window.open(this.SelectApp(app)+response.payload.message)
        }else{
          $(".loader").hide();
          swal("", response.payload.message, "error")
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  SelectApp: function(app){
    var api
    switch(app){
      case 'technology_form':
        api = SecretConstant.TECHNOLOGY_API
        break;
      default:
        api = SecretConstant.PP_API
    }
    return api
  },

  GetAdminToken: function(app){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );

    $.ajax({
      cache: false,
      context: this,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      url: this.SelectApp(app) +'/get_jwt',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          $(".loader").hide();
          return response.payload.message
        }else{
          $(".loader").hide();
          swal("", response.payload.message, "error")
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  DropRegister: function(convocatory){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    let url
    switch(app){
      case 'technology_form':
        url = SecretConstant.TECHNOLOGY_API
        break;
      default:
        url = SecretConstant.PP_API
    }
    $.ajax({
      cache: false,
      context: this,
      data: {"user_id": localStorage.getItem("user_id"), 'convocatory': convocatory},
      url: url+'/delete_register',
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
         swal("", response.payload.message, "success")
        }else{
          swal("", response.payload.message, "error")
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  },

  ShowConvocatory: function(convocatory, app){


    if(localStorage.getItem("role").indexOf('admin') >= 0){
      $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
      document.cookie = "jwt="+ this.GetAdminToken.auth_token;
      document.cookie = "convocatory="+convocatory;
      $.ajax({
        cache: false,
        context: this,
        async: false,
        data: {jwt:  this.GetAdminToken.auth_token, convocatory: convocatory},
        url: this.SelectApp(app) +'/authentificate_plataform',
        method: 'POST',
        success: function(response, textStatus, xhr){
          $(".loader").hide();
          if(response.status == 200){
            switch(app){
              case 'technology_form':
                window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
                break;
              default:
                window.open(SecretConstant.PP_API+response.payload.message)
            }
          }
        },
        error: function(xhr, textStatus){
          browserHistory.push('/error_page/500')
        }
      });
    }else{
      $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
      document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
      document.cookie = "convocatory="+convocatory;
      $.ajax({
        cache: false,
        context: this,
        async: false,
        data: {jwt: localStorage.jwtToken.split(',')[1], convocatory: convocatory},
        url: this.SelectApp(app) +'/authentificate_plataform',
        method: 'POST',
        success: function(response, textStatus, xhr){
          $(".loader").hide();
          if(response.status == 200){
            switch(app){
              case 'technology_form':
                window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
                break;
              default:
                window.open(SecretConstant.PP_API+response.payload.message)
            }
          }
        },
        error: function(xhr, textStatus){
          browserHistory.push('/error_page/500')
        }
      });
    }
  }

})

// Exporta la clase
export default UserStore