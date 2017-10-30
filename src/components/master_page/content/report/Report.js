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
            <li class="active"><a data-toggle="tab" href="#home">INSCRITOS <span class="badge">{this.state.records.total}</span></a></li>
            <li><a data-toggle="tab" href="#menu1">FINALIZADOS <span class="badge">{this.state.records.finished}</span> </a></li>
            <li><a data-toggle="tab" href="#menu2">HABILITADOS <span class="badge">{this.state.records.able}</span></a></li>
            <li><a data-toggle="tab" href="#menu3">NO HABILITANTES <span class="badge">{this.state.records.not_able}</span></a></li>
          </ul>

          <div class="tab-content">
            <div id="home" class="tab-pane fade in active">

              <div class="x_content info-table">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Buscar por nombre o documento"></input>
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">BUSCAR</button>
                  </span>
                </div>
                <br />
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
            <div id="menu1" class="tab-pane fade">
              <h3>FINALIZADOS</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="menu2" class="tab-pane fade">
              <h3>NO HABILITANTES</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="menu3" class="tab-pane fade">
              <h3>HABILITADOS</h3>
              <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
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