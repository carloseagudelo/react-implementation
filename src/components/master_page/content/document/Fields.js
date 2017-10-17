import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import UploadComponent from './UploadComponent'
import ValidateComponent from './ValidateComponent'
import Loading from '../../../Loading'
import MessageFlash from '../../../MessageFlash'
import Constant from '../../../../utils/Constants'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'fields'))
export default class Fields extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
    if(this.props.data){
      DocumentAction.FetchDocuments(this.props.data)
    }else{
      DocumentAction.FetchDocuments(0)
    }
  }

  sendFinishedHandler(){
    if(this.props.data){
      DocumentAction.FinishValidate(this.props.data)
    }else{
      DocumentAction.FinishLoad()
    }
  }

  render() {    
    if(this.state.fields){
      let fields
      let buttons      
      if(this.state.fields.data.length == 0){
        fields = <center><div class="alert alert-info"><strong>NO TIENE DOCUMENTOS PARA CARGAR</strong></div></center>
      }else{
        if(localStorage.role == Constant.ROLE_BENEFICIARY){
          fields = this.state.fields.data.map((field) => {
            return(
            <UploadComponent data={field} />
            )
          })          
        }else{
          fields = this.state.fields.data.map((field) => {
            return(
              <ValidateComponent data={field} />
            )
          })          
        }  
        buttons = <button class="btn btn-primary pull-right" onClick={this.sendFinishedHandler.bind(this)} >FINALIZAR</button>
      }      
      return (
        <div >
          {fields}
          {buttons}
        </div>
      )
    }else{
      return(
        <Loading />
      )
    }
  }
}