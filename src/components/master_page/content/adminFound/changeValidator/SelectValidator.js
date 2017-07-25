import React from 'react'
import { browserHistory } from 'react-router'


import SecretsConstant from '../../../../../utils/SecretsConstant'

export default class SelectValidator extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    this.listValidators()
  }

  listValidators(){
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretsConstant.HOST_API+'/validators_by_fund',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          this.setState({validators: response.payload.data})
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
    if(this.state.validators){
      let validators = this.state.validators.map((validator) => {
        if(this.props.data == validator.id){
          return(
            <option value={validator.id} selected>{validator.name}</option>
          )
        }else{
          return(
            <option value={validator.id}>{validator.name}</option>
          )
        }        
      })
      return (
        <div class="form-group">
          <select class="form-control" name={this.props.name} onChange={this.props.onChange}>
            {validators}
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