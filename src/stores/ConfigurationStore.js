import $ from 'jquery'
import Reflux from 'reflux'

import ConfigurationAction from '../actions/ConfigurationAction'

import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

let ConfigurationStore = Reflux.createStore({
  listenables: [ConfigurationAction],

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

  ListDocumentsWithFund: function(fund_id){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/documets_with_found/'+fund_id+'.json',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){
        
      }
    });
  },

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

  UsersWithValidators: function(){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/validators_by_fund',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
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
  }

  UsersWithValidators: function(){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/user_with_validators',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        this.trigger(response)
      },
      error: function(xhr, textStatus){
        
      }
    });
  }

})

export default ConfigurationStore