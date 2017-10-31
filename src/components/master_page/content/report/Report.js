/*  Descripcion: Componente que permite descargar los
    Autor: Sebastián Delgado
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: 12 de Septiembre 2017 */

// importa las librerias externas necesarias
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

// importa las clases propias
import AdminFoundAction from '../../../../actions/AdminFoundAction'
import AdminFoundActionStore from '../../../../stores/AdminFoundStore'
import SelectFund from '../../../../utils/selectFund'

import SelectTag from '../../../SelectTag';

@ReactMixin.decorate(Reflux.connect(AdminFoundActionStore, 'records'))
export default class Report extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    AdminFoundAction.GetFundInformation(SelectFund , '2018-1')
  }

  changeData(ev){
    ev.preventDefault()
    AdminFoundAction.GetFundInformation(SelectFund, $("#element option:selected").text())
  }

  downLoadExcel(ev){
    ev.preventDefault()
    AdminFoundAction.DonwnloadExcel($("#element option:selected").text())
  }

  // Retorna el componente
  render() {

    if(this.state.records){
      return (
        <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>INFORMACIÓN {SelectFund}</h3>
          </div>

          <center>
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
                <th><h4 class="centered-table">{this.state.records.total}</h4></th>
                <th><h4 class="centered-table">{this.state.records.finished}</h4></th>
                <th><h4 class="centered-table">{this.state.records.pending}</h4></th>
              </tr>
            </table>
          </div>

          <button class="btn btn-primary pull-right" onClick={this.downLoadExcel.bind(this)}>
            DESCARGAR REGISTROS
          </button>

        </div>
      </div>

      )
    }else{
      return(
        <h1>CARGANDO...</h1>
      )
    }
  }
}