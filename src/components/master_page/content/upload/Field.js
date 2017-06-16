import React from 'react'

import FileUploadAction from '../../../../actions/FileUploadAction'

export default class Field extends React.Component {

  constructor(){
  	super()
  }

  onSubmitSend(ev){
    ev.preventDefault()
    let form_data = $(ev.target).serializeArray()
    console.log()
    alert('valor:  ' + form_data[1].name)
    let data = getParams(form_data[1].name)
    FileUploadAction.SendFile(data)
  }  

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitSend.bind(this)} id={this.props.data.id}>
          <label class="control-label">{this.props.data.document_name}:
            <input type="file" name="file" id={this.props.data.document_id} class="file" />
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
          <input type="hidden" name={this.props.data.id} />
          <input type="submit" value="ENVIAR" /> 
        </form>
      </div>      
    )
  }
}

function getParams(idform) {
  alert(idform)
  var elements = document.getElementById(idform).elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
    var item = elements.item(i);
    obj[item.name] = item.value;
  }
  obj.document_id = idform;
  console.log('ZZZZZZZZZZZZZZZ')
  console.log(obj)
  console.log('ZZZZZZZZZZZZZZZ')
  return obj
}