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
// Importa las clases necesarias donde se almacenas las contantes del aplicativo
import SecretConstant from '../../../../utils/SecretsConstant'


export default class ListAviableFunds extends React.Component {

  constructor(){
  	super()
  }

  onSubmitFund(ev){
  	$.ajax({
      cache: false,
      context: this,
      data: {'information' : this.getData()},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_plataform',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'POST',
      success: function(response, textStatus, xhr){
        $(".loader").hide();
        window.open('http://localhost:3001/personals/new')
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
      'user_name': localStorage.user_name,
      'document_type': localStorage.document_type,
      'document_number': localStorage.document_number,
      'secret': localStorage.secret
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