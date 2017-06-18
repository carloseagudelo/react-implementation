import React from 'react'

import FileUploadAction from '../../../../actions/FileUploadAction'

export default class Field extends React.Component {

  constructor(){
  	super()
  }

  onSubmitSend(ev){
    ev.preventDefault()
    let form_data = $(ev.target).serializeArray()
    alert('valor del id del form:  ' + form_data[1].value)
    let data = getParams(form_data[1].value)
    FileUploadAction.SendFile(data)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitSend.bind(this)} id={this.props.data.id} enctype="multipart/form-data">
          <label class="control-label">{this.props.data.document_name}:
            <input type="file" name={"s" + this.props.data.id} class="file" />
          </label>
          <label>VALIDACIÓN UNO:
            <input type="checkbox" name="pre_validation" checked={this.props.data.pre_validation} />
          </label>
          <label>VALIDACIÓN DOS:
            <input type="checkbox" name="pre_validation" checked={this.props.data.final_validation} name="final_validation" />
          </label>
          <label>OBSERVACIONES:
            <input type="text" name="observation" id={this.props.data.document_id} value={this.props.data.observation} />
          </label>
          <input type="hidden" name="document_id" value={this.props.data.id} />
          <input type="submit" value="ENVIAR" />
        </form>
      </div>
    )
  }
}

function getParams(idform) {
  var elements = document.getElementById(idform).elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
    var item = elements.item(i);
    obj[item.name] = item.value;
  }
  return obj

}