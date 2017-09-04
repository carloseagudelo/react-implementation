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
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
    //window.open('http://localhost:3001/personals/new')
    //window.open('http://localhost:3001/personals/2/edit')
  	$.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_plataform',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          console.log(response.payload.message)
          window.open('http://192.168.1.12:3500'+response.payload.message)
        }else {
          alert('NI VERGA')
          console.log(response)
        }        
      },
      error: function(xhr, textStatus){
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
            <button class="btn btn-primary pull-right" onClick={this.onSubmitFund.bind(this)} value="Syncronous request">INSCRIBIRME</button>
          </div>
        </div>
      </div>
    )
  }
}