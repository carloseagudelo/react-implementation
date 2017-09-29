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

export default class VisitConvocatory
 extends React.Component {

  constructor(){
  	super()
  }

  onSubmit(ev){
  	$.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1], convocatory: this.props.convocatory},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_plataform',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
          document.cookie = "convocatory="+this.props.convocatory;
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
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
      <th onClick={this.onSubmit.bind(this)}><i class="fa fa-eye" aria-hidden="true" alt="VISUALIZAR EL FORMULARIO"></i></th>
    );
  }
}





