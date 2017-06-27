import React from 'react';

export default class SelectValidator extends React.Component {

  constructor(){
  	super()
  }

  listFunds(){
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: 'http://localhost:3000/validators_by_fund',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        this.setState({validators: response})
      },
      error: function(xhr, textStatus){
        
      }
    });
  }

  render() {
    return(
      if(this.state.validators){
	      let validators = this.state.validators.map((validator) => {
	        return(
	          <option value={validator.id}>{validator.name}</option>
	        )
	      })    
	      return (
	        <div class="form-group">
	          <label for="sel1">SELECCIONE EL VALIDADOR</label>
	          <select class="form-control" id="fund" onChange={this.props.onChange}>
	            <option value="0">SELECCIONE EL VALIDADOR</option>
	            {validators}
	          </select> 
	        </div>
	      )
	    }else{
	      return(
	        <div>LOADING ......</div>
	      )
	    }
    )
  }
}