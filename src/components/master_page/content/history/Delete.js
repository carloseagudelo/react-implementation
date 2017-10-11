/*  Descripcion: Componente que permite la creación de un fondo
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Septiembre 2017
    Fecha de modificacion: Septiembre 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';

import UserAction from '../../../../actions/UserAction'
import UserStore from '../../../../stores/UserStore'

import SecretConstant from '../../../../utils/SecretsConstant'
import {browserHistory } from 'react-router';

export default class Delete extends React.Component {

  constructor(){
  	super()
  }

  // Evento de clic sobre el boton
  onSubmit(ev){
    ev.preventDefault()
    if(this.props.aviable){
      UserAction.DropRegister(this.props.convocatory)
    }else{
      swal("", 'NO PUEDE ELIMINAR EL REGISTRO LA CONVOCATORIA YA FUE CERRADA', "error")
    }
  }

  // Retorna el componente
  render() {
    return(
      <th onClick={this.onSubmit.bind(this)}><i class="fa fa-trash" aria-hidden="true"></i></th>
    );
  }
}





