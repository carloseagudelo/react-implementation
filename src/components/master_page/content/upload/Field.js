import React from 'react';

export default class Field extends React.Component {

  constructor(){
  	super()
  }

  onSubmitSend(ev){
    ev.preventDefault()
  }

  render() {
    return(
      <div>
        <form >
          <label class="control-label">{this.props.data.document_name}</label>
          <input type="file" id={this.props.data.document_id} class="file" />
          <label>VALIDACION UNO: <input type="checkbox" /></label>
          <label>VALIDACION DOS: <input type="checkbox" /></label>
          <label>OBSERVACIONES: <input type="text" /><br /></label>
          <input type="submit" value="ENVIAR" /> 
        </form>
      </div>      
    )
  }
}