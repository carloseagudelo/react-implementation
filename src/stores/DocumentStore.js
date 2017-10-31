/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax al servidor backend del aplicativo para
                 la manipulación de los documentos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 27 de Julio 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import $ from 'jquery'
import Reflux from 'reflux'
import { browserHistory } from 'react-router'

// Importa los componentes propios necesarios
import DocumentAction from '../actions/DocumentAction'

// Importa las clases necesarias donde se almacenas las contantes del aplicativo
import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

// Define la clase
let FileUpload = Reflux.createStore({
  listenables: [DocumentAction],

  init: function(){

  },

  // Realiza la petición para obtener los documentos por usuario
  FetchDocuments: function(user_id){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
  	if(user_id == 0){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        url: SecretConstant.HOST_API+'/documents/'+localStorage.user_id+'.json',
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
    }else{
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        data: {personal_id: user_id},
        url: SecretConstant.HOST_API+'/documents/'+user_id+'.json',
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
    }
  },

  // Realiza la petición para cargar los archivos en el servidor externo
  SendFile: function(formData){
    
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      //async: false,
      context: this,
      enctype: 'multipart/form-data',
      url: SecretConstant.HOST_API+'/load_file',
      data: formData,
      processData: false,
      contentType: false,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
          setTimeout(function(){ location.reload() }, 2000)                    
        }else if(response.status == 400){
          swal("ERROR", response.payload.message, "error")
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

  // Realiza la petición para validar la información de los documentos cargados
  SendValidate: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: data,
      url: SecretConstant.HOST_API+'/validate_document',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
        }else if(response.status == 400){
          swal("ERROR", response.payload.message, "error")
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

  // Realiza la petición para obtener los usuarios que ya finalizaron la carga de documentos
  ListUsersFinished: function(page){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: {page: page},
      url: SecretConstant.HOST_API+'/list_users_finished',
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
  },

  // Realiza la petición para obtener los usuarios que aún tienen pendiente la carga de documentos
  ListUsersPending: function(page){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: {page: page},
      url: SecretConstant.HOST_API+'/list_users_pending',
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
  },


  // Realiza la petición para registrar un nuevo documento
  SaveDocument: function(data){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: data,
      url: SecretConstant.HOST_API+'/save_document',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
          browserHistory.push('/list_documents');
        }else if(response.status == 400){
          swal("ERROR", response.payload.message, "error")
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

  // Realiza la petición para marcar al usuario que todos sus usuarios fueron validados
  FinishValidate: function(personal_id){
    $("body").append( "<img class='loader' src='/static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/fisished_validate/'+personal_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
          browserHistory.push('/documents')
        }else if(response.status == 400){
          swal("ERROR", response.payload.message, "error")
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

  // Realiza la petición para marcar al sistema que ya todos los documentos fueron cargados
  FinishLoad: function(){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/fisished_upload/'+localStorage.user_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          swal("HECHO", response.payload.message, "success")
          setTimeout(function(){ location.reload() }, 2000)
        }else if(response.status == 200){
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

  ListDocumentsByFund: function(convocatory_id){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: {convocatory_id: convocatory_id},
      url: SecretConstant.HOST_API+'/documents_by_user_convocatory',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          this.trigger(response.payload)
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

  GetFile: function(id, doc_name){
    $("body").append( "<img class='loader' src='../static/img/loader.gif'>" );
    window.open('http://181.143.72.70:11000/get_pdf/' + doc_name.replace(".pdf", "") + '/'+id+'.json')
    $(".loader").hide();
  }
})

// Exporta la clase
export default FileUpload

