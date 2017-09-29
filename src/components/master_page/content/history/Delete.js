/*  Descripcion: Componente que permite la creación de un fondo
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Septiembre 2017
    Fecha de modificacion: Septiembre 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';

import SecretConstant from '../../../../utils/SecretsConstant'
import {browserHistory } from 'react-router';


// importa los componentes necesarios
// import SelectInputFund from './SelectInputFund'
// import DocumentList from './DocumentList'
// import Loading from '../../../Loading'

export default class Delete extends React.Component {

  constructor(){
  	super()
  }

  onSubmit(ev){
    ev.preventDefault()
    if(this.props.aviable){
      $.ajax({
        cache: false,
        context: this,
        async: false,
        data: {"user_id": localStorage.getItem("user_id"), 'convocatory': this.props.convocatory},
        url: SecretConstant.TECHNOLOGY_API+'/delete_register',
        method: 'POST',
        success: function(response, textStatus, xhr){
          console.log('XXXXXXXXXXXXXXXXXXXX')
          console.log(response.status)
          if(response.status == 200){
           swal("", response.payload.message, "success")
          }else{
            swal("", response.payload.message, "error")
          }
        },
        error: function(xhr, textStatus){
          browserHistory.push('/error_page/500')
        }
      });
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





