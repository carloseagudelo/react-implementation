/*  Descripcion: Componente que permite la creación de un fondo
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Septiembre 2017
    Fecha de modificacion: Septiembre 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import SelectTag from '../../../SelectTag';

import SecretConstant from '../../../../utils/SecretsConstant'
import {browserHistory } from 'react-router';


// importa los componentes necesarios
// import SelectInputFund from './SelectInputFund'
// import DocumentList from './DocumentList'
// import Loading from '../../../Loading'

export default class History extends React.Component {

  constructor(){
  	super()
  }



  onSubmit(ev){
    ev.preventDefault()

    if($("#element option:selected").text() == "SELECCIONE"){
      swal("INFORMACIÓN INCOMPLETA", "Por favor suministre la información requerida", "warning");
    }else{
      document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
      $.ajax({
        cache: false,
        context: this,
        async: false,
        data: {jwt: localStorage.jwtToken.split(',')[1]},
        url: SecretConstant.TECHNOLOGY_API+'/validate_authentication_from_sisap_api_for_pdf',
        method: 'POST',
        success: function(response, textStatus, xhr){

          console.log(response.payload)
          if(response.status == 400){
            swal("", response.payload.message, "error")
          }

          if(response.status == 200){
            $.post(SecretConstant.TECHNOLOGY_API+response.payload.message, {"user_id": localStorage.getItem("user_id"), 'convocatory': $("#element option:selected").text()  }, function(d){
              var new_window = window.open();
              $(new_window.document.body).append(d);
            });
          }
        },
        error: function(xhr, textStatus){
          browserHistory.push('/error_page/500')
        }
      });
    }

  }


  // Retorna el componente
  render() {
    return(
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>Historial de registros</h3>
          </div>
          <div class="x_content">
            <form  onSubmit={this.onSubmit.bind(this)}>
              <label for="sel1">SELECCIONE CONVOCATORIA</label>
              <SelectTag endPoint="list_convocatories"/>
              <br />
              <button type="submit">Descargar datos de registro en la convocatoria seleccionada</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



