import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'funds'))
export default class SelectInputFund extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    ConfigurationAction.ListFunds()
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
          <select class="form-control" id="fund">
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
