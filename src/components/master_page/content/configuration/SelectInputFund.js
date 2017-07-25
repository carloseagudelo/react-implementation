import React from 'react'
import { browserHistory } from 'react-router'

import ConfigurationAction from '../../../../actions/ConfigurationAction'

import SecretsConstant from '../../../../utils/SecretsConstant'

export default class SelectInputFund extends React.Component {

  constructor(){
  	super()    
  }

  componentWillMount(){
    this.listFunds()
  }

  listFunds(){
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretsConstant.HOST_API+'/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          this.setState({funds: response.payload})
        }else{
          browserHistory.push('/error_page/500')
        }        
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

  render() {
    if(this.state.funds){
      let funds = this.state.funds.data.map((fund) => {
        return(
          <option value={fund.id}>{fund.name}</option>
        )
      })    
      return (
        <div class="form-group">
          <label for="sel1">SELECCIONE EL FONDO</label>
          <select class="form-control" id="fund" onChange={this.props.onChange}>
            <option value="0">SELECCIONE UN FONDO</option>
            {funds}
          </select> 
        </div>
      )
    }else{
      return(
        <div>LOADING ......</div>
      )
    }
  }
}