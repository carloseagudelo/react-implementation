/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax al servidor backend del aplicativo para 
                 la manipulación de los documentos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 23 de Junio 2017 */

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
  	if(user_id == 0){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        url: SecretConstant.HOST_API+'/documents/'+localStorage.user_id+'.json',
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'GET',
        success: function(response, textStatus, xhr){
          this.trigger(response)                   
        },
        error: function(xhr, textStatus){

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
          this.trigger(response)
        },
        error: function(xhr, textStatus){

        }
      });
    }
  },

  // Realiza la petición para cargar los archivos en el servidor externo
  SendFile: function(formData){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      enctype: 'multipart/form-data',
      url: SecretConstant.HOST_API+'/load_file',
      data: formData,
      processData: false,
      contentType: false,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        alert(response.message)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  // Realiza la petición para validar la información de los documentos cargados
  SendValidate: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: data,
      url: SecretConstant.HOST_API+'/validate_document',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          alert(Constant.DOCUMENT_VALIDATED)
        }else{
          alert(Constant.DOCUMENT_NO_VALIDATED)
        }
      },
      error: function(xhr, textStatus){

      }
    });
  },

  // Realiza la petición para obtener los usuarios que ya finalizaron la carga de documentos
  ListUsersFinished: function(){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_users_finished',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  // Realiza la petición para obtener los usuarios que aún tienen pendiente la carga de documentos
  ListUsersPending: function(){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_users_pending',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  // Realiza la petición para obtener los documentos registrados
  ListDocuments: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_documents',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){

      }
    });
  },

  // Realiza la petición para registrar un nuevo documento
  SaveDocument: function(data){
    if(data.name != '' || data.description != ''){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        data: data,
        url: SecretConstant.HOST_API+'/save_document',
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'POST',
        success: function(response, textStatus, xhr){
          if(response.status == 200){            
            browserHistory.push('/list_documents');            
          }else{

          }          
        },
        error: function(xhr, textStatus){

        }
      });
    }else{
      this.state = {
        type: Constant.TYPE_FLASH_MESSAGE_ERROR,
        message: Constant.VALIDATION_FIELDS_ERROR
      }
      this.trigger(this.state)
    }
  },

  // Realiza la petición para marcar al usuario que todos sus usuarios fueron validados
  FinishValidate: function(personal_id){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/fisished_validate/'+personal_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          alert('Validación finalizada')                  
        }else {
          alert('Validación no finalizada')
        }
      },
      error: function(xhr, textStatus){

      }
    });
  },

  // Realiza la petición para marcar al sistema que ya todos los documentos fueron cargados
  FinishLoad: function(){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/fisished_upload/'+localStorage.user_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          alert('carga de archivos finalizada')
        }else {
          alert('carga de archivos no finalizada')
        }                  
      },
      error: function(xhr, textStatus){

      }
    });
  }

})

// Exporta la clase
export default FileUpload

