import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import AdminFoundAction from '../../../../actions/AdminFoundAction'
import AdminFoundStore from '../../../../stores/AdminFoundStore'

import MessageFlash from '../../../../components/MessageFlash'

@ReactMixin.decorate(Reflux.connect(AdminFoundStore, 'response'))
export default class LoadUser extends React.Component {

  constructor(){
  	super()
  }

  loadPreSelected(ev){
    ev.preventDefault()
    AdminFoundAction.LoadData()
  }

  render() {
    return (
      <div class="">
        <div class="page-title">
          <div class="title_left">
            <h3>CARGA DE PRESELECCIONADOS</h3>
            <MessageFlash data={this.state.response} />
            <div class="alert alert-info">
              <strong><h1>ATENCIÓN</h1></strong>
              <h3>
                A CONTINUACIÓN INICIARÁ EL PROCESO DE CARGA PARA EL FONDO QUE ADMINISTRA, 
                TENGA EN CUENTA QUE ANTES DE HACER ESTE CARGUE DEBE REALIZAR LA SELECCION EN LA 
                APLICACION DEL FONDE QUE ADMINISTRA.
              </h3>
            </div>
            <button onClick={this.loadPreSelected.bind(this)} >CARGAR PRESELECCIONADOS</button>
          </div>
        </div>
      </div>
    )
  }
}