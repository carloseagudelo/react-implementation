/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax al servidor backend del aplicativo para
                 la parametrización de los fondos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 27 de Julio 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'

// Importa los componentes propios necesarios
import ConfigurationAction from '../actions/ConfigurationAction'

// Importa las clases necesarias donde se almacenas las contantes del aplicativo
import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

// Define la clase
let ConfigurationStore = Reflux.createStore({
  listenables: [ConfigurationAction],

  // Realiza la petición con la lista de los fondos
  ListFunds: function(){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          return {funds: response.payload.data}
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Realiza la petición con la lista de los usuarios por determinado fondo
  ListDocumentsWithFund: function(fund_id){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/documets_with_found/'+fund_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.trigger(response.payload)
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Realiza la petición para guardar o actualizar los documentos solicitados por fondos
  SaveDocumentsFund: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/save_delete_document_by_found',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: data,
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Realiza la petición para obtener los usuarios con validador
  UsersWithValidators: function(page){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    if(page == 0){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        url: SecretConstant.HOST_API+'/user_with_validator',
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'POST',
        success: function(response, textStatus, xhr){
          $(".loader").hide();
          if(response.status == 200){
            this.trigger(response.payload)
          }else{
            browserHistory.push('/error_page/500')
          }
        },
        error: function(xhr, textStatus){
          $(".loader").hide();
          browserHistory.push('/error_page/500')
        }
      });
    }else{
      $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/user_with_validator',
      data: {page: page},
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.trigger(response.payload)
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
    }

  },

  // Realiza la petición para actualizar los validadores de un beneficiario
  SendUpdateValidators(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/set_validators',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: data,
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
        }else if(response.status == 400){
          swal("ERROR", response.payload.message, "error")
        }else {
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Realiza la petición para guardar una restricción a convocatoria
  SaveRestriction: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/save_restriction',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: data,
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Realiza la petición para guardar una convocatoria
  SaveConvocatory: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/save_convocatories',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: data,
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  },

  // Metodo que obtiene la lista de convocatorias
  ListConvocatories(){
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_convocatories',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          this.trigger("response.payload")
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

})

export default ConfigurationStore