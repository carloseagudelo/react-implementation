import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import UploadComponent from './UploadComponent'
import ValidateComponent from './ValidateComponent'
import Loading from '../../../Loading'

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
      let fields;
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
      return (
        <div >
          {fields}
          <button class="btn btn-primary pull-right" onClick={this.sendFinishedHandler.bind(this)} >FINALIZAR</button>
        </div>
      )
    }else{
      return(
        <Loading />
      )
    }
  }
}