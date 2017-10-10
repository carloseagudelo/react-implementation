/*  Descripcion: Componente que permite descargar los
    Autor: Sebastián Delgado
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: 03 de Octubre de 2017 */

// importa las librerias externas necesarias
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { browserHistory } from 'react-router'

// importa las clases propias
import AdminFoundAction from '../../../../actions/AdminFoundAction'
import AdminFoundStore from '../../../../stores/AdminFoundStore'

import SecretConstant from '../../../../utils/SecretsConstant'
import SelectTag from '../../../SelectTag';

@ReactMixin.decorate(Reflux.connect(AdminFoundStore, 'records'))
export default class GeneralAdminReport extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    AdminFoundAction.GetFundInformation('', '')
  }

  changeData(ev){
    if(localStorage.role == 'admin'){
      ev.preventDefault()
      AdminFoundAction.GetFundInformation($("#element option:selected").text(), $("#second-element option:selected").text())
    }else{
      ev.preventDefault()
      AdminFoundAction.GetFundInformation('', $("#second-element option:selected").text())
    }
  }

  donwnloadExcel(ev){
    ev.preventDefault()
    AdminFoundAction.DonwnloadExcel($("#second-element option:selected").text())
  }

  // Retorna el componente
  render() {
    if(this.state.records){
      let search
      if(localStorage.role == 'admin'){
        search = <center>
                  <label for="sel1">SELECCIONE FONDO</label>
                  <SelectTag onChange={ this.changeData.bind(this) } endPoint="list_funds"/>
                  <label for="sel1">SELECCIONE CONVOCATORIA</label>
                  <SelectTag element_number={"second-element"} onChange={this.changeData.bind(this)} endPoint="list_convocatories" />
                  <br />
                 </center>
      }else{
        search = <center>
                  <label for="sel1">SELECCIONE CONVOCATORIA</label>
                  <SelectTag element_number={"second-element"} endPoint="list_convocatories" onChange={this.changeData.bind(this)}/>
                 </center>
      }

      return (
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>INFORMACIÓN GENERAL</h3>
            </div>

            {search}

            <div class="x_content info-table">
              <table class="table">
                <tr>
                  <th><h4 class="centered-table"><b>TOTAL DE REGISTROS</b></h4></th>
                  <th><h4 class="centered-table"><b>FINALIZADOS</b></h4></th>
                  <th><h4 class="centered-table"><b>PENDIENTES</b></h4></th>
                </tr>

                <tr>
                  <th><h4 class="centered-table">{this.state.records.total}</h4></th>
                  <th><h4 class="centered-table">{this.state.records.finished}</h4></th>
                  <th><h4 class="centered-table">{this.state.records.pending}</h4></th>
                </tr>
              </table>
            </div>

            <button class="btn btn-primary pull-right" onClick={this.donwnloadExcel.bind(this)}>
              DESCARGAR REGISTROS
            </button>
          </div>
        </div>
      )
    }else{
      return (
        <div>hola</div>
      )
    }
  }
}