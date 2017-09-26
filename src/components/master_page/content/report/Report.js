/*  Descripcion: Componente que permite descargar los
    Autor: Sebastián Delgado
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: 12 de Septiembre 2017 */

// importa las librerias externas necesarias
import React from 'react';


// importa las clases propias
import SecretConstant from '../../../../utils/SecretsConstant'
import {browserHistory } from 'react-router';
import SelectTag from '../../../SelectTag';
import $ from 'jquery'

export default class Report extends React.Component {
  constructor(){
  	super()
  }

    // Metodo propia de react que carga la información al componente antes de que este sea montado
    componentWillMount(){
      this.getData()
    }

    changeData(){
      var url = SecretConstant.HOST_API+'/get_values_convocatory';
      $.ajax({
        crossDomain: true,
        async: false,
        cache: false,
        context: this,
        url: url ,
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'POST',
        data: {"convocatory_name":localStorage.getItem("role"), "convocatory":$("#element option:selected").text()},
        success: function(response, textStatus, xhr){
          if(response.status == 200){
            this.setState(response.payload.data)
          }else{
            browserHistory.push('/error_page/500')
          }
        },
        error: function(xhr, textStatus){
          browserHistory.push('/error_page/500')
        }
      });
    }

    // Metodo que obtiene la informacion de los fondos
    getData(){
      var url = SecretConstant.HOST_API+'/get_values_convocatory';

      $.ajax({
        crossDomain: true,
        async: false,
        cache: false,
        context: this,
        url: url ,
        headers: {authorization: localStorage.jwtToken.split(',')[1]},
        method: 'POST',
        data: {"convocatory_name":localStorage.getItem("role"), "convocatory":"2018-1"},
        success: function(response, textStatus, xhr){
          if(response.status == 200){
            this.setState(response.payload.data)
          }else{
            browserHistory.push('/error_page/500')
          }
        },
        error: function(xhr, textStatus){
          browserHistory.push('/error_page/500')
        }
      });
    }

  donwnload2018_1(ev){
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
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
        }else {

        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }


  donwnload2017_2(ev){
    document.cookie = "jwt="+localStorage.jwtToken.split(',')[1];
  	$.ajax({
      cache: false,
      context: this,
      async: false,
      data: {jwt: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.TECHNOLOGY_API+'/authentificate_admin_plataform_2017_2',
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          window.open(SecretConstant.TECHNOLOGY_API+response.payload.message)
        }else {

        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

  // Retorna el componente
  render() {

    let statistics = this.state[0]
    if(localStorage.role == "adminTechnology" ){ // Valida si la vista es para un usuario con rol administrador de  technology fondo
      return (
        <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>INFORMACIÓN BECAS-TECNOLOGÍA</h3>
          </div>

          <center>
            <br/>
            <label for="sel1">SELECCIONE CONVOCATORIA</label>
            <SelectTag endPoint="list_convocatories" onChange={this.changeData.bind(this)}/>
          </center>

          <div class="x_content info-table">
            <table class="table">
              <tr>
                <th><h4 class="centered-table"><b>TOTAL DE REGISTROS</b></h4></th>
                <th><h4 class="centered-table"><b>FINALIZADOS</b></h4></th>
                <th><h4 class="centered-table"><b>PENDIENTES</b></h4></th>
              </tr>

              <tr>
                <th><h4 class="centered-table">{statistics.total}</h4></th>
                <th><h4 class="centered-table">{statistics.finished}</h4></th>
                <th><h4 class="centered-table">{statistics.pending}</h4></th>
              </tr>
            </table>
          </div>
          { $("#element option:selected").text() == "2017-2" ?
            <button class="btn btn-primary pull-right" onClick={this.donwnload2017_2.bind(this)}>
              DESCARGAR REGISTROS 2017-2
            </button>
             :
            <button class="btn btn-primary pull-right" onClick={this.donwnload2018_1.bind(this)} >
              DESCARGAR REGISTROS 2018-1
            </button>
          }


        </div>
      </div>

      )
    }
  } //hacer else ifs para los otro roles :)
}