/*  Descripcion: Clase de tipo Store que contiene los llamados Ajax al servidor backend del aplicativo para 
                 la parametrización de los fondos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 23 de Junio 2017 */
    
// Importa las librerias externas necesarias para el manejo de la arquitectura
import $ from 'jquery'
import Reflux from 'reflux'
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
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        return {funds: response}
      },
      error: function(xhr, textStatus){
        
      }
    });
  },

  // Realiza la petición con la lista de los usuarios por determinado fondo
  ListDocumentsWithFund: function(fund_id){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/documets_with_found/'+fund_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response.payload)
      },
      error: function(xhr, textStatus){
        
      }
    });
  },

  // Realiza la petición para guardar o actualizar los documentos solicitados por fondos
  SaveDocumentsFund: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/save_delete_document_by_found',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: data,
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          alert('INFORMACIÓN GUARDADA')
        }else{
          alert('INFORMACIÓN NO GUARDADA')
        }
      },
      error: function(xhr, textStatus){
        
      }
    });
  },

  // Realiza la petición para obtener los usuarios con validador
  UsersWithValidators: function(page){
    if(page == 0){
      $.ajax({
        crossDomain: true,
        cache: false,
        context: this,
        url: SecretConstant.HOST_API+'/user_with_validator',
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'POST',
        success: function(response, textStatus, xhr){
          if(response.status == 200){
            this.trigger(response.payload)
          }else{
            
          }          
        },
        error: function(xhr, textStatus){
          
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
        if(response.status == 200){
          this.trigger(response.payload)
        }else{
          
        } 
      },
      error: function(xhr, textStatus){
        
      }
    });
    }
    
  },

  // Realiza la petición para actualizar los validadores de un beneficiario
  SendUpdateValidators(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/set_validators',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      data: data,
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          alert('CAMBIO REALIZADO')
        }
      },
      error: function(xhr, textStatus){
        
      }
    });
  }

})

export default ConfigurationStore