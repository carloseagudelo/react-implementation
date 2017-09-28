/*  Descripcion: Componente que permite la creación de un fondo
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Septiembre 2017
    Fecha de modificacion: Septiembre 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';

import SecretConstant from '../../../../utils/SecretsConstant'
import {browserHistory } from 'react-router';


// importa los componentes necesarios
// import SelectInputFund from './SelectInputFund'
// import DocumentList from './DocumentList'
// import Loading from '../../../Loading'

export default class GetPDF
 extends React.Component {

  constructor(){
  	super()
  }

  onSubmit(ev){
    ev.preventDefault()
    $.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/validate_download_pdf',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          document.cookie = "convocatory="+this.props.convocatory;
          $.post(SecretConstant.TECHNOLOGY_API+response.payload.message, {"user_id": localStorage.getItem("user_id"), 'convocatory': this.props.convocatory}, function(d){
            var new_window = window.open();
            $(new_window.document.body).append(d);
          });
        }else{
           swal("", response.payload.message, "error")
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }


  // Retorna el componente
  render() {
    return(
      <th onClick={this.onSubmit.bind(this)}> <button class="btn btn-default">VER</button></th>
    );
  }
}





