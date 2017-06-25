import React from 'react';

import ConfigurationAction from '../../../../actions/ConfigurationAction'

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
      url: 'http://localhost:3000/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.setState({funds: response})
      },
      error: function(xhr, textStatus){
        
      }
    });
  }

  render() {
    if(this.state.funds){
      let funds = this.state.funds.map((fund) => {
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