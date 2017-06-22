import $ from 'jquery'
import Reflux from 'reflux'

import ConfiguratioAction from '../actions/MasterPageAction'

import SecretConstant from '../utils/SecretsConstant'
import Constant from '../utils/Constants'

let ConfigurationStore = Reflux.createStore({
  listenables: [ConfiguratioAction],

  ListFunds: function(data){
    $.ajax({
      crossDomain: true,
      cache: false,
      context: this,
      data: data,
      url: SecretConstant.HOST_API+'/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(xhr.status == 200){
          this.trigger(response)
        }else{
          
        }
      },
      error: function(xhr, textStatus){

      }
    });
  }

})

export default ConfigurationStore