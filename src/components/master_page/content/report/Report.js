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
import ReportRecord from './ReportRecord';
import TabContent from './TabContent';


@ReactMixin.decorate(Reflux.connect(AdminFoundActionStore, 'records'))
export default class Report extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    AdminFoundAction.listUserRecords("all" , '2018-1')
  }

  changeData(ev){
    ev.preventDefault()
    AdminFoundAction.listUserRecords("all", $("#element option:selected").text())
  }

  downLoadExcel(ev){
    ev.preventDefault()
    AdminFoundAction.DonwnloadExcel($("#element option:selected").text())
  }

  listUsers(list_type, convocatory){
    console.log(list_type)
    AdminFoundAction.listUserRecords(list_type, convocatory, '')
  }

  listUsersForSearch(ev){
    ev.preventDefault()
    AdminFoundAction.listUserRecords('all', $("#element option:selected").text(), $("#search").val())
  }


  // Retorna el componente
  render() {


    if(this.state.records){
      console.log (this.state)
      let registers = this.state.records.payload.data.map((register) => {
        return(
          <ReportRecord data={register}/>
        )
      })
      return (
        <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>INFORMACIÓN {SelectFund}</h3>
          </div>
          <br/>
          <br/>

          <center>
            <label for="sel1">SELECCIONE CONVOCATORIA</label>
            <SelectTag endPoint="list_convocatories" onChange={this.changeData.bind(this)}/>
          </center>

          <div class="container">

          <br/>
          <br/>

          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#home" onClick={this.listUsers.bind(this, "all", $("#element option:selected").text())} >INSCRITOS <span class="badge">{this.state.records.counts.all}</span></a></li>
            <li><a data-toggle="tab" href="#menu1" onClick={this.listUsers.bind(this, "finished", $("#element option:selected").text())}>FINALIZADOS <span class="badge">{this.state.records.counts.finished}</span> </a></li>
            <li><a data-toggle="tab" href="#menu2" onClick={this.listUsers.bind(this, "able", $("#element option:selected").text())}>HABILITADOS <span class="badge">{this.state.records.counts.able}</span></a></li>
            <li><a data-toggle="tab" href="#menu3" onClick={this.listUsers.bind(this, "not_able", $("#element option:selected").text())}>NO HABILITANTES <span class="badge">{this.state.records.counts.not_able}</span></a></li>
          </ul>

          <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
              <TabContent registers = {registers} onChange={this.listUsersForSearch.bind(this)} />
            </div>

            <div id="menu1" class="tab-pane fade">
              <TabContent registers = {registers} onChange={this.listUsersForSearch.bind(this)} />
            </div>

            <div id="menu2" class="tab-pane fade">
              <TabContent registers = {registers} onChange={this.listUsersForSearch.bind(this)} />
            </div>

            <div id="menu3" class="tab-pane fade">
              <TabContent registers = {registers} onChange={this.listUsersForSearch.bind(this)} />
            </div>

            <button class="btn btn-primary pull-right" onClick={this.downLoadExcel.bind(this)}>
              DESCARGAR INFORMACIÓN DE REGISTRADOS
            </button>
          </div>
        </div>
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