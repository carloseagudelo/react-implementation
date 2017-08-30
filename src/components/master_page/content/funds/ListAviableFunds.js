/*  Descripcion: Componente que lista los fondos avilitados para la convocatoria
    Autor: Carlos Enrique Agudelo
    Contacto: carlos.agudelo@hotmail.es
    Fecha de creación: 30 de Agosto 2017
    Fecha de modificacion: 30 de Agosto 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

export default class ListAviableFunds extends React.Component {

  constructor(){
  	super()
  }

  onSubmitFund(ev){
  	$.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      data: this.getData()
      url: SecretConstant.HOST_API+'/autenticate_platform',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        if(response.status == 200){
          window.open('localhost:3001/personals/new')
        }else{
         swalt('Ni mierda')
        }
      },
      error: function(xhr, textStatus){
        $(".loader").hide();
        browserHistory.push('/error_page/500')
      }
    });
  }

  getData(){
    var obj = {
      'user_id': localStorage.user_id,
      'email': localStorage.current_user, 
      'jwt': localStorage.jwtToken.split(',')[1],
      'user_name': 'CARLOS ENRIQUE AGUDELO GIRALDO',
      'document_type': 'TI',
      'document_number': '12345678'
    }
    return obj;
  }

  // Retorna el componente
  render() {
    return(
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>BECAS TECNOLOGIA</h3>
          </div>
          <div class="x_content">
            <button class="btn btn-primary pull-right" onClick={this.onSubmitFund.bind(this)} target="_blank">INSCRIBIRME</button>
          </div>
        </div>
      </div>
    )
  }
}