/*  Descripcion: Componente que permite descargar los
    Autor: Sebastián Delgado
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: 12 de Septiembre 2017 */

// importa las librerias externas necesarias
import React from 'react';


// importa las clases propias
import SecretConstant from '../../../../utils/SecretsConstant'

export default class Report extends React.Component {

  constructor(){
  	super()
  }

  onSubmitFund(ev){
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
  	$.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_admin_plataform',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          console.log(response.payload.message)
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
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

  // Retorna el componente
  render() {
    if(localStorage.role == "adminTechnology" ){ // Valida si la vista es para un usuario con rol administrador de  technology fondo
      return (
        <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>DESCARGA DE RESULTADOS</h3>
          </div>
          <div class="x_content">
            <button onClick={this.onSubmitFund.bind(this)}>
              Descargar resultados 2018-1
            </button>
          </div>
        </div>
      </div>

      )
    }
  }
}