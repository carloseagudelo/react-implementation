import React from 'react'
import bfl from 'bootstrap-fileinput-npm'

export default class UploadInput extends React.Component {

  constructor(){
  	super()
  }

  OnChangeField(){
    var inputFiles = $("#"+"file-" + this.props.data.id).get(0).files
    var label = $("#"+"file-" + this.props.data.id).parent().find('span');

    if(typeof(inputFiles) !='undefined'){ // fucking IE
      if(inputFiles.length == 0){
        label.removeClass('withFile').html('<i class="fa fa-upload" aria-hidden="true"></i> Seleccione un documento');
      }
      else{
        var file = inputFiles[0];
        var name = file.name;
        var size = (file.size / 1048576).toFixed(3); //size in mb
        label.addClass('withFile').text(name.slice(0,35)+'...' + ' (' + size + 'mb)');
      }
    }
    else{
      var name = $(".file").val().split("\\");
      label.addClass('withFile').text(name[name.length-1]);
    }
    return false;
  }

  render() {
    if(this.props.data.pre_validation) {
      return(
        <label class='__lk-fileInput'>
          <span class="file-span" data-default='Seleccione un documento'><i class="fa fa-check" aria-hidden="true"></i> DOCUMENTO VALIDADO</span>
        </label>
      )
    }else{
      return(
        <label class='__lk-fileInput'>
          <span class="file-span" data-default='Seleccione un documento'><i class="fa fa-upload" aria-hidden="true"></i> SELECIONE UN DOCUMENTO</span>
          <input type="file" id={"file-" + this.props.data.id.toString()} name={"s" + this.props.data.id} class="file" accept="application/pdf" onChange={this.OnChangeField.bind(this)}/>
        </label>
      )
    }
  }
}