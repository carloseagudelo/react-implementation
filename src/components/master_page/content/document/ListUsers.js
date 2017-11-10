import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { browserHistory } from 'react-router'

import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

import User from './User'
import Loading from '../../../Loading'
import Paginator from '../../../Paginator'
import SelectTag from '../../../SelectTag'
import Search from '../../../Search'

@ReactMixin.decorate(Reflux.connect(DocumentStore, 'users'))
export default class ListUser extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){

    if(this.props.data == 'admin'){
      DocumentAction.ListUsersFinished('', '', 0, '', 'finished')
    }else if(this.props.data == 'validator'){
      DocumentAction.ListUsersPending(1, $('#element :selected').val(), $('#search').val())
    }
  }

  changeData(){
    if(this.props.data == 'admin'){
      var tab
      if ($(".nav-tabs li.active a").text().indexOf("FINALIZADOS") == 0){
        tab = "finished"
      }else{
        tab = "refuded"
      }
      DocumentAction.ListUsersFinished(this.state.users.current_page, $('#second-element option:selected').text(), $('#element :selected').val(), $('#search').val(), tab)
    }else if(this.props.data == 'validator'){
      DocumentAction.ListUsersPending(1, $('#element :selected').val(), $('#search').val())
    }    
  }

  // Metodo que permite al paginador pasar a la siguiente pagina, o a la pagina de selección
  // Parametro: ev, evento del tag
  nextPage(ev){
    ev.preventDefault()
    var tab
    if ($(".nav-tabs li.active a").text().indexOf("FINALIZADOS") == 0){
      tab = "finished"
    }else{
      tab = "refuded"
    }
    if(ev.target.id == 'prev'){
      if(parseInt(this.state.users.current_page) != 1){
        if(this.props.data == 'admin'){
          DocumentAction.ListUsersFinished(parseInt(this.state.users.current_page) - 1, $('#second-element option:selected').text(), $('#element :selected').val(), $('#search').val(), tab)
        }else if(this.props.data == 'validator'){
          DocumentAction.ListUsersPending(parseInt(this.state.users.current_page) - 1, $('#element :selected').val(), $('#search').val())
        }
      }
    }else if(ev.target.id == 'nxt'){
      if(parseInt(this.state.users.current_page) != this.state.users.records_count.length){
        if(this.props.data == 'admin'){
          DocumentAction.ListUsersFinished(parseInt(this.state.users.current_page) + 1, $('#second-element option:selected').text(), $('#element :selected').val(), $('#search').val(), tab)
        }else if(this.props.data == 'validator'){
          DocumentAction.ListUsersPending(parseInt(this.state.users.current_page) + 1, $('#element :selected').val(), $('#search').val())
        }
      }
    }else{
      if(this.props.data == 'admin'){
          DocumentAction.ListUsersFinished(parseInt(ev.target.id), $('#second-element option:selected').text(), $('#element :selected').val(), $('#search').val(), tab)
        }else if(this.props.data == 'validator'){
          DocumentAction.ListUsersPending(parseInt(ev.target.id), $('#element :selected').val(), $('#search').val())
        }
    }
  }

  render() {

    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log(this.state.users)

    if(this.state.users){
      let users = this.state.users.payload.data.map((user) => {
        return(
          <User data={user} role={this.props.data} />
        )
      })

      let select_fund, tabs, table_heads
      if(localStorage.role == 'admin'){
        select_fund = <div class="row">
                        <div class="col-sm-12">
                          <label>SELECCIONE UN FONDO: </label>
                          <SelectTag element_number={"second-element"} onChange={ this.changeData.bind(this) } endPoint="list_funds"/>
                        </div>
                      </div>
        tabs = <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home" onClick={this.changeData.bind(this)} >FINALIZADOS <span class="badge"> {this.state.users.counts.finished}</span></a></li>
                <li><a data-toggle="tab" href="#menu1" onClick={this.changeData.bind(this)}>RECHAZADOS <span class="badge"> {this.state.users.counts.refused}</span> </a></li>
               </ul>

      }

      if(localStorage.role != 'admin' && localStorage.role.indexOf('admin') !== -1 ){

        tabs = <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home" onClick={this.changeData.bind(this)} >FINALIZADOS <span class="badge"> {this.state.users.counts.finished}</span></a></li>
                <li><a data-toggle="tab" href="#menu1" onClick={this.changeData.bind(this)}>RECHAZADOS <span class="badge"> {this.state.users.counts.refused}</span> </a></li>
               </ul>

        table_heads = <tr>
                        <th><b>DOCUMENTO</b></th>
                        <th><b>NOMBRE</b></th>
                        <th><b>ESTADO</b></th>
                        <th><b>FECHA  DE CARGA DE DOCUMENTOS</b></th>
                        <th><b>FECHA Y HORA FINALIZACIÓN</b></th>
                        <th><b>VALIDADOR</b></th>
                        <th><b>REVISAR</b></th>
                      </tr>
      }else{
        table_heads = <tr>
                        <th><b>DOCUMENTO</b></th>
                        <th><b>NOMBRE</b></th>
                        <th><b>ESTADO</b></th>
                        <th><b>FECHA  DE CARGA DE DOCUMENTOS</b></th>
                        <th><b>FECHA Y HORA FINALIZACIÓN</b></th>
                        <th><b>VALIDAR</b></th>
                      </tr>
      }

      return (
        <div>

          {select_fund} 

          <div class="col-sm-6">
            <label>SELECCIONE CONVOCATORIA: </label>
            <SelectTag endPoint="list_convocatories" onChange={this.changeData.bind(this)} />
          </div>

          <div class="col-sm-6">
            <label>BÚSQUEDA: </label>
            <Search placeholder="BUSCAR POR DOCUMENTO O NOMBRE" onChange={this.changeData.bind(this)} />
          </div>

          {tabs}     

          <table class="table table-striped">
            <thead>
                {table_heads}
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
          <Paginator pages={this.state.users.records_count} current={this.state.users.current_page} onClick={this.nextPage.bind(this)}/>
        </div>
      )
    }else {
      return(
        <Loading />
      )
    }
  }
}