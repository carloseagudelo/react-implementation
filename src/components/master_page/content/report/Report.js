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
import Search from '../../../Search'



@ReactMixin.decorate(Reflux.connect(AdminFoundActionStore, 'records'))
export default class Report extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    AdminFoundAction.listUserRecords("all" , '', '', '')
  }

  changeData(ev){
    ev.preventDefault()
    AdminFoundAction.listUserRecords("all", $("#element option:selected").text(), $("#search").val(), '')
  }

  downLoadExcel(ev){
    ev.preventDefault()
    AdminFoundAction.DonwnloadExcel($("#element option:selected").text())
  }

  listUsers(list_type, convocatory){
    AdminFoundAction.listUserRecords(list_type, convocatory,  $("#search").val(), '')
  }

  listUsersForSearch(ev){
    ev.preventDefault()
    var tab
    if ($(".nav-tabs li.active a").text().indexOf("INSCRITOS") !== -1){
      tab = "all"
    }else if($(".nav-tabs li.active a").text().indexOf("FINALIZADOS") !== -1){
      tab = "finished"
    }else if ($(".nav-tabs li.active a").text().indexOf("HABILITADOS") !== -1){
      tab = "able"
    }else if($(".nav-tabs li.active a").text().indexOf("NO HABILITANTES") !== -1){
      tab = "not_able"
    }else if($(".nav-tabs li.active a").text().indexOf("NO FINALIZADOS") !== -1){
      tab = "not_finished"
    }
    AdminFoundAction.listUserRecords(tab, $("#element option:selected").text(), $("#search").val())
  }

  // Metodo que permite al paginador pasar a la siguiente pagina, o a la pagina de selección
  // Parametro: ev, evento del tag
  nextPage(ev){
    ev.preventDefault()
    var tab

    if ($(".nav-tabs li.active a").text().indexOf("INSCRITOS") !== -1){
      tab = "all"
    }else if($(".nav-tabs li.active a").text().indexOf("FINALIZADOS") !== -1){
      tab = "finished"
    }else if ($(".nav-tabs li.active a").text().indexOf("HABILITADOS") !== -1){
      tab = "able"
    }else if($(".nav-tabs li.active a").text().indexOf("NO HABILITANTES") !== -1){
      tab = "not_able"
    }else if($(".nav-tabs li.active a").text().indexOf("NO FINALIZADOS") !== -1){
      tab = "not_finished"
    }

    if(ev.target.id == 'prev'){
      AdminFoundAction.listUserRecords(tab, $("#element option:selected").text(),  $("#search").val(), parseInt(this.state.records.current_page) - 1)

    }else if(ev.target.id == 'nxt'){
      AdminFoundAction.listUserRecords(tab, $("#element option:selected").text(), $("#search").val(), parseInt(this.state.records.current_page) + 1)
    }else{
      AdminFoundAction.listUserRecords(tab, $("#element option:selected").text(), $("#search").val(), ev.target.id)
    }
  }

  // Retorna el componente
  render() {


    if(this.state.records){
      let registers = this.state.records.payload.data.map((register) => {
        return(
          <ReportRecord data={register}/>
        )
      })
      return (
        <div class="page-title">
          <div class="x_title">
            <h3>INFORMACIÓN {SelectFund}</h3>
          </div>
          <br/>
          <br/>

          <div class= "row">
            <div class="col-sm-6">
              <label>SELECCIONE CONVOCATORIA: </label>
              <SelectTag endPoint="list_convocatories" onChange={this.changeData.bind(this)} />
            </div>

            <div class="col-sm-6">
              <label>BÚSQUEDA: </label>
              <Search placeholder="BUSCAR POR COMUNA, NOMBRE O DOCUMENTO DE IDENTIDAD" onChange={this.listUsersForSearch.bind(this)} />
            </div>
          </div>



          <br/>
          <br/>

          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#home" onClick={this.listUsers.bind(this, "all", $("#element option:selected").text())} >INSCRITOS <span class="badge">{this.state.records.counts.all}</span></a></li>
            <li><a data-toggle="tab" href="#menu1" onClick={this.listUsers.bind(this, "finished", $("#element option:selected").text())}>FINALIZADOS <span class="badge">{this.state.records.counts.finished}</span> </a></li>
            <li><a data-toggle="tab" href="#menu4" onClick={this.listUsers.bind(this, "not_finished", $("#element option:selected").text())}>NO FINALIZADOS <span class="badge">{this.state.records.counts.not_finished}</span></a></li>
            <li><a data-toggle="tab" href="#menu2" onClick={this.listUsers.bind(this, "able", $("#element option:selected").text())}>HABILITADOS <span class="badge">{this.state.records.counts.able}</span></a></li>
            <li><a data-toggle="tab" href="#menu3" onClick={this.listUsers.bind(this, "not_able", $("#element option:selected").text())}>NO HABILITANTES <span class="badge">{this.state.records.counts.not_able}</span></a></li>
          </ul>

          <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
              <TabContent registers = {registers} current_page = {this.state.records.current_page} pages = {this.state.records.records_count} onChange = {this.listUsersForSearch.bind(this)} onChange_paginator = {this.nextPage.bind(this)}  />
            </div>

            <div id="menu1" class="tab-pane fade">
              <TabContent registers = {registers} current_page = {this.state.records.current_page} pages = {this.state.records.records_count}  onChange = {this.listUsersForSearch.bind(this)} onChange_paginator = {this.nextPage.bind(this)}/>
            </div>

            <div id="menu2" class="tab-pane fade">
              <TabContent registers = {registers} current_page = {this.state.records.current_page} pages = {this.state.records.records_count}  onChange = {this.listUsersForSearch.bind(this)} onChange_paginator = {this.nextPage.bind(this)}/>
            </div>

            <div id="menu3" class="tab-pane fade">
              <TabContent registers = {registers} current_page = {this.state.records.current_page} pages = {this.state.records.records_count} onChange = {this.listUsersForSearch.bind(this)} onChange_paginator = {this.nextPage.bind(this)}/>
            </div>

            <div id="menu4" class="tab-pane fade">
              <TabContent registers = {registers} current_page = {this.state.records.current_page} pages = {this.state.records.records_count} onChange = {this.listUsersForSearch.bind(this)} onChange_paginator = {this.nextPage.bind(this)}/>
            </div>

            <button class="btn btn-primary pull-right" onClick={this.downLoadExcel.bind(this)}>
              DESCARGAR INFORMACIÓN DE REGISTRADOS
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