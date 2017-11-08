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

export default class VisitConvocatory extends React.Component {

  constructor(){
  	super()
  }

  // Evento de clic en el componente
  onSubmit(ev){
    ev.preventDefault()
  	UserAction.ShowConvocatory(this.props.convocatory, this.props.app, this.props.user_id)
  }

  // Retorna el componente
  render() {
    return(
      <th onClick={this.onSubmit.bind(this)}><i class="fa fa-eye" aria-hidden="true" alt="VISUALIZAR EL FORMULARIO"></i></th>
    );
  }
}





