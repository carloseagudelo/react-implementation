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
      cache: false,
      context: this,
      url: SecretConstant.HOST_API+'/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.trigger(response)
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
  }

})

export default ConfigurationStore