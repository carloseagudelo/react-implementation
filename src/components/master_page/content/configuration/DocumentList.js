import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'documents'))
export default class SelectInputFund extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    ConfigurationAction.ListDocumentsWithFund(this.props.data)
  }

  render() {
    if(this.state.documents){
      let documents = this.state.documents.map((document) => {
        return(
          <a href="#" class="list-group-item">{document.name}<input type="checkbox" class="pull-right" id={document.id} /></a>
        )
      })    
      return (
        <div class="form-group">          
          <div class="list-group">
            <a href="#" class="list-group-item active">SELECCIONE LOS DOCUMENTOS POR FONDO</a>
            {documents}
          </div>
        </div>
      )
    }else{
      return(
        <div>LOADING ......</div>
      )
    }
  }
}
