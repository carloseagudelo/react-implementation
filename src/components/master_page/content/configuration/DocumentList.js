import $ from 'jquery'
import React from 'react';

export default class SelectInputFund extends React.Component {

  constructor(){
  	super()
  }

  setChecked(){
    if(this.props.data){    
      this.props.data.forEach( function(element, index) {
        if(element.checked){
          $('#'+String(element.id)).prop('checked', true)
        }else{
          $('#'+String(element.id)).prop('checked', false)
        }
      });
    }    
  }

  render() {
    if(this.props.data){
      let documents = this.props.data.map((document) => {
        return(
          <a href="#" class="list-group-item">{document.name}<input type="checkbox" class="pull-right" id={document.id}/></a>
        )
      })   
      this.setChecked() 
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
