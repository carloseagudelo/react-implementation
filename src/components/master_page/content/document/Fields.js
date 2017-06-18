import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'
import Field from './Field'

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

  render() {
    if(this.state.fields){
      let fields = this.state.fields.map((field) => {
        return(
          <Field data={field} />
        )
      })

      return (
        <div>       
          {fields}   
        </div>
      )
    }else{
      return(
        <div>LOADING ......</div>
      )
    }
  }
}