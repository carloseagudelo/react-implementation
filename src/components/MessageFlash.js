/*  Descripcion: Componente que renderiza un message-flash al usuario al momento de realizar alguna acción
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Importa las clases necesarias para la logica del componente
import Constant from '../utils/Constants.js'

// Inicializa y exporta la clase que contiene el componente
export default class MessageFlash extends React.Component {  

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
    if(typeof(this.props.data) != 'undefined'){
    	if(this.props.data.type != ''){
        switch(this.props.data.type) {
          case Constant.TYPE_FLASH_MESSAGE_ERROR:
            return (
              <div class="alert alert-danger">
                {this.props.data.message}
              </div>        
            )
            break;
          case Constant.TYPE_FLASH_MESSAGE_SUCESS:
            return (
              <div class="alert alert-success">
                {this.props.data.message}
              </div>        
            )
            break;
          case Constant.TYPE_FLASH_MESSAGE_WARNING:
            return (
              <div class="alert alert-warning">
                {this.props.data.message}
              </div>        
            )
            break;
          case Constant.TYPE_FLASH_MESSAGE_INFO:
            return (
              <div class="alert alert-info">
                {this.props.data.message}
              </div>        
            )
            break;
        } 
      }else {
        <div></div>
      }
    }else {
      return(
        <div></div>
      )
    }
  }
}