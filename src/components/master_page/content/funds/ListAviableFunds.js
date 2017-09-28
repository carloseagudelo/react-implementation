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
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1], convocatory: '2018-1'},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_plataform',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          document.cookie = "convocatory=2018-1"
          document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
          console.log(response.payload.message)
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
        }else {
          console.log(response)
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

      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>BECAS TECNOLOGIA</h3>
          </div>
          <div class="x_content">
            <button class= "banner-button" onClick={this.onSubmitFund.bind(this)} value="Syncronous request">
	            <img class="banner" src='../../static/img/banner.png' />
            </button>
          </div>
        </div>
      </div>

    )
  }
}